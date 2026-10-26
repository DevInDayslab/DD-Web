export type ChatGptCtaSectionContent = {
  badge: string;
  headline: {
    lineOneBefore: string;
    headlineBrand: string;
    lineOneAfter: string;
    lineTwo: string;
  };
  ctaLabel: string;
  ctaAriaLabel: string;
  chatGptPrompt: string;
};

export type ChatGptCtaSectionLayoutConfig = {
  widthAtBaseline: number;
  minHeightAtBaseline: number;
  paddingInlineAtBaseline: number;
  marginTopAtBaseline: number;
  paddingAtBaseline: number;
  innerGapAtBaseline: number;
  borderRadiusAtBaseline: number;
  badgeFontSizeAtBaseline: number;
  badgeLetterSpacingAtBaseline: number;
  badgePaddingYAtBaseline: number;
  badgePaddingXAtBaseline: number;
  headlineFontSizeAtBaseline: number;
  headlineLineHeightAtBaseline: number;
  headlineMaxWidthAtBaseline: number;
  headlineMarginBottomAtBaseline: number;
  badgeMarginBottomAtBaseline: number;
  ctaPaddingYAtBaseline: number;
  ctaPaddingXAtBaseline: number;
  ctaFontSizeAtBaseline: number;
  ctaLineHeightAtBaseline: number;
  ctaGapAtBaseline: number;
  /** Mark width/height at 1280px viewport. */
  logoSizeAtBaseline: number;
  /**
   * How far the mark sits above the card top at baseline (px).
   * Higher = more cropped into the top-right corner.
   */
  logoOverflowTopAtBaseline: number;
  /**
   * How far the mark sits past the card right edge at baseline (px).
   * Higher = more cropped on the right.
   */
  logoOverflowRightAtBaseline: number;
};
