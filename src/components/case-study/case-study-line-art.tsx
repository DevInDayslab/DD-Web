import type { ReactNode } from "react";

type CaseStudyLineArtProps = {
  slug: string;
  className?: string;
};

/**
 * Stroke-only illustrations, one per case study. Every shape uses pathLength=1
 * so the CSS draw-on animation works without measuring anything.
 */
const ART: Record<string, ReactNode> = {
  dater: (
    <>
      {/* feed of stacked cards */}
      <rect x="150" y="70" width="190" height="250" rx="22" />
      <rect x="168" y="90" width="154" height="104" rx="14" />
      <path d="M168 214h96M168 234h130M168 254h74" />
      <circle cx="294" cy="286" r="14" />
      <path d="M150 112l-44 10a18 18 0 0 0-13 22l36 140" />
      <path d="M340 112l44 10a18 18 0 0 1 13 22l-36 140" />
      {/* heart */}
      <path d="M244 176c-26-18-48-36-48-58a26 26 0 0 1 48-12 26 26 0 0 1 48 12c0 22-22 40-48 58z" transform="translate(-4 4) scale(0.78) translate(54 30)" />
      {/* sparks */}
      <path d="M410 70l8 18 18 8-18 8-8 18-8-18-18-8 18-8z" />
      <path d="M70 250l5 11 11 5-11 5-5 11-5-11-11-5 11-5z" />
    </>
  ),
  invigil: (
    <>
      {/* eye watching an exam sheet */}
      <path d="M60 170c40-60 100-92 180-92s140 32 180 92c-40 60-100 92-180 92S100 230 60 170z" />
      <circle cx="240" cy="170" r="52" />
      <circle cx="240" cy="170" r="20" />
      <path d="M262 150a30 30 0 0 0-22-8" />
      <rect x="170" y="290" width="140" height="84" rx="10" />
      <path d="M190 314h100M190 334h70M190 354h40" />
      <path d="M284 346l10 10 20-22" />
      <path d="M240 78V40M150 92l-18-26M330 92l18-26" />
    </>
  ),
  "billing-baba": (
    <>
      {/* receipt with rupee and tally */}
      <path d="M140 50h200v290l-25-16-25 16-25-16-25 16-25-16-25 16-25-16z" />
      <path d="M170 100h140M170 132h90" />
      <path d="M184 190h96M184 190c28 0 28 40 0 40h-6l50 34" />
      <path d="M184 214h96" />
      <path d="M170 292h60M262 292h48" />
      <circle cx="396" cy="120" r="34" />
      <path d="M382 120l10 10 20-22" />
      <path d="M64 270h40M84 250v40" />
      <path d="M380 290l10 10 10-10 10 10" />
    </>
  ),
  entryticket: (
    <>
      {/* ticket with scalloped edge and QR */}
      <path d="M70 120h340v52a26 26 0 0 0 0 52v52H70v-52a26 26 0 0 0 0-52z" />
      <path d="M312 120v32M312 172v16M312 208v16M312 244v28" strokeDasharray="0.04 0.04" />
      <rect x="110" y="152" width="52" height="52" rx="6" />
      <rect x="124" y="166" width="24" height="24" rx="3" />
      <path d="M180 156h96M180 180h70M180 204h86" />
      <path d="M338 160l12 22 22-12v52l-22-12-12 22" />
      <path d="M110 244h160" />
      <path d="M400 70l8 18 18 8-18 8-8 18-8-18-18-8 18-8z" />
    </>
  ),
  turbosupply: (
    <>
      {/* delivery van + crates + clock */}
      <path d="M60 270V150h200v120" />
      <path d="M260 190h70l50 50v30h-120" />
      <path d="M290 200v34h66" />
      <circle cx="130" cy="282" r="26" />
      <circle cx="130" cy="282" r="8" />
      <circle cx="330" cy="282" r="26" />
      <circle cx="330" cy="282" r="8" />
      <path d="M80 150v-32h80v32M100 118V92h40v26" />
      <circle cx="400" cy="100" r="46" />
      <path d="M400 70v30l22 14" />
      <path d="M30 210h24M20 232h34M36 254h18" />
    </>
  ),
};

export function CaseStudyLineArt({ slug, className }: CaseStudyLineArtProps) {
  const art = ART[slug];
  if (!art) {
    return null;
  }

  return (
    <svg
      viewBox="0 0 480 400"
      className={`cs-line-art${className ? ` ${className}` : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
    >
      <g className="cs-line-art-draw">{art}</g>
    </svg>
  );
}

/** A small dashed wave used as a section divider. */
export function CaseStudyLineDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      className={`cs-line-divider${className ? ` ${className}` : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden
      focusable="false"
    >
      <path d="M0 12c50-14 100-14 150 0s100 14 150 0 100-14 150 0 100 14 150 0 100-14 150 0 100 14 150 0 100-14 150 0" />
    </svg>
  );
}
