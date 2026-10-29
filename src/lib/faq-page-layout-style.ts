import { faqPageLayout } from "@/config/faq-page";
import { faqPageThemeColors } from "@/config/faq-page-theme";
import { layoutBaseline } from "@/config/layout";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = faqPageLayout;

function fluid(value: number, bounds?: { minPx?: number; maxPx?: number }): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function faqPageLayoutToCssVars(): Record<string, string> {
  return {
    "--dd-faq-page-max-width": fluid(layout.pageMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.pageMaxWidthAtBaseline,
    }),
    "--dd-faq-page-hero-padding-top": fluid(layout.heroPaddingTopAtBaseline, {
      minPx: 72,
      maxPx: layout.heroPaddingTopAtBaseline,
    }),
    "--dd-faq-page-hero-padding-bottom": fluid(layout.heroPaddingBottomAtBaseline, {
      minPx: 40,
      maxPx: layout.heroPaddingBottomAtBaseline,
    }),
    "--dd-faq-page-hero-padding-inline": fluid(layout.heroPaddingInlineAtBaseline, {
      minPx: 20,
      maxPx: layout.heroPaddingInlineAtBaseline,
    }),
    "--dd-faq-page-hero-copy-max-width": fluid(layout.heroCopyMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.heroCopyMaxWidthAtBaseline,
    }),
    "--dd-faq-page-hero-nav-max-width": fluid(layout.heroNavMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.heroNavMaxWidthAtBaseline,
    }),
    "--dd-faq-page-hero-eyebrow-size": fluid(layout.heroEyebrowFontSizeAtBaseline, {
      minPx: 11,
      maxPx: layout.heroEyebrowFontSizeAtBaseline,
    }),
    "--dd-faq-page-hero-headline-size": fluid(layout.heroHeadlineFontSizeAtBaseline, {
      minPx: 40,
      maxPx: layout.heroHeadlineFontSizeAtBaseline,
    }),
    "--dd-faq-page-hero-headline-line-height": fluid(
      layout.heroHeadlineLineHeightAtBaseline,
      { minPx: 44, maxPx: layout.heroHeadlineLineHeightAtBaseline },
    ),
    "--dd-faq-page-hero-description-size": fluid(layout.heroDescriptionFontSizeAtBaseline, {
      minPx: 16,
      maxPx: layout.heroDescriptionFontSizeAtBaseline,
    }),
    "--dd-faq-page-hero-description-line-height": fluid(
      layout.heroDescriptionLineHeightAtBaseline,
      { minPx: 26, maxPx: layout.heroDescriptionLineHeightAtBaseline },
    ),
    "--dd-faq-page-hero-description-max-width": fluid(
      layout.heroDescriptionMaxWidthAtBaseline,
      { minPx: 320, maxPx: layout.heroDescriptionMaxWidthAtBaseline },
    ),
    "--dd-faq-page-hero-search-size": fluid(layout.heroSearchFontSizeAtBaseline, {
      minPx: 15,
      maxPx: layout.heroSearchFontSizeAtBaseline,
    }),
    "--dd-faq-page-hero-category-size": fluid(layout.heroCategoryFontSizeAtBaseline, {
      minPx: 13,
      maxPx: layout.heroCategoryFontSizeAtBaseline,
    }),
    "--dd-faq-page-hero-category-gap": fluid(layout.heroCategoryGapAtBaseline, {
      minPx: 20,
      maxPx: layout.heroCategoryGapAtBaseline,
    }),
    "--dd-faq-page-hero-stack-gap": fluid(layout.heroStackGapAtBaseline, {
      minPx: 12,
      maxPx: layout.heroStackGapAtBaseline,
    }),
    "--dd-faq-page-list-max-width": fluid(layout.listMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.listMaxWidthAtBaseline,
    }),
    "--dd-faq-page-list-padding-block": fluid(layout.listPaddingBlockAtBaseline, {
      minPx: 32,
      maxPx: layout.listPaddingBlockAtBaseline,
    }),
    "--dd-faq-page-list-padding-inline": fluid(layout.listPaddingInlineAtBaseline, {
      minPx: 20,
      maxPx: layout.listPaddingInlineAtBaseline,
    }),
    "--dd-faq-page-color-bg": faqPageThemeColors.pageBackground,
    "--dd-faq-page-color-eyebrow": faqPageThemeColors.eyebrow,
    "--dd-faq-page-color-headline": faqPageThemeColors.headline,
    "--dd-faq-page-color-description": faqPageThemeColors.description,
    "--dd-faq-page-color-divider": faqPageThemeColors.divider,
    "--dd-faq-page-color-search-bg": faqPageThemeColors.searchBackground,
    "--dd-faq-page-color-search-border": faqPageThemeColors.searchBorder,
    "--dd-faq-page-color-search-placeholder": faqPageThemeColors.searchPlaceholder,
    "--dd-faq-page-color-category-active": faqPageThemeColors.categoryActive,
    "--dd-faq-page-color-category-inactive": faqPageThemeColors.categoryInactive,
  };
}
