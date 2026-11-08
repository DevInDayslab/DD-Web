/**
 * Builds the 1200x630 share images in public/og/.
 * Run with: npm run og
 * Text is drawn as vector paths from the Instrument Serif font file, so it renders the same on any machine.
 * Edit PAGES below when a page's headline changes, then run the script again and commit the PNGs.
 */
import { mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import opentype from "opentype.js";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "og");
mkdirSync(outDir, { recursive: true });

const fontBuffer = readFileSync(join(root, "src", "lib", "og", "InstrumentSerif-Regular.ttf"));
const font = opentype.parse(fontBuffer.buffer.slice(fontBuffer.byteOffset, fontBuffer.byteOffset + fontBuffer.byteLength));

// The font's contextual substitution tables are not supported by opentype.js; plain glyph shapes are all we need.
font.tables.gsub = undefined;

const W = 1200;
const H = 630;
const INK = "#11161B";
const MUTED = "#5C6269";
const BG = "#F2F3F5";
const MARGIN = 72;

const PAGES = [
  {
    file: "home",
    eyebrow: "App development agency",
    title: "Turn your idea into a product built to last.",
    sub: "Mobile and web apps, designed and engineered end to end by one accountable team.",
  },
  {
    file: "about",
    eyebrow: "About DevInDays",
    title: "A small studio that stays accountable.",
    sub: "Founder-led app development. One person accountable from first scope to launch and after.",
  },
  {
    file: "case-studies",
    eyebrow: "Case studies",
    title: "Different industries, one standard.",
    sub: "Dating, delivery, ticketing, billing and civic media apps, built and launched.",
  },
  {
    file: "faq",
    eyebrow: "FAQ",
    title: "Answers before the first call.",
    sub: "Pricing, timelines, who owns the code, and what happens after launch.",
  },
  {
    file: "contact",
    eyebrow: "Contact",
    title: "Tell us what you're building.",
    sub: "Book a 30-minute call with the founder, or send a message.",
  },
  {
    file: "dater",
    eyebrow: "Case study · Dating / Social",
    title: "A dating app built around a feed, not a swipe.",
    sub: "Native iOS and Android, built end to end, from matchmaking logic to trust and safety.",
  },
  {
    file: "invigil",
    eyebrow: "Case study · News & civic media",
    title: "A civic media platform that had to be six products at once.",
    sub: "News, social, live TV, an AI newsroom and an investigation portal on one backend.",
  },
  {
    file: "billing-baba",
    eyebrow: "Case study · Billing & invoicing",
    title: "A billing platform rebuilt from zero, after the first build never got finished.",
    sub: "Android, iOS, macOS and Windows, one real product across every platform.",
  },
  {
    file: "entryticket",
    eyebrow: "Case study · Event ticketing",
    title: "A native app for a platform that already worked, built to fit it exactly.",
    sub: "iOS and Android on top of an existing PHP backend, in sync with the live website.",
  },
  {
    file: "turbosupply",
    eyebrow: "Case study · Quick commerce",
    title: "30-minute delivery, for the hardware businesses actually run on.",
    sub: "Android and iOS, built so a tradesperson can order exactly what the job needs.",
  },
];

/** Advance for each character, with the font's pair kerning where it is a usable number. */
function advances(text, size, letterSpacing = 0) {
  const glyphs = Array.from(text).map((char) => font.charToGlyph(char));
  const scale = size / font.unitsPerEm;
  return glyphs.map((glyph, index) => {
    let advance = (glyph.advanceWidth ?? 0) * scale;
    const next = glyphs[index + 1];
    if (next) {
      const kern = font.getKerningValue(glyph, next);
      if (Number.isFinite(kern)) {
        advance += kern * scale;
      }
    }
    return advance + letterSpacing;
  });
}

function width(text, size, letterSpacing = 0) {
  return advances(text, size, letterSpacing).reduce((sum, value) => sum + value, 0);
}

function wrap(text, size, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (width(next, size) <= maxWidth || !line) {
      line = next;
    } else {
      lines.push(line);
      line = word;
    }
  }
  if (line) {
    lines.push(line);
  }
  return lines;
}

const fmt = (value) => Number(value.toFixed(2));

/** Serialises glyph commands ourselves, so a number is never lost to formatting. */
function commandsToPath(commands) {
  return commands
    .map((c) => {
      switch (c.type) {
        case "M":
        case "L":
          return `${c.type}${fmt(c.x)} ${fmt(c.y)}`;
        case "Q":
          return `Q${fmt(c.x1)} ${fmt(c.y1)} ${fmt(c.x)} ${fmt(c.y)}`;
        case "C":
          return `C${fmt(c.x1)} ${fmt(c.y1)} ${fmt(c.x2)} ${fmt(c.y2)} ${fmt(c.x)} ${fmt(c.y)}`;
        default:
          return "Z";
      }
    })
    .join("");
}

