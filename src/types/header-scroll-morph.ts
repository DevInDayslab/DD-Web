export type HeaderScrollMorphSpringConfig = {
  stiffness: number;
  damping: number;
  mass: number;
};

export type HeaderScrollMorphConfig = {
  scrollThresholdPx: number;
  scrollRangePx: number;
  spring: HeaderScrollMorphSpringConfig;
  /** When scrolling up, morph progress tracks scroll immediately (see hook). Down uses `spring`. */
  scrollUpFollowsScrollTarget: boolean;
  pillMaxWidthAtBaseline: number;
  pillInsetInlineAtBaseline: number;
  pillPaddingInlineAtBaseline: number;
  pillTopInsetAtBaseline: number;
  pillBarHeightAtBaseline: number;
  pillBorderRadiusAtBaseline: number;
  barCtaHeightAtBaseline: number;
  pillCtaHeightAtBaseline: number;
  barCtaPaddingInlineAtBaseline: number;
  pillCtaPaddingInlineAtBaseline: number;
  barCtaFontSizeAtBaseline: number;
  pillCtaFontSizeAtBaseline: number;
  brandScaleAtFloat: number;
  edgeItemOpacityMinDuringMorph: number;
  barBrandFontSizeAtBaseline: number;
  barBrandLineHeightAtBaseline: number;
  pillBrandFontSizeAtBaseline: number;
  pillBrandLineHeightAtBaseline: number;
  pillNavLinkPaddingBlockAtBaseline: number;
  pillShadowAtRest: string;
  pillShadowAtFloat: string;
  shellBackdropBlurPx: number;
  pillBackdropBlurPx: number;
  floatingActiveProgress: number;
};
