import type { FaqSectionLayoutConfig } from "@/types/faq-section";

export const faqSectionLayout = {
  maxWidthAtBaseline: 800,
  marginTopAtBaseline: 104,
  paddingInlineAtBaseline: 32,
  titleMaxWidthAtBaseline: 560,
  titleFontSizeAtBaseline: 40,
  titleLineHeightAtBaseline: 48,
  titleLetterSpacingAtBaseline: -0.88,
  titleMarginBottomAtBaseline: 48,
  itemTriggerPaddingYAtBaseline: 24,
  questionFontSizeAtBaseline: 18,
  questionLineHeightAtBaseline: 26,
  answerFontSizeAtBaseline: 16,
  answerLineHeightAtBaseline: 26,
  answerPaddingRightAtBaseline: 24,
  chevronSizeAtBaseline: 20,
  seeAllMarginTopAtBaseline: 40,
  seeAllMarginBottomAtBaseline: 72,
  seeAllFontSizeAtBaseline: 16,
  seeAllLineHeightAtBaseline: 21,
  seeAllGapAtBaseline: 6,
} as const satisfies FaqSectionLayoutConfig;
