import Image from "next/image";
import { heroMarqueeShadows } from "@/config/hero-marquee";
import type { MarqueeTileEdgePresentation } from "@/lib/hero-marquee-edge-presentation";
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
  liftFactor: number;
  edgePresentation?: MarqueeTileEdgePresentation;
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

function marqueeTileTransform(
  liftFactor: number,
  rotationDeg: number,
  edgeScale: number,
  layoutMode: "absolute" | "flow",
): string {
  const rotation = rotationDeg * liftFactor;
  const rotateScale = `rotate(${rotation}deg) scale(${edgeScale})`;
  const lift = "calc(var(--dd-hero-marquee-outer-lift-max) * var(--hero-marquee-lift-factor, 0))";

  if (layoutMode === "absolute") {
    return `translateY(calc(-50% - ${lift})) ${rotateScale}`;
  }

  return `translateY(calc(-1 * ${lift})) ${rotateScale}`;
}

export function HeroLogoMarqueeTile({
  tile,
  layout,
  content,
  layoutMode,
  presentationKey,
  liftFactor,
  edgePresentation,
}: HeroLogoMarqueeTileProps) {
  const logo = content.logos[tile.logoKey];
  const shadow = heroMarqueeShadows[tile.shadow];
  const imagePx = imageSizePx(tile, layout);
  const isFlow = layoutMode === "flow";
  const edgeScale = edgePresentation?.scale ?? 1;
  const edgeOpacity = edgePresentation?.opacity ?? 1;

  const absoluteTile = !isFlow ? (tile as HeroMarqueeTileLayout) : null;
  const leftPercent =
    absoluteTile !== null
      ? (absoluteTile.leftAtBaseline / layout.segmentWidthAtBaseline) * 100
      : 0;

  const transform = marqueeTileTransform(
    liftFactor,
    tile.rotationDeg,
    edgeScale,
    layoutMode,
  );

  const tileStyle = {
    ["--hero-marquee-lift-factor" as string]: String(liftFactor),
    opacity: edgeOpacity,
    transform,
  };

  return (
    <div
      className={isFlow ? "hero-marquee-tile hero-marquee-tile--flow" : "hero-marquee-tile"}
      data-hero-marquee-tile={presentationKey}
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
