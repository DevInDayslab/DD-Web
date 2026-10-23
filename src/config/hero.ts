import type { HeroFlanksConfig } from "@/types/hero";

export const heroFlanks = {
  panel: {
    width: 515,
    height: 932,
    top: 4,
    blur: 20,
    borderRadius: "107px 288px 0px 0px",
    gradient:
      "linear-gradient(180deg, rgba(41, 122, 255, 0.2) 0%, rgba(245, 243, 238, 0.2) 67.79%)",
  },
  left: {
    inset: -221,
  },
  right: {
    inset: -221,
  },
} as const satisfies HeroFlanksConfig;
