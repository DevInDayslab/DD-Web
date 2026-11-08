import { site } from "@/config/site";
import { entryTicketCaseStudyNarrative } from "@/content/case-studies/entryticket-narrative";
import type { CaseStudyPageContent } from "@/types/case-study-page";

const bookingHref = site.booking.embedUrl || "/#book";

export const entryTicketCaseStudyPage = {
  slug: "entryticket",
  materialPath: "src/content/material/case-studies/devindays-case-study-entryticket.md",
  meta: {
    title: "Ticketing App Case Study: EntryTicket",
    description:
      "How we built a native iOS and Android app for EntryTicket on top of its live PHP backend in three weeks, so a seat booked on mobile is gone on web instantly.",
    path: "/case-studies/entryticket",
    ogImage: "/og/entryticket.png",
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
        value: "Entryticket.in",
        href: "https://entryticket.in"
      }
    ],
    portraitVideo: {}
  },
  placeholders: {
    portraitVideo: "EntryTicket walkthrough video — phone preview"
  },
  narrative: entryTicketCaseStudyNarrative,
  footer: {
    archiveEyebrow: "Project archive",
    liveLabel: "Live at Entryticket.in ↗",
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
