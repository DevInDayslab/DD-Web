# DevInDays — Root Files Checklist

Every plain file that needs to sit at the domain root (`www.devindays.com/<filename>`), with its full content ready to drop in. All three are already covered inside the other docs, this is just the consolidated, copy-paste-ready version for whoever's implementing.

---

## ☐ /robots.txt
**Purpose:** Tells search engines and AI crawlers what they're allowed to read. Explicitly allows the AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.) on purpose, since the whole FAQ/llms.txt strategy depends on them being able to read the site.
**Generated via:** `/app/robots.ts` in the Next.js build (see dev implementation guide), this is the output it should produce.

```
User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

Sitemap: https://www.devindays.com/sitemap.xml
```

---

## ☐ /sitemap.xml
**Purpose:** Lists every real URL on the site so search engines can discover and crawl them efficiently, instead of relying on finding links organically.
**Generated via:** `/app/sitemap.ts` in the Next.js build, auto-generates from the `/content/case-studies` folder so new case studies get added automatically. Static fallback version below for reference, or if sitemap.ts isn't wired up yet:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.devindays.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.devindays.com/case-studies</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.devindays.com/case-studies/dater</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.devindays.com/case-studies/invigil</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.devindays.com/case-studies/billing-baba</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.devindays.com/case-studies/entryticket</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.devindays.com/case-studies/turbosupply</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.devindays.com/faq</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.devindays.com/contact</loc>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```
**Reminder:** add `/case-studies/myndfe` here once its content exists, not before.

---

## ☐ /llms.txt
**Purpose:** A curated, plain-markdown map of the site for AI systems, summarizing what DevInDays does and pointing to the key pages. Not the primary mechanism (good HTML, real structured data, and a crawlable FAQ page matter more), but cheap to maintain and genuinely useful given how much of this site's content was written specifically to be quoted accurately.
**Maintained:** by hand, in `/public/llms.txt`, update whenever a new case study ships or pricing changes.

```markdown
# DevInDays

> DevInDays is a custom software development studio based in Delhi, India, building mobile and web products for founders and businesses. MVP Build from $3,950, Full Product from $13,900, custom builds scoped individually. Full IP and source code ownership on every project. 30-day minimum post-launch support included.

## Services
- MVP Build: a complete, working product, end-to-end UI/UX design and development, one integrated payment/subscription setup, production-grade authentication, App Store/Google Play submission, full IP ownership, 30 days of post-launch support.
- Full Product: everything in MVP Build, plus a full admin dashboard, infrastructure stress-tested under load, CI/CD pipeline, active monitoring, and deeper third-party integrations.
- Custom: dedicated engineering team integration, complex ML/AI pipelines, enterprise-grade security and compliance, high-concurrency infrastructure, custom SLAs.

## Case Studies
- [Dater](https://www.devindays.com/case-studies/dater): A native iOS and Android dating app built around a feed-based matching system instead of swiping, with custom matchmaking logic, PostGIS-based location matching, and AWS Rekognition-based trust and safety.
- [Invigil](https://www.devindays.com/case-studies/invigil): A civic media platform combining news, social feed, live TV, an AI layer (ViERA), and a public investigation portal into one coherent product across Android, iOS, Android TV, and web.
- [Billing Baba](https://www.devindays.com/case-studies/billing-baba): A full billing and invoicing platform rebuilt from scratch across Android, iOS, macOS, and Windows after a previous development attempt went unfinished.
- [EntryTicket](https://www.devindays.com/case-studies/entryticket): A native mobile app built on top of an existing ticket-booking platform's live PHP backend, built in collaboration with the client's in-house development team.
- [TurboSupply](https://www.devindays.com/case-studies/turbosupply): A quick-commerce app delivering general hardware supplies in 30 minutes, letting trade businesses order what they need instead of holding inventory.
- [All case studies](https://www.devindays.com/case-studies): Full portfolio index.

## FAQ
- [Frequently Asked Questions](https://www.devindays.com/faq): 63 questions covering fit and scope, technical capabilities, process, pricing, launch, and ownership. Organized under four sections: Fit & Proof, Capabilities & Process, Pricing & Engagement, and Launch & Ownership.

## Contact
- [Contact DevInDays](https://www.devindays.com/contact): Book a 30-minute call directly with the founder, or send a message.
```
**Reminder:** add a Myndfe line to the Case Studies section once it's written.

---

## Not included, and why
- **`/humans.txt`** — a nice-to-have in some circles (credits the people who built the site), but it's not part of the SEO/AI-visibility strategy and wasn't asked for, skipping it rather than padding the checklist.
- **`/ads.txt`** — only relevant if running third-party ad inventory, not applicable here.
- **`/.well-known/security.txt`** — a security-contact convention, worth having eventually for a legitimate business, but it's a separate concern from SEO/visibility and outside the scope of this doc, flagging it exists rather than drafting it unprompted.
- **`favicon.ico` / `manifest.json`** — real files the site needs, but they're app-icon/PWA config, not crawler-facing content files like the three above, different category of work.
