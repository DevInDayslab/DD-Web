import type { HeroMarqueeContent } from "@/types/hero-marquee";

export const heroMarqueeContent = {
  ariaLabel: "Products we have built",
  logos: {
    dater: {
      src: "/logos/marks/dater.webp",
      alt: "Dater",
    },
    invigil: {
      src: "/logos/marks/invigil.webp",
      alt: "InViGiL",
      fill: true,
    },
    billingBaba: {
      src: "/logos/marks/billing-baba.webp",
      alt: "Billing Baba",
    },
    turboSupply: {
      src: "/logos/marks/turbosupply.webp",
      alt: "Turbo Supply",
    },
    entryTicket: {
      src: "/logos/marks/entry-ticket.webp",
      alt: "EntryTicket",
      fill: true,
    },
    navNirvana: {
      src: "/logos/marks/navnirvana.webp",
      alt: "NavNirvana",
    },
    myndfe: {
      src: "/logos/marks/myndfe.webp",
      alt: "Myndfe",
      fill: true,
    },
    homeyFixIt: {
      src: "/logos/marks/homeyfixit.webp",
      alt: "HomeyFixIt",
    },
    makeMyJodi: {
      src: "/logos/marks/makemyjodi.webp",
      alt: "MakeMyJodi",
      fill: true,
    },
    sailor: {
      src: "/logos/marks/sailor.webp",
      alt: "Sailor",
    },
    krexhe: {
      src: "/logos/marks/krexhe.webp",
      alt: "Krexhe",
    },
    tecxi: {
      src: "/logos/marks/tecxi.webp",
      alt: "TecXi",
      fill: true,
    },
    trustAi: {
      src: "/logos/marks/trustai.webp",
      alt: "TrustAI",
    },
  },
} as const satisfies HeroMarqueeContent;
