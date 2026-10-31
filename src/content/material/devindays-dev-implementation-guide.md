# DevInDays — Development Implementation Guide

For whoever's building the site. Covers the stack decision, project structure, where each SEO file lives, and how to keep content and schema in sync. Read alongside `devindays-seo-technical.md` (the actual file contents) and the per-page content/design files already written for FAQ, Contact, About *(dropped, see note)*, and each case study.

---

## 1. Stack
**Next.js, App Router, static export (`output: 'export'`).** Not a full SSR server, this builds to plain static HTML/CSS/JS at build time, same deployment model as a client-side app (any static host: Vercel, Netlify, S3+CloudFront, etc.), zero server to run or maintain.

```js
// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true, // required for static export, next/image's optimization
                        // API needs a running server; use a build-time image
                        // pipeline (e.g. sharp in a pre-build script) instead
                        // if image optimization matters beyond this.
  },
}
```

Known static-export constraints to plan around:
- No Next.js API routes (`/app/api/*`) in the output, the Contact form's submission needs a separate endpoint (a simple serverless function, a form service like Formspree, or whatever backend handles it) called client-side via `fetch`, not a Next.js API route.
- `next/image`'s automatic optimization doesn't run at request time in static export, either pre-optimize images in the build pipeline or accept serving as-is.
- Every route needs to be statically generatable at build time, true for this entire site since there's no per-user dynamic content anywhere.

## 2. Project structure
```
/app
  layout.tsx              → root layout: Organization JSON-LD lives here (sitewide)
  page.tsx                → Home
  /case-studies
    page.tsx               → Case Studies index
    /[slug]
      page.tsx              → Case study template, one component, data-driven
  /faq
    page.tsx               → FAQ page: renders FROM the same data source as the FAQPage JSON-LD (see section 4)
  /contact
    page.tsx               → Contact
  robots.ts                → generates /robots.txt (see section 3)
  sitemap.ts                → generates /sitemap.xml (see section 3)
/public
  llms.txt                 → plain static file, not generated (see section 3)
  [images, fonts, etc.]
/content
  faq.ts (or .json)        → single source of truth for all 63 FAQ questions/answers, 4 categories, 7 subcategories
  case-studies/
    dater.ts
    invigil.ts
    billing-baba.ts
    entryticket.ts
    turbosupply.ts
    [myndfe.ts]             → add once content is written, don't create an empty/placeholder file that accidentally gets built into a live route
```

The `/content` folder is the important structural decision here: FAQ and case study content live as typed data (TypeScript objects or JSON), not hardcoded into JSX. Both the visible page AND the JSON-LD schema read from the same source. This is what guarantees the FAQPage schema can never drift out of sync with what's actually on the page, a real risk if someone hand-writes the schema separately and forgets to update it when a question changes.

Example shape for `/content/faq.ts`:
```ts
export const faqCategories = [
  {
    id: "fit-proof",
    title: "Fit & Proof",
    subcategories: [
      {
        id: "fit-scope",
        title: "Fit & Scope",
        questions: [
          {
            q: "Who is DevInDays for?",
            a: "DevInDays is built for founders and businesses who need a real, working product, not a rushed prototype or a coded shell handed off without support. If you need something built properly, by a team that stays accountable past launch, that's exactly who we work with."
          },
          // ...all 13 Fit & Scope questions
        ]
      },
      // Experience & Proof subcategory...
    ]
  },
  // Capabilities & Process, Pricing & Engagement, Launch & Ownership...
]
```
The FAQ page component maps over this to render the accordion. A small script (or a build-time function) maps the same data into the FAQPage JSON-LD shape. One source, two outputs, impossible for them to disagree.

Same principle for case studies: each `/content/case-studies/*.ts` file holds the structured content (hero copy, overview fields, section bodies, chapter list), the `[slug]/page.tsx` template renders it using the case-study design system already specified (sticky split hero, Chapters page, hairline sections, one full-bleed statement section), and `generateStaticParams` reads the folder to generate one static route per case study automatically.

