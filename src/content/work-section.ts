import type { WorkSectionContent } from "@/types/work-section";

const daterBody =
  "A social discovery platform built around people, not swipes. A social discovery platform built around people, not swipes. A social discovery platform built around people, not swipes.";

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
      body: daterBody,
      tags: ["iOS + Android", "Custom Backend", "Admin Platform"],
      ctaLabel: "View case study",
      slug: "dater",
      materialPath: "src/content/material/case-studies/devindays-case-study-dater.md",
    },
    {
      id: "entry-ticket",
      category: "EVENT TICKETING",
      title: "EntryTicket",
      body:
        "A native app for a platform that already worked, built to fit it exactly. iOS and Android on top of an existing PHP backend, kept in sync with a live website the whole way through.",
      tags: ["Flutter", "iOS + Android", "PHP Integration"],
      ctaLabel: "View case study",
      slug: "entryticket",
      materialPath: "src/content/material/case-studies/devindays-case-study-entryticket.md",
    },
    {
      id: "turbo-supply",
      category: "QUICK COMMERCE",
      title: "Turbo Supply",
      body:
        "30-minute delivery for the hardware businesses actually run on. Android and iOS so a tradesperson can order exactly what the job needs, when it needs it, instead of stocking a warehouse.",
      tags: ["Flutter", "iOS + Android", "Node.js Backend"],
      ctaLabel: "View case study",
      slug: "turbosupply",
      materialPath: "src/content/material/case-studies/devindays-case-study-turbosupply.md",
    },
    {
      id: "myndfe",
      category: "WELLNESS PLATFORM",
      title: "Myndfe",
      body:
        "An AI companion product built for thoughtful daily use, with native mobile experiences and a public waitlist while the platform scales.",
      tags: ["iOS + Android", "AI Companion", "Product Design"],
      ctaLabel: "View case study",
      slug: "myndfe",
      materialPath: "src/content/material/case-studies/",
    },
    {
      id: "invigil",
      category: "CIVIC MEDIA",
      title: "InViGiL",
      body:
        "A civic media platform that had to be six products at once without feeling like six products stapled together — news, social, live TV, and an AI newsroom on one coherent backend.",
      tags: ["Web + Mobile", "FastAPI Backend", "Android TV"],
      ctaLabel: "View case study",
      slug: "invigil",
      materialPath: "src/content/material/case-studies/devindays-case-study-invigil.md",
    },
  ],
  marqueeAriaLabel: "Case study highlights",
  marqueeLogos: {
    dater: {
      src: "/logos/dater.png",
      alt: "Dater",
    },
    entryTicket: {
      src: "/logos/entry-ticket.png",
      alt: "EntryTicket",
    },
    turboSupply: {
      alt: "TurboSupply",
      pending: true,
    },
    myndfe: {
      src: "/logos/myndfe-leaf.png",
      alt: "Myndfe",
    },
    invigil: {
      src: "/logos/invigil.png",
      alt: "InViGiL",
    },
  },
  marqueeTiles: [
    { id: "dater", logoKey: "dater", caseStudyId: "dater" },
    { id: "entry-ticket", logoKey: "entryTicket", caseStudyId: "entry-ticket" },
    { id: "turbo-supply", logoKey: "turboSupply", caseStudyId: "turbo-supply" },
    { id: "myndfe", logoKey: "myndfe", caseStudyId: "myndfe" },
    { id: "invigil", logoKey: "invigil", caseStudyId: "invigil" },
  ],
} as const satisfies WorkSectionContent;

export const workSectionUiCopy = {
  phonePlaceholderLabel: "Product demo video placeholder",
} as const;
