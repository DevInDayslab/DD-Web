import { projectQualifierLayout } from "@/config/project-qualifier";
import { projectQualifierThemeColors } from "@/config/project-qualifier-theme";
import { siteFooterBackground } from "@/config/site-footer-theme";
import { layoutBaseline } from "@/config/layout";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = projectQualifierLayout;

function fluid(value: number, bounds?: { minPx?: number; maxPx?: number }): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function projectQualifierLayoutToCssVars(): Record<string, string> {
  const backdropImage = layout.backdropImageSrc
    ? `url("${layout.backdropImageSrc}")`
    : "none";

  return {
    "--dd-qualifier-backdrop-image": backdropImage,
    "--dd-qualifier-backdrop-position": siteFooterBackground.position,
    "--dd-qualifier-backdrop-position-mobile": siteFooterBackground.positionMobile,
    "--dd-qualifier-scene-image-bleed-inline": fluid(layout.sceneImageBleedInlineAtBaseline, {
      minPx: 20,
      maxPx: layout.sceneImageBleedInlineAtBaseline,
    }),
    "--dd-qualifier-scene-strip-widen-inline": fluid(layout.sceneStripWidenInlineAtBaseline, {
      minPx: 8,
      maxPx: layout.sceneStripWidenInlineAtBaseline,
    }),
    "--dd-qualifier-card-stage-padding-inline": fluid(layout.cardStagePaddingInlineAtBaseline, {
      minPx: 8,
      maxPx: layout.cardStagePaddingInlineAtBaseline,
    }),
    "--dd-qualifier-card-stage-overlap": fluid(layout.cardStageOverlapAtBaseline, {
      minPx: 16,
      maxPx: layout.cardStageOverlapAtBaseline,
    }),
    "--dd-qualifier-scene-image-size": `${layout.sceneImageCoverWidthPercentAtBaseline}% ${layout.sceneImageCoverHeightPercentAtBaseline}%`,
    "--dd-qualifier-scene-image-position": layout.sceneImagePosition,
    "--dd-qualifier-scene-image-position-mobile": layout.sceneImagePositionMobile,
    "--dd-qualifier-shell-max-width": fluid(layout.shellMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.shellMaxWidthAtBaseline,
    }),
    "--dd-qualifier-card-max-width": fluid(layout.cardMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.cardMaxWidthAtBaseline,
    }),
    "--dd-qualifier-card-padding": fluid(layout.cardPaddingAtBaseline, {
      minPx: 24,
      maxPx: layout.cardPaddingAtBaseline,
    }),
    "--dd-qualifier-card-radius": fluid(layout.cardRadiusAtBaseline, {
      minPx: 20,
      maxPx: layout.cardRadiusAtBaseline,
    }),
    "--dd-qualifier-card-gap": fluid(layout.cardGapAtBaseline, {
      minPx: 28,
      maxPx: layout.cardGapAtBaseline,
    }),
    "--dd-qualifier-headline-size": fluid(layout.headlineSizeAtBaseline, {
      minPx: 30,
      maxPx: layout.headlineSizeAtBaseline,
    }),
    "--dd-qualifier-headline-line-height": fluid(layout.headlineLineHeightAtBaseline, {
      minPx: 34,
      maxPx: layout.headlineLineHeightAtBaseline,
    }),
    "--dd-qualifier-progress-width": fluid(layout.progressTrackWidthAtBaseline, {
      minPx: 200,
      maxPx: layout.progressTrackWidthAtBaseline,
    }),
    "--dd-qualifier-progress-height": `${layout.progressTrackHeightAtBaseline}px`,
    "--dd-qualifier-overlay-padding-inline": fluid(layout.overlayPaddingInlineAtBaseline, {
      minPx: 16,
      maxPx: layout.overlayPaddingInlineAtBaseline,
    }),
    "--dd-qualifier-overlay-padding-block": fluid(layout.overlayPaddingBlockAtBaseline, {
      minPx: 24,
      maxPx: layout.overlayPaddingBlockAtBaseline,
    }),
    "--dd-qualifier-scene-min-height": fluid(layout.sceneMinHeightAtBaseline, {
      minPx: 132,
      maxPx: layout.sceneMinHeightAtBaseline,
    }),
    "--dd-qualifier-panel-radius": fluid(layout.panelRadiusAtBaseline, {
      minPx: 20,
      maxPx: layout.panelRadiusAtBaseline,
    }),
    "--dd-qualifier-color-overlay-dim": projectQualifierThemeColors.overlayDim,
    "--dd-qualifier-overlay-blur": `${projectQualifierThemeColors.overlayBlurPx}px`,
    "--dd-qualifier-color-brand-text": projectQualifierThemeColors.brandText,
    "--dd-qualifier-color-progress-track": projectQualifierThemeColors.progressTrack,
    "--dd-qualifier-color-progress-fill": projectQualifierThemeColors.progressFill,
    "--dd-qualifier-color-card-surface": projectQualifierThemeColors.cardSurface,
    "--dd-qualifier-color-card-glow": projectQualifierThemeColors.cardGlow,
    "--dd-qualifier-color-step-badge-bg": projectQualifierThemeColors.stepBadgeBg,
    "--dd-qualifier-color-step-badge-text": projectQualifierThemeColors.stepBadgeText,
    "--dd-qualifier-color-headline": projectQualifierThemeColors.headline,
    "--dd-qualifier-color-body": projectQualifierThemeColors.body,
    "--dd-qualifier-color-input-bg": projectQualifierThemeColors.inputBg,
    "--dd-qualifier-color-input-border": projectQualifierThemeColors.inputBorder,
    "--dd-qualifier-color-input-placeholder": projectQualifierThemeColors.inputPlaceholder,
    "--dd-qualifier-color-keyboard-key-bg": projectQualifierThemeColors.keyboardKeyBg,
    "--dd-qualifier-color-keyboard-key-text": projectQualifierThemeColors.keyboardKeyText,
    "--dd-qualifier-color-cta-bg": projectQualifierThemeColors.ctaBg,
    "--dd-qualifier-color-cta-text": projectQualifierThemeColors.ctaText,
    "--dd-qualifier-color-option-border": projectQualifierThemeColors.optionBorder,
    "--dd-qualifier-color-option-border-active": projectQualifierThemeColors.optionBorderActive,
    "--dd-qualifier-color-option-bg-active": projectQualifierThemeColors.optionBgActive,
    "--dd-qualifier-color-error": projectQualifierThemeColors.error,
    "--dd-qualifier-color-slider-track": projectQualifierThemeColors.sliderTrack,
    "--dd-qualifier-color-slider-fill": projectQualifierThemeColors.sliderFill,
  };
}
