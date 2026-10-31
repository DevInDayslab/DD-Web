export type TestimonialTextCard = {
  kind: "text";
  id: string;
  rating: number;
  quote: string;
  initials: string;
  avatarBackground: string;
  name: string;
  role: string;
  verifiedBadge?: string;
  quoteFontWeight?: "regular" | "medium";
};

export type TestimonialVideoCard = {
  kind: "video";
  id: string;
  badgeLabel: string;
  duration: string;
  quote: string;
  name: string;
  title: string;
  playButtonAriaLabel: string;
};

export type TestimonialCard = TestimonialTextCard | TestimonialVideoCard;

export type TestimonialsSectionContent = {
  title: string;
  carouselAriaLabel: string;
  cards: readonly TestimonialCard[];
};

export type TestimonialsSectionLayoutConfig = {
  widthAtBaseline: number;
  maxWidthAtBaseline: number;
  marginTopAtBaseline: number;
  paddingInlineAtBaseline: number;
  headerGapAtBaseline: number;
  titleFontSizeAtBaseline: number;
  titleLineHeightAtBaseline: number;
  titleLetterSpacingAtBaseline: number;
  carouselGapAtBaseline: number;
  cardWidthAtBaseline: number;
  cardHeightAtBaseline: number;
  cardPaddingAtBaseline: number;
  cardVideoPaddingAtBaseline: number;
  cardRadiusAtBaseline: number;
  cardQuoteSizeAtBaseline: number;
  cardQuoteLineHeightAtBaseline: number;
  cardQuoteLetterSpacingAtBaseline: number;
  cardQuoteSmallSizeAtBaseline: number;
  cardQuoteSmallLineHeightAtBaseline: number;
  cardQuoteRegularSizeAtBaseline: number;
  cardQuoteRegularLineHeightAtBaseline: number;
  cardFooterBorderColor: string;
  ratingSizeAtBaseline: number;
  avatarSizeAtBaseline: number;
  avatarFontSizeAtBaseline: number;
  nameFontSizeAtBaseline: number;
  roleFontSizeAtBaseline: number;
  roleLineHeightAtBaseline: number;
  videoBadgeFontSizeAtBaseline: number;
  playButtonSizeAtBaseline: number;
};
