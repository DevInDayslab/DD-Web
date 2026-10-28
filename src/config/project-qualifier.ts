import type { ProjectQualifierLayoutConfig } from "@/types/project-qualifier";

import { siteFooterLayout } from "@/config/site-footer";

/** Backdrop uses the same asset as the site footer (see `siteFooterLayout.backgroundImageSrc`). */
export const projectQualifierLayout = {
  backdropImageSrc: siteFooterLayout.backgroundImageSrc,
  shellMaxWidthAtBaseline: 700,
  cardMaxWidthAtBaseline: 620,
  cardPaddingAtBaseline: 32,
  cardRadiusAtBaseline: 24,
  cardGapAtBaseline: 28,
  headlineSizeAtBaseline: 36,
  headlineLineHeightAtBaseline: 40,
  progressTrackWidthAtBaseline: 280,
  progressTrackHeightAtBaseline: 6,
  overlayPaddingInlineAtBaseline: 16,
  overlayPaddingBlockAtBaseline: 24,
  sceneMinHeightAtBaseline: 150,
  panelRadiusAtBaseline: 24,

  // —— Scenery (full popup) vs form card ——
  cardStagePaddingInlineAtBaseline: 40,
  cardStageOverlapAtBaseline: 30,
  sceneStripWidenInlineAtBaseline: 20,

  // —— Image crop inside the full-height scenery ——
  sceneImageBleedInlineAtBaseline: 56,
  sceneImageCoverWidthPercentAtBaseline: 122,
  sceneImageCoverHeightPercentAtBaseline: 106,
  sceneImagePosition: "center 30%",
  sceneImagePositionMobile: "center 38%",
} as const satisfies ProjectQualifierLayoutConfig;

export const projectQualifierSettings = {
  enabled: true,
  totalSteps: 7,
} as const;
