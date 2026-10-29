/** Letter bar compaction below this width — keeps SCALABILITY on one line. */
export const scalabilityMobileLayout = {
  breakpointMaxPx: 767,
  tokens: {
    letterBarPaddingXPx: 8,    // was 12
    letterBarPaddingYPx: 8,
    letterBarGapPx: 6,         // was 10
    letterTileWidthPx: 22,     // was 24
    letterTileHeightPx: 28,    // was 30
    letterTileGapPx: 3,        // was 4
    letterTileGapHoverPx: 2,
    letterFontSizePx: 13,      // was 14
    letterLineHeightPx: 16,    // was 18
    letterTileRadiusPx: 7,     // was 8
    chevronWidthPx: 10,        // was 12
    chevronHeightPx: 5,        // was 6
    chevronStrokeWidthPx: 3,
    letterBarMinWidthBeyondBodyPx: 16,
  },
} as const;
