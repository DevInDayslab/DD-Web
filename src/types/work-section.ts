export type WorkSectionHeadline = {
  before: string;
  italic: string;
};

export type WorkFeaturedCaseStudy = {
  id: string;
  category: string;
  title: string;
  body: string;
  tags: readonly string[];
  ctaLabel: string;
  ctaHref?: string;
  slug: string;
  /** Path to extended copy under src/content/material/case-studies */
  materialPath: string;
};

export type WorkMarqueeLogoAsset = {
  src?: string;
  alt: string;
  /** Asset not provided yet — renders an empty placeholder tile. */
  pending?: boolean;
  /** Full-bleed app icon: fills the tile instead of sitting inside it. */
  fill?: boolean;
};

export type WorkMarqueeTileConfig = {
  id: string;
  logoKey: string;
  caseStudyId: string;
};

export type WorkSectionContent = {
  headline: WorkSectionHeadline;
  subtitle: string;
  defaultCaseStudyId: string;
  caseStudies: readonly WorkFeaturedCaseStudy[];
  marqueeAriaLabel: string;
  marqueeTiles: readonly WorkMarqueeTileConfig[];
  marqueeLogos: Record<string, WorkMarqueeLogoAsset>;
};

export type WorkSectionLayoutConfig = {
  widthAtBaseline: number;
  marginTopAtBaseline: number;
  headerMaxWidthAtBaseline: number;
  headerGapAtBaseline: number;
  headlineFontSizeAtBaseline: number;
  headlineLineHeightAtBaseline: number;
  headlineLetterSpacingAtBaseline: number;
  subtitleFontSizeAtBaseline: number;
  subtitleLineHeightAtBaseline: number;
  subtitleMaxWidthAtBaseline: number;
  showcaseWidthAtBaseline: number;
  showcasePaddingAtBaseline: number;
  showcaseGapAtBaseline: number;
  showcaseRadiusAtBaseline: number;
  featuredCardWidthAtBaseline: number;
  featuredCardMinHeightAtBaseline: number;
  featuredCardPaddingAtBaseline: number;
  featuredCardRadiusAtBaseline: number;
  featuredCardGapAtBaseline: number;
  featuredContentMaxWidthAtBaseline: number;
  featuredBadgeFontSizeAtBaseline: number;
  featuredBadgeLetterSpacingAtBaseline: number;
  featuredTitleFontSizeAtBaseline: number;
  featuredTitleLineHeightAtBaseline: number;
  featuredTitleLetterSpacingAtBaseline: number;
  featuredBodyFontSizeAtBaseline: number;
  featuredBodyLineHeightAtBaseline: number;
  featuredTagsGapAtBaseline: number;
  featuredTagFontSizeAtBaseline: number;
  featuredTagLineHeightAtBaseline: number;
  featuredTagPaddingYAtBaseline: number;
  featuredTagPaddingXAtBaseline: number;
  featuredTagRadiusAtBaseline: number;
  featuredCtaPaddingYAtBaseline: number;
  featuredCtaPaddingXAtBaseline: number;
  featuredCtaFontSizeAtBaseline: number;
  featuredCtaLineHeightAtBaseline: number;
  featuredCtaGapAtBaseline: number;
  phoneWidthAtBaseline: number;
  phoneHeightAtBaseline: number;
  phoneRadiusAtBaseline: number;
  marqueeTileSizeAtBaseline: number;
  marqueeTileLogoMaxSizeAtBaseline: number;
  marqueeTileRadiusAtBaseline: number;
  marqueeTileGapAtBaseline: number;
  marqueeViewportWidthAtBaseline: number;
  marqueeScrollSpeedPxPerSecondAtBaseline: number;
  marqueeSegmentWidthAtBaseline: number;
};
