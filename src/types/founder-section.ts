export type FounderSectionPortrait = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type FounderSectionContent = {
  title: string;
  intro: string;
  bodyParagraphs: readonly string[];
  signoff: {
    signatureImageSrc: string;
    name: string;
    role: string;
  };
  portrait: FounderSectionPortrait;
  portraitPlaceholderLabel: string;
};

export type FounderSectionLayoutConfig = {
  maxWidthAtBaseline: number;
  marginTopAtBaseline: number;
  paddingInlineAtBaseline: number;
  paddingBlockAtBaseline: number;
  columnGapAtBaseline: number;
  copyGapAtBaseline: number;
  bodyGapAtBaseline: number;
  signoffMarginTopAtBaseline: number;
  titleFontSizeAtBaseline: number;
  titleLineHeightAtBaseline: number;
  titleLetterSpacingAtBaseline: number;
  introFontSizeAtBaseline: number;
  introLineHeightAtBaseline: number;
  bodyFontSizeAtBaseline: number;
  bodyLineHeightAtBaseline: number;
  signoffNameFontSizeAtBaseline: number;
  signoffNameLineHeightAtBaseline: number;
  signoffNameLetterSpacingAtBaseline: number;
  signoffRoleFontSizeAtBaseline: number;
  signoffRoleLineHeightAtBaseline: number;
  signoffRoleLetterSpacingAtBaseline: number;
  signatureTraceWidthAtBaseline: number;
  signatureTraceHeightAtBaseline: number;
  portraitWidthAtBaseline: number;
  portraitHeightAtBaseline: number;
  portraitRadiusAtBaseline: number;
};
