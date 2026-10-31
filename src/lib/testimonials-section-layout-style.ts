import { layoutBaseline } from "@/config/layout";
import { testimonialsEdgeFeather } from "@/config/testimonials-edge-feather";
import { testimonialsSectionLayout } from "@/config/testimonials-section";
import { testimonialsThemeColors } from "@/config/testimonials-theme";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = testimonialsSectionLayout;

function fluid(
  value: number,
  bounds?: { minPx?: number; maxPx?: number },
): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function testimonialsSectionLayoutToCssVars(): Record<string, string> {
  return {
    "--dd-testimonials-margin-top": fluid(layout.marginTopAtBaseline, {
      minPx: 64,
      maxPx: layout.marginTopAtBaseline,
    }),
    "--dd-testimonials-width": fluid(layout.widthAtBaseline, {
      minPx: 320,
      maxPx: layout.widthAtBaseline,
    }),
    "--dd-testimonials-max-width": fluid(layout.maxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.maxWidthAtBaseline,
    }),
    "--dd-testimonials-padding-inline": fluid(layout.paddingInlineAtBaseline, {
      minPx: 16,
      maxPx: layout.paddingInlineAtBaseline,
    }),
    "--dd-testimonials-header-gap": fluid(layout.headerGapAtBaseline, {
      minPx: 40,
      maxPx: layout.headerGapAtBaseline,
    }),
    "--dd-testimonials-title-size": fluid(layout.titleFontSizeAtBaseline, {
      minPx: 26,
      maxPx: layout.titleFontSizeAtBaseline,
    }),
    "--dd-testimonials-title-line-height": fluid(layout.titleLineHeightAtBaseline, {
      minPx: 28,
      maxPx: layout.titleLineHeightAtBaseline,
    }),
    "--dd-testimonials-title-letter-spacing": `${layout.titleLetterSpacingAtBaseline}px`,
    "--dd-testimonials-carousel-gap": fluid(layout.carouselGapAtBaseline, {
      minPx: 16,
      maxPx: layout.carouselGapAtBaseline,
    }),
    "--dd-testimonials-card-width": fluid(layout.cardWidthAtBaseline, {
      minPx: 300,
      maxPx: layout.cardWidthAtBaseline,
    }),
    "--dd-testimonials-card-height": fluid(layout.cardHeightAtBaseline, {
      minPx: 400,
      maxPx: layout.cardHeightAtBaseline,
    }),
    "--dd-testimonials-card-padding": fluid(layout.cardPaddingAtBaseline, {
      minPx: 24,
      maxPx: layout.cardPaddingAtBaseline,
    }),
    "--dd-testimonials-card-video-padding": fluid(layout.cardVideoPaddingAtBaseline, {
      minPx: 22,
      maxPx: layout.cardVideoPaddingAtBaseline,
    }),
    "--dd-testimonials-card-radius": fluid(layout.cardRadiusAtBaseline, {
      minPx: 18,
      maxPx: layout.cardRadiusAtBaseline,
    }),
    "--dd-testimonials-quote-size": fluid(layout.cardQuoteSizeAtBaseline, {
      minPx: 18,
      maxPx: layout.cardQuoteSizeAtBaseline,
    }),
    "--dd-testimonials-quote-line-height": fluid(layout.cardQuoteLineHeightAtBaseline, {
      minPx: 26,
      maxPx: layout.cardQuoteLineHeightAtBaseline,
    }),
    "--dd-testimonials-quote-letter-spacing": `${layout.cardQuoteLetterSpacingAtBaseline}px`,
    "--dd-testimonials-quote-small-size": fluid(layout.cardQuoteSmallSizeAtBaseline, {
      minPx: 14,
      maxPx: layout.cardQuoteSmallSizeAtBaseline,
    }),
    "--dd-testimonials-quote-small-line-height": fluid(
      layout.cardQuoteSmallLineHeightAtBaseline,
      { minPx: 20, maxPx: layout.cardQuoteSmallLineHeightAtBaseline },
    ),
    "--dd-testimonials-quote-regular-size": fluid(layout.cardQuoteRegularSizeAtBaseline, {
      minPx: 15,
      maxPx: layout.cardQuoteRegularSizeAtBaseline,
    }),
    "--dd-testimonials-quote-regular-line-height": fluid(
      layout.cardQuoteRegularLineHeightAtBaseline,
      { minPx: 22, maxPx: layout.cardQuoteRegularLineHeightAtBaseline },
    ),
    "--dd-testimonials-mask-fade-start": `${testimonialsEdgeFeather.viewportMaskFadeStartPercent}%`,
    "--dd-testimonials-mask-opaque-start": `${testimonialsEdgeFeather.viewportMaskOpaqueStartPercent}%`,
    "--dd-testimonials-mask-opaque-end": `${testimonialsEdgeFeather.viewportMaskOpaqueEndPercent}%`,
    "--dd-testimonials-mask-fade-end": `${testimonialsEdgeFeather.viewportMaskFadeEndPercent}%`,
    "--dd-testimonials-rating-size": fluid(layout.ratingSizeAtBaseline, {
      minPx: 12,
      maxPx: layout.ratingSizeAtBaseline,
    }),
    "--dd-testimonials-avatar-size": fluid(layout.avatarSizeAtBaseline, {
      minPx: 40,
      maxPx: layout.avatarSizeAtBaseline,
    }),
    "--dd-testimonials-avatar-font-size": fluid(layout.avatarFontSizeAtBaseline, {
      minPx: 12,
      maxPx: layout.avatarFontSizeAtBaseline,
    }),
    "--dd-testimonials-name-size": fluid(layout.nameFontSizeAtBaseline, {
      minPx: 14,
      maxPx: layout.nameFontSizeAtBaseline,
    }),
    "--dd-testimonials-role-size": fluid(layout.roleFontSizeAtBaseline, {
      minPx: 12,
      maxPx: layout.roleFontSizeAtBaseline,
    }),
    "--dd-testimonials-role-line-height": fluid(layout.roleLineHeightAtBaseline, {
      minPx: 18,
      maxPx: layout.roleLineHeightAtBaseline,
    }),
    "--dd-testimonials-video-badge-size": fluid(layout.videoBadgeFontSizeAtBaseline, {
      minPx: 12,
      maxPx: layout.videoBadgeFontSizeAtBaseline,
    }),
    "--dd-testimonials-play-size": fluid(layout.playButtonSizeAtBaseline, {
      minPx: 52,
      maxPx: layout.playButtonSizeAtBaseline,
    }),
    "--dd-testimonials-color-title": testimonialsThemeColors.title,
    "--dd-testimonials-color-card-bg": testimonialsThemeColors.cardBackground,
    "--dd-testimonials-color-card-border": testimonialsThemeColors.cardBorder,
    "--dd-testimonials-shadow-card": testimonialsThemeColors.cardShadow,
    "--dd-testimonials-color-quote": testimonialsThemeColors.quote,
    "--dd-testimonials-color-star": testimonialsThemeColors.star,
    "--dd-testimonials-color-footer-border": testimonialsThemeColors.footerBorder,
    "--dd-testimonials-color-avatar-text": testimonialsThemeColors.avatarText,
    "--dd-testimonials-color-name": testimonialsThemeColors.name,
    "--dd-testimonials-color-role": testimonialsThemeColors.role,
    "--dd-testimonials-color-role-muted": testimonialsThemeColors.roleMuted,
    "--dd-testimonials-color-video-bg": testimonialsThemeColors.videoBackground,
    "--dd-testimonials-color-video-border": testimonialsThemeColors.videoBorder,
    "--dd-testimonials-shadow-video": testimonialsThemeColors.videoShadow,
    "--dd-testimonials-color-video-badge-bg": testimonialsThemeColors.videoBadgeBackground,
    "--dd-testimonials-color-video-badge-text": testimonialsThemeColors.videoBadgeText,
    "--dd-testimonials-color-video-duration": testimonialsThemeColors.videoDuration,
    "--dd-testimonials-color-video-quote": testimonialsThemeColors.videoQuote,
    "--dd-testimonials-color-video-meta-muted": testimonialsThemeColors.videoMetaMuted,
    "--dd-testimonials-color-video-meta": testimonialsThemeColors.videoMeta,
    "--dd-testimonials-color-video-footer-border": testimonialsThemeColors.videoFooterBorder,
    "--dd-testimonials-color-play-bg": testimonialsThemeColors.playButtonBackground,
    "--dd-testimonials-color-play-icon": testimonialsThemeColors.playButtonIcon,
    "--dd-testimonials-color-verified-badge-bg": testimonialsThemeColors.verifiedBadgeBackground,
    "--dd-testimonials-color-verified-badge-text": testimonialsThemeColors.verifiedBadgeText,
  };
}
