import type { FaqPageLayoutConfig } from "@/types/faq-page";

export const faqPageLayout = {
  pageMaxWidthAtBaseline: 1280,
  heroPaddingTopAtBaseline: 160,
  heroPaddingBottomAtBaseline: 64,
  heroPaddingInlineAtBaseline: 48,
  heroCopyMaxWidthAtBaseline: 896,
  heroNavMaxWidthAtBaseline: 1120,
  heroEyebrowFontSizeAtBaseline: 12,
  heroHeadlineFontSizeAtBaseline: 64,
  heroHeadlineLineHeightAtBaseline: 71,
  heroDescriptionFontSizeAtBaseline: 18,
  heroDescriptionLineHeightAtBaseline: 29,
  heroDescriptionMaxWidthAtBaseline: 720,
  heroSearchFontSizeAtBaseline: 16,
  heroCategoryFontSizeAtBaseline: 14,
  heroCategoryGapAtBaseline: 24,
  heroStackGapAtBaseline: 16,
  listMaxWidthAtBaseline: 896,
  listPaddingBlockAtBaseline: 48,
  listPaddingInlineAtBaseline: 0,
} as const satisfies FaqPageLayoutConfig;
