/** Soft fade/blur on logo marquee edges (desktop). Blue flanks stay solid. */
export const heroEdgeFeather = {
  marquee: {
    viewportMaskFadeStartPercent: 0,
    viewportMaskOpaqueStartPercent: 12,
    viewportMaskOpaqueEndPercent: 88,
    viewportMaskFadeEndPercent: 100,
    edgeOverlayWidthAtBaseline: 172,
    edgeBlurPx: 6,
    /** Strength of the page-tint wash over tiles at the edge (0–1). */
    edgeTintStrength: 0.55,
    desktopMinWidthPx: 768,
  },
} as const;
