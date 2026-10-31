import { heroMobileLayout } from "@/config/hero-mobile";
import { heroMarqueeViewportOuterHeightAtBaseline } from "@/lib/hero-marquee-viewport-height";
import type { HeroMarqueeLayoutConfig } from "@/types/hero-marquee";

/** Order the product logos appear in the marquee. */
const heroMarqueeLogoOrder = ["dater", "invigil", "billingBaba", "entryTicket", "turboSupply", "navNirvana", "myndfe", "homeyFixIt", "makeMyJodi", "sailor", "krexhe", "tecxi", "trustAi"] as const;

const heroMarqueeTileSpacingAtBaseline = 137.7;

/** Slight alternating tilt so the row reads as hand-placed, not gridded. */
const heroMarqueeRotations = [-4, 2.5, -2, 3, -3, 1.5, -5, 4, -1.5, 3.5, -2.5, 2, -3.5] as const;

const heroMarqueeLayoutBase = {
  outerWidthAtBaseline: 1184,
  topAtBaseline: 455,
  /** Moves the entire logo marquee up (px). Increase to lift higher / fix bottom clipping. */
  marqueeVerticalNudgeUpAtBaseline: 52,
  outerOpacity: 0.7,
  outerPaddingXAtBaseline: 16,
  frameMaxWidthAtBaseline: 1152,
  viewportPaddingYAtBaseline: 48,
  viewportBottomBleedAtBaseline: 32,
  segmentWidthAtBaseline: Math.round(heroMarqueeLogoOrder.length * heroMarqueeTileSpacingAtBaseline),
  trackHeightAtBaseline: 112,
  fadeWidthAtBaseline: 176,
  fadeBlurPx: 3,
  maskTransparentStopPercent: 0,
  maskOpaqueStartPercent: 14,
  maskOpaqueEndPercent: 86,
  maskTransparentEndPercent: 100,
  fadeSolidStopPercent: 0,
  fadeMidStopPercent: 50,
  scrollSpeedPxPerSecondAtBaseline: 36,
  fadeColor: "#F5F3EE",
  tileSizeStandardAtBaseline: 104,
  tileSizeFeaturedAtBaseline: 104,
  tileRadiusAtBaseline: 16,
  tilePaddingStandardAtBaseline: 14,
  tilePaddingIntelligenceAtBaseline: 14,
  imageSizeStandardAtBaseline: 64,
  imageSizeIntelligenceAtBaseline: 64,
  imageSizeDaterAtBaseline: 64,
  imageRadiusAtBaseline: 48,
  outerTileLiftAtBaseline: 100,
  outerLiftZoneFractionAtBaseline: 1 / 3,
  tiles: heroMarqueeLogoOrder.map((logoKey, index) => ({
    id: `logo-${logoKey}`,
    logoKey,
    leftAtBaseline: Math.round((10.85 + index * heroMarqueeTileSpacingAtBaseline) * 100) / 100,
    rotationDeg: heroMarqueeRotations[index % heroMarqueeRotations.length],
    tileSize: "standard" as const,
    shadow: index % 3 === 0 ? ("featured" as const) : ("standard" as const),
  })),
  mobile: {
    breakpointMaxPx: heroMobileLayout.breakpointMaxPx,
    tileGapPx: heroMobileLayout.tokens.marqueeTileGapPx,
    scrollSpeedPxPerSecond: heroMobileLayout.tokens.marqueeScrollSpeedPxPerSecond,
    tiles: heroMarqueeLogoOrder.map((logoKey, index) => ({
      id: `mobile-${logoKey}`,
      logoKey,
      rotationDeg: heroMarqueeRotations[index % heroMarqueeRotations.length],
      tileSize: "standard" as const,
      shadow: index % 3 === 0 ? ("featured" as const) : ("standard" as const),
    })),
  },
} as const;

export const heroMarqueeLayout = {
  ...heroMarqueeLayoutBase,
  outerHeightAtBaseline: heroMarqueeViewportOuterHeightAtBaseline(heroMarqueeLayoutBase),
  viewportHeightAtBaseline: heroMarqueeViewportOuterHeightAtBaseline(heroMarqueeLayoutBase),
} as const satisfies HeroMarqueeLayoutConfig;

export const heroMarqueeShadows = {
  featured: {
    border: "rgba(0, 0, 0, 0.05)",
    boxShadow:
      "0px 0px 0px 1px rgba(0, 0, 0, 0.03), var(--dd-shadow-md)",
  },
  standard: {
    border: "rgba(0, 0, 0, 0.04)",
    boxShadow:
      "var(--dd-shadow-sm)",
  },
} as const;
