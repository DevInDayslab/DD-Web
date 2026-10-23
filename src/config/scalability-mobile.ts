/** Letter bar compaction below this width — keeps SCALABILITY on one line. */
export const scalabilityMobileLayout = {
  breakpointMaxPx: 767,
  tokens: {
    letterBarPaddingXPx: 12,
    letterBarPaddingYPx: 8,
    letterBarGapPx: 8,
    letterBarMinWidthBeyondBodyPx: 0,
    letterTileWidthPx: 26,
    letterTileHeightPx: 30,
    letterTileGapPx: 5,
    letterFontSizePx: 14,
    letterLineHeightPx: 18,
    letterTileRadiusPx: 8,
    chevronWidthPx: 14,
    chevronHeightPx: 9,
    chevronStrokeWidthPx: 2.5,
  },
} as const;
