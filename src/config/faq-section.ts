import type { FaqSectionLayoutConfig } from "@/types/faq-section";

export const faqSectionLayout = {
  maxWidthAtBaseline: 800,
  marginTopAtBaseline: 160,
  paddingInlineAtBaseline: 32,
  titleMaxWidthAtBaseline: 441,
  titleFontSizeAtBaseline: 32,
  titleLineHeightAtBaseline: 52,
  titleLetterSpacingAtBaseline: -0.88,
  titleMarginBottomAtBaseline: 48,
  itemTriggerPaddingYAtBaseline: 24,
  questionFontSizeAtBaseline: 21,
  questionLineHeightAtBaseline: 30,
  answerFontSizeAtBaseline: 17,
  answerLineHeightAtBaseline: 26,
  answerPaddingRightAtBaseline: 24,
  chevronSizeAtBaseline: 22,
  seeAllMarginTopAtBaseline: 40,
  seeAllMarginBottomAtBaseline: 72,
  seeAllFontSizeAtBaseline: 16,
  seeAllLineHeightAtBaseline: 21,
  seeAllGapAtBaseline: 6,
} as const satisfies FaqSectionLayoutConfig;
