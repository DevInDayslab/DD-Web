import type { SiteFooterLayoutConfig } from "@/types/site-footer";

export const siteFooterLayout = {
  backgroundImageSrc: "/assets/dd-web-bottom.webp",
  minHeightAtBaseline: 541,
  minHeightMobileAtBaseline: 620,
  ctaMaxWidthAtBaseline: 896,
  ctaPaddingTopAtBaseline: 96,
  ctaPaddingBottomAtBaseline: 64,
  ctaPaddingInlineAtBaseline: 40,
  headlineFontSizeAtBaseline: 72,
  headlineLineHeightAtBaseline: 80,
  headlineLetterSpacingAtBaseline: -1.44,
  subtextMarginTopAtBaseline: 16,
  subtextFontSizeAtBaseline: 17,
  subtextLineHeightAtBaseline: 26,
  ctaButtonMarginTopAtBaseline: 32,
  ctaButtonPaddingYAtBaseline: 16,
  ctaButtonPaddingXAtBaseline: 32,
  ctaButtonFontSizeAtBaseline: 16,
  ctaButtonLineHeightAtBaseline: 24,
  ctaButtonGapAtBaseline: 8,
  barMaxWidthAtBaseline: 1280,
  barPaddingTopAtBaseline: 40,
  barPaddingBottomAtBaseline: 48,
  /**
   * Distance from the **viewport** left edge to the brand block (1280px baseline).
   * Smaller = DevInDays further left. Match header: see `edgePaddingAtBaseline` in `config/layout.ts`.
   */
  barPaddingInlineStartAtBaseline: 60,
  /**
   * Distance from the **viewport** right edge to social / copyright.
   * Smaller = meta block further right.
   */
  barPaddingInlineEndAtBaseline: 60,
  /** Nudge brand horizontally: negative = further left, positive = toward center. */
  barBrandShiftInlineStartAtBaseline: 0,
  /** Nudge meta horizontally: negative = further right, positive = toward center. */
  barMetaShiftInlineEndAtBaseline: 0,
  brandNameFontSizeAtBaseline: 18,
  brandNameLineHeightAtBaseline: 24,
  brandNameLetterSpacingAtBaseline: -0.4,
  brandTaglineFontSizeAtBaseline: 13,
  brandTaglineLineHeightAtBaseline: 16,
  navFontSizeAtBaseline: 16,
  navLineHeightAtBaseline: 20,
  navGapAtBaseline: 8,
  socialFontSizeAtBaseline: 13,
  socialLineHeightAtBaseline: 16,
  socialGapAtBaseline: 8,
  barColumnGapAtBaseline: 24,
} as const satisfies SiteFooterLayoutConfig;
