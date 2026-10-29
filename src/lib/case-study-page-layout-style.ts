import { caseStudyPageLayout } from "@/config/case-study-page";
import { caseStudyPageThemeColors } from "@/config/case-study-page-theme";
import { layoutBaseline } from "@/config/layout";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = caseStudyPageLayout;

function fluid(value: number, bounds?: { minPx?: number; maxPx?: number }): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function caseStudyPageLayoutToCssVars(): Record<string, string> {
  return {
    "--dd-case-study-page-max-width": fluid(layout.pageMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.pageMaxWidthAtBaseline,
    }),
    "--dd-case-study-section-padding-inline": fluid(layout.sectionPaddingInlineAtBaseline, {
      minPx: 20,
      maxPx: layout.sectionPaddingInlineAtBaseline,
    }),
    "--dd-case-study-hero-padding-top": fluid(layout.heroPaddingTopAtBaseline, {
      minPx: 32,
      maxPx: layout.heroPaddingTopAtBaseline,
    }),
    "--dd-case-study-hero-padding-bottom": fluid(layout.heroPaddingBottomAtBaseline, {
      minPx: 24,
      maxPx: layout.heroPaddingBottomAtBaseline,
    }),
    "--dd-case-study-intro-copy-max-width": fluid(layout.introCopyMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.introCopyMaxWidthAtBaseline,
    }),
    "--dd-case-study-intro-headline-max-width": fluid(layout.introHeadlineMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.introHeadlineMaxWidthAtBaseline,
    }),
    "--dd-case-study-intro-subhead-max-width": fluid(layout.introSubheadMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.introSubheadMaxWidthAtBaseline,
    }),
    "--dd-case-study-intro-breadcrumb-size": fluid(layout.introBreadcrumbFontSizeAtBaseline, {
      minPx: 10,
      maxPx: layout.introBreadcrumbFontSizeAtBaseline,
    }),
    "--dd-case-study-intro-headline-size": fluid(layout.introHeadlineFontSizeAtBaseline, {
      minPx: 40,
      maxPx: layout.introHeadlineFontSizeAtBaseline,
    }),
    "--dd-case-study-intro-headline-line-height": fluid(layout.introHeadlineLineHeightAtBaseline, {
      minPx: 44,
      maxPx: layout.introHeadlineLineHeightAtBaseline,
    }),
    "--dd-case-study-intro-headline-margin-top": fluid(layout.introHeadlineMarginTopAtBaseline, {
      minPx: 12,
      maxPx: layout.introHeadlineMarginTopAtBaseline,
    }),
    "--dd-case-study-intro-subhead-size": fluid(layout.introSubheadFontSizeAtBaseline, {
      minPx: 17,
      maxPx: layout.introSubheadFontSizeAtBaseline,
    }),
    "--dd-case-study-intro-subhead-line-height": fluid(layout.introSubheadLineHeightAtBaseline, {
      minPx: 28,
      maxPx: layout.introSubheadLineHeightAtBaseline,
    }),
    "--dd-case-study-intro-subhead-margin-top": fluid(layout.introSubheadMarginTopAtBaseline, {
      minPx: 16,
      maxPx: layout.introSubheadMarginTopAtBaseline,
    }),
    "--dd-case-study-intro-padding-bottom": fluid(layout.introSectionPaddingBottomAtBaseline, {
      minPx: 32,
      maxPx: layout.introSectionPaddingBottomAtBaseline,
    }),
    "--dd-case-study-hero-preview-min-height": fluid(layout.heroPreviewMinHeightAtBaseline, {
      minPx: 220,
      maxPx: layout.heroPreviewMinHeightAtBaseline,
    }),
    "--dd-case-study-brief-padding-top": fluid(layout.briefPaddingTopAtBaseline, {
      minPx: 32,
      maxPx: layout.briefPaddingTopAtBaseline,
    }),
    "--dd-case-study-brief-padding-bottom": fluid(layout.briefPaddingBottomAtBaseline, {
      minPx: 64,
      maxPx: layout.briefPaddingBottomAtBaseline,
    }),
    "--dd-case-study-brief-gap": fluid(layout.briefGapAtBaseline, {
      minPx: 32,
      maxPx: layout.briefGapAtBaseline,
    }),
    "--dd-case-study-brief-copy-max-width": fluid(layout.briefCopyMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.briefCopyMaxWidthAtBaseline,
    }),
    "--dd-case-study-brief-spec-label-size": fluid(layout.briefSpecLabelFontSizeAtBaseline, {
      minPx: 10,
      maxPx: layout.briefSpecLabelFontSizeAtBaseline,
    }),
    "--dd-case-study-brief-spec-value-size": fluid(layout.briefSpecValueFontSizeAtBaseline, {
      minPx: 13,
      maxPx: layout.briefSpecValueFontSizeAtBaseline,
    }),
    "--dd-case-study-phone-width": fluid(layout.phoneWidthAtBaseline, {
      minPx: 180,
      maxPx: layout.phoneWidthAtBaseline,
    }),
    "--dd-case-study-phone-height": fluid(layout.phoneHeightAtBaseline, {
      minPx: 280,
      maxPx: layout.phoneHeightAtBaseline,
    }),
    "--dd-case-study-phone-radius": fluid(layout.phoneRadiusAtBaseline, {
      minPx: 28,
      maxPx: layout.phoneRadiusAtBaseline,
    }),
    "--dd-case-study-phone-padding": fluid(layout.phonePaddingAtBaseline, {
      minPx: 10,
      maxPx: layout.phonePaddingAtBaseline,
    }),
    "--dd-case-study-footer-padding-block": fluid(layout.footerPaddingBlockAtBaseline, {
      minPx: 40,
      maxPx: layout.footerPaddingBlockAtBaseline,
    }),
    "--dd-case-study-footer-archive-padding-bottom": fluid(
      layout.footerArchivePaddingBottomAtBaseline,
      { minPx: 32, maxPx: layout.footerArchivePaddingBottomAtBaseline },
    ),
    "--dd-case-study-footer-nav-padding-top": fluid(layout.footerNavPaddingTopAtBaseline, {
      minPx: 24,
      maxPx: layout.footerNavPaddingTopAtBaseline,
    }),
    "--dd-case-study-footer-live-link-size": fluid(layout.footerLiveLinkFontSizeAtBaseline, {
      minPx: 20,
      maxPx: layout.footerLiveLinkFontSizeAtBaseline,
    }),
    "--dd-case-study-footer-live-link-line-height": fluid(
      layout.footerLiveLinkLineHeightAtBaseline,
      { minPx: 28, maxPx: layout.footerLiveLinkLineHeightAtBaseline },
    ),
    "--dd-case-study-footer-cta-font-size": fluid(layout.footerCtaFontSizeAtBaseline, {
      minPx: 12,
      maxPx: layout.footerCtaFontSizeAtBaseline,
    }),
    "--dd-case-study-footer-cta-line-height": fluid(layout.footerCtaLineHeightAtBaseline, {
      minPx: 18,
      maxPx: layout.footerCtaLineHeightAtBaseline,
    }),
    "--dd-case-study-footer-nav-font-size": fluid(layout.footerNavFontSizeAtBaseline, {
      minPx: 10,
      maxPx: layout.footerNavFontSizeAtBaseline,
    }),
    "--dd-case-study-color-page-bg": caseStudyPageThemeColors.pageBackground,
    "--dd-case-study-color-breadcrumb": caseStudyPageThemeColors.breadcrumb,
    "--dd-case-study-color-breadcrumb-dot": caseStudyPageThemeColors.breadcrumbDot,
    "--dd-case-study-color-headline": caseStudyPageThemeColors.headline,
    "--dd-case-study-color-subhead": caseStudyPageThemeColors.subhead,
    "--dd-case-study-color-preview-bg": caseStudyPageThemeColors.previewBackground,
    "--dd-case-study-color-preview-border": caseStudyPageThemeColors.previewBorder,
    "--dd-case-study-color-preview-placeholder": caseStudyPageThemeColors.previewPlaceholder,
    "--dd-case-study-color-brief-divider": caseStudyPageThemeColors.briefDivider,
    "--dd-case-study-color-spec-label": caseStudyPageThemeColors.specLabel,
    "--dd-case-study-color-spec-value": caseStudyPageThemeColors.specValue,
    "--dd-case-study-color-phone-shell": caseStudyPageThemeColors.phoneShell,
    "--dd-case-study-color-footer-nav-link": caseStudyPageThemeColors.footerNavLink,
    "--dd-case-study-color-footer-nav-divider": caseStudyPageThemeColors.footerNavDivider,
    "--dd-case-study-color-footer-cta-bg": caseStudyPageThemeColors.footerCtaBackground,
    "--dd-case-study-color-footer-cta-text": caseStudyPageThemeColors.footerCtaText,
  };
}
