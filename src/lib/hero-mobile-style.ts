import { heroMobileLayout } from "@/config/hero-mobile";

export function heroMobileLayoutCssVars(): Record<string, string> {
  const { tokens } = heroMobileLayout;

  return {
    "--dd-hero-stage-inset": `${tokens.stageInsetPx}px`,
    "--dd-hero-stage-height": `${tokens.stageHeightPx}px`,
    "--dd-hero-headline-top": `${tokens.headlineTopPx}px`,
    "--dd-hero-headline-max-width": `${tokens.headlineMaxWidthPx}px`,
    "--dd-hero-headline-size": `${tokens.headlineSizePx}px`,
    "--dd-hero-headline-line-height": `${tokens.headlineLineHeightPx}px`,
    "--dd-hero-headline-tracking": `${tokens.headlineLetterSpacingPx}px`,
    "--dd-hero-subtitle-top": `${tokens.subtitleTopPx}px`,
    "--dd-hero-subtitle-max-width": `${tokens.subtitleMaxWidthPx}px`,
    "--dd-hero-subtitle-size": `${tokens.subtitleSizePx}px`,
    "--dd-hero-subtitle-line-height": `${tokens.subtitleLineHeightPx}px`,
    "--dd-hero-subtitle-padding-top": `${tokens.subtitlePaddingTopPx}px`,
    "--dd-hero-actions-top": `${tokens.actionsTopPx}px`,
    "--dd-hero-actions-gap": `${tokens.actionsGapPx}px`,
    "--dd-hero-actions-max-width": `${tokens.actionsMaxWidthPx}px`,
    "--dd-hero-action-padding-x": `${tokens.actionPaddingXPx}px`,
    "--dd-hero-action-padding-y": `${tokens.actionPaddingYPx}px`,
    "--dd-hero-action-font-size": `${tokens.actionFontSizePx}px`,
    "--dd-hero-action-height": `${tokens.actionHeightPx}px`,
    "--dd-hero-marquee-top": `${tokens.marqueeTopPx}px`,
    "--dd-hero-marquee-nudge-up": `${tokens.marqueeVerticalNudgeUpPx}px`,
    "--dd-hero-marquee-height": `${tokens.marqueeHeightPx}px`,
    "--dd-hero-marquee-viewport-padding-y": `${tokens.marqueeViewportPaddingYPx}px`,
    "--dd-hero-marquee-viewport-bottom-bleed": `${tokens.marqueeViewportBottomBleedPx}px`,
    "--dd-hero-marquee-track-height": `${tokens.marqueeTrackHeightPx}px`,
    "--dd-hero-marquee-fade-width": `${tokens.marqueeFadeWidthPx}px`,
    "--dd-hero-marquee-mask-opaque-start": `${tokens.marqueeMaskOpaqueStartPercent}%`,
    "--dd-hero-marquee-mask-opaque-end": `${tokens.marqueeMaskOpaqueEndPercent}%`,
    "--dd-hero-marquee-tile-size-standard": `${tokens.marqueeTileSizeStandardPx}px`,
    "--dd-hero-marquee-image-size-standard": `${tokens.marqueeImageSizeStandardPx}px`,
    "--dd-hero-marquee-image-size-intelligence": `${tokens.marqueeImageSizeIntelligencePx}px`,
    "--dd-hero-marquee-mobile-gap": `${tokens.marqueeTileGapPx}px`,
    "--dd-hero-marquee-tile-padding-standard": `${tokens.marqueeTilePaddingPx}px`,
    "--dd-hero-marquee-tile-padding-intelligence": `${tokens.marqueeTilePaddingPx}px`,
    "--dd-hero-marquee-outer-lift-max": `${tokens.marqueeOuterLiftPx}px`,
    "--dd-hero-contour-width": `${tokens.contourWidthPx}px`,
    "--dd-hero-contour-height": `${tokens.contourHeightPx}px`,
    "--dd-hero-contour-top": `${tokens.contourTopPx}px`,
  };
}

export function heroMobileLayoutMediaQuery(): string {
  return `(max-width: ${heroMobileLayout.breakpointMaxPx}px)`;
}

export function heroMobileLayoutCssBlock(): string {
  const vars = Object.entries(heroMobileLayoutCssVars())
    .map(([key, value]) => `${key}:${value}`)
    .join(";");

  return `@media ${heroMobileLayoutMediaQuery()}{.hero-section{${vars}}}`;
}
