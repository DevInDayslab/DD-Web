import { layoutBaseline } from "@/config/layout";
import { scalabilityLetterBarInteraction } from "@/config/scalability-interaction";
import { scalabilitySectionLayout } from "@/config/scalability-section";
import { scalabilityThemeColors } from "@/config/scalability-theme";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = scalabilitySectionLayout;

function fluid(
  value: number,
  bounds?: { minPx?: number; maxPx?: number },
): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function scalabilityLayoutToCssVars(): Record<string, string> {
  return {
    "--dd-scalability-top": fluid(layout.topAtBaseline, { minPx: 480, maxPx: layout.topAtBaseline }),
    "--dd-scalability-width": fluid(layout.widthAtBaseline, { minPx: 320, maxPx: layout.widthAtBaseline }),
    "--dd-scalability-height": fluid(layout.heightAtBaseline, { minPx: 420, maxPx: layout.heightAtBaseline }),
    "--dd-scalability-inset-inline": fluid(layout.insetInlineAtBaseline, {
      minPx: 16,
      maxPx: layout.insetInlineAtBaseline,
    }),
    "--dd-scalability-eyebrow-max-width": fluid(layout.eyebrowMaxWidthAtBaseline, {
      minPx: 200,
      maxPx: layout.eyebrowMaxWidthAtBaseline,
    }),
    "--dd-scalability-eyebrow-pill-padding-y": fluid(layout.eyebrowPillPaddingYAtBaseline, {
      minPx: 4,
      maxPx: layout.eyebrowPillPaddingYAtBaseline,
    }),
    "--dd-scalability-eyebrow-pill-padding-x": fluid(layout.eyebrowPillPaddingXAtBaseline, {
      minPx: 10,
      maxPx: layout.eyebrowPillPaddingXAtBaseline,
    }),
    "--dd-scalability-eyebrow-font-size": fluid(layout.eyebrowFontSizeAtBaseline, {
      minPx: 12,
      maxPx: layout.eyebrowFontSizeAtBaseline,
    }),
    "--dd-scalability-eyebrow-line-height": fluid(layout.eyebrowLineHeightAtBaseline, {
      minPx: 12,
      maxPx: layout.eyebrowLineHeightAtBaseline,
    }),
    "--dd-scalability-eyebrow-letter-spacing": `${layout.eyebrowLetterSpacingAtBaseline}px`,
    "--dd-scalability-eyebrow-margin-bottom": fluid(layout.eyebrowMarginBottomAtBaseline, {
      minPx: 12,
      maxPx: layout.eyebrowMarginBottomAtBaseline,
    }),
    "--dd-scalability-headline-size": fluid(layout.headlineFontSizeAtBaseline, {
      minPx: 26,
      maxPx: layout.headlineFontSizeAtBaseline,
    }),
    "--dd-scalability-headline-line-height": fluid(layout.headlineLineHeightAtBaseline, {
      minPx: 36,
      maxPx: layout.headlineLineHeightAtBaseline,
    }),
    "--dd-scalability-headline-letter-spacing": `${layout.headlineLetterSpacingAtBaseline}px`,
    "--dd-scalability-headline-padding-top": fluid(layout.headlinePaddingTopAtBaseline, {
      minPx: 4,
      maxPx: layout.headlinePaddingTopAtBaseline,
    }),
    "--dd-scalability-headline-max-width": fluid(layout.headlineMaxWidthAtBaseline, {
      minPx: 280,
      maxPx: layout.headlineMaxWidthAtBaseline,
    }),
    "--dd-scalability-body-max-width": fluid(layout.bodyMaxWidthAtBaseline, {
      minPx: 300,
      maxPx: layout.bodyMaxWidthAtBaseline,
    }),
    "--dd-scalability-body-narrow-max-width": fluid(layout.bodyNarrowParagraphMaxWidthAtBaseline, {
      minPx: 280,
      maxPx: layout.bodyNarrowParagraphMaxWidthAtBaseline,
    }),
    "--dd-scalability-body-size": fluid(layout.bodyFontSizeAtBaseline, {
      minPx: 14,
      maxPx: layout.bodyFontSizeAtBaseline,
    }),
    "--dd-scalability-body-line-height": fluid(layout.bodyLineHeightAtBaseline, {
      minPx: 22,
      maxPx: layout.bodyLineHeightAtBaseline,
    }),
    "--dd-scalability-body-gap": fluid(layout.bodyGapAtBaseline, { minPx: 12, maxPx: layout.bodyGapAtBaseline }),
    "--dd-scalability-body-padding-top": fluid(layout.bodyPaddingTopAtBaseline, {
      minPx: 16,
      maxPx: layout.bodyPaddingTopAtBaseline,
    }),
    "--dd-scalability-emphasis-size": fluid(layout.emphasisFontSizeAtBaseline, {
      minPx: 16,
      maxPx: layout.emphasisFontSizeAtBaseline,
    }),
    "--dd-scalability-emphasis-line-height": fluid(layout.emphasisLineHeightAtBaseline, {
      minPx: 22,
      maxPx: layout.emphasisLineHeightAtBaseline,
    }),
    "--dd-scalability-emphasis-letter-spacing": `${layout.emphasisLetterSpacingAtBaseline}px`,
    "--dd-scalability-emphasis-padding-top": fluid(layout.emphasisPaddingTopAtBaseline, {
      minPx: 4,
      maxPx: layout.emphasisPaddingTopAtBaseline,
    }),
    "--dd-scalability-letter-bar-margin-top": fluid(layout.letterBarMarginTopAtBaseline, {
      minPx: 16,
      maxPx: layout.letterBarMarginTopAtBaseline,
    }),
    "--dd-scalability-letter-bar-width": fluid(layout.letterBarWidthAtBaseline, {
      minPx: 300,
      maxPx: layout.letterBarWidthAtBaseline,
    }),
    "--dd-scalability-letter-bar-min-width-beyond-body": fluidLength(
      layout.letterBarMinWidthBeyondBodyAtBaseline,
      referenceWidthPx,
      { minPx: 16, maxPx: layout.letterBarMinWidthBeyondBodyAtBaseline },
    ),
    "--dd-scalability-letter-bar-min-width":
      "calc(var(--dd-scalability-body-max-width) + var(--dd-scalability-letter-bar-min-width-beyond-body))",
    "--dd-scalability-letter-bar-padding-y": fluid(layout.letterBarPaddingYAtBaseline, {
      minPx: 8,
      maxPx: layout.letterBarPaddingYAtBaseline,
    }),
    "--dd-scalability-letter-bar-padding-x": fluid(layout.letterBarPaddingXAtBaseline, {
      minPx: 12,
      maxPx: layout.letterBarPaddingXAtBaseline,
    }),
    "--dd-scalability-letter-bar-gap": fluid(layout.letterBarGapAtBaseline, {
      minPx: 8,
      maxPx: layout.letterBarGapAtBaseline,
    }),
    "--dd-scalability-letter-bar-radius": fluid(layout.letterBarRadiusAtBaseline, {
      minPx: 16,
      maxPx: layout.letterBarRadiusAtBaseline,
    }),
    "--dd-scalability-letter-tile-gap": fluid(layout.letterTileGapAtBaseline, {
      minPx: 6,
      maxPx: layout.letterTileGapAtBaseline,
    }),
    "--dd-scalability-letter-tile-gap-hover": fluid(
      scalabilityLetterBarInteraction.hoverLetterTileGapAtBaseline,
      { minPx: 4, maxPx: scalabilityLetterBarInteraction.hoverLetterTileGapAtBaseline },
    ),
    "--dd-scalability-letter-tile-width": fluid(layout.letterTileWidthAtBaseline, {
      minPx: 32,
      maxPx: layout.letterTileWidthAtBaseline,
    }),
    "--dd-scalability-letter-tile-height": fluid(layout.letterTileHeightAtBaseline, {
      minPx: 36,
      maxPx: layout.letterTileHeightAtBaseline,
    }),
    "--dd-scalability-letter-tile-radius": fluid(layout.letterTileRadiusAtBaseline, {
      minPx: 8,
      maxPx: layout.letterTileRadiusAtBaseline,
    }),
    "--dd-scalability-letter-tile-border-width": `${layout.letterTileBorderWidthAtBaseline}px`,
    "--dd-scalability-letter-size": fluid(layout.letterFontSizeAtBaseline, {
      minPx: 16,
      maxPx: layout.letterFontSizeAtBaseline,
    }),
    "--dd-scalability-letter-line-height": fluid(layout.letterLineHeightAtBaseline, {
      minPx: 20,
      maxPx: layout.letterLineHeightAtBaseline,
    }),
    "--dd-scalability-letter-letter-spacing": `${layout.letterLetterSpacingAtBaseline}px`,
    "--dd-scalability-chevron-width": fluid(layout.chevronWidthAtBaseline, {
      minPx: 12,
      maxPx: layout.chevronWidthAtBaseline,
    }),
    "--dd-scalability-chevron-height": fluid(layout.chevronHeightAtBaseline, {
      minPx: 6,
      maxPx: layout.chevronHeightAtBaseline,
    }),
    "--dd-scalability-chevron-stroke-width": `${layout.chevronStrokeWidthAtBaseline}px`,
    "--dd-scalability-footer-margin-top": fluid(layout.footerMarginTopAtBaseline, {
      minPx: 20,
      maxPx: layout.footerMarginTopAtBaseline,
    }),
    "--dd-scalability-footer-max-width": fluid(layout.footerMaxWidthAtBaseline, {
      minPx: 200,
      maxPx: layout.footerMaxWidthAtBaseline,
    }),
    "--dd-scalability-footer-size": fluid(layout.footerFontSizeAtBaseline, {
      minPx: 12,
      maxPx: layout.footerFontSizeAtBaseline,
    }),
    "--dd-scalability-footer-line-height": fluid(layout.footerLineHeightAtBaseline, {
      minPx: 20,
      maxPx: layout.footerLineHeightAtBaseline,
    }),
    "--dd-scalability-footer-letter-spacing": `${layout.footerLetterSpacingAtBaseline}px`,
    "--dd-scalability-color-footer-muted": scalabilityThemeColors.footerMuted,
    "--dd-scalability-color-eyebrow-pill": scalabilityThemeColors.eyebrowPill,
    "--dd-scalability-color-letter-bar": scalabilityThemeColors.letterBar,
    "--dd-scalability-color-letter-tile-border": scalabilityThemeColors.letterTileBorder,
    "--dd-scalability-shadow-letter-tile": scalabilityThemeColors.letterTileShadow,
    "--dd-scalability-shadow-eyebrow-pill": scalabilityThemeColors.eyebrowPillShadow,
    "--dd-scalability-shadow-letter-bar": scalabilityThemeColors.letterBarShadow,
    "--dd-scalability-color-chevron": scalabilityThemeColors.chevron,
    "--dd-scalability-section-offset": `calc(var(--dd-scalability-top) - var(--dd-hero-stage-height))`,
  };
}
