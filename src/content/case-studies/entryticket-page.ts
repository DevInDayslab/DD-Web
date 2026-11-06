import { site } from "@/config/site";
import { entryTicketCaseStudyNarrative } from "@/content/case-studies/entryticket-narrative";
import type { CaseStudyPageContent } from "@/types/case-study-page";

const bookingHref = site.booking.embedUrl || "/#book";

export const entryTicketCaseStudyPage = {
  slug: "entryticket",
  materialPath: "src/content/material/case-studies/devindays-case-study-entryticket.md",
  meta: {
    title: "EntryTicket · Case Study",
    description: "A native app for a platform that already worked, built to fit it exactly. iOS and Android on top of an existing PHP backend, in sync with a live website the whole way through.",
    path: "/case-studies/entryticket"
  },
  intro: {
    breadcrumb: {
      projectName: "EntryTicket",
      industry: "Event ticketing"
    },
    headlineLines: [
      "A native app for a platform",
      "that already worked, built to fit it exactly."
    ],
    subhead: "iOS and Android, built on top of an existing PHP backend, in sync with a live website the whole way through."
  },
  brief: {
    storeLinks: [],
    specRows: [
      {
        id: "client",
        label: "Client",
        value: "EntryTicket"
      },
      {
        id: "industry",
        label: "Industry",
        value: "Event ticketing"
      },
      {
        id: "services",
        label: "Services",
        value: "Mobile app development (Flutter, iOS + Android), backend integration (PHP), design system adaptation"
      },
      {
        id: "timeline",
        label: "Timeline",
        value: "3 weeks"
      },
      {
        id: "team",
        label: "Team",
        value: "Led by Ishu, with 3 additional engineers"
      },
      {
        id: "live",
        label: "Live",
        value: "entryticket.in",
        href: "https://entryticket.in"
      }
    ],
    portraitVideo: {}
  },
  placeholders: {
    portraitVideo: "Walkthrough coming soon",
  },
  narrative: entryTicketCaseStudyNarrative,
  footer: {
    archiveEyebrow: "Project archive",
    liveLabel: "Live at entryticket.in ↗",
    liveHref: "https://entryticket.in",
    liveExternal: true,
    bookCallLabel: site.booking.label,
    bookCallHref: bookingHref,
    bookCallAriaLabel: "Book a call with DevInDays",
    previous: {
      slug: "billing-baba",
      label: "Billing Baba"
    },
    next: {
      slug: "turbosupply",
      label: "Turbo Supply"
    }
  }
} as const satisfies CaseStudyPageContent;
