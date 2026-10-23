import { heroContentLayoutTokens } from "@/config/hero-content";
import { heroContours } from "@/config/hero-contours";
import { heroMarqueeLayout } from "@/config/hero-marquee";
import { heroFlanks } from "@/config/hero";
import { headerLayoutTokens, layoutBaseline } from "@/config/layout";
import { fluidLength, fluidNegativeInset } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const { panel, left } = heroFlanks;

function parseRadiusPx(value: string): number {
  return Number.parseFloat(value.replace("px", ""));
}

export function layoutToCssVars(): Record<string, string> {
  const [topLeft, topRight] = panel.borderRadius.split(" ");
  const topLeftPx = parseRadiusPx(topLeft ?? "0px");
  const topRightPx = parseRadiusPx(topRight ?? "0px");

  const flankWidth = fluidLength(panel.width, referenceWidthPx, {
    minPx: 180,
    maxPx: panel.width,
  });
  const flankHeight = fluidLength(panel.height, referenceWidthPx, {
    minPx: 320,
    maxPx: panel.height,
  });
  const flankTop = fluidLength(panel.top, referenceWidthPx, {
    minPx: 0,
    maxPx: panel.top,
  });
  const flankInsetMagnitude = Math.abs(left.inset);

  const contourRadiusVars = Object.fromEntries(
    heroContours.layers.map((layer) => [
      `--dd-hero-contour-radius-${layer.id}`,
      fluidLength(layer.radiusAtBaseline, referenceWidthPx, {
        minPx: Math.round(layer.radiusAtBaseline * 0.45),
        maxPx: layer.radiusAtBaseline,
      }),
    ]),
  );

  return {
    "--dd-header-edge-padding": fluidLength(
      headerLayoutTokens.edgePaddingAtBaseline,
      referenceWidthPx,
      { minPx: 16, maxPx: headerLayoutTokens.edgePaddingAtBaseline },
    ),
    "--dd-header-nav-cta-gap": fluidLength(
      headerLayoutTokens.navToCtaGapAtBaseline,
      referenceWidthPx,
      { minPx: 16, maxPx: headerLayoutTokens.navToCtaGapAtBaseline },
    ),
    "--dd-header-height": fluidLength(
      headerLayoutTokens.barHeightAtBaseline,
      referenceWidthPx,
      { minPx: 64, maxPx: headerLayoutTokens.barHeightAtBaseline },
    ),
    "--dd-hero-flank-width": flankWidth,
    "--dd-hero-flank-height": flankHeight,
    "--dd-hero-flank-top": flankTop,
    "--dd-hero-flank-inset": fluidNegativeInset(flankInsetMagnitude, referenceWidthPx),
    "--dd-hero-flank-blur": `${panel.blur}px`,
    "--dd-hero-flank-radius-inner": fluidLength(topRightPx, referenceWidthPx, {
      minPx: 48,
      maxPx: topRightPx,
    }),
    "--dd-hero-flank-radius-outer": fluidLength(topLeftPx, referenceWidthPx, {
      minPx: 24,
      maxPx: topLeftPx,
    }),
    "--dd-hero-stage-inset": fluidLength(
      heroContentLayoutTokens.stageInsetAtBaseline,
      referenceWidthPx,
      { minPx: 16, maxPx: heroContentLayoutTokens.stageInsetAtBaseline },
    ),
    "--dd-hero-stage-height": fluidLength(
      heroContentLayoutTokens.stageHeightAtBaseline,
      referenceWidthPx,
      { minPx: 520, maxPx: heroContentLayoutTokens.stageHeightAtBaseline },
    ),
    "--dd-hero-headline-top": fluidLength(
      heroContentLayoutTokens.headlineTopAtBaseline,
      referenceWidthPx,
      { minPx: 40, maxPx: heroContentLayoutTokens.headlineTopAtBaseline },
    ),
    "--dd-hero-headline-max-width": fluidLength(
      heroContentLayoutTokens.headlineMaxWidthAtBaseline,
      referenceWidthPx,
      { minPx: 320, maxPx: heroContentLayoutTokens.headlineMaxWidthAtBaseline },
    ),
    "--dd-hero-headline-size": fluidLength(
      heroContentLayoutTokens.headlineSizeAtBaseline,
      referenceWidthPx,
      { minPx: 36, maxPx: heroContentLayoutTokens.headlineSizeAtBaseline },
    ),
    "--dd-hero-headline-line-height": fluidLength(
      heroContentLayoutTokens.headlineLineHeightAtBaseline,
      referenceWidthPx,
      { minPx: 36, maxPx: heroContentLayoutTokens.headlineLineHeightAtBaseline },
    ),
    "--dd-hero-headline-tracking": `clamp(${heroContentLayoutTokens.headlineLetterSpacingAtBaseline}px, ${(heroContentLayoutTokens.headlineLetterSpacingAtBaseline / referenceWidthPx) * 100}vw, -0.5px)`,
    "--dd-hero-subtitle-top": fluidLength(
      heroContentLayoutTokens.subtitleTopAtBaseline,
      referenceWidthPx,
      { minPx: 140, maxPx: heroContentLayoutTokens.subtitleTopAtBaseline },
    ),
    "--dd-hero-subtitle-max-width": fluidLength(
      heroContentLayoutTokens.subtitleMaxWidthAtBaseline,
      referenceWidthPx,
      { minPx: 280, maxPx: heroContentLayoutTokens.subtitleMaxWidthAtBaseline },
    ),
    "--dd-hero-subtitle-size": fluidLength(
      heroContentLayoutTokens.subtitleSizeAtBaseline,
      referenceWidthPx,
      { minPx: 14, maxPx: heroContentLayoutTokens.subtitleSizeAtBaseline },
    ),
    "--dd-hero-subtitle-line-height": fluidLength(
      heroContentLayoutTokens.subtitleLineHeightAtBaseline,
      referenceWidthPx,
      { minPx: 22, maxPx: heroContentLayoutTokens.subtitleLineHeightAtBaseline },
    ),
    "--dd-hero-subtitle-padding-top": fluidLength(
      heroContentLayoutTokens.subtitlePaddingTopAtBaseline,
      referenceWidthPx,
      { minPx: 8, maxPx: heroContentLayoutTokens.subtitlePaddingTopAtBaseline },
    ),
    "--dd-hero-actions-top": fluidLength(
      heroContentLayoutTokens.actionsTopAtBaseline,
      referenceWidthPx,
      { minPx: 280, maxPx: heroContentLayoutTokens.actionsTopAtBaseline },
    ),
    "--dd-hero-actions-gap": fluidLength(
      heroContentLayoutTokens.actionsGapAtBaseline,
      referenceWidthPx,
      { minPx: 12, maxPx: heroContentLayoutTokens.actionsGapAtBaseline },
    ),
    "--dd-hero-actions-max-width": fluidLength(
      heroContentLayoutTokens.actionsMaxWidthAtBaseline,
      referenceWidthPx,
      { minPx: 280, maxPx: heroContentLayoutTokens.actionsMaxWidthAtBaseline },
    ),
    "--dd-hero-action-padding-y": fluidLength(
      heroContentLayoutTokens.actionPaddingYAtBaseline,
      referenceWidthPx,
      { minPx: 12, maxPx: heroContentLayoutTokens.actionPaddingYAtBaseline },
    ),
    "--dd-hero-action-padding-x": fluidLength(
      heroContentLayoutTokens.actionPaddingXAtBaseline,
      referenceWidthPx,
      { minPx: 24, maxPx: heroContentLayoutTokens.actionPaddingXAtBaseline },
    ),
    "--dd-hero-action-height": fluidLength(
      heroContentLayoutTokens.actionHeightAtBaseline,
      referenceWidthPx,
      { minPx: 40, maxPx: heroContentLayoutTokens.actionHeightAtBaseline },
    ),
    "--dd-hero-action-font-size": fluidLength(
      heroContentLayoutTokens.actionFontSizeAtBaseline,
      referenceWidthPx,
      { minPx: 12, maxPx: heroContentLayoutTokens.actionFontSizeAtBaseline },
    ),
    "--dd-hero-action-line-height": fluidLength(
      heroContentLayoutTokens.actionLineHeightAtBaseline,
      referenceWidthPx,
      { minPx: 14, maxPx: heroContentLayoutTokens.actionLineHeightAtBaseline },
    ),
    "--dd-hero-action-letter-spacing": fluidLength(
      heroContentLayoutTokens.actionLetterSpacingAtBaseline,
      referenceWidthPx,
      { minPx: 0.1, maxPx: heroContentLayoutTokens.actionLetterSpacingAtBaseline },
    ),
    "--dd-hero-contour-width": fluidLength(
      heroContours.containerWidthAtBaseline,
      referenceWidthPx,
      { minPx: 280, maxPx: heroContours.containerWidthAtBaseline },
    ),
    "--dd-hero-contour-height": fluidLength(
      heroContours.containerHeightAtBaseline,
      referenceWidthPx,
      { minPx: 200, maxPx: heroContours.containerHeightAtBaseline },
    ),
    "--dd-hero-contour-top": fluidLength(
      heroContours.containerTopAtBaseline,
      referenceWidthPx,
      { minPx: 16, maxPx: heroContours.containerTopAtBaseline },
    ),
    "--dd-hero-marquee-width": fluidLength(
      heroMarqueeLayout.outerWidthAtBaseline,
      referenceWidthPx,
      { minPx: 320, maxPx: heroMarqueeLayout.outerWidthAtBaseline },
    ),
    "--dd-hero-marquee-height": fluidLength(
      heroMarqueeLayout.outerHeightAtBaseline,
      referenceWidthPx,
      { minPx: 140, maxPx: heroMarqueeLayout.outerHeightAtBaseline },
    ),
    "--dd-hero-marquee-top": fluidLength(
      heroMarqueeLayout.topAtBaseline,
      referenceWidthPx,
      { minPx: 360, maxPx: heroMarqueeLayout.topAtBaseline },
    ),
    "--dd-hero-marquee-padding-x": fluidLength(
      heroMarqueeLayout.outerPaddingXAtBaseline,
      referenceWidthPx,
      { minPx: 12, maxPx: heroMarqueeLayout.outerPaddingXAtBaseline },
    ),
    "--dd-hero-marquee-frame-max-width": fluidLength(
      heroMarqueeLayout.frameMaxWidthAtBaseline,
      referenceWidthPx,
      { minPx: 300, maxPx: heroMarqueeLayout.frameMaxWidthAtBaseline },
    ),
    "--dd-hero-marquee-viewport-height": fluidLength(
      heroMarqueeLayout.viewportHeightAtBaseline,
      referenceWidthPx,
      { minPx: 140, maxPx: heroMarqueeLayout.viewportHeightAtBaseline },
    ),
    "--dd-hero-marquee-viewport-padding-y": fluidLength(
      heroMarqueeLayout.viewportPaddingYAtBaseline,
      referenceWidthPx,
      { minPx: 24, maxPx: heroMarqueeLayout.viewportPaddingYAtBaseline },
    ),
    "--dd-hero-marquee-segment-width": fluidLength(
      heroMarqueeLayout.segmentWidthAtBaseline,
      referenceWidthPx,
      { minPx: 280, maxPx: heroMarqueeLayout.segmentWidthAtBaseline },
    ),
    "--dd-hero-marquee-track-height": fluidLength(
      heroMarqueeLayout.trackHeightAtBaseline,
      referenceWidthPx,
      { minPx: 72, maxPx: heroMarqueeLayout.trackHeightAtBaseline },
    ),
    "--dd-hero-marquee-fade-width": fluidLength(
      heroMarqueeLayout.fadeWidthAtBaseline,
      referenceWidthPx,
      { minPx: 48, maxPx: heroMarqueeLayout.fadeWidthAtBaseline },
    ),
    "--dd-hero-marquee-tile-size-standard": fluidLength(
      heroMarqueeLayout.tileSizeStandardAtBaseline,
      referenceWidthPx,
      { minPx: 72, maxPx: heroMarqueeLayout.tileSizeStandardAtBaseline },
    ),
    "--dd-hero-marquee-tile-size-featured": fluidLength(
      heroMarqueeLayout.tileSizeFeaturedAtBaseline,
      referenceWidthPx,
      { minPx: 80, maxPx: heroMarqueeLayout.tileSizeFeaturedAtBaseline },
    ),
    "--dd-hero-marquee-tile-radius": fluidLength(
      heroMarqueeLayout.tileRadiusAtBaseline,
      referenceWidthPx,
      { minPx: 12, maxPx: heroMarqueeLayout.tileRadiusAtBaseline },
    ),
    "--dd-hero-marquee-tile-padding-standard": fluidLength(
      heroMarqueeLayout.tilePaddingStandardAtBaseline,
      referenceWidthPx,
      { minPx: 10, maxPx: heroMarqueeLayout.tilePaddingStandardAtBaseline },
    ),
    "--dd-hero-marquee-tile-padding-intelligence": fluidLength(
      heroMarqueeLayout.tilePaddingIntelligenceAtBaseline,
      referenceWidthPx,
      { minPx: 10, maxPx: heroMarqueeLayout.tilePaddingIntelligenceAtBaseline },
    ),
    "--dd-hero-marquee-image-size-standard": fluidLength(
      heroMarqueeLayout.imageSizeStandardAtBaseline,
      referenceWidthPx,
      { minPx: 52, maxPx: heroMarqueeLayout.imageSizeStandardAtBaseline },
    ),
    "--dd-hero-marquee-image-size-intelligence": fluidLength(
      heroMarqueeLayout.imageSizeIntelligenceAtBaseline,
      referenceWidthPx,
      { minPx: 48, maxPx: heroMarqueeLayout.imageSizeIntelligenceAtBaseline },
    ),
    "--dd-hero-marquee-image-size-dater": fluidLength(
      heroMarqueeLayout.imageSizeDaterAtBaseline,
      referenceWidthPx,
      { minPx: 56, maxPx: heroMarqueeLayout.imageSizeDaterAtBaseline },
    ),
    "--dd-hero-marquee-image-radius": fluidLength(
      heroMarqueeLayout.imageRadiusAtBaseline,
      referenceWidthPx,
      { minPx: 32, maxPx: heroMarqueeLayout.imageRadiusAtBaseline },
    ),
    "--dd-hero-marquee-fade-color": heroMarqueeLayout.fadeColor,
    "--dd-hero-marquee-fade-blur": `${heroMarqueeLayout.fadeBlurPx}px`,
    "--dd-hero-marquee-opacity": String(heroMarqueeLayout.outerOpacity),
    "--dd-hero-marquee-mask-opaque-start": `${heroMarqueeLayout.maskOpaqueStartPercent}%`,
    "--dd-hero-marquee-mask-opaque-end": `${heroMarqueeLayout.maskOpaqueEndPercent}%`,
    ...contourRadiusVars,
  };
}
