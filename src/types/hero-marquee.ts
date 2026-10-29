export type HeroMarqueeShadowVariant = "featured" | "standard";

export type HeroMarqueeTileSize = "standard" | "featured";

export type HeroMarqueeLogoKey =
  | "entryTicket"
  | "myndfeLeaf"
  | "invigil"
  | "intelligencePlatform"
  | "dater";

export type HeroMarqueeTileBase = {
  id: string;
  logoKey: HeroMarqueeLogoKey;
  rotationDeg: number;
  tileSize: HeroMarqueeTileSize;
  shadow: HeroMarqueeShadowVariant;
  imageSize?: "standard" | "intelligence" | "dater";
};

export type HeroMarqueeTileLayout = HeroMarqueeTileBase & {
  leftAtBaseline: number;
};

export type HeroMarqueeFlowTileLayout = HeroMarqueeTileBase;

export type HeroMarqueeMobileConfig = {
  breakpointMaxPx: number;
  tileGapPx: number;
  scrollSpeedPxPerSecond: number;
  tiles: readonly HeroMarqueeFlowTileLayout[];
};

export type HeroMarqueeLayoutConfig = {
  outerWidthAtBaseline: number;
  outerHeightAtBaseline: number;
  topAtBaseline: number;
  marqueeVerticalNudgeUpAtBaseline: number;
  outerOpacity: number;
  outerPaddingXAtBaseline: number;
  frameMaxWidthAtBaseline: number;
  viewportHeightAtBaseline: number;
  viewportPaddingYAtBaseline: number;
  /** Space below the track for tile shadows and slight rotation bleed. */
  viewportBottomBleedAtBaseline: number;
  segmentWidthAtBaseline: number;
  trackHeightAtBaseline: number;
  fadeWidthAtBaseline: number;
  fadeBlurPx: number;
  maskTransparentStopPercent: number;
  maskOpaqueStartPercent: number;
  maskOpaqueEndPercent: number;
  maskTransparentEndPercent: number;
  fadeSolidStopPercent: number;
  fadeMidStopPercent: number;
  scrollSpeedPxPerSecondAtBaseline: number;
  fadeColor: string;
  tileSizeStandardAtBaseline: number;
  tileSizeFeaturedAtBaseline: number;
  tileRadiusAtBaseline: number;
  tilePaddingStandardAtBaseline: number;
  tilePaddingIntelligenceAtBaseline: number;
  imageSizeStandardAtBaseline: number;
  imageSizeIntelligenceAtBaseline: number;
  imageSizeDaterAtBaseline: number;
  imageRadiusAtBaseline: number;
  outerTileLiftAtBaseline: number;
  outerLiftZoneFractionAtBaseline: number;
  tiles: readonly HeroMarqueeTileLayout[];
  mobile: HeroMarqueeMobileConfig;
};

export type HeroMarqueeLogoAsset = {
  src: string;
  alt: string;
};

export type HeroMarqueeContent = {
  ariaLabel: string;
  logos: Record<HeroMarqueeLogoKey, HeroMarqueeLogoAsset>;
};
