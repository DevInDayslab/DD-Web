/** Tools stack pill marquee edge mask + per-entry fade. */
export const toolsEdgeFeather = {
  viewportMaskFadeStartPercent: 0,
  viewportMaskOpaqueStartPercent: 15,
  viewportMaskOpaqueEndPercent: 85,
  viewportMaskFadeEndPercent: 100,
  entryEdgeFade: {
    zonePercent: 15,
    minOpacity: 0.35,
    maxOpacity: 1,
    minScale: 0.9,
    maxScale: 1,
  },
  eyebrowNoWrapMinWidthPx: 400,
} as const;
