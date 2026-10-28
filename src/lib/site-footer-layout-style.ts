import { siteFooterLayout } from "@/config/site-footer";
import {
  siteFooterBackground,
  siteFooterOverlay,
  siteFooterThemeColors,
} from "@/config/site-footer-theme";
import { layoutBaseline } from "@/config/layout";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = siteFooterLayout;
const overlay = siteFooterOverlay;

function rgba(opacity: number): string {
  return `rgba(${overlay.scrimRgb}, ${opacity})`;
}

function fluid(
  value: number,
  bounds?: { minPx?: number; maxPx?: number },
): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function siteFooterLayoutToCssVars(): Record<string, string> {
  return {
    "--dd-footer-bg-image": `url("${layout.backgroundImageSrc}")`,
    "--dd-footer-bg-position": siteFooterBackground.position,
    "--dd-footer-bg-position-mobile": siteFooterBackground.positionMobile,
    "--dd-footer-min-height": fluid(layout.minHeightAtBaseline, {
      minPx: 480,
      maxPx: layout.minHeightAtBaseline,
    }),
    "--dd-footer-min-height-mobile": fluid(layout.minHeightMobileAtBaseline, {
      minPx: 520,
      maxPx: layout.minHeightMobileAtBaseline,
    }),
    "--dd-footer-overlay-scrim": rgba(overlay.scrimOpacity),
    "--dd-footer-overlay-gradient": `linear-gradient(180deg, ${rgba(overlay.gradientTopOpacity)} 0%, ${rgba(overlay.gradientMidOpacity)} ${overlay.gradientMidStopPercent}%, ${rgba(overlay.gradientBottomOpacity)} 100%)`,
    "--dd-footer-overlay-bar-band": `linear-gradient(180deg, rgba(${overlay.scrimRgb}, 0) ${overlay.barBandStartPercent}%, ${rgba(overlay.barBandMidOpacity)} ${overlay.barBandMidStopPercent}%, ${rgba(overlay.barBandBottomOpacity)} 100%)`,
    "--dd-footer-overlay-bar-row-tint": `linear-gradient(180deg, ${rgba(overlay.barRowTintTopOpacity)} 0%, ${rgba(overlay.barRowTintBottomOpacity)} 100%)`,
    "--dd-footer-cta-max-width": fluid(layout.ctaMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.ctaMaxWidthAtBaseline,
    }),
    "--dd-footer-cta-padding-top": fluid(layout.ctaPaddingTopAtBaseline, {
      minPx: 56,
      maxPx: layout.ctaPaddingTopAtBaseline,
    }),
    "--dd-footer-cta-padding-bottom": fluid(layout.ctaPaddingBottomAtBaseline, {
      minPx: 40,
      maxPx: layout.ctaPaddingBottomAtBaseline,
    }),
    "--dd-footer-cta-padding-inline": fluid(layout.ctaPaddingInlineAtBaseline, {
      minPx: 16,
      maxPx: layout.ctaPaddingInlineAtBaseline,
    }),
    "--dd-footer-headline-size": fluid(layout.headlineFontSizeAtBaseline, {
      minPx: 36,
      maxPx: layout.headlineFontSizeAtBaseline,
    }),
    "--dd-footer-headline-line-height": fluid(layout.headlineLineHeightAtBaseline, {
      minPx: 40,
      maxPx: layout.headlineLineHeightAtBaseline,
    }),
    "--dd-footer-headline-letter-spacing": `${layout.headlineLetterSpacingAtBaseline}px`,
    "--dd-footer-subtext-margin-top": fluid(layout.subtextMarginTopAtBaseline, {
      minPx: 12,
      maxPx: layout.subtextMarginTopAtBaseline,
    }),
    "--dd-footer-subtext-size": fluid(layout.subtextFontSizeAtBaseline, {
      minPx: 15,
      maxPx: layout.subtextFontSizeAtBaseline,
    }),
    "--dd-footer-subtext-line-height": fluid(layout.subtextLineHeightAtBaseline, {
      minPx: 24,
      maxPx: layout.subtextLineHeightAtBaseline,
    }),
    "--dd-footer-cta-button-margin-top": fluid(layout.ctaButtonMarginTopAtBaseline, {
      minPx: 24,
      maxPx: layout.ctaButtonMarginTopAtBaseline,
    }),
    "--dd-footer-cta-button-padding-y": fluid(layout.ctaButtonPaddingYAtBaseline, {
      minPx: 14,
      maxPx: layout.ctaButtonPaddingYAtBaseline,
    }),
    "--dd-footer-cta-button-padding-x": fluid(layout.ctaButtonPaddingXAtBaseline, {
      minPx: 24,
      maxPx: layout.ctaButtonPaddingXAtBaseline,
    }),
    "--dd-footer-cta-button-size": fluid(layout.ctaButtonFontSizeAtBaseline, {
      minPx: 15,
      maxPx: layout.ctaButtonFontSizeAtBaseline,
    }),
    "--dd-footer-cta-button-line-height": fluid(layout.ctaButtonLineHeightAtBaseline, {
      minPx: 22,
      maxPx: layout.ctaButtonLineHeightAtBaseline,
    }),
    "--dd-footer-cta-button-gap": fluid(layout.ctaButtonGapAtBaseline, {
      minPx: 6,
      maxPx: layout.ctaButtonGapAtBaseline,
    }),
    "--dd-footer-bar-max-width": fluid(layout.barMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.barMaxWidthAtBaseline,
    }),
    "--dd-footer-bar-padding-top": fluid(layout.barPaddingTopAtBaseline, {
      minPx: 28,
      maxPx: layout.barPaddingTopAtBaseline,
    }),
    "--dd-footer-bar-padding-bottom": fluid(layout.barPaddingBottomAtBaseline, {
      minPx: 32,
      maxPx: layout.barPaddingBottomAtBaseline,
    }),
    "--dd-footer-bar-padding-inline": fluid(layout.barPaddingInlineAtBaseline, {
      minPx: 16,
      maxPx: layout.barPaddingInlineAtBaseline,
    }),
    "--dd-footer-brand-name-size": fluid(layout.brandNameFontSizeAtBaseline, {
      minPx: 15,
      maxPx: layout.brandNameFontSizeAtBaseline,
    }),
    "--dd-footer-brand-name-line-height": fluid(layout.brandNameLineHeightAtBaseline, {
      minPx: 22,
      maxPx: layout.brandNameLineHeightAtBaseline,
    }),
    "--dd-footer-brand-name-letter-spacing": `${layout.brandNameLetterSpacingAtBaseline}px`,
    "--dd-footer-brand-tagline-size": fluid(layout.brandTaglineFontSizeAtBaseline, {
      minPx: 11,
      maxPx: layout.brandTaglineFontSizeAtBaseline,
    }),
    "--dd-footer-brand-tagline-line-height": fluid(layout.brandTaglineLineHeightAtBaseline, {
      minPx: 15,
      maxPx: layout.brandTaglineLineHeightAtBaseline,
    }),
    "--dd-footer-nav-size": fluid(layout.navFontSizeAtBaseline, {
      minPx: 13,
      maxPx: layout.navFontSizeAtBaseline,
    }),
    "--dd-footer-nav-line-height": fluid(layout.navLineHeightAtBaseline, {
      minPx: 18,
      maxPx: layout.navLineHeightAtBaseline,
    }),
    "--dd-footer-nav-gap": fluid(layout.navGapAtBaseline, {
      minPx: 6,
      maxPx: layout.navGapAtBaseline,
    }),
    "--dd-footer-social-size": fluid(layout.socialFontSizeAtBaseline, {
      minPx: 11,
      maxPx: layout.socialFontSizeAtBaseline,
    }),
    "--dd-footer-social-line-height": fluid(layout.socialLineHeightAtBaseline, {
      minPx: 15,
      maxPx: layout.socialLineHeightAtBaseline,
    }),
    "--dd-footer-social-gap": fluid(layout.socialGapAtBaseline, {
      minPx: 6,
      maxPx: layout.socialGapAtBaseline,
    }),
    "--dd-footer-bar-column-gap": fluid(layout.barColumnGapAtBaseline, {
      minPx: 20,
      maxPx: layout.barColumnGapAtBaseline,
    }),
    "--dd-footer-color-headline": siteFooterThemeColors.headline,
    "--dd-footer-color-subtext": siteFooterThemeColors.subtext,
    "--dd-footer-headline-text-shadow": siteFooterThemeColors.headlineTextShadow,
    "--dd-footer-color-cta-bg": siteFooterThemeColors.ctaBackground,
    "--dd-footer-color-cta-text": siteFooterThemeColors.ctaText,
    "--dd-footer-shadow-cta": siteFooterThemeColors.ctaShadow,
    "--dd-footer-color-bar-border": siteFooterThemeColors.barBorder,
    "--dd-footer-color-brand-name": siteFooterThemeColors.brandName,
    "--dd-footer-color-brand-tagline": siteFooterThemeColors.brandTagline,
    "--dd-footer-color-nav-link": siteFooterThemeColors.navLink,
    "--dd-footer-color-nav-separator": siteFooterThemeColors.navSeparator,
    "--dd-footer-color-social-link": siteFooterThemeColors.socialLink,
    "--dd-footer-color-social-separator": siteFooterThemeColors.socialSeparator,
    "--dd-footer-color-copyright": siteFooterThemeColors.copyright,
  };
}
