export const scalabilityLetterBarInteraction = {
  alignStaggerSeconds: 0.045,
  untiltStaggerSeconds: 0.032,
  alignSpring: {
    stiffness: 560,
    damping: 19,
    mass: 0.72,
  },
  untiltSpring: {
    stiffness: 320,
    damping: 26,
    mass: 0.88,
  },
  alignScaleKeyframes: [1, 1.14, 0.96, 1] as const,
  alignScaleTimes: [0, 0.32, 0.68, 1] as const,
  alignLiftPx: 6,
  alignMotionDurationSeconds: 0.58,
  barHoverScale: 1.012,
  barHoverSpring: {
    stiffness: 400,
    damping: 28,
  },
  chevronRotateSpring: {
    stiffness: 420,
    damping: 26,
    mass: 0.8,
  },
  panelExpandSpring: {
    stiffness: 260,
    damping: 32,
    mass: 0.95,
  },
  panelContentFadeSeconds: 0.35,
  panelContentStaggerSeconds: 0.07,
} as const;
