import { heroMobileLayout } from "@/config/hero-mobile";
import { heroMarqueeViewportOuterHeightAtBaseline } from "@/lib/hero-marquee-viewport-height";
import type { HeroMarqueeLayoutConfig } from "@/types/hero-marquee";

const heroMarqueeLayoutBase = {
  outerWidthAtBaseline: 1184,
  topAtBaseline: 455,
  /** Moves the entire logo marquee up (px). Increase to lift higher / fix bottom clipping. */
  marqueeVerticalNudgeUpAtBaseline: 80,
  outerOpacity: 0.7,
  outerPaddingXAtBaseline: 16,
  frameMaxWidthAtBaseline: 1152,
  viewportPaddingYAtBaseline: 48,
  viewportBottomBleedAtBaseline: 32,
  segmentWidthAtBaseline: 960,
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
  tileSizeFeaturedAtBaseline: 112,
  tileRadiusAtBaseline: 16,
  tilePaddingStandardAtBaseline: 14,
  tilePaddingIntelligenceAtBaseline: 16,
  imageSizeStandardAtBaseline: 74,
  imageSizeIntelligenceAtBaseline: 70,
  imageSizeDaterAtBaseline: 82,
  imageRadiusAtBaseline: 48,
  outerTileLiftAtBaseline: 100,
  outerLiftZoneFractionAtBaseline: 1 / 3,
  tiles: [
    {
      id: "entry-left",
      logoKey: "entryTicket",
      leftAtBaseline: 10.85,
      rotationDeg: -6,
      tileSize: "standard",
      shadow: "featured",
    },
    {
      id: "myndfe-left",
      logoKey: "myndfeLeaf",
      leftAtBaseline: 148.92,
      rotationDeg: -3.5,
      tileSize: "standard",
      shadow: "standard",
    },
    {
      id: "invigil",
      logoKey: "invigil",
      leftAtBaseline: 286.66,
      rotationDeg: -1.5,
      tileSize: "standard",
      shadow: "standard",
    },
    {
      id: "dater",
      logoKey: "dater",
      leftAtBaseline: 424,
      rotationDeg: 0,
      tileSize: "featured",
      shadow: "featured",
      imageSize: "dater",
    },
    {
      id: "intelligence",
      logoKey: "intelligencePlatform",
      leftAtBaseline: 566.66,
      rotationDeg: 1.5,
      tileSize: "standard",
      shadow: "standard",
      imageSize: "intelligence",
    },
    {
      id: "myndfe-right",
      logoKey: "myndfeLeaf",
      leftAtBaseline: 700.92,
      rotationDeg: 3.5,
      tileSize: "standard",
      shadow: "standard",
    },
    {
      id: "entry-right",
      logoKey: "entryTicket",
      leftAtBaseline: 834.85,
      rotationDeg: 6,
      tileSize: "standard",
      shadow: "featured",
    },
  ],
  mobile: {
    breakpointMaxPx: heroMobileLayout.breakpointMaxPx,
    tileGapPx: heroMobileLayout.tokens.marqueeTileGapPx,
    scrollSpeedPxPerSecond: heroMobileLayout.tokens.marqueeScrollSpeedPxPerSecond,
    tiles: [
      {
        id: "mobile-entry",
        logoKey: "entryTicket",
        rotationDeg: -4,
        tileSize: "standard",
        shadow: "featured",
      },
      {
        id: "mobile-myndfe",
        logoKey: "myndfeLeaf",
        rotationDeg: -2,
        tileSize: "standard",
        shadow: "standard",
      },
      {
        id: "mobile-invigil",
        logoKey: "invigil",
        rotationDeg: 2,
        tileSize: "standard",
        shadow: "standard",
      },
      {
        id: "mobile-intelligence",
        logoKey: "intelligencePlatform",
        rotationDeg: 4,
        tileSize: "standard",
        shadow: "standard",
        imageSize: "intelligence",
      },
    ],
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
      "0px 0px 0px 1px rgba(0, 0, 0, 0.03), 0px 12px 26px rgba(20, 24, 28, 0.09), 0px 3px 8px rgba(0, 0, 0, 0.04)",
  },
  standard: {
    border: "rgba(0, 0, 0, 0.04)",
    boxShadow:
      "0px 10px 22px rgba(20, 24, 28, 0.07), 0px 2px 6px rgba(0, 0, 0, 0.03)",
  },
} as const;
