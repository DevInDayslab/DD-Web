import { layoutBaseline } from "@/config/layout";
import { toolsEdgeFeather } from "@/config/tools-edge-feather";
import { toolsSectionLayout } from "@/config/tools-section";
import { toolsThemeColors } from "@/config/tools-theme";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = toolsSectionLayout;

function fluid(
  value: number,
  bounds?: { minPx?: number; maxPx?: number },
): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function toolsSectionLayoutToCssVars(): Record<string, string> {
  const maskStart = toolsEdgeFeather.viewportMaskOpaqueStartPercent;
  const maskEnd = toolsEdgeFeather.viewportMaskOpaqueEndPercent;

  return {
    "--dd-tools-margin-top": fluid(layout.marginTopAtBaseline, {
      minPx: 64,
      maxPx: layout.marginTopAtBaseline,
    }),
    "--dd-tools-width": fluid(layout.widthAtBaseline, {
      minPx: 320,
      maxPx: layout.widthAtBaseline,
    }),
    "--dd-tools-eyebrow-max-width": fluid(layout.eyebrowMaxWidthAtBaseline, {
      minPx: 260,
      maxPx: layout.eyebrowMaxWidthAtBaseline,
    }),
    "--dd-tools-eyebrow-size": fluid(layout.eyebrowFontSizeAtBaseline, {
      minPx: 11,
      maxPx: layout.eyebrowFontSizeAtBaseline,
    }),
    "--dd-tools-eyebrow-line-height": fluid(layout.eyebrowLineHeightAtBaseline, {
      minPx: 13,
      maxPx: layout.eyebrowLineHeightAtBaseline,
    }),
    "--dd-tools-eyebrow-letter-spacing": `${layout.eyebrowLetterSpacingAtBaseline}px`,
    "--dd-tools-eyebrow-padding-bottom": fluid(layout.eyebrowPaddingBottomAtBaseline, {
      minPx: 6,
      maxPx: layout.eyebrowPaddingBottomAtBaseline,
    }),
    "--dd-tools-headline-max-width": fluid(layout.headlineMaxWidthAtBaseline, {
      minPx: 300,
      maxPx: layout.headlineMaxWidthAtBaseline,
    }),
    "--dd-tools-headline-size": fluid(layout.headlineFontSizeAtBaseline, {
      minPx: 28,
      maxPx: layout.headlineFontSizeAtBaseline,
    }),
    "--dd-tools-headline-line-height": fluid(layout.headlineLineHeightAtBaseline, {
      minPx: 34,
      maxPx: layout.headlineLineHeightAtBaseline,
    }),
    "--dd-tools-headline-letter-spacing": `${layout.headlineLetterSpacingAtBaseline}px`,
    "--dd-tools-headline-margin-top": fluid(layout.headlineMarginTopAtBaseline, {
      minPx: 8,
      maxPx: layout.headlineMarginTopAtBaseline,
    }),
    "--dd-tools-pill-inset-inline": fluid(layout.pillInsetInlineAtBaseline, {
      minPx: 16,
      maxPx: layout.pillInsetInlineAtBaseline,
    }),
    "--dd-tools-pill-height": fluid(layout.pillHeightAtBaseline, {
      minPx: 64,
      maxPx: layout.pillHeightAtBaseline,
    }),
    "--dd-tools-pill-radius": `${layout.pillRadiusAtBaseline}px`,
    "--dd-tools-pill-margin-top": fluid(layout.pillMarginTopAtBaseline, {
      minPx: 32,
      maxPx: layout.pillMarginTopAtBaseline,
    }),
    "--dd-tools-pill-item-gap": fluid(layout.pillItemGapAtBaseline, {
      minPx: 20,
      maxPx: layout.pillItemGapAtBaseline,
    }),
    "--dd-tools-pill-item-icon-gap": fluid(layout.pillItemIconGapAtBaseline, {
      minPx: 6,
      maxPx: layout.pillItemIconGapAtBaseline,
    }),
    "--dd-tools-pill-item-size": fluid(layout.pillItemFontSizeAtBaseline, {
      minPx: 12,
      maxPx: layout.pillItemFontSizeAtBaseline,
    }),
    "--dd-tools-pill-item-line-height": fluid(layout.pillItemLineHeightAtBaseline, {
      minPx: 18,
      maxPx: layout.pillItemLineHeightAtBaseline,
    }),
    "--dd-tools-pill-item-letter-spacing": `${layout.pillItemLetterSpacingAtBaseline}px`,
    "--dd-tools-pill-icon-size": fluid(layout.pillItemIconSizeAtBaseline, {
      minPx: 14,
      maxPx: layout.pillItemIconSizeAtBaseline,
    }),
    "--dd-tools-pill-separator-size": fluid(layout.pillSeparatorSizeAtBaseline, {
      minPx: 3,
      maxPx: layout.pillSeparatorSizeAtBaseline,
    }),
    "--dd-tools-pill-edge-fade-width": fluid(layout.pillEdgeFadeWidthAtBaseline, {
      minPx: 48,
      maxPx: layout.pillEdgeFadeWidthAtBaseline,
    }),
    "--dd-tools-pill-mask-fade-start": `${toolsEdgeFeather.viewportMaskFadeStartPercent}%`,
    "--dd-tools-pill-mask-opaque-start": `${maskStart}%`,
    "--dd-tools-pill-mask-opaque-end": `${maskEnd}%`,
    "--dd-tools-pill-mask-fade-end": `${toolsEdgeFeather.viewportMaskFadeEndPercent}%`,
    "--dd-tools-color-eyebrow": toolsThemeColors.eyebrow,
    "--dd-tools-color-headline": toolsThemeColors.headline,
    "--dd-tools-color-pill-bg": toolsThemeColors.pillBackground,
    "--dd-tools-shadow-pill": toolsThemeColors.pillShadow,
    "--dd-tools-color-item-text": toolsThemeColors.itemText,
    "--dd-tools-color-item-icon": toolsThemeColors.itemIcon,
    "--dd-tools-color-separator": toolsThemeColors.separator,
    "--dd-tools-color-edge-fade": toolsThemeColors.edgeFade,
  };
}

export function toolsSectionLayoutCssBlock(): string {
  const minWidthPx = toolsEdgeFeather.eyebrowNoWrapMinWidthPx;
  return `@media (min-width:${minWidthPx}px){.tools-section-eyebrow{white-space:nowrap;max-width:none;width:max-content;}}`;
}
