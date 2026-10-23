import { contourLayerPercents } from "@/lib/hero-contours";
import type { HeroContourConfig } from "@/types/hero-contour";

type HeroContourLinesProps = {
  config: HeroContourConfig;
};

export function HeroContourLines({ config }: HeroContourLinesProps) {
  const { layers, opacity, strokeRgb } = config;

  return (
    <div className="hero-contours" style={{ opacity }} aria-hidden>
      {layers.map((layer) => {
        const placement = contourLayerPercents(layer, config);

        return (
          <div
            key={layer.id}
            className="hero-contour-line"
            style={{
              ...placement,
              borderRadius: `var(--dd-hero-contour-radius-${layer.id})`,
              boxShadow: `0px 0px 0px 1px rgba(${strokeRgb}, ${layer.strokeOpacity})`,
            }}
          />
        );
      })}
    </div>
  );
}
