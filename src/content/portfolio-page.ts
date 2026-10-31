import type { PortfolioPageContent } from "@/types/portfolio-page";

export const portfolioPageContent = {
  hero: {
    eyebrow: "The portfolio",
    title: "Different industries, one standard.",
    subtitle:
      "Dating, delivery, civic media, wellness, and more, each one engineered the same way from idea to launch.",
  },
  labels: {
    caseStudy: "Case Study",
    comingSoon: "Coming Soon",
    more: "+20 more",
  },
  items: [
    { id: "dater", kind: "case-study", title: "Dater", href: "/case-studies/dater" },
    { id: "invigil", kind: "case-study", title: "Invigil", href: "/case-studies/invigil" },
    { id: "billing-baba", kind: "case-study", title: "Billing Baba", href: "/case-studies/billing-baba" },
    { id: "entry-ticket", kind: "case-study", title: "EntryTicket", href: "/case-studies/entryticket" },
    { id: "turbo-supply", kind: "case-study", title: "TurboSupply", href: "/case-studies/turbosupply" },
    { id: "myndfe", kind: "coming-soon", title: "Myndfe" },
    { id: "homeyfixit", kind: "coming-soon", title: "HomeyFixit" },
    { id: "sailor", kind: "coming-soon", title: "Sailor" },
    { id: "gloxal", kind: "coming-soon", title: "Gloxal" },
    { id: "trustai", kind: "coming-soon", title: "TrustAI" },
    { id: "homingo", kind: "coming-soon", title: "Homingo" },
    { id: "more", kind: "more", title: "" },
  ],
} as const satisfies PortfolioPageContent;
