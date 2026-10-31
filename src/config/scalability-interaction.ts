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
  /** Tile gap when hovered or expanded (baseline px). Default tile gap is layout `letterTileGapAtBaseline`. */
  hoverLetterTileGapAtBaseline: 20,
  chevronRotateSpring: {
    stiffness: 420,
    damping: 26,
    mass: 0.8,
  },
  panelExpandDurationSeconds: 0.6,
  panelContentFadeSeconds: 0.2,
  panelContentStaggerSeconds: 0,
} as const;
