import { site } from "@/config/site";
import { turboSupplyCaseStudyNarrative } from "@/content/case-studies/turbosupply-narrative";
import type { CaseStudyPageContent } from "@/types/case-study-page";

const bookingHref = site.booking.embedUrl || "/#book";

export const turboSupplyCaseStudyPage = {
  slug: "turbosupply",
  materialPath: "src/content/material/case-studies/devindays-case-study-turbosupply.md",
  meta: {
    title: "Turbo Supply · Case Study",
    description: "30-minute delivery for the hardware businesses actually run on. Android and iOS apps built so a tradesperson can order exactly what the job needs, when it needs it.",
    path: "/case-studies/turbosupply"
  },
  intro: {
    breadcrumb: {
      projectName: "Turbo Supply",
      industry: "Quick commerce / hardware supply"
    },
    headlineLines: [
      "30-minute delivery, for the hardware",
      "businesses actually run on."
    ],
    subhead: "Android and iOS, built so a tradesperson can stop stocking a warehouse and start ordering exactly what the job needs, when it needs it."
  },
  brief: {
    storeLinks: [],
    specRows: [
      {
        id: "client",
        label: "Client",
        value: "Tarun Kumar, Turbo Supply"
      },
      {
        id: "industry",
        label: "Industry",
        value: "Quick commerce / hardware supply"
      },
      {
        id: "services",
        label: "Services",
        value: "Mobile app development (Flutter, iOS + Android), backend development (Node.js), payment integration, launch"
      },
      {
        id: "timeline",
        label: "Timeline",
        value: "4 weeks"
      },
      {
        id: "team",
        label: "Team",
        value: "3 engineers"
      }
    ],
    portraitVideo: {}
  },
  placeholders: {
    portraitVideo: "Turbo Supply walkthrough video — phone preview"
  },
  narrative: turboSupplyCaseStudyNarrative,
  footer: {
    archiveEyebrow: "Project archive",
    liveLabel: "Live and operating",
    bookCallLabel: site.booking.label,
    bookCallHref: bookingHref,
    bookCallAriaLabel: "Book a call with DevInDays",
    previous: {
      slug: "entryticket",
      label: "EntryTicket"
    }
  }
} as const satisfies CaseStudyPageContent;
