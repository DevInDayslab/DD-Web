import type { HeroContourConfig, HeroContourLayer } from "@/types/hero-contour";

export function contourLayerPercents(
  layer: HeroContourLayer,
  container: Pick<HeroContourConfig, "containerWidthAtBaseline" | "containerHeightAtBaseline">,
) {
  const { containerWidthAtBaseline, containerHeightAtBaseline } = container;

  return {
    width: `${(layer.widthAtBaseline / containerWidthAtBaseline) * 100}%`,
    height: `${(layer.heightAtBaseline / containerHeightAtBaseline) * 100}%`,
    left: `${(layer.leftAtBaseline / containerWidthAtBaseline) * 100}%`,
    top: `${(layer.topAtBaseline / containerHeightAtBaseline) * 100}%`,
  };
}
