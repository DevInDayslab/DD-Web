export type ScalabilityLetterTile = {
  letter: string;
  rotationDeg: number;
};

export type ScalabilitySectionContent = {
  eyebrow: string;
  headline: string;
  paragraphs: readonly string[];
  emphasis: string;
  letterTiles: readonly ScalabilityLetterTile[];
  footer: string;
  letterBarAriaLabel: string;
};

export type ScalabilitySectionLayoutConfig = {
  topAtBaseline: number;
  widthAtBaseline: number;
  heightAtBaseline: number;
  insetInlineAtBaseline: number;
  eyebrowMaxWidthAtBaseline: number;
  eyebrowPillPaddingYAtBaseline: number;
  eyebrowPillPaddingXAtBaseline: number;
  eyebrowPillGapAtBaseline: number;
  eyebrowFontSizeAtBaseline: number;
  eyebrowLineHeightAtBaseline: number;
  eyebrowLetterSpacingAtBaseline: number;
  eyebrowMarginBottomAtBaseline: number;
  headlineFontSizeAtBaseline: number;
  headlineLineHeightAtBaseline: number;
  headlineLetterSpacingAtBaseline: number;
  headlinePaddingTopAtBaseline: number;
  headlineMaxWidthAtBaseline: number;
  bodyMaxWidthAtBaseline: number;
  bodyNarrowParagraphMaxWidthAtBaseline: number;
  bodyFontSizeAtBaseline: number;
  bodyLineHeightAtBaseline: number;
  bodyGapAtBaseline: number;
  bodyPaddingTopAtBaseline: number;
  emphasisFontSizeAtBaseline: number;
  emphasisLineHeightAtBaseline: number;
  emphasisLetterSpacingAtBaseline: number;
  emphasisPaddingTopAtBaseline: number;
  letterBarMarginTopAtBaseline: number;
  letterBarWidthAtBaseline: number;
  /** Added to `--dd-scalability-body-max-width` for letter bar min width. */
  letterBarMinWidthBeyondBodyAtBaseline: number;
  letterBarPaddingYAtBaseline: number;
  letterBarPaddingXAtBaseline: number;
  letterBarGapAtBaseline: number;
  letterBarRadiusAtBaseline: number;
  letterTileGapAtBaseline: number;
  letterTileWidthAtBaseline: number;
  letterTileHeightAtBaseline: number;
  letterTileRadiusAtBaseline: number;
  letterTileBorderWidthAtBaseline: number;
  letterFontSizeAtBaseline: number;
  letterLineHeightAtBaseline: number;
  letterLetterSpacingAtBaseline: number;
  chevronWidthAtBaseline: number;
  chevronHeightAtBaseline: number;
  chevronStrokeWidthAtBaseline: number;
  footerMarginTopAtBaseline: number;
  footerMaxWidthAtBaseline: number;
  footerFontSizeAtBaseline: number;
  footerLineHeightAtBaseline: number;
  footerLetterSpacingAtBaseline: number;
};
