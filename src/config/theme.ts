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
  },
  shadows: {
    cta: "0px 4px 14px rgba(17, 22, 27, 0.18)",
  },
} as const satisfies Theme;
