export type HeroMarqueeLayoutMode = "absolute" | "flow";

export function heroMarqueeTileTransform(
  liftFactor: number,
  rotationDeg: number,
  edgeScale: number,
  layoutMode: HeroMarqueeLayoutMode,
): string {
  const rotateScale = `rotate(${rotationDeg * liftFactor}deg) scale(${edgeScale})`;
  const lift = `calc(var(--dd-hero-marquee-outer-lift-max) * ${liftFactor})`;

  if (layoutMode === "absolute") {
    return `translateY(calc(-50% - ${lift})) ${rotateScale}`;
  }

  return `translateY(calc(-1 * ${lift})) ${rotateScale}`;
}
