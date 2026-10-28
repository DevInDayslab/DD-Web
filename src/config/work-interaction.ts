export const workCaseStudyGenieInteraction = {
  /** Lerp factors per frame (Framer GenieCarousel defaults × speed). */
  animationSpeed: 0.6,
  openLerp: 0.08,
  closeLerp: 0.1,
  /** During open genie, real card fades in from this progress (0–1) through 1. */
  openCardRevealStartProgress: 0.6,
  closeCardSurfaceColor: "#ffffff",
  /** CSS fallback when WebGL or reduced motion is unavailable. */
  minimizeDurationSeconds: 0.42,
  expandDurationSeconds: 0.55,
  minimizeScaleX: 0.07,
  minimizeScaleY: 0.028,
  minimizeOpacity: 0.32,
  minimizeSkewYDeg: 6,
  expandSkewYDeg: -4,
  minimizeEase: [0.55, 0.06, 0.85, 0.45] as const,
  expandEase: [0.16, 1.05, 0.32, 1] as const,
} as const;
