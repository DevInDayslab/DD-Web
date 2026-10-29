import type { HeroMarqueeLayoutConfig } from "@/types/hero-marquee";

/** Viewport box height: top lift room + track + bottom shadow bleed (matches globals padding). */
export function heroMarqueeViewportOuterHeightAtBaseline(
  layout: Pick<
    HeroMarqueeLayoutConfig,
    | "viewportPaddingYAtBaseline"
    | "outerTileLiftAtBaseline"
    | "trackHeightAtBaseline"
    | "viewportBottomBleedAtBaseline"
  >,
): number {
  return (
    layout.viewportPaddingYAtBaseline +
    layout.outerTileLiftAtBaseline +
    layout.trackHeightAtBaseline +
    layout.viewportPaddingYAtBaseline +
    layout.viewportBottomBleedAtBaseline
  );
}
