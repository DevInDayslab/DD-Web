import { daterCaseStudyNarrative } from "@/content/case-studies/dater-narrative-full";
import { site } from "@/config/site";
import type { CaseStudyPageContent } from "@/types/case-study-page";

const materialPath = "src/content/material/case-studies/devindays-case-study-dater.md";
const bookingHref = site.booking.embedUrl || "/#book";

export const daterCaseStudyPage = {
  slug: "dater",
  materialPath,
  meta: {
    title: "Dating App Development Case Study: Dater",
    description:
      "How we built Dater, a native iOS and Android dating app around a feed instead of swipes, with custom matchmaking, trust and safety, and subscriptions.",
    path: "/case-studies/dater",
    ogImage: "/og/dater.png",
  },
  intro: {
    breadcrumb: {
      projectName: "Dater",
      industry: "Dating / Social",
    },
    headlineLines: ["A dating app built around a feed,", "not a swipe."],
    subhead:
      "Native iOS and Android, built end-to-end, from matchmaking logic to trust and safety.",
  },
  brief: {
    storeLinks: [],
    specRows: [
      {
        id: "client",
        label: "Client",
        value: "Datify Network Private Limited",
      },
      {
        id: "industry",
        label: "Industry",
        value: "Dating / Social",
      },
      {
        id: "services",
        label: "Services",
        value:
          "Product design, iOS development (Swift/SwiftUI), Android development (Kotlin), backend development (Node.js), trust & safety integration",
      },
      {
        id: "timeline",
        label: "Timeline",
        value: "~2.5 months for v1, plus a focused 1-month v2 pass",
      },
      {
        id: "team",
        label: "Team",
        value: "Founder-led, with a team of 4 engineers",
      },
      {
        id: "engagement",
        label: "Engagement",
        value: "Ongoing, improving and scaling the product",
      },
      {
        id: "live",
        label: "Live",
        value: "Dater.social",
        href: "https://dater.social",
      },
    ],
    portraitVideo: {},
  },
  placeholders: {
    portraitVideo: "Dater walkthrough video — phone preview",
  },
  narrative: daterCaseStudyNarrative,
  footer: {
    archiveEyebrow: "Project archive",
    liveLabel: "Live at Dater.social ↗",
    liveHref: "https://dater.social",
    liveExternal: true,
    bookCallLabel: site.booking.label,
    bookCallHref: bookingHref,
    bookCallAriaLabel: "Book a call with DevInDays",
    next: { slug: "invigil", label: "Invigil" },
  },
} as const satisfies CaseStudyPageContent;
