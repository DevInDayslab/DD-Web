import type { FaqSectionLayoutConfig } from "@/types/faq-section";

export const faqSectionLayout = {
  maxWidthAtBaseline: 800,
  marginTopAtBaseline: 120,
  paddingInlineAtBaseline: 32,
  titleMaxWidthAtBaseline: 441,
  titleFontSizeAtBaseline: 36,
  titleLineHeightAtBaseline: 46,
  titleLetterSpacingAtBaseline: -0.72,
  titleMarginBottomAtBaseline: 48,
  itemTriggerPaddingYAtBaseline: 24,
  questionFontSizeAtBaseline: 20,
  questionLineHeightAtBaseline: 30,
  answerFontSizeAtBaseline: 16,
  answerLineHeightAtBaseline: 26,
  answerPaddingRightAtBaseline: 24,
  chevronSizeAtBaseline: 20,
  seeAllMarginTopAtBaseline: 40,
  seeAllMarginBottomAtBaseline: 72,
  seeAllFontSizeAtBaseline: 14,
  seeAllLineHeightAtBaseline: 21,
  seeAllGapAtBaseline: 6,
} as const satisfies FaqSectionLayoutConfig;
