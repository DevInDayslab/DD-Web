import { site } from "@/config/site";
import { billingBabaCaseStudyNarrative } from "@/content/case-studies/billing-baba-narrative";
import type { CaseStudyPageContent } from "@/types/case-study-page";

const bookingHref = site.booking.embedUrl || "/#book";

export const billingBabaCaseStudyPage = {
  slug: "billing-baba",
  materialPath: "src/content/material/case-studies/devindays-case-study-billingbaba.md",
  meta: {
    title: "Billing Baba · Case Study",
    description: "A billing platform rebuilt from zero, after the first build never got finished. Android, iOS, macOS and Windows, one real product across every platform a business runs on.",
    path: "/case-studies/billing-baba"
  },
  intro: {
    breadcrumb: {
      projectName: "Billing Baba",
      industry: "Business software / billing & invoicing"
    },
    headlineLines: [
      "A billing platform rebuilt from zero,",
      "after the first build never got finished."
    ],
    subhead: "Android, iOS, macOS, and Windows, one real product across every platform a business actually runs on."
  },
  brief: {
    storeLinks: [],
    specRows: [
      {
        id: "client",
        label: "Client",
        value: "Billing Baba"
      },
      {
        id: "industry",
        label: "Industry",
        value: "Business software / billing & invoicing"
      },
      {
        id: "services",
        label: "Services",
        value: "Full product rebuild, mobile development (Android, iOS), desktop development (macOS, Windows), backend development"
      },
      {
        id: "timeline",
        label: "Timeline",
        value: "6 months"
      },
      {
        id: "team",
        label: "Team",
        value: "Led by Ishu, with 6 additional engineers"
      },
      {
        id: "live",
        label: "Live",
        value: "billingbaba.com",
        href: "https://billingbaba.com"
      }
    ],
    portraitVideo: {}
  },
  placeholders: {
    portraitVideo: "Walkthrough coming soon",
  },
  narrative: billingBabaCaseStudyNarrative,
  footer: {
    archiveEyebrow: "Project archive",
    liveLabel: "Live at billingbaba.com ↗",
    liveHref: "https://billingbaba.com",
    liveExternal: true,
    bookCallLabel: site.booking.label,
    bookCallHref: bookingHref,
    bookCallAriaLabel: "Book a call with DevInDays",
    previous: {
      slug: "invigil",
      label: "Invigil"
    },
    next: {
      slug: "entryticket",
      label: "EntryTicket"
    }
  }
} as const satisfies CaseStudyPageContent;
