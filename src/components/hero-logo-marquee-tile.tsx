import Image from "next/image";
import { heroMarqueeShadows } from "@/config/hero-marquee";
import { heroMarqueeTileTransform } from "@/lib/hero-marquee-tile-transform";
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
  presentationKey: string;
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
  presentationKey,
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

  const tileStyle = {
    transform: heroMarqueeTileTransform(0, tile.rotationDeg, 1, layoutMode),
  };

  return (
    <div
      className={isFlow ? "hero-marquee-tile hero-marquee-tile--flow" : "hero-marquee-tile"}
      data-hero-marquee-tile={presentationKey}
      data-rotation={tile.rotationDeg}
      style={
        isFlow
          ? {
              ...tileStyle,
              width: `var(--dd-hero-marquee-tile-size-${tile.tileSize})`,
              height: `var(--dd-hero-marquee-tile-size-${tile.tileSize})`,
            }
          : {
              ...tileStyle,
              left: `${leftPercent}%`,
              top: "50%",
              width: `var(--dd-hero-marquee-tile-size-${tile.tileSize})`,
              height: `var(--dd-hero-marquee-tile-size-${tile.tileSize})`,
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
