export type FaqSectionItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqSectionSeeAllLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type FaqSectionContent = {
  title: string;
  /** Item id to expand on first paint; omit or null for all closed. */
  defaultOpenItemId?: string | null;
  items: readonly FaqSectionItem[];
  seeAll: FaqSectionSeeAllLink;
};

export type FaqSectionLayoutConfig = {
  maxWidthAtBaseline: number;
  marginTopAtBaseline: number;
  paddingInlineAtBaseline: number;
  titleMaxWidthAtBaseline: number;
  titleFontSizeAtBaseline: number;
  titleLineHeightAtBaseline: number;
  titleLetterSpacingAtBaseline: number;
  titleMarginBottomAtBaseline: number;
  itemTriggerPaddingYAtBaseline: number;
  questionFontSizeAtBaseline: number;
  questionLineHeightAtBaseline: number;
  answerFontSizeAtBaseline: number;
  answerLineHeightAtBaseline: number;
  answerPaddingRightAtBaseline: number;
  chevronSizeAtBaseline: number;
  seeAllMarginTopAtBaseline: number;
  /** Space below “See all FAQs” before the site footer (1280px baseline). */
  seeAllMarginBottomAtBaseline: number;
  seeAllFontSizeAtBaseline: number;
  seeAllLineHeightAtBaseline: number;
  seeAllGapAtBaseline: number;
};
