function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

function smoothstep01(value: number): number {
  const t = clamp01(value);
  return t * t * (3 - 2 * t);
}

/**
 * Returns 0 in the center third and eases to 1 toward each segment edge
 * (outer third on the left and outer third on the right).
 */
export function heroMarqueeOuterLiftFactor(
  position01: number,
  outerZoneFraction: number,
): number {
  const zone = clamp01(outerZoneFraction);
  if (zone <= 0) {
    return 0;
  }

  const position = clamp01(position01);

  if (position <= zone) {
    return smoothstep01(1 - position / zone);
  }

  if (position >= 1 - zone) {
    return smoothstep01((position - (1 - zone)) / zone);
  }

  return 0;
}

export function heroMarqueeTileCenterPosition01(
  leftAtBaseline: number,
  tileSizeAtBaseline: number,
  segmentWidthAtBaseline: number,
): number {
  if (segmentWidthAtBaseline <= 0) {
    return 0.5;
  }

  const center = leftAtBaseline + tileSizeAtBaseline / 2;
  return clamp01(center / segmentWidthAtBaseline);
}
