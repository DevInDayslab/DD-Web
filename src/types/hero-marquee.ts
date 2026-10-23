export type HeroMarqueeShadowVariant = "featured" | "standard";

export type HeroMarqueeTileSize = "standard" | "featured";

export type HeroMarqueeLogoKey =
  | "entryTicket"
  | "myndfeLeaf"
  | "invigil"
  | "intelligencePlatform"
  | "dater";

export type HeroMarqueeTileLayout = {
  id: string;
  logoKey: HeroMarqueeLogoKey;
  leftAtBaseline: number;
  offsetYAtBaseline: number;
  rotationDeg: number;
  tileSize: HeroMarqueeTileSize;
  shadow: HeroMarqueeShadowVariant;
  imageSize?: "standard" | "intelligence" | "dater";
};

export type HeroMarqueeLayoutConfig = {
  outerWidthAtBaseline: number;
  outerHeightAtBaseline: number;
  topAtBaseline: number;
  outerOpacity: number;
  outerPaddingXAtBaseline: number;
  frameMaxWidthAtBaseline: number;
  viewportHeightAtBaseline: number;
  viewportPaddingYAtBaseline: number;
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
  tiles: readonly HeroMarqueeTileLayout[];
};

export type HeroMarqueeLogoAsset = {
  src: string;
  alt: string;
};

export type HeroMarqueeContent = {
  ariaLabel: string;
  logos: Record<HeroMarqueeLogoKey, HeroMarqueeLogoAsset>;
};
