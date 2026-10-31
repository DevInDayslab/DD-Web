import { chatgptCtaSectionLayout } from "@/config/chatgpt-cta-section";
import { chatgptCtaThemeColors } from "@/config/chatgpt-cta-theme";
import { layoutBaseline } from "@/config/layout";
import { fluidLength, fluidNegativeInset } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = chatgptCtaSectionLayout;

function fluid(
  value: number,
  bounds?: { minPx?: number; maxPx?: number },
): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function chatgptCtaSectionLayoutToCssVars(): Record<string, string> {
  return {
    "--dd-chatgpt-cta-margin-top": fluid(layout.marginTopAtBaseline, {
      minPx: 64,
      maxPx: layout.marginTopAtBaseline,
    }),
    "--dd-chatgpt-cta-width": fluid(layout.widthAtBaseline, {
      minPx: 320,
      maxPx: layout.widthAtBaseline,
    }),
    "--dd-chatgpt-cta-min-height": fluid(layout.minHeightAtBaseline, {
      minPx: 0,
      maxPx: layout.minHeightAtBaseline,
    }),
    "--dd-chatgpt-cta-padding-inline": fluid(layout.paddingInlineAtBaseline, {
      minPx: 16,
      maxPx: layout.paddingInlineAtBaseline,
    }),
    "--dd-chatgpt-cta-padding": fluid(layout.paddingAtBaseline, {
      minPx: 28,
      maxPx: layout.paddingAtBaseline,
    }),
    "--dd-chatgpt-cta-inner-gap": fluid(layout.innerGapAtBaseline, {
      minPx: 24,
      maxPx: layout.innerGapAtBaseline,
    }),
    "--dd-chatgpt-cta-radius": fluid(layout.borderRadiusAtBaseline, {
      minPx: 20,
      maxPx: layout.borderRadiusAtBaseline,
    }),
    "--dd-chatgpt-cta-badge-size": fluid(layout.badgeFontSizeAtBaseline, {
      minPx: 12,
      maxPx: layout.badgeFontSizeAtBaseline,
    }),
    "--dd-chatgpt-cta-badge-letter-spacing": `${layout.badgeLetterSpacingAtBaseline}px`,
    "--dd-chatgpt-cta-badge-padding-y": fluid(layout.badgePaddingYAtBaseline, {
      minPx: 5,
      maxPx: layout.badgePaddingYAtBaseline,
    }),
    "--dd-chatgpt-cta-badge-padding-x": fluid(layout.badgePaddingXAtBaseline, {
      minPx: 12,
      maxPx: layout.badgePaddingXAtBaseline,
    }),
    "--dd-chatgpt-cta-badge-margin-bottom": fluid(layout.badgeMarginBottomAtBaseline, {
      minPx: 16,
      maxPx: layout.badgeMarginBottomAtBaseline,
    }),
    "--dd-chatgpt-cta-headline-size": fluid(layout.headlineFontSizeAtBaseline, {
      minPx: 32,
      maxPx: layout.headlineFontSizeAtBaseline,
    }),
    "--dd-chatgpt-cta-headline-line-height": fluid(layout.headlineLineHeightAtBaseline, {
      minPx: 34,
      maxPx: layout.headlineLineHeightAtBaseline,
    }),
    "--dd-chatgpt-cta-headline-max-width": fluid(layout.headlineMaxWidthAtBaseline, {
      minPx: 280,
      maxPx: layout.headlineMaxWidthAtBaseline,
    }),
    "--dd-chatgpt-cta-headline-margin-bottom": fluid(layout.headlineMarginBottomAtBaseline, {
      minPx: 24,
      maxPx: layout.headlineMarginBottomAtBaseline,
    }),
    "--dd-chatgpt-cta-cta-padding-y": fluid(layout.ctaPaddingYAtBaseline, {
      minPx: 14,
      maxPx: layout.ctaPaddingYAtBaseline,
    }),
    "--dd-chatgpt-cta-cta-padding-x": fluid(layout.ctaPaddingXAtBaseline, {
      minPx: 24,
      maxPx: layout.ctaPaddingXAtBaseline,
    }),
    "--dd-chatgpt-cta-cta-size": fluid(layout.ctaFontSizeAtBaseline, {
      minPx: 14,
      maxPx: layout.ctaFontSizeAtBaseline,
    }),
    "--dd-chatgpt-cta-cta-line-height": fluid(layout.ctaLineHeightAtBaseline, {
      minPx: 20,
      maxPx: layout.ctaLineHeightAtBaseline,
    }),
    "--dd-chatgpt-cta-cta-gap": fluid(layout.ctaGapAtBaseline, {
      minPx: 8,
      maxPx: layout.ctaGapAtBaseline,
    }),
    "--dd-chatgpt-cta-logo-size": fluid(layout.logoSizeAtBaseline, {
      minPx: 120,
      maxPx: layout.logoSizeAtBaseline,
    }),
    "--dd-chatgpt-cta-logo-top": fluidNegativeInset(layout.logoOverflowTopAtBaseline, referenceWidthPx, {
      minPx: -Math.round(layout.logoOverflowTopAtBaseline * 1.15),
      maxPx: -Math.round(layout.logoOverflowTopAtBaseline * 0.45),
    }),
    "--dd-chatgpt-cta-logo-right": fluidNegativeInset(
      layout.logoOverflowRightAtBaseline,
      referenceWidthPx,
      {
        minPx: -Math.round(layout.logoOverflowRightAtBaseline * 1.15),
        maxPx: -Math.round(layout.logoOverflowRightAtBaseline * 0.45),
      },
    ),
    "--dd-chatgpt-cta-color-title": chatgptCtaThemeColors.title,
    "--dd-chatgpt-cta-color-badge-bg": chatgptCtaThemeColors.badgeBackground,
    "--dd-chatgpt-cta-color-badge-border": chatgptCtaThemeColors.badgeBorder,
    "--dd-chatgpt-cta-color-badge-text": chatgptCtaThemeColors.badgeText,
    "--dd-chatgpt-cta-brand-gradient-start": chatgptCtaThemeColors.brandGradientStart,
    "--dd-chatgpt-cta-brand-gradient-end": chatgptCtaThemeColors.brandGradientEnd,
    "--dd-chatgpt-cta-color-cta-bg": chatgptCtaThemeColors.ctaBackground,
    "--dd-chatgpt-cta-color-cta-text": chatgptCtaThemeColors.ctaText,
    "--dd-chatgpt-cta-color-logo": chatgptCtaThemeColors.logo,
    "--dd-chatgpt-cta-card-background": chatgptCtaThemeColors.cardBackground,
    "--dd-chatgpt-cta-card-shadow": chatgptCtaThemeColors.cardShadow,
    "--dd-chatgpt-cta-card-glow-shadow": chatgptCtaThemeColors.cardGlowShadow,
    "--dd-chatgpt-cta-cta-shadow": chatgptCtaThemeColors.ctaShadow,
  };
}
