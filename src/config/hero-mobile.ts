import { heroMarqueeViewportOuterHeightAtBaseline } from "@/lib/hero-marquee-viewport-height";

/**
 * Hero layout overrides applied below `breakpointMaxPx` only.
 * Desktop at 1280px baseline is unchanged (:root fluid vars).
 */
export const heroMobileLayout = {
  breakpointMaxPx: 767,
  tokens: {
    stageInsetPx: 20,
    stageHeightPx: 560,
    headlineTopPx: 104,
    headlineSizePx: 32,
    headlineLineHeightPx: 40,
    headlineLetterSpacingPx: -0.64,
    headlineMaxWidthPx: 340,
    subtitleTopPx: 216,
    subtitleMaxWidthPx: 340,
    subtitleSizePx: 15,
    subtitleLineHeightPx: 24,
    subtitlePaddingTopPx: 8,
    actionsTopPx: 316,
    actionsGapPx: 10,
    actionsMaxWidthPx: 340,
    actionPaddingXPx: 18,
    actionPaddingYPx: 12,
    actionFontSizePx: 13,
    actionHeightPx: 42,
    marqueeTopPx: 446,
    marqueeVerticalNudgeUpPx: 56,
    marqueeViewportPaddingYPx: 28,
    marqueeViewportBottomBleedPx: 32,
    marqueeTrackHeightPx: 72,
    marqueeHeightPx: heroMarqueeViewportOuterHeightAtBaseline({
      viewportPaddingYAtBaseline: 28,
      outerTileLiftAtBaseline: 22,
      trackHeightAtBaseline: 72,
      viewportBottomBleedAtBaseline: 32,
    }),
    marqueeFadeWidthPx: 56,
    marqueeMaskOpaqueStartPercent: 8,
    marqueeMaskOpaqueEndPercent: 92,
    marqueeTileSizeStandardPx: 64,
    marqueeImageSizeStandardPx: 44,
    marqueeImageSizeIntelligencePx: 40,
    marqueeTilePaddingPx: 8,
    marqueeTileGapPx: 8,
    marqueeScrollSpeedPxPerSecond: 28,
    marqueeOuterLiftPx: 22,
    contourWidthPx: 300,
    contourHeightPx: 220,
    contourTopPx: 56,
  },
} as const;
