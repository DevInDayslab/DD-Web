import type { Theme } from "@/types";

export const theme = {
  colors: {
    background: "#F2F3F5",
    foreground: "#191C1D",
    muted: "#45474A",
    hairline: "#E4E6E8",
    accent: "#11161B",
    surface: "#F2F3F5",
    inverse: "#FFFFFF",
    ctaSecondaryBorder: "rgba(0, 0, 0, 0.1)",
  },
  shadows: {
    cta: "0px 4px 14px rgba(17, 22, 27, 0.18)",
    ctaSecondary: "0px 2px 6px rgba(0, 0, 0, 0.04)",
  },
} as const satisfies Theme;
