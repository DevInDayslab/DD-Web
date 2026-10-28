export type PricingTierId = "mvp" | "full-product" | "custom";

export type PricingTier = {
  id: PricingTierId;
  tabLabel: string;
  title: string;
  durationBadge: string;
  features: readonly string[];
  investmentLabel: string;
  price: string;
  priceSubtitle?: string;
  ctaLabel: string;
  ctaHref: string;
  ctaAriaLabel: string;
};

export type PricingSectionContent = {
  title: string;
  subtitle: string;
  tabsAriaLabel: string;
  defaultTierId: PricingTierId;
  tiers: readonly PricingTier[];
};

export type PricingSectionLayoutConfig = {
  widthAtBaseline: number;
  maxWidthAtBaseline: number;
  marginTopAtBaseline: number;
  paddingInlineAtBaseline: number;
  headerMaxWidthAtBaseline: number;
  titleFontSizeAtBaseline: number;
  titleLineHeightAtBaseline: number;
  titleLetterSpacingAtBaseline: number;
  titleMarginBottomAtBaseline: number;
  subtitleFontSizeAtBaseline: number;
  subtitleLineHeightAtBaseline: number;
  tabsMarginTopAtBaseline: number;
  tabsMarginBottomAtBaseline: number;
  tabFontSizeAtBaseline: number;
  tabLineHeightAtBaseline: number;
  tabPaddingYAtBaseline: number;
  tabPaddingXAtBaseline: number;
  surfacePaddingAtBaseline: number;
  surfaceRadiusAtBaseline: number;
  surfaceInnerGapAtBaseline: number;
  tierTitleFontSizeAtBaseline: number;
  tierTitleLineHeightAtBaseline: number;
  durationBadgeFontSizeAtBaseline: number;
  tierHeaderMarginBottomAtBaseline: number;
  featureGapAtBaseline: number;
  featureFontSizeAtBaseline: number;
  featureLineHeightAtBaseline: number;
  featureIconSizeAtBaseline: number;
  priceCardPaddingAtBaseline: number;
  priceCardRadiusAtBaseline: number;
  priceCardWidthAtBaseline: number;
  priceCardHeightAtBaseline: number;
  investmentFontSizeAtBaseline: number;
  investmentLetterSpacingAtBaseline: number;
  priceFontSizeAtBaseline: number;
  priceLineHeightAtBaseline: number;
  priceMarginTopAtBaseline: number;
  ctaPaddingYAtBaseline: number;
  ctaPaddingXAtBaseline: number;
  ctaFontSizeAtBaseline: number;
  ctaLineHeightAtBaseline: number;
  ctaGapAtBaseline: number;
};