/** One SVG path for a line of text. Drawn glyph by glyph: whole-string layout in opentype.js yields NaN for this font. */
function textPath(text, x, baseline, size, fill, letterSpacing = 0) {
  const steps = advances(text, size, letterSpacing);
  let cursor = x;
  let d = "";
  Array.from(text).forEach((char, index) => {
    if (char !== " ") {
      d += commandsToPath(font.getPath(char, cursor, baseline, size).commands);
    }
    cursor += steps[index];
  });
  if (/NaN/.test(d)) {
    throw new Error(`NaN in path for: ${text} (x=${x}, size=${size}, spacing=${letterSpacing}, steps=${steps.slice(0, 4)}) near: ${d.slice(Math.max(0, d.indexOf("NaN") - 60), d.indexOf("NaN") + 20)}`);
  }
  return `<path d="${d}" fill="${fill}"/>`;
}

function fit(text, maxWidth, maxLines, sizes) {
  for (const size of sizes) {
    const lines = wrap(text, size, maxWidth);
    if (lines.length <= maxLines) {
      return { size, lines };
    }
  }
  const size = sizes[sizes.length - 1];
  return { size, lines: wrap(text, size, maxWidth).slice(0, maxLines) };
}

function buildSvg(page) {
  const contentWidth = W - MARGIN * 2;
  const title = fit(page.title, contentWidth - 40, 3, [96, 88, 80, 72, 64, 58]);
  const titleLead = Math.round(title.size * 1.02);
  const sub = fit(page.sub, contentWidth - 120, 2, [32, 30, 28]);

  const titleBlockHeight = title.lines.length * titleLead;
  const titleTop = 168 + (3 - title.lines.length) * 10;
  const subTop = titleTop + titleBlockHeight + 26;

  const parts = [];

  // Soft dotted field, fading toward the left, like the hero on the site.
  parts.push(`
    <defs>
      <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.3" fill="${INK}" fill-opacity="0.16"/>
      </pattern>
      <linearGradient id="fade" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0.35" stop-color="#fff" stop-opacity="0"/>
        <stop offset="1" stop-color="#fff" stop-opacity="1"/>
      </linearGradient>
      <mask id="dotmask"><rect width="${W}" height="${H}" fill="url(#fade)"/></mask>
    </defs>
    <rect width="${W}" height="${H}" fill="${BG}"/>
    <rect width="${W}" height="${H}" fill="url(#dots)" mask="url(#dotmask)"/>
  `);

  // Mark and wordmark
  parts.push(`
    <rect x="${MARGIN}" y="52" width="46" height="46" rx="12" fill="${INK}"/>
    <path d="M${MARGIN + 15} ${52 + 12} H${MARGIN + 25} A11 11 0 0 1 ${MARGIN + 25} ${52 + 34} H${MARGIN + 15} Z"
      fill="none" stroke="#fff" stroke-width="4" stroke-linejoin="round"/>
    ${textPath("DevInDays", MARGIN + 62, 86, 40, INK)}
  `);

  // Eyebrow, right aligned
  const eyebrow = page.eyebrow.toUpperCase();
  const eyebrowSize = 21;
  const eyebrowSpacing = 3;
  const eyebrowWidth = width(eyebrow, eyebrowSize, eyebrowSpacing);
  parts.push(textPath(eyebrow, W - MARGIN - eyebrowWidth, 84, eyebrowSize, MUTED, eyebrowSpacing));

  // Title
  title.lines.forEach((line, index) => {
    parts.push(textPath(line, MARGIN, titleTop + title.size * 0.86 + index * titleLead, title.size, INK, -title.size * 0.012));
  });

  // Sub line
  sub.lines.forEach((line, index) => {
    parts.push(textPath(line, MARGIN, subTop + sub.size * 0.9 + index * Math.round(sub.size * 1.3), sub.size, MUTED));
  });

  // Footer rule and tags
  parts.push(`<rect x="${MARGIN}" y="548" width="${W - MARGIN * 2}" height="1.5" fill="${INK}" fill-opacity="0.14"/>`);
  parts.push(textPath("Founder-led app development  ·  iOS  ·  Android  ·  Web", MARGIN, 592, 25, MUTED));
  const domain = "devindays.com";
  parts.push(textPath(domain, W - MARGIN - width(domain, 25), 592, 25, INK));

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${parts.join("")}</svg>`;
}

for (const page of PAGES) {
  const png = await sharp(Buffer.from(buildSvg(page))).png({ compressionLevel: 9, palette: false }).toBuffer();
  await sharp(png).toFile(join(outDir, `${page.file}.png`));
  console.log(`og/${page.file}.png  ${(png.length / 1024).toFixed(0)} KB`);
}

// Square mark for favicons and structured data
const icon = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="112" fill="${INK}"/>
  <path d="M178 140 H268 A116 116 0 0 1 268 372 H178 Z" fill="none" stroke="#fff" stroke-width="44" stroke-linejoin="round"/>
</svg>`;
await sharp(Buffer.from(icon(512))).png().toFile(join(root, "public", "logo.png"));
await sharp(Buffer.from(icon(180))).png().toFile(join(root, "src", "app", "apple-icon.png"));
console.log("public/logo.png, src/app/apple-icon.png");
