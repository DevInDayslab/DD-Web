import type { HeroMarqueeContent } from "@/types/hero-marquee";

export const heroMarqueeContent = {
  ariaLabel: "Products we have built",
  logos: {
    dater: {
      src: "/logos/marks/dater.png",
      alt: "Dater",
    },
    invigil: {
      src: "/logos/marks/invigil.png",
      alt: "InViGiL",
      fill: true,
    },
    billingBaba: {
      src: "/logos/marks/billing-baba.png",
      alt: "Billing Baba",
    },
    turboSupply: {
      src: "/logos/marks/turbosupply.png",
      alt: "Turbo Supply",
    },
    entryTicket: {
      src: "/logos/marks/entry-ticket.png",
      alt: "EntryTicket",
      fill: true,
    },
    navNirvana: {
      src: "/logos/marks/navnirvana.png",
      alt: "NavNirvana",
    },
    myndfe: {
      src: "/logos/marks/myndfe.png",
      alt: "Myndfe",
      fill: true,
    },
    homeyFixIt: {
      src: "/logos/marks/homeyfixit.png",
      alt: "HomeyFixIt",
    },
    makeMyJodi: {
      src: "/logos/marks/makemyjodi.png",
      alt: "MakeMyJodi",
      fill: true,
    },
    sailor: {
      src: "/logos/marks/sailor.png",
      alt: "Sailor",
    },
    krexhe: {
      src: "/logos/marks/krexhe.png",
      alt: "Krexhe",
    },
    tecxi: {
      src: "/logos/marks/tecxi.png",
      alt: "TecXi",
      fill: true,
    },
    trustAi: {
      src: "/logos/marks/trustai.png",
      alt: "TrustAI",
    },
  },
} as const satisfies HeroMarqueeContent;
