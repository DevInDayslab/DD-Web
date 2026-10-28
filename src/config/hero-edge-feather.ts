/** Soft fade on hero logo marquee edges (mask + per-tile presentation). */
export const heroEdgeFeather = {
  marquee: {
    viewportMaskFadeStartPercent: 0,
    /** Fully opaque band begins this far in from each horizontal edge. */
    viewportMaskOpaqueStartPercent: 15,
    viewportMaskOpaqueEndPercent: 85,
    viewportMaskFadeEndPercent: 100,
    edgeOverlayWidthAtBaseline: 172,
    edgeBlurPx: 6,
    /** Strength of the page-tint wash over tiles at the edge (0–1). */
    edgeTintStrength: 0,
    desktopMinWidthPx: 768,
    tileEdgeFade: {
      zonePercent: 15,
      minOpacity: 0.35,
      maxOpacity: 1,
      minScale: 0.88,
      maxScale: 1,
    },
  },
} as const;
