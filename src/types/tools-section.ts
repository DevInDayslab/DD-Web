export type ToolsStackItemIcon =
  | "flutter"
  | "kotlin"
  | "swift"
  | "reactNative"
  | "node"
  | "postgresql"
  | "python"
  | "mongodb"
  | "aws"
  | "firebase"
  | "supabase"
  | "figma";

export type ToolsStackItem = {
  id: string;
  label: string;
  icon: ToolsStackItemIcon;
};

export type ToolsSectionHeadline = {
  lineOne: string;
  lineTwo: string;
};

export type ToolsSectionContent = {
  eyebrow: string;
  headline: ToolsSectionHeadline;
  marqueeAriaLabel: string;
  stackItems: readonly ToolsStackItem[];
};

export type ToolsSectionLayoutConfig = {
  widthAtBaseline: number;
  marginTopAtBaseline: number;
  eyebrowMaxWidthAtBaseline: number;
  eyebrowFontSizeAtBaseline: number;
  eyebrowLineHeightAtBaseline: number;
  eyebrowLetterSpacingAtBaseline: number;
  eyebrowPaddingBottomAtBaseline: number;
  headlineMaxWidthAtBaseline: number;
  headlineFontSizeAtBaseline: number;
  headlineLineHeightAtBaseline: number;
  headlineLetterSpacingAtBaseline: number;
  headlineMarginTopAtBaseline: number;
  pillInsetInlineAtBaseline: number;
  pillHeightAtBaseline: number;
  pillRadiusAtBaseline: number;
  pillMarginTopAtBaseline: number;
  pillItemGapAtBaseline: number;
  pillItemIconGapAtBaseline: number;
  pillItemFontSizeAtBaseline: number;
  pillItemLineHeightAtBaseline: number;
  pillItemLetterSpacingAtBaseline: number;
  pillItemIconSizeAtBaseline: number;
  pillSeparatorSizeAtBaseline: number;
  pillEdgeFadeWidthAtBaseline: number;
  pillViewportMaskOpaqueStartPercent: number;
  pillViewportMaskOpaqueEndPercent: number;
  marqueeScrollSpeedPxPerSecondAtBaseline: number;
  marqueeSegmentWidthAtBaseline: number;
};
