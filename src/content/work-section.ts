import type { WorkSectionContent } from "@/types/work-section";

export const workSectionContent = {
  headline: {
    before: "Built for the ",
    italic: "messy parts.",
  },
  subtitle:
    "Real products rarely fit into a clean specification. We design and engineer the apps, platforms, and systems that have to work when things get complicated.",
  defaultCaseStudyId: "dater",
  caseStudies: [
    {
      id: "dater",
      category: "SOCIAL DISCOVERY PLATFORM",
      title: "Dater",
      body:
        "A dating app built around a feed, not a swipe. Native iOS and Android with a custom matchmaking engine, AI-backed verification, and subscriptions live from day one.",
      points: [
        "Native iOS + Android",
        "Matchmaking Engine",
        "Trust & Safety",
      ],
      ctaLabel: "View case study",
      ctaHref: "/case-studies/dater",
      slug: "dater",
      materialPath: "src/content/material/case-studies/devindays-case-study-dater.md",
    },
    {
      id: "invigil",
      category: "CIVIC MEDIA",
      title: "InViGiL",
      body:
        "Six products on one backend: news, social, live TV, an AI newsroom and an investigation portal. Shipped across mobile, TV and web in about three months.",
      points: [
        "Web + Mobile + TV",
        "FastAPI Backend",
        "AI Layer",
      ],
      ctaLabel: "View case study",
      ctaHref: "/case-studies/invigil",
      slug: "invigil",
      materialPath: "src/content/material/case-studies/devindays-case-study-invigil.md",
    },
    {
      id: "billing-baba",
      category: "BILLING PLATFORM",
      title: "Billing Baba",
      body:
        "A billing platform rebuilt from zero after the first build never got finished. One Flutter codebase, running natively on Android, iOS, macOS and Windows.",
      points: [
        "Flutter",
        "iOS + Android",
        "macOS + Windows",
      ],
      ctaLabel: "View case study",
      ctaHref: "/case-studies/billing-baba",
      slug: "billing-baba",
      materialPath: "src/content/material/case-studies/devindays-case-study-billingbaba.md",
    },
    {
      id: "entry-ticket",
      category: "EVENT TICKETING",
      title: "EntryTicket",
      body:
        "A native app for a platform that already worked. Built on the live PHP backend in three weeks, so a seat booked on mobile is gone on web instantly.",
      points: [
        "Flutter",
        "iOS + Android",
        "PHP Integration",
      ],
      ctaLabel: "View case study",
      ctaHref: "/case-studies/entryticket",
      slug: "entryticket",
      materialPath: "src/content/material/case-studies/devindays-case-study-entryticket.md",
    },
    {
      id: "turbo-supply",
      category: "QUICK COMMERCE",
      title: "Turbo Supply",
      body:
        "30-minute hardware delivery for the trades. Order exactly what the job needs instead of stocking a warehouse. Live on Android and iOS, built in four weeks.",
      points: [
        "Flutter",
        "iOS + Android",
        "Node.js Backend",
      ],
      ctaLabel: "View case study",
      ctaHref: "/case-studies/turbosupply",
      slug: "turbosupply",
      materialPath: "src/content/material/case-studies/devindays-case-study-turbosupply.md",
    },
  ],
  marqueeAriaLabel: "Case study highlights",
  marqueeLogos: {
    dater: {
      src: "/logos/marks/dater.png",
      alt: "Dater",
    },
    entryTicket: {
      src: "/logos/marks/entry-ticket.png",
      fill: true,
      alt: "EntryTicket",
    },
    turboSupply: {
      src: "/logos/marks/turbosupply.png",
      alt: "TurboSupply",
    },
    billingBaba: {
      src: "/logos/marks/billing-baba.png",
      alt: "Billing Baba",
    },
    invigil: {
      src: "/logos/marks/invigil.png",
      fill: true,
      alt: "InViGiL",
    },
  },
  marqueeTiles: [
    { id: "dater", logoKey: "dater", caseStudyId: "dater" },
    { id: "invigil", logoKey: "invigil", caseStudyId: "invigil" },
    { id: "billing-baba", logoKey: "billingBaba", caseStudyId: "billing-baba" },
    { id: "entry-ticket", logoKey: "entryTicket", caseStudyId: "entry-ticket" },
    { id: "turbo-supply", logoKey: "turboSupply", caseStudyId: "turbo-supply" },
  ],
} as const satisfies WorkSectionContent;

export const workSectionUiCopy = {
  phonePlaceholderLabel: "Product demo video placeholder",
} as const;
