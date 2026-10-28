import type { HeroMarqueeContent } from "@/types/hero-marquee";

export const heroMarqueeContent = {
  ariaLabel: "Products we have built",
  logos: {
    entryTicket: {
      src: "/logos/entry-ticket.png",
      alt: "EntryTicket",
    },
    myndfeLeaf: {
      src: "/logos/myndfe-leaf.png",
      alt: "Myndfe Leaf",
    },
    invigil: {
      src: "/logos/invigil.png",
      alt: "InViGiL",
    },
    intelligencePlatform: {
      src: "/logos/intelligence-platform.png",
      alt: "Intelligence Platform",
    },
    dater: {
      src: "/logos/dater.png",
      alt: "Dater",
    },
  },
} as const satisfies HeroMarqueeContent;
