import { layoutBaseline } from "@/config/layout";
import { scalabilityPanelLayout } from "@/config/scalability-panel";
import { scalabilityThemeColors } from "@/config/scalability-theme";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = scalabilityPanelLayout;

function fluid(
  value: number,
  bounds?: { minPx?: number; maxPx?: number },
): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function scalabilityPanelLayoutToCssVars(): Record<string, string> {
  return {
    "--dd-scalability-panel-backdrop-padding-y": fluid(layout.panelBackdropPaddingYAtBaseline, {
      minPx: 32,
      maxPx: layout.panelBackdropPaddingYAtBaseline,
    }),
    "--dd-scalability-panel-width": fluid(layout.panelWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.panelWidthAtBaseline,
    }),
    "--dd-scalability-panel-min-height": fluid(layout.panelMinHeightAtBaseline, {
      minPx: 480,
      maxPx: layout.panelMinHeightAtBaseline,
    }),
    "--dd-scalability-panel-radius": fluid(layout.panelRadiusAtBaseline, {
      minPx: 16,
      maxPx: layout.panelRadiusAtBaseline,
    }),
    "--dd-scalability-panel-padding-top": fluid(layout.panelPaddingTopAtBaseline, {
      minPx: 24,
      maxPx: layout.panelPaddingTopAtBaseline,
    }),
    "--dd-scalability-panel-padding-x": fluid(layout.panelPaddingXAtBaseline, {
      minPx: 16,
      maxPx: layout.panelPaddingXAtBaseline,
    }),
    "--dd-scalability-panel-padding-bottom": fluid(layout.panelPaddingBottomAtBaseline, {
      minPx: 24,
      maxPx: layout.panelPaddingBottomAtBaseline,
    }),
    "--dd-scalability-panel-header-gap": fluid(layout.panelHeaderGapAtBaseline, {
      minPx: 8,
      maxPx: layout.panelHeaderGapAtBaseline,
    }),
    "--dd-scalability-panel-tagline-max-width": fluid(layout.panelTaglineMaxWidthAtBaseline, {
      minPx: 280,
      maxPx: layout.panelTaglineMaxWidthAtBaseline,
    }),
    "--dd-scalability-panel-tagline-size": fluid(layout.panelTaglineFontSizeAtBaseline, {
      minPx: 14,
      maxPx: layout.panelTaglineFontSizeAtBaseline,
    }),
    "--dd-scalability-panel-tagline-line-height": fluid(layout.panelTaglineLineHeightAtBaseline, {
      minPx: 18,
      maxPx: layout.panelTaglineLineHeightAtBaseline,
    }),
    "--dd-scalability-panel-tagline-nowrap-min": `${layout.panelTaglineNoWrapMinWidthPx}px`,
    "--dd-scalability-panel-tagline-margin-top": fluid(layout.panelTaglineMarginTopAtBaseline, {
      minPx: 12,
      maxPx: layout.panelTaglineMarginTopAtBaseline,
    }),
    "--dd-scalability-pillars-max-width": fluid(layout.pillarsRowMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.pillarsRowMaxWidthAtBaseline,
    }),
    "--dd-scalability-pillars-gap": fluid(layout.pillarsGapAtBaseline, {
      minPx: 16,
      maxPx: layout.pillarsGapAtBaseline,
    }),
    "--dd-scalability-pillars-margin-top": fluid(layout.pillarsMarginTopAtBaseline, {
      minPx: 24,
      maxPx: layout.pillarsMarginTopAtBaseline,
    }),
    "--dd-scalability-pillar-width": fluid(layout.pillarWidthAtBaseline, {
      minPx: 280,
      maxPx: layout.pillarWidthAtBaseline,
    }),
    "--dd-scalability-pillar-min-height": fluid(layout.pillarMinHeightAtBaseline, {
      minPx: 320,
      maxPx: layout.pillarMinHeightAtBaseline,
    }),
    "--dd-scalability-pillar-radius": fluid(layout.pillarRadiusAtBaseline, {
      minPx: 10,
      maxPx: layout.pillarRadiusAtBaseline,
    }),
    "--dd-scalability-pillar-padding-x": fluid(layout.pillarPaddingXAtBaseline, {
      minPx: 16,
      maxPx: layout.pillarPaddingXAtBaseline,
    }),
    "--dd-scalability-pillar-padding-top": fluid(layout.pillarPaddingTopAtBaseline, {
      minPx: 32,
      maxPx: layout.pillarPaddingTopAtBaseline,
    }),
    "--dd-scalability-pillar-content-max-width": fluid(layout.pillarContentMaxWidthAtBaseline, {
      minPx: 240,
      maxPx: layout.pillarContentMaxWidthAtBaseline,
    }),
    "--dd-scalability-pillar-label-size": fluid(layout.pillarLabelFontSizeAtBaseline, {
      minPx: 10,
      maxPx: layout.pillarLabelFontSizeAtBaseline,
    }),
    "--dd-scalability-pillar-label-line-height": fluid(layout.pillarLabelLineHeightAtBaseline, {
      minPx: 12,
      maxPx: layout.pillarLabelLineHeightAtBaseline,
    }),
    "--dd-scalability-pillar-label-letter-spacing": `${layout.pillarLabelLetterSpacingAtBaseline}px`,
    "--dd-scalability-pillar-title-size": fluid(layout.pillarTitleFontSizeAtBaseline, {
      minPx: 15,
      maxPx: layout.pillarTitleFontSizeAtBaseline,
    }),
    "--dd-scalability-pillar-title-line-height": fluid(layout.pillarTitleLineHeightAtBaseline, {
      minPx: 22,
      maxPx: layout.pillarTitleLineHeightAtBaseline,
    }),
    "--dd-scalability-pillar-body-size": fluid(layout.pillarBodyFontSizeAtBaseline, {
      minPx: 13,
      maxPx: layout.pillarBodyFontSizeAtBaseline,
    }),
    "--dd-scalability-pillar-body-line-height": fluid(layout.pillarBodyLineHeightAtBaseline, {
      minPx: 20,
      maxPx: layout.pillarBodyLineHeightAtBaseline,
    }),
    "--dd-scalability-panel-closing-lead-max-width": fluid(layout.closingLeadMaxWidthAtBaseline, {
      minPx: 260,
      maxPx: layout.closingLeadMaxWidthAtBaseline,
    }),
    "--dd-scalability-panel-closing-body-max-width": fluid(layout.closingBodyMaxWidthAtBaseline, {
      minPx: 280,
      maxPx: layout.closingBodyMaxWidthAtBaseline,
    }),
    "--dd-scalability-panel-closing-margin-top": fluid(layout.closingMarginTopAtBaseline, {
      minPx: 28,
      maxPx: layout.closingMarginTopAtBaseline,
    }),
    "--dd-scalability-panel-closing-lead-size": fluid(layout.closingLeadFontSizeAtBaseline, {
      minPx: 13,
      maxPx: layout.closingLeadFontSizeAtBaseline,
    }),
    "--dd-scalability-panel-closing-body-size": fluid(layout.closingBodyFontSizeAtBaseline, {
      minPx: 13,
      maxPx: layout.closingBodyFontSizeAtBaseline,
    }),
    "--dd-scalability-panel-closing-line-height": fluid(layout.closingLineHeightAtBaseline, {
      minPx: 20,
      maxPx: layout.closingLineHeightAtBaseline,
    }),
    "--dd-scalability-panel-closing-gap": fluid(layout.closingGapAtBaseline, {
      minPx: 8,
      maxPx: layout.closingGapAtBaseline,
    }),
    "--dd-scalability-color-panel-tagline": scalabilityThemeColors.panelTagline,
    "--dd-scalability-color-pillar-label": scalabilityThemeColors.pillarLabel,
    "--dd-scalability-color-panel-closing-muted": scalabilityThemeColors.panelClosingMuted,
    "--dd-scalability-color-panel-backdrop": scalabilityThemeColors.panelBackdrop,
  };
}

export function scalabilityPanelLayoutCssBlock(): string {
  const minWidthPx = layout.panelTaglineNoWrapMinWidthPx;
  return `@media (min-width:${minWidthPx}px){.scalability-panel-tagline{white-space:nowrap;width:max-content;max-width:min(100%,var(--dd-scalability-panel-tagline-max-width));}}`;
}
