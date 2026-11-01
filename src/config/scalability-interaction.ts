export const scalabilityLetterBarInteraction = {
  alignStaggerSeconds: 0.035,
  untiltStaggerSeconds: 0.03,
  alignSpring: {
    stiffness: 190,
    damping: 24,
    mass: 0.9,
  },
  untiltSpring: {
    stiffness: 170,
    damping: 26,
    mass: 0.9,
  },
  /** Tile gap when hovered or expanded (baseline px). Default tile gap is layout `letterTileGapAtBaseline`. */
  hoverLetterTileGapAtBaseline: 6,
  chevronRotateSpring: {
    stiffness: 420,
    damping: 26,
    mass: 0.8,
  },
  panelExpandDurationSeconds: 0.6,
  panelContentFadeSeconds: 0.2,
  panelContentStaggerSeconds: 0,
} as const;
