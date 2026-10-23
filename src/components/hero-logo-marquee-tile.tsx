import Image from "next/image";
import { heroMarqueeShadows } from "@/config/hero-marquee";
import type {
  HeroMarqueeContent,
  HeroMarqueeFlowTileLayout,
  HeroMarqueeLayoutConfig,
  HeroMarqueeTileLayout,
} from "@/types/hero-marquee";

type HeroLogoMarqueeTileProps = {
  tile: HeroMarqueeTileLayout | HeroMarqueeFlowTileLayout;
  layout: HeroMarqueeLayoutConfig;
  content: HeroMarqueeContent;
  layoutMode: "absolute" | "flow";
};

function imageSizePx(
  tile: HeroMarqueeTileLayout | HeroMarqueeFlowTileLayout,
  layout: HeroMarqueeLayoutConfig,
): number {
  switch (tile.imageSize) {
    case "intelligence":
      return layout.imageSizeIntelligenceAtBaseline;
    case "dater":
      return layout.imageSizeDaterAtBaseline;
    default:
      return layout.imageSizeStandardAtBaseline;
  }
}

export function HeroLogoMarqueeTile({
  tile,
  layout,
  content,
  layoutMode,
}: HeroLogoMarqueeTileProps) {
  const logo = content.logos[tile.logoKey];
  const shadow = heroMarqueeShadows[tile.shadow];
  const imagePx = imageSizePx(tile, layout);
  const isFlow = layoutMode === "flow";

  const absoluteTile = !isFlow ? (tile as HeroMarqueeTileLayout) : null;
  const leftPercent =
    absoluteTile !== null
      ? (absoluteTile.leftAtBaseline / layout.segmentWidthAtBaseline) * 100
      : 0;
  const offsetRatio =
    absoluteTile !== null
      ? absoluteTile.offsetYAtBaseline / layout.trackHeightAtBaseline
      : 0;

  return (
    <div
      className={isFlow ? "hero-marquee-tile hero-marquee-tile--flow" : "hero-marquee-tile"}
      style={
        isFlow
          ? {
              width: `var(--dd-hero-marquee-tile-size-${tile.tileSize})`,
              height: `var(--dd-hero-marquee-tile-size-${tile.tileSize})`,
              transform: `rotate(${tile.rotationDeg}deg)`,
            }
          : {
              left: `${leftPercent}%`,
              top: "50%",
              width: `var(--dd-hero-marquee-tile-size-${tile.tileSize})`,
              height: `var(--dd-hero-marquee-tile-size-${tile.tileSize})`,
              transform: `translateY(calc(-50% + var(--dd-hero-marquee-track-height) * ${offsetRatio})) rotate(${tile.rotationDeg}deg)`,
            }
      }
    >
      <div
        className="hero-marquee-tile-card"
        style={{
          borderColor: shadow.border,
          boxShadow: shadow.boxShadow,
          padding:
            tile.imageSize === "intelligence"
              ? "var(--dd-hero-marquee-tile-padding-intelligence)"
              : "var(--dd-hero-marquee-tile-padding-standard)",
        }}
      >
        <Image
          src={logo.src}
          alt={logo.alt}
          width={imagePx}
          height={imagePx}
          className="hero-marquee-tile-image"
          style={{
            width: `var(--dd-hero-marquee-image-size-${tile.imageSize ?? "standard"})`,
            height: `var(--dd-hero-marquee-image-size-${tile.imageSize ?? "standard"})`,
          }}
          draggable={false}
        />
      </div>
    </div>
  );
}
