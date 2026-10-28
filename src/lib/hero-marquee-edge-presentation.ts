import { heroEdgeFeather } from "@/config/hero-edge-feather";
import {
  marqueeEntryEdgePresentation,
  type MarqueeEntryEdgePresentation,
} from "@/lib/marquee-edge-presentation";

export type MarqueeTileEdgePresentation = MarqueeEntryEdgePresentation;

export function marqueeTileEdgePresentation(
  tileCenterXInViewport: number,
  viewportWidth: number,
): MarqueeTileEdgePresentation {
  return marqueeEntryEdgePresentation(
    tileCenterXInViewport,
    viewportWidth,
    heroEdgeFeather.marquee.tileEdgeFade,
  );
}
