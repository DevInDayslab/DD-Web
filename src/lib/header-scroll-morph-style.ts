import { headerScrollMorph } from "@/config/navigation";
import { layoutBaseline } from "@/config/layout";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const morph = headerScrollMorph;

function fluid(value: number, bounds?: { minPx?: number; maxPx?: number }): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function headerScrollMorphToCssVars(): Record<string, string> {
  return {
    "--dd-header-scroll-threshold": `${morph.scrollThresholdPx}px`,
    "--dd-header-scroll-range": `${morph.scrollRangePx}px`,
    "--dd-header-pill-max-width": fluid(morph.pillMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: morph.pillMaxWidthAtBaseline,
    }),
    "--dd-header-pill-inset-inline": fluid(morph.pillInsetInlineAtBaseline, {
      minPx: 12,
      maxPx: morph.pillInsetInlineAtBaseline,
    }),
    "--dd-header-pill-padding-inline": fluid(morph.pillPaddingInlineAtBaseline, {
      minPx: 14,
      maxPx: morph.pillPaddingInlineAtBaseline,
    }),
    "--dd-header-pill-top-inset": fluid(morph.pillTopInsetAtBaseline, {
      minPx: 12,
      maxPx: morph.pillTopInsetAtBaseline,
    }),
    "--dd-header-pill-bar-height": fluid(morph.pillBarHeightAtBaseline, {
      minPx: 52,
      maxPx: morph.pillBarHeightAtBaseline,
    }),
    "--dd-header-pill-nav-link-padding-block": `${morph.pillNavLinkPaddingBlockAtBaseline}px`,
    "--dd-header-pill-radius": `${morph.pillBorderRadiusAtBaseline}px`,
    "--dd-header-pill-shadow-rest": morph.pillShadowAtRest,
    "--dd-header-pill-shadow-float": morph.pillShadowAtFloat,
    "--dd-header-shell-backdrop-blur": `${morph.shellBackdropBlurPx}px`,
    "--dd-header-pill-backdrop-blur": `${morph.pillBackdropBlurPx}px`,
  };
}
