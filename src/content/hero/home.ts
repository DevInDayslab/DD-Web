import { site } from "@/config/site";
import type { HeroContentCopy } from "@/types/hero-content";

export const homeHeroContent = {
  headline: {
    primary: "Turn your idea",
    secondary: "into a product built to last.",
  },
  subtitle:
    "We design and engineer mobile and web products end to end from the first architecture decision to production and beyond. One team. One accountable partner.",
  actions: [
    {
      id: "book-call",
      label: site.booking.label,
      href: site.booking.embedUrl || "/#book",
      variant: "primary",
    },
    {
      id: "see-work",
      label: "See Our Work",
      href: "/#case-studies",
      variant: "secondary",
    },
  ],
} satisfies HeroContentCopy;
