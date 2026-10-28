type FluidBounds = {
  minPx?: number;
  maxPx?: number;
};

export function fluidLength(
  valueAtBaseline: number,
  referenceWidthPx: number,
  bounds: FluidBounds = {},
): string {
  const vw = (valueAtBaseline / referenceWidthPx) * 100;
  const maxPx = bounds.maxPx ?? valueAtBaseline;
  const minPx = bounds.minPx ?? Math.max(8, Math.round(valueAtBaseline * 0.35));

  return `clamp(${minPx}px, ${vw}vw, ${maxPx}px)`;
}

export function fluidNegativeInset(
  magnitudeAtBaseline: number,
  referenceWidthPx: number,
  bounds: FluidBounds = {},
): string {
  const vw = -(magnitudeAtBaseline / referenceWidthPx) * 100;
  const minPx = bounds.minPx ?? -Math.round(magnitudeAtBaseline * 1.25);
  const maxPx = bounds.maxPx ?? -Math.round(magnitudeAtBaseline * 0.35);

  return `clamp(${minPx}px, ${vw}vw, ${maxPx}px)`;
}
