import { layoutBaseline } from "@/config/layout";
import { heroEdgeFeather } from "@/config/hero-edge-feather";
import { workSectionLayout } from "@/config/work-section";
import { workThemeColors } from "@/config/work-theme";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = workSectionLayout;

function fluid(
  value: number,
  bounds?: { minPx?: number; maxPx?: number },
): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function workSectionLayoutToCssVars(): Record<string, string> {
  return {
    "--dd-work-margin-top": fluid(layout.marginTopAtBaseline, {
      minPx: 64,
      maxPx: layout.marginTopAtBaseline,
    }),
    "--dd-work-width": fluid(layout.widthAtBaseline, {
      minPx: 320,
      maxPx: layout.widthAtBaseline,
    }),
    "--dd-work-header-max-width": fluid(layout.headerMaxWidthAtBaseline, {
      minPx: 280,
      maxPx: layout.headerMaxWidthAtBaseline,
    }),
    "--dd-work-header-gap": fluid(layout.headerGapAtBaseline, {
      minPx: 6,
      maxPx: layout.headerGapAtBaseline,
    }),
    "--dd-work-headline-size": fluid(layout.headlineFontSizeAtBaseline, {
      minPx: 30,
      maxPx: layout.headlineFontSizeAtBaseline,
    }),
    "--dd-work-headline-line-height": fluid(layout.headlineLineHeightAtBaseline, {
      minPx: 38,
      maxPx: layout.headlineLineHeightAtBaseline,
    }),
    "--dd-work-headline-letter-spacing": `${layout.headlineLetterSpacingAtBaseline}px`,
    "--dd-work-subtitle-size": fluid(layout.subtitleFontSizeAtBaseline, {
      minPx: 13,
      maxPx: layout.subtitleFontSizeAtBaseline,
    }),
    "--dd-work-subtitle-line-height": fluid(layout.subtitleLineHeightAtBaseline, {
      minPx: 20,
      maxPx: layout.subtitleLineHeightAtBaseline,
    }),
    "--dd-work-subtitle-max-width": fluid(layout.subtitleMaxWidthAtBaseline, {
      minPx: 280,
      maxPx: layout.subtitleMaxWidthAtBaseline,
    }),
    "--dd-work-showcase-width": fluid(layout.showcaseWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.showcaseWidthAtBaseline,
    }),
    "--dd-work-showcase-padding": fluid(layout.showcasePaddingAtBaseline, {
      minPx: 16,
      maxPx: layout.showcasePaddingAtBaseline,
    }),
    "--dd-work-showcase-gap": fluid(layout.showcaseGapAtBaseline, {
      minPx: 20,
      maxPx: layout.showcaseGapAtBaseline,
    }),
    "--dd-work-showcase-radius": fluid(layout.showcaseRadiusAtBaseline, {
      minPx: 16,
      maxPx: layout.showcaseRadiusAtBaseline,
    }),
    "--dd-work-featured-width": fluid(layout.featuredCardWidthAtBaseline, {
      minPx: 300,
      maxPx: layout.featuredCardWidthAtBaseline,
    }),
    "--dd-work-featured-min-height": fluid(layout.featuredCardMinHeightAtBaseline, {
      minPx: 360,
      maxPx: layout.featuredCardMinHeightAtBaseline,
    }),
    "--dd-work-featured-padding": fluid(layout.featuredCardPaddingAtBaseline, {
      minPx: 20,
      maxPx: layout.featuredCardPaddingAtBaseline,
    }),
    "--dd-work-featured-radius": fluid(layout.featuredCardRadiusAtBaseline, {
      minPx: 18,
      maxPx: layout.featuredCardRadiusAtBaseline,
    }),
    "--dd-work-featured-gap": fluid(layout.featuredCardGapAtBaseline, {
      minPx: 24,
      maxPx: layout.featuredCardGapAtBaseline,
    }),
    "--dd-work-featured-content-max-width": fluid(layout.featuredContentMaxWidthAtBaseline, {
      minPx: 260,
      maxPx: layout.featuredContentMaxWidthAtBaseline,
    }),
    "--dd-work-badge-size": fluid(layout.featuredBadgeFontSizeAtBaseline, {
      minPx: 12,
      maxPx: layout.featuredBadgeFontSizeAtBaseline,
    }),
    "--dd-work-badge-letter-spacing": `${layout.featuredBadgeLetterSpacingAtBaseline}px`,
    "--dd-work-featured-title-size": fluid(layout.featuredTitleFontSizeAtBaseline, {
      minPx: 28,
      maxPx: layout.featuredTitleFontSizeAtBaseline,
    }),
    "--dd-work-featured-title-line-height": fluid(layout.featuredTitleLineHeightAtBaseline, {
      minPx: 32,
      maxPx: layout.featuredTitleLineHeightAtBaseline,
    }),
    "--dd-work-featured-title-letter-spacing": `${layout.featuredTitleLetterSpacingAtBaseline}px`,
    "--dd-work-featured-body-size": fluid(layout.featuredBodyFontSizeAtBaseline, {
      minPx: 14,
      maxPx: layout.featuredBodyFontSizeAtBaseline,
    }),
    "--dd-work-featured-body-line-height": fluid(layout.featuredBodyLineHeightAtBaseline, {
      minPx: 21,
      maxPx: layout.featuredBodyLineHeightAtBaseline,
    }),
    "--dd-work-tags-gap": fluid(layout.featuredTagsGapAtBaseline, {
      minPx: 6,
      maxPx: layout.featuredTagsGapAtBaseline,
    }),
    "--dd-work-tag-size": fluid(layout.featuredTagFontSizeAtBaseline, {
      minPx: 12,
      maxPx: layout.featuredTagFontSizeAtBaseline,
    }),
    "--dd-work-tag-line-height": fluid(layout.featuredTagLineHeightAtBaseline, {
      minPx: 14,
      maxPx: layout.featuredTagLineHeightAtBaseline,
    }),
    "--dd-work-tag-padding-y": fluid(layout.featuredTagPaddingYAtBaseline, {
      minPx: 3,
      maxPx: layout.featuredTagPaddingYAtBaseline,
    }),
    "--dd-work-tag-padding-x": fluid(layout.featuredTagPaddingXAtBaseline, {
      minPx: 8,
      maxPx: layout.featuredTagPaddingXAtBaseline,
    }),
    "--dd-work-tag-radius": fluid(layout.featuredTagRadiusAtBaseline, {
      minPx: 24,
      maxPx: layout.featuredTagRadiusAtBaseline,
    }),
    "--dd-work-cta-padding-y": fluid(layout.featuredCtaPaddingYAtBaseline, {
      minPx: 12,
      maxPx: layout.featuredCtaPaddingYAtBaseline,
    }),
    "--dd-work-cta-padding-x": fluid(layout.featuredCtaPaddingXAtBaseline, {
      minPx: 18,
      maxPx: layout.featuredCtaPaddingXAtBaseline,
    }),
    "--dd-work-cta-size": fluid(layout.featuredCtaFontSizeAtBaseline, {
      minPx: 12,
      maxPx: layout.featuredCtaFontSizeAtBaseline,
    }),
    "--dd-work-cta-line-height": fluid(layout.featuredCtaLineHeightAtBaseline, {
      minPx: 16,
      maxPx: layout.featuredCtaLineHeightAtBaseline,
    }),
    "--dd-work-cta-gap": fluid(layout.featuredCtaGapAtBaseline, {
      minPx: 5,
      maxPx: layout.featuredCtaGapAtBaseline,
    }),
    "--dd-work-phone-width": fluid(layout.phoneWidthAtBaseline, {
      minPx: 140,
      maxPx: layout.phoneWidthAtBaseline,
    }),
    "--dd-work-phone-height": fluid(layout.phoneHeightAtBaseline, {
      minPx: 280,
      maxPx: layout.phoneHeightAtBaseline,
    }),
    "--dd-work-phone-radius": fluid(layout.phoneRadiusAtBaseline, {
      minPx: 18,
      maxPx: layout.phoneRadiusAtBaseline,
    }),
    "--dd-work-marquee-viewport-width": fluid(layout.marqueeViewportWidthAtBaseline, {
      minPx: 280,
      maxPx: layout.marqueeViewportWidthAtBaseline,
    }),
    "--dd-work-marquee-tile-size": fluid(layout.marqueeTileSizeAtBaseline, {
      minPx: 80,
      maxPx: layout.marqueeTileSizeAtBaseline,
    }),
    "--dd-work-marquee-tile-logo-max": fluid(layout.marqueeTileLogoMaxSizeAtBaseline, {
      minPx: 48,
      maxPx: layout.marqueeTileLogoMaxSizeAtBaseline,
    }),
    "--dd-work-marquee-viewport-mask-fade-start": `${heroEdgeFeather.marquee.viewportMaskFadeStartPercent}%`,
    "--dd-work-marquee-viewport-mask-opaque-start": `${heroEdgeFeather.marquee.viewportMaskOpaqueStartPercent}%`,
    "--dd-work-marquee-viewport-mask-opaque-end": `${heroEdgeFeather.marquee.viewportMaskOpaqueEndPercent}%`,
    "--dd-work-marquee-viewport-mask-fade-end": `${heroEdgeFeather.marquee.viewportMaskFadeEndPercent}%`,
    "--dd-work-marquee-tile-radius": fluid(layout.marqueeTileRadiusAtBaseline, {
      minPx: 12,
      maxPx: layout.marqueeTileRadiusAtBaseline,
    }),
    "--dd-work-marquee-tile-gap": fluid(layout.marqueeTileGapAtBaseline, {
      minPx: 16,
      maxPx: layout.marqueeTileGapAtBaseline,
    }),
    "--dd-work-color-headline": workThemeColors.headline,
    "--dd-work-color-subtitle": workThemeColors.subtitle,
    "--dd-work-color-badge": workThemeColors.badge,
    "--dd-work-color-featured-bg": workThemeColors.featuredCardBackground,
    "--dd-work-color-featured-border": workThemeColors.featuredCardBorder,
    "--dd-work-shadow-featured": workThemeColors.featuredCardShadow,
    "--dd-work-shadow-showcase": workThemeColors.showcaseShadow,
    "--dd-work-color-tags-divider": workThemeColors.tagsDivider,
    "--dd-work-color-tag-bg": workThemeColors.tagBackground,
    "--dd-work-color-tag-border": workThemeColors.tagBorder,
    "--dd-work-color-tag-text": workThemeColors.tagText,
    "--dd-work-color-cta-bg": workThemeColors.ctaBackground,
    "--dd-work-color-cta-text": workThemeColors.ctaText,
    "--dd-work-color-phone-bg": workThemeColors.phoneBackground,
    "--dd-work-color-marquee-tile-bg": workThemeColors.marqueeTileBackground,
    "--dd-work-color-marquee-tile-border": workThemeColors.marqueeTileBorder,
    "--dd-work-shadow-marquee-tile": workThemeColors.marqueeTileShadow,
  };
}
