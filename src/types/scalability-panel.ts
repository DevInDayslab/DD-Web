export type ScalabilityPillar = {
  id: string;
  label: string;
  title: string;
  body: string;
};

export type ScalabilityPanelContent = {
  panelTagline: string;
  pillars: readonly ScalabilityPillar[];
  closingLead: string;
  closingBodyLines: readonly string[];
  chevronExpandAriaLabel: string;
  chevronCollapseAriaLabel: string;
};

export type ScalabilityPanelLayoutConfig = {
  panelBackdropPaddingYAtBaseline: number;
  panelWidthAtBaseline: number;
  panelMinHeightAtBaseline: number;
  panelRadiusAtBaseline: number;
  panelPaddingTopAtBaseline: number;
  panelPaddingXAtBaseline: number;
  panelPaddingBottomAtBaseline: number;
  panelHeaderGapAtBaseline: number;
  panelTaglineMaxWidthAtBaseline: number;
  panelTaglineFontSizeAtBaseline: number;
  panelTaglineLineHeightAtBaseline: number;
  panelTaglineNoWrapMinWidthPx: number;
  panelTaglineMarginTopAtBaseline: number;
  pillarsRowMaxWidthAtBaseline: number;
  pillarsGapAtBaseline: number;
  pillarsMarginTopAtBaseline: number;
  pillarWidthAtBaseline: number;
  pillarMinHeightAtBaseline: number;
  pillarRadiusAtBaseline: number;
  pillarPaddingXAtBaseline: number;
  pillarPaddingTopAtBaseline: number;
  pillarContentMaxWidthAtBaseline: number;
  pillarLabelFontSizeAtBaseline: number;
  pillarLabelLineHeightAtBaseline: number;
  pillarLabelLetterSpacingAtBaseline: number;
  pillarTitleFontSizeAtBaseline: number;
  pillarTitleLineHeightAtBaseline: number;
  pillarBodyFontSizeAtBaseline: number;
  pillarBodyLineHeightAtBaseline: number;
  closingLeadMaxWidthAtBaseline: number;
  closingBodyMaxWidthAtBaseline: number;
  closingMarginTopAtBaseline: number;
  closingLeadFontSizeAtBaseline: number;
  closingBodyFontSizeAtBaseline: number;
  closingLineHeightAtBaseline: number;
  closingGapAtBaseline: number;
};
