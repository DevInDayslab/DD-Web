export type MarqueeEdgeFadeConfig = {
  zonePercent: number;
  minOpacity: number;
  maxOpacity: number;
  minScale: number;
  maxScale: number;
};

export type MarqueeEntryEdgePresentation = {
  opacity: number;
  scale: number;
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function lerp(min: number, max: number, t: number): number {
  return min + (max - min) * t;
}

export function marqueeEntryEdgePresentation(
  entryCenterXInViewport: number,
  viewportWidth: number,
  config: MarqueeEdgeFadeConfig,
): MarqueeEntryEdgePresentation {
  if (viewportWidth <= 0) {
    return { opacity: 1, scale: 1 };
  }

  const zoneWidth = viewportWidth * (config.zonePercent / 100);
  const distanceFromLeft = entryCenterXInViewport;
  const distanceFromRight = viewportWidth - entryCenterXInViewport;
  const edgeDistance = Math.min(distanceFromLeft, distanceFromRight);
  const edgeFactor = clamp(edgeDistance / zoneWidth, 0, 1);

  return {
    opacity: lerp(config.minOpacity, config.maxOpacity, edgeFactor),
    scale: lerp(config.minScale, config.maxScale, edgeFactor),
  };
}
