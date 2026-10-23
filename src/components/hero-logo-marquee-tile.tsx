import Image from "next/image";
import { heroMarqueeShadows } from "@/config/hero-marquee";
import type {
  HeroMarqueeContent,
  HeroMarqueeLayoutConfig,
  HeroMarqueeTileLayout,
} from "@/types/hero-marquee";

type HeroLogoMarqueeTileProps = {
  tile: HeroMarqueeTileLayout;
  layout: HeroMarqueeLayoutConfig;
  content: HeroMarqueeContent;
};

function imageSizePx(
  tile: HeroMarqueeTileLayout,
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

export function HeroLogoMarqueeTile({ tile, layout, content }: HeroLogoMarqueeTileProps) {
  const logo = content.logos[tile.logoKey];
  const shadow = heroMarqueeShadows[tile.shadow];
  const imagePx = imageSizePx(tile, layout);
  const leftPercent = (tile.leftAtBaseline / layout.segmentWidthAtBaseline) * 100;
  const offsetRatio = tile.offsetYAtBaseline / layout.trackHeightAtBaseline;

  return (
    <div
      className="hero-marquee-tile"
      style={{
        left: `${leftPercent}%`,
        top: "50%",
        width: `var(--dd-hero-marquee-tile-size-${tile.tileSize})`,
        height: `var(--dd-hero-marquee-tile-size-${tile.tileSize})`,
        transform: `translateY(calc(-50% + var(--dd-hero-marquee-track-height) * ${offsetRatio})) rotate(${tile.rotationDeg}deg)`,
      }}
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
