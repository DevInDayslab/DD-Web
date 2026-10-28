import { layoutBaseline } from "@/config/layout";
import { pricingSectionLayout } from "@/config/pricing-section";
import { pricingThemeColors } from "@/config/pricing-theme";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = pricingSectionLayout;

function fluid(
  value: number,
  bounds?: { minPx?: number; maxPx?: number },
): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function pricingSectionLayoutToCssVars(): Record<string, string> {
  return {
    "--dd-pricing-margin-top": fluid(layout.marginTopAtBaseline, {
      minPx: 64,
      maxPx: layout.marginTopAtBaseline,
    }),
    "--dd-pricing-width": fluid(layout.widthAtBaseline, {
      minPx: 320,
      maxPx: layout.widthAtBaseline,
    }),
    "--dd-pricing-max-width": fluid(layout.maxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.maxWidthAtBaseline,
    }),
    "--dd-pricing-padding-inline": fluid(layout.paddingInlineAtBaseline, {
      minPx: 16,
      maxPx: layout.paddingInlineAtBaseline,
    }),
    "--dd-pricing-header-max-width": fluid(layout.headerMaxWidthAtBaseline, {
      minPx: 280,
      maxPx: layout.headerMaxWidthAtBaseline,
    }),
    "--dd-pricing-title-size": fluid(layout.titleFontSizeAtBaseline, {
      minPx: 32,
      maxPx: layout.titleFontSizeAtBaseline,
    }),
    "--dd-pricing-title-line-height": fluid(layout.titleLineHeightAtBaseline, {
      minPx: 36,
      maxPx: layout.titleLineHeightAtBaseline,
    }),
    "--dd-pricing-title-letter-spacing": `${layout.titleLetterSpacingAtBaseline}px`,
    "--dd-pricing-title-margin-bottom": fluid(layout.titleMarginBottomAtBaseline, {
      minPx: 8,
      maxPx: layout.titleMarginBottomAtBaseline,
    }),
    "--dd-pricing-subtitle-size": fluid(layout.subtitleFontSizeAtBaseline, {
      minPx: 15,
      maxPx: layout.subtitleFontSizeAtBaseline,
    }),
    "--dd-pricing-subtitle-line-height": fluid(layout.subtitleLineHeightAtBaseline, {
      minPx: 24,
      maxPx: layout.subtitleLineHeightAtBaseline,
    }),
    "--dd-pricing-tabs-margin-top": fluid(layout.tabsMarginTopAtBaseline, {
      minPx: 24,
      maxPx: layout.tabsMarginTopAtBaseline,
    }),
    "--dd-pricing-tabs-margin-bottom": fluid(layout.tabsMarginBottomAtBaseline, {
      minPx: 28,
      maxPx: layout.tabsMarginBottomAtBaseline,
    }),
    "--dd-pricing-tab-size": fluid(layout.tabFontSizeAtBaseline, {
      minPx: 12,
      maxPx: layout.tabFontSizeAtBaseline,
    }),
    "--dd-pricing-tab-line-height": fluid(layout.tabLineHeightAtBaseline, {
      minPx: 18,
      maxPx: layout.tabLineHeightAtBaseline,
    }),
    "--dd-pricing-tab-padding-y": fluid(layout.tabPaddingYAtBaseline, {
      minPx: 6,
      maxPx: layout.tabPaddingYAtBaseline,
    }),
    "--dd-pricing-tab-padding-x": fluid(layout.tabPaddingXAtBaseline, {
      minPx: 16,
      maxPx: layout.tabPaddingXAtBaseline,
    }),
    "--dd-pricing-surface-padding": fluid(layout.surfacePaddingAtBaseline, {
      minPx: 24,
      maxPx: layout.surfacePaddingAtBaseline,
    }),
    "--dd-pricing-surface-radius": fluid(layout.surfaceRadiusAtBaseline, {
      minPx: 16,
      maxPx: layout.surfaceRadiusAtBaseline,
    }),
    "--dd-pricing-surface-inner-gap": fluid(layout.surfaceInnerGapAtBaseline, {
      minPx: 32,
      maxPx: layout.surfaceInnerGapAtBaseline,
    }),
    "--dd-pricing-tier-title-size": fluid(layout.tierTitleFontSizeAtBaseline, {
      minPx: 28,
      maxPx: layout.tierTitleFontSizeAtBaseline,
    }),
    "--dd-pricing-tier-title-line-height": fluid(layout.tierTitleLineHeightAtBaseline, {
      minPx: 32,
      maxPx: layout.tierTitleLineHeightAtBaseline,
    }),
    "--dd-pricing-duration-badge-size": fluid(layout.durationBadgeFontSizeAtBaseline, {
      minPx: 12,
      maxPx: layout.durationBadgeFontSizeAtBaseline,
    }),
    "--dd-pricing-tier-header-margin-bottom": fluid(layout.tierHeaderMarginBottomAtBaseline, {
      minPx: 24,
      maxPx: layout.tierHeaderMarginBottomAtBaseline,
    }),
    "--dd-pricing-feature-gap": fluid(layout.featureGapAtBaseline, {
      minPx: 14,
      maxPx: layout.featureGapAtBaseline,
    }),
    "--dd-pricing-feature-size": fluid(layout.featureFontSizeAtBaseline, {
      minPx: 14,
      maxPx: layout.featureFontSizeAtBaseline,
    }),
    "--dd-pricing-feature-line-height": fluid(layout.featureLineHeightAtBaseline, {
      minPx: 20,
      maxPx: layout.featureLineHeightAtBaseline,
    }),
    "--dd-pricing-feature-icon-size": fluid(layout.featureIconSizeAtBaseline, {
      minPx: 14,
      maxPx: layout.featureIconSizeAtBaseline,
    }),
    "--dd-pricing-price-card-padding": fluid(layout.priceCardPaddingAtBaseline, {
      minPx: 28,
      maxPx: layout.priceCardPaddingAtBaseline,
    }),
    "--dd-pricing-price-card-radius": fluid(layout.priceCardRadiusAtBaseline, {
      minPx: 16,
      maxPx: layout.priceCardRadiusAtBaseline,
    }),
    "--dd-pricing-price-card-width": fluid(layout.priceCardWidthAtBaseline, {
      minPx: 280,
      maxPx: layout.priceCardWidthAtBaseline,
    }),
    "--dd-pricing-price-card-height": fluid(layout.priceCardHeightAtBaseline, {
      minPx: 280,
      maxPx: layout.priceCardHeightAtBaseline,
    }),
    "--dd-pricing-investment-size": fluid(layout.investmentFontSizeAtBaseline, {
      minPx: 10,
      maxPx: layout.investmentFontSizeAtBaseline,
    }),
    "--dd-pricing-investment-letter-spacing": `${layout.investmentLetterSpacingAtBaseline}px`,
    "--dd-pricing-price-size": fluid(layout.priceFontSizeAtBaseline, {
      minPx: 36,
      maxPx: layout.priceFontSizeAtBaseline,
    }),
    "--dd-pricing-price-line-height": fluid(layout.priceLineHeightAtBaseline, {
      minPx: 40,
      maxPx: layout.priceLineHeightAtBaseline,
    }),
    "--dd-pricing-price-margin-top": fluid(layout.priceMarginTopAtBaseline, {
      minPx: 10,
      maxPx: layout.priceMarginTopAtBaseline,
    }),
    "--dd-pricing-cta-padding-y": fluid(layout.ctaPaddingYAtBaseline, {
      minPx: 12,
      maxPx: layout.ctaPaddingYAtBaseline,
    }),
    "--dd-pricing-cta-padding-x": fluid(layout.ctaPaddingXAtBaseline, {
      minPx: 20,
      maxPx: layout.ctaPaddingXAtBaseline,
    }),
    "--dd-pricing-cta-size": fluid(layout.ctaFontSizeAtBaseline, {
      minPx: 13,
      maxPx: layout.ctaFontSizeAtBaseline,
    }),
    "--dd-pricing-cta-line-height": fluid(layout.ctaLineHeightAtBaseline, {
      minPx: 18,
      maxPx: layout.ctaLineHeightAtBaseline,
    }),
    "--dd-pricing-cta-gap": fluid(layout.ctaGapAtBaseline, {
      minPx: 6,
      maxPx: layout.ctaGapAtBaseline,
    }),
    "--dd-pricing-color-title": pricingThemeColors.title,
    "--dd-pricing-color-subtitle": pricingThemeColors.subtitle,
    "--dd-pricing-color-tab-track-bg": pricingThemeColors.tabTrackBackground,
    "--dd-pricing-color-tab-track-shadow": pricingThemeColors.tabTrackShadow,
    "--dd-pricing-color-tab-active-bg": pricingThemeColors.tabActiveBackground,
    "--dd-pricing-color-tab-active-text": pricingThemeColors.tabActiveText,
    "--dd-pricing-color-tab-inactive-text": pricingThemeColors.tabInactiveText,
    "--dd-pricing-color-surface-bg": pricingThemeColors.surfaceBackground,
    "--dd-pricing-color-surface-border": pricingThemeColors.surfaceBorder,
    "--dd-pricing-shadow-surface": pricingThemeColors.surfaceShadow,
    "--dd-pricing-color-tier-title": pricingThemeColors.tierTitle,
    "--dd-pricing-color-duration-badge-bg": pricingThemeColors.durationBadgeBackground,
    "--dd-pricing-color-duration-badge-border": pricingThemeColors.durationBadgeBorder,
    "--dd-pricing-color-duration-badge-text": pricingThemeColors.durationBadgeText,
    "--dd-pricing-color-feature-text": pricingThemeColors.featureText,
    "--dd-pricing-color-feature-check": pricingThemeColors.featureCheck,
    "--dd-pricing-price-card-bg": pricingThemeColors.priceCardBackground,
    "--dd-pricing-shadow-price-card": pricingThemeColors.priceCardShadow,
    "--dd-pricing-shadow-price-card-glow": pricingThemeColors.priceCardGlow,
    "--dd-pricing-color-investment": pricingThemeColors.investmentLabel,
    "--dd-pricing-color-price": pricingThemeColors.priceText,
    "--dd-pricing-color-price-subtitle": pricingThemeColors.priceSubtitle,
    "--dd-pricing-color-cta-bg": pricingThemeColors.ctaBackground,
    "--dd-pricing-color-cta-text": pricingThemeColors.ctaText,
    "--dd-pricing-shadow-cta": pricingThemeColors.ctaShadow,
  };
}
