import { site } from "@/config/site";
import { invigilCaseStudyNarrative } from "@/content/case-studies/invigil-narrative";
import type { CaseStudyPageContent } from "@/types/case-study-page";

const bookingHref = site.booking.embedUrl || "/#book";

export const invigilCaseStudyPage = {
  slug: "invigil",
  materialPath: "src/content/material/case-studies/devindays-case-study-invigil.md",
  meta: {
    title: "Civic Media Platform Case Study: Invigil",
    description:
      "How we built Invigil: news, social, live TV, an AI newsroom and an investigation portal on one backend, shipped across mobile, TV and web in about three months.",
    path: "/case-studies/invigil",
    ogImage: "/og/invigil.png",
  },
  intro: {
    breadcrumb: {
      projectName: "Invigil",
      industry: "News & civic media"
    },
    headlineLines: [
      "A civic media platform that had to be six products",
      "at once, without feeling like six stapled together."
    ],
    subhead: "News, social, live TV, an AI newsroom, and an investigation portal, one coherent backend underneath all of it."
  },
  brief: {
    storeLinks: [],
    specRows: [
      {
        id: "client",
        label: "Client",
        value: "FGCO.IN / AP Media"
      },
      {
        id: "industry",
        label: "Industry",
        value: "News & civic media"
      },
      {
        id: "services",
        label: "Services",
        value: "Full backend development (Python, FastAPI), third-party integrations (e-KYC, Vahan), UI refinement, Android, iOS, Android TV, and web development"
      },
      {
        id: "timeline",
        label: "Timeline",
        value: "Started August 2026, built and launched in about 3 months"
      },
      {
        id: "team",
        label: "Team",
        value: "8 engineers",
      },
      {
        id: "engagement",
        label: "Engagement",
        value: "Ongoing, improving and scaling the product",
      },
      {
        id: "live",
        label: "Live",
        value: "Theinvigil.com",
        href: "https://theinvigil.com"
      }
    ],
    portraitVideo: {}
  },
  placeholders: {
    portraitVideo: "Invigil walkthrough video — phone preview"
  },
  narrative: invigilCaseStudyNarrative,
  footer: {
    archiveEyebrow: "Project archive",
    liveLabel: "Live at Theinvigil.com ↗",
    liveHref: "https://theinvigil.com",
    liveExternal: true,
    bookCallLabel: site.booking.label,
    bookCallHref: bookingHref,
    bookCallAriaLabel: "Book a call with DevInDays",
    previous: {
      slug: "dater",
      label: "Dater"
    },
    next: {
      slug: "billing-baba",
      label: "Billing Baba"
    }
  }
} as const satisfies CaseStudyPageContent;
