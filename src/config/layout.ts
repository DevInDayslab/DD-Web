/**
 * Design baseline width used to derive fluid `clamp()` values.
 * Tune pixel values in section configs; spacing scales between min/max bounds.
 */
export const layoutBaseline = {
  referenceWidthPx: 1280,
} as const;

export const headerLayoutTokens = {
  edgePaddingAtBaseline: 80,
  navToCtaGapAtBaseline: 480,
  barHeightAtBaseline: 80,
} as const;