## 3. The SEO files, concretely

**`/public/llms.txt`** — just a static markdown file sitting in `/public`, gets served as-is at `/llms.txt`. No generation needed, but whoever maintains content needs to remember to update it by hand when a new case study ships or pricing changes (noted in `devindays-seo-technical.md`). Content is already written there, copy it in directly.

**`/app/robots.ts`** — Next.js App Router convention, generates `/robots.txt` automatically:
```ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // list each AI crawler explicitly per devindays-seo-technical.md section 2
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    sitemap: 'https://www.devindays.com/sitemap.xml',
  }
}
```

**`/app/sitemap.ts`** — same convention, generates `/sitemap.xml`:
```ts
import { MetadataRoute } from 'next'
import { caseStudies } from '@/content/case-studies' // however the index is exported

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.devindays.com'
  const staticRoutes = [
    { url: base, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/case-studies`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/faq`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`, changeFrequency: 'yearly', priority: 0.6 },
  ]
  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${base}/case-studies/${cs.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))
  return [...staticRoutes, ...caseStudyRoutes]
}
```
This is why case study content living in `/content/case-studies/*.ts` matters structurally, the sitemap generates itself from whatever's actually in that folder, so adding Myndfe later means adding one content file, not touching the sitemap by hand and risking it getting forgotten.

## 4. Metadata and JSON-LD per page
Use Next.js's built-in `generateMetadata` for titles/descriptions (App Router convention, works cleanly with static export), content already written in `devindays-seo-technical.md` section 6. Example for a case study page:
```ts
// /app/case-studies/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const cs = getCaseStudy(params.slug)
  return {
    title: `${cs.title} Case Study — ${cs.oneLiner} | DevInDays`,
    description: cs.metaDescription,
  }
}
```

JSON-LD gets injected via a `<script type="application/ld+json">` tag rendered in the page component (Organization in the root layout, FAQPage generated from `/content/faq.ts` on the FAQ page, BreadcrumbList on case study pages and the index). Exact shapes are in `devindays-seo-technical.md` section 5, wire them to read from the same content files rather than hand-typing the JSON separately.

## 5. What NOT to build
- No About page, dropped earlier in this project, don't scaffold a route for it.
- No API routes expecting a running Node server, incompatible with static export (section 1).
- No client-side-only data fetching for content that's static at build time (FAQ, case studies, pricing), if it doesn't change per-visitor, it belongs in `/content` and gets baked in at build time, not fetched client-side after page load, that would recreate the exact rendering problem this whole approach is meant to solve.

## 6. Pre-launch checklist for the dev team
- [ ] Next.js App Router project, `output: 'export'` confirmed in `next.config.js`.
- [ ] `/content/faq.ts` and `/content/case-studies/*.ts` populated from the finalized content files (`devindays-faq-final.md`, each case study `.md`).
- [ ] FAQ page and FAQPage JSON-LD both read from `/content/faq.ts`, verified they render identically, spot-check a few questions against the schema output.
- [ ] Case study template (`[slug]/page.tsx`) built once, matching the locked design spec (sticky split hero, Chapters page, hairline structural tables, one full-bleed statement section, Prev/Next footer), verified it renders correctly for at least two different case studies (Dater and Invigil are good test cases, different lengths and visual needs).
- [ ] `robots.ts`, `sitemap.ts` wired per section 3 above.
- [ ] `/public/llms.txt` added, content from `devindays-seo-technical.md` section 4.
- [ ] Organization JSON-LD in root layout, real `sameAs` URLs only (no placeholders).
- [ ] Meta titles/descriptions wired per page via `generateMetadata`.
- [ ] Canonical URLs, HTTPS enforcement, www redirect consistency (per `devindays-seo-technical.md` section 7).
- [ ] Build and spot-check the static output, view page source (not devtools-rendered DOM) on a few pages to confirm real content is in the raw HTML, not just in the hydrated React tree.
- [ ] Deploy, then set up Google Search Console + Bing Webmaster Tools, submit the sitemap.
