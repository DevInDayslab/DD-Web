import type { HeroContourConfig } from "@/types/hero-contour";

export const heroContours = {
  containerWidthAtBaseline: 720,
  containerHeightAtBaseline: 520,
  containerTopAtBaseline: 32,
  opacity: 0.4,
  strokeRgb: "25, 28, 32",
  layers: [
    {
      id: "outer",
      widthAtBaseline: 680,
      heightAtBaseline: 480,
      leftAtBaseline: 20,
      topAtBaseline: 20,
      radiusAtBaseline: 72,
      strokeOpacity: 0.04,
    },
    {
      id: "mid-outer",
      widthAtBaseline: 560,
      heightAtBaseline: 390,
      leftAtBaseline: 80,
      topAtBaseline: 65,
      radiusAtBaseline: 56,
      strokeOpacity: 0.06,
    },
    {
      id: "mid-inner",
      widthAtBaseline: 440,
      heightAtBaseline: 310,
      leftAtBaseline: 140,
      topAtBaseline: 105,
      radiusAtBaseline: 44,
      strokeOpacity: 0.07,
    },
    {
      id: "inner",
      widthAtBaseline: 320,
      heightAtBaseline: 230,
      leftAtBaseline: 200,
      topAtBaseline: 145,
      radiusAtBaseline: 34,
      strokeOpacity: 0.08,
    },
  ],
} as const satisfies HeroContourConfig;
