import { caseStudyNarrativeLayout } from "@/config/case-study-narrative";
import { caseStudyNarrativeInteraction } from "@/config/case-study-narrative";
import { caseStudyNarrativeThemeColors } from "@/config/case-study-narrative-theme";
import { layoutBaseline } from "@/config/layout";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = caseStudyNarrativeLayout;
const interaction = caseStudyNarrativeInteraction;

function fluid(value: number, bounds?: { minPx?: number; maxPx?: number }): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function caseStudyNarrativeLayoutToCssVars(): Record<string, string> {
  return {
    "--dd-case-study-narrative-max-width": fluid(layout.narrativeMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.narrativeMaxWidthAtBaseline,
    }),
    "--dd-case-study-narrative-prose-max-width": fluid(layout.narrativeProseMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.narrativeProseMaxWidthAtBaseline,
    }),
    "--dd-case-study-narrative-editorial-max-width": fluid(
      layout.narrativeEditorialMaxWidthAtBaseline,
      { minPx: 320, maxPx: layout.narrativeEditorialMaxWidthAtBaseline },
    ),
    "--dd-case-study-narrative-editorial-gap": fluid(layout.narrativeEditorialGapAtBaseline, {
      minPx: 24,
      maxPx: layout.narrativeEditorialGapAtBaseline,
    }),
    "--dd-case-study-narrative-editorial-headline-size": fluid(
      layout.narrativeEditorialHeadlineSizeAtBaseline,
      { minPx: 32, maxPx: layout.narrativeEditorialHeadlineSizeAtBaseline },
    ),
    "--dd-case-study-narrative-editorial-headline-line-height": fluid(
      layout.narrativeEditorialHeadlineLineHeightAtBaseline,
      { minPx: 40, maxPx: layout.narrativeEditorialHeadlineLineHeightAtBaseline },
    ),
    "--dd-case-study-narrative-editorial-body-size": fluid(
      layout.narrativeEditorialBodySizeAtBaseline,
      { minPx: 16, maxPx: layout.narrativeEditorialBodySizeAtBaseline },
    ),
    "--dd-case-study-narrative-editorial-body-line-height": fluid(
      layout.narrativeEditorialBodyLineHeightAtBaseline,
      { minPx: 28, maxPx: layout.narrativeEditorialBodyLineHeightAtBaseline },
    ),
    "--dd-case-study-narrative-editorial-quote-size": fluid(
      layout.narrativeEditorialQuoteSizeAtBaseline,
      { minPx: 28, maxPx: layout.narrativeEditorialQuoteSizeAtBaseline },
    ),
    "--dd-case-study-narrative-editorial-quote-max-width": fluid(
      layout.narrativeEditorialQuoteMaxWidthAtBaseline,
      { minPx: 320, maxPx: layout.narrativeEditorialQuoteMaxWidthAtBaseline },
    ),
    "--dd-case-study-narrative-reduction-card-min-height": fluid(
      layout.narrativeReductionCardHeightAtBaseline,
      { minPx: 360, maxPx: layout.narrativeReductionCardHeightAtBaseline },
    ),
    "--dd-case-study-narrative-section-padding": fluid(
      layout.narrativeSectionPaddingBlockAtBaseline,
      { minPx: 56, maxPx: layout.narrativeSectionPaddingBlockAtBaseline },
    ),
    "--dd-case-study-narrative-index-size": fluid(layout.narrativeIndexFontSizeAtBaseline, {
      minPx: 10,
      maxPx: layout.narrativeIndexFontSizeAtBaseline,
    }),
    "--dd-case-study-narrative-headline-size": fluid(layout.narrativeHeadlineFontSizeAtBaseline, {
      minPx: 32,
      maxPx: layout.narrativeHeadlineFontSizeAtBaseline,
    }),
    "--dd-case-study-narrative-headline-line-height": fluid(
      layout.narrativeHeadlineLineHeightAtBaseline,
      { minPx: 36, maxPx: layout.narrativeHeadlineLineHeightAtBaseline },
    ),
    "--dd-case-study-narrative-body-size": fluid(layout.narrativeBodyFontSizeAtBaseline, {
      minPx: 17,
      maxPx: layout.narrativeBodyFontSizeAtBaseline,
    }),
    "--dd-case-study-narrative-body-line-height": fluid(
      layout.narrativeBodyLineHeightAtBaseline,
      { minPx: 28, maxPx: layout.narrativeBodyLineHeightAtBaseline },
    ),
    "--dd-case-study-narrative-quote-size": fluid(layout.narrativeQuoteFontSizeAtBaseline, {
      minPx: 24,
      maxPx: layout.narrativeQuoteFontSizeAtBaseline,
    }),
    "--dd-case-study-narrative-card-radius": fluid(layout.narrativeCardRadiusAtBaseline, {
      minPx: 3,
      maxPx: layout.narrativeCardRadiusAtBaseline,
    }),
    "--dd-case-study-narrative-pipeline-gap": fluid(layout.narrativePipelineGapAtBaseline, {
      minPx: 12,
      maxPx: layout.narrativePipelineGapAtBaseline,
    }),
    "--dd-case-study-narrative-reveal-y": fluid(layout.revealOffsetYAtBaseline, {
      minPx: 16,
      maxPx: layout.revealOffsetYAtBaseline,
    }),
    "--dd-case-study-narrative-card-hover-lift": `${interaction.cardHoverLiftPx}px`,
    "--dd-case-study-narrative-reveal-duration": `${interaction.revealDurationMs}ms`,
    "--dd-case-study-narrative-reveal-stagger": `${interaction.revealStaggerMs}ms`,
    "--dd-case-study-platform-section-max-width": fluid(layout.platformSectionMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.platformSectionMaxWidthAtBaseline,
    }),
    "--dd-case-study-platform-section-padding-block": fluid(
      layout.platformSectionPaddingBlockAtBaseline,
      { minPx: 56, maxPx: layout.platformSectionPaddingBlockAtBaseline },
    ),
    "--dd-case-study-platform-section-padding-inline": fluid(
      layout.platformSectionPaddingInlineAtBaseline,
      { minPx: 20, maxPx: layout.platformSectionPaddingInlineAtBaseline },
    ),
    "--dd-case-study-platform-section-stack-gap": fluid(layout.platformSectionStackGapAtBaseline, {
      minPx: 48,
      maxPx: layout.platformSectionStackGapAtBaseline,
    }),
    "--dd-case-study-platform-copy-max-width": fluid(layout.platformCopyMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.platformCopyMaxWidthAtBaseline,
    }),
    "--dd-case-study-platform-headline-size": fluid(layout.platformHeadlineSizeAtBaseline, {
      minPx: 32,
      maxPx: layout.platformHeadlineSizeAtBaseline,
    }),
    "--dd-case-study-platform-headline-line-height": fluid(
      layout.platformHeadlineLineHeightAtBaseline,
      { minPx: 40, maxPx: layout.platformHeadlineLineHeightAtBaseline },
    ),
    "--dd-case-study-platform-body-size": fluid(layout.platformBodySizeAtBaseline, {
      minPx: 16,
      maxPx: layout.platformBodySizeAtBaseline,
    }),
    "--dd-case-study-platform-body-line-height": fluid(layout.platformBodyLineHeightAtBaseline, {
      minPx: 26,
      maxPx: layout.platformBodyLineHeightAtBaseline,
    }),
    "--dd-case-study-platform-matrix-body-size": fluid(
      layout.platformMatrixBodySizeAtBaseline,
      { minPx: 13, maxPx: layout.platformMatrixBodySizeAtBaseline },
    ),
    "--dd-case-study-platform-matrix-body-line-height": fluid(
      layout.platformMatrixBodyLineHeightAtBaseline,
      { minPx: 21, maxPx: layout.platformMatrixBodyLineHeightAtBaseline },
    ),
    "--dd-case-study-platform-matrix-gap": fluid(layout.platformMatrixGapAtBaseline, {
      minPx: 16,
      maxPx: layout.platformMatrixGapAtBaseline,
    }),
    "--dd-case-study-diagram-panel-padding": fluid(layout.diagramPanelPaddingAtBaseline, {
      minPx: 16,
      maxPx: layout.diagramPanelPaddingAtBaseline,
    }),
    "--dd-case-study-matchmaking-chapter-padding": fluid(
      layout.matchmakingChapterPaddingBlockAtBaseline,
      { minPx: 56, maxPx: layout.matchmakingChapterPaddingBlockAtBaseline },
    ),
    "--dd-case-study-matchmaking-chapter-column-max-width": fluid(
      layout.matchmakingChapterColumnMaxWidthAtBaseline,
      { minPx: 320, maxPx: layout.matchmakingChapterColumnMaxWidthAtBaseline },
    ),
    "--dd-case-study-matchmaking-chapter-stack-gap": fluid(
      layout.matchmakingChapterStackGapAtBaseline,
      { minPx: 24, maxPx: layout.matchmakingChapterStackGapAtBaseline },
    ),
    "--dd-case-study-matchmaking-intro-headline-offset": fluid(
      layout.matchmakingIntroHeadlineOffsetAtBaseline,
      { minPx: 12, maxPx: layout.matchmakingIntroHeadlineOffsetAtBaseline },
    ),
    "--dd-case-study-matchmaking-prose-gap": fluid(layout.matchmakingProseGapAtBaseline, {
      minPx: 16,
      maxPx: layout.matchmakingProseGapAtBaseline,
    }),
    "--dd-case-study-matchmaking-pipeline-section-padding-top": fluid(
      layout.matchmakingPipelineSectionPaddingTopAtBaseline,
      { minPx: 24, maxPx: layout.matchmakingPipelineSectionPaddingTopAtBaseline },
    ),
    "--dd-case-study-matchmaking-pipeline-stack-gap": fluid(
      layout.matchmakingPipelineStackGapAtBaseline,
      { minPx: 10, maxPx: layout.matchmakingPipelineStackGapAtBaseline },
    ),
    "--dd-case-study-matchmaking-pipeline-grid-min-width": `${layout.matchmakingPipelineGridMinWidthAtBaseline / 16}rem`,
    "--dd-case-study-tech-strip-padding-block": fluid(layout.techStripPaddingBlockAtBaseline, {
      minPx: 12,
      maxPx: layout.techStripPaddingBlockAtBaseline,
    }),
    "--dd-case-study-tech-strip-padding-inline": fluid(
      layout.techStripPaddingInlineAtBaseline,
      { minPx: 20, maxPx: layout.techStripPaddingInlineAtBaseline },
    ),
    "--dd-case-study-tech-strip-max-width": fluid(layout.techStripMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.techStripMaxWidthAtBaseline,
    }),
    "--dd-case-study-tech-strip-item-gap": fluid(layout.techStripItemGapAtBaseline, {
      minPx: 12,
      maxPx: layout.techStripItemGapAtBaseline,
    }),
    "--dd-case-study-tech-strip-row-gap": fluid(layout.techStripRowGapAtBaseline, {
      minPx: 12,
      maxPx: layout.techStripRowGapAtBaseline,
    }),
    "--dd-case-study-matchmaking-pipeline-gap": fluid(
      layout.matchmakingPipelineGridGapAtBaseline,
      { minPx: 10, maxPx: layout.matchmakingPipelineGridGapAtBaseline },
    ),
    "--dd-case-study-launch-section-max-width": fluid(layout.launchSectionMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.launchSectionMaxWidthAtBaseline,
    }),
    "--dd-case-study-launch-section-padding-block": fluid(
      layout.launchSectionPaddingBlockAtBaseline,
      { minPx: 48, maxPx: layout.launchSectionPaddingBlockAtBaseline },
    ),
    "--dd-case-study-launch-section-padding-inline": fluid(
      layout.launchSectionPaddingInlineAtBaseline,
      { minPx: 20, maxPx: layout.launchSectionPaddingInlineAtBaseline },
    ),
    "--dd-case-study-launch-section-stack-gap": fluid(layout.launchSectionStackGapAtBaseline, {
      minPx: 40,
      maxPx: layout.launchSectionStackGapAtBaseline,
    }),
    "--dd-case-study-launch-hero-max-width": fluid(layout.launchHeroMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.launchHeroMaxWidthAtBaseline,
    }),
    "--dd-case-study-launch-headline-size": fluid(layout.launchHeadlineSizeAtBaseline, {
      minPx: 36,
      maxPx: layout.launchHeadlineSizeAtBaseline,
    }),
    "--dd-case-study-launch-headline-line-height": fluid(
      layout.launchHeadlineLineHeightAtBaseline,
      { minPx: 44, maxPx: layout.launchHeadlineLineHeightAtBaseline },
    ),
    "--dd-case-study-launch-subhead-size": fluid(layout.launchSubheadSizeAtBaseline, {
      minPx: 18,
      maxPx: layout.launchSubheadSizeAtBaseline,
    }),
    "--dd-case-study-launch-subhead-line-height": fluid(
      layout.launchSubheadLineHeightAtBaseline,
      { minPx: 22, maxPx: layout.launchSubheadLineHeightAtBaseline },
    ),
    "--dd-case-study-launch-subhead-max-width": fluid(layout.launchSubheadMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.launchSubheadMaxWidthAtBaseline,
    }),
    "--dd-case-study-launch-store-badge-gap": fluid(layout.launchStoreBadgeGapAtBaseline, {
      minPx: 12,
      maxPx: layout.launchStoreBadgeGapAtBaseline,
    }),
    "--dd-case-study-launch-viewports-max-width": fluid(
      layout.launchViewportsMaxWidthAtBaseline,
      { minPx: 320, maxPx: layout.launchViewportsMaxWidthAtBaseline },
    ),
    "--dd-case-study-launch-viewport-gap": fluid(layout.launchViewportGapAtBaseline, {
      minPx: 16,
      maxPx: layout.launchViewportGapAtBaseline,
    }),
    "--dd-case-study-launch-viewport-inner-min-height": fluid(
      layout.launchViewportInnerMinHeightAtBaseline,
      { minPx: 280, maxPx: layout.launchViewportInnerMinHeightAtBaseline },
    ),
    "--dd-case-study-narrative-accent-surface": caseStudyNarrativeThemeColors.accentSurface,
    "--dd-case-study-narrative-page-surface": caseStudyNarrativeThemeColors.pageSurface,
    "--dd-case-study-narrative-surface-white": caseStudyNarrativeThemeColors.surfaceWhite,
    "--dd-case-study-narrative-diagram-panel-bg": caseStudyNarrativeThemeColors.diagramPanelBackground,
    "--dd-case-study-narrative-color-index": caseStudyNarrativeThemeColors.index,
    "--dd-case-study-narrative-color-headline": caseStudyNarrativeThemeColors.headline,
    "--dd-case-study-narrative-color-body": caseStudyNarrativeThemeColors.body,
    "--dd-case-study-narrative-color-editorial-body": caseStudyNarrativeThemeColors.editorialBody,
    "--dd-case-study-narrative-color-alert": caseStudyNarrativeThemeColors.alert,
    "--dd-case-study-narrative-color-alert-muted": caseStudyNarrativeThemeColors.alertMuted,
    "--dd-case-study-narrative-color-alert-surface": caseStudyNarrativeThemeColors.alertSurface,
    "--dd-case-study-narrative-color-wireframe-line": caseStudyNarrativeThemeColors.wireframeLine,
    "--dd-case-study-narrative-color-divider": caseStudyNarrativeThemeColors.divider,
    "--dd-case-study-narrative-color-card-bg": caseStudyNarrativeThemeColors.cardBackground,
    "--dd-case-study-narrative-color-card-muted": caseStudyNarrativeThemeColors.cardBackgroundMuted,
    "--dd-case-study-narrative-color-card-border": caseStudyNarrativeThemeColors.cardBorder,
    "--dd-case-study-narrative-color-quote": caseStudyNarrativeThemeColors.quote,
    "--dd-case-study-narrative-color-quote-attribution": caseStudyNarrativeThemeColors.quoteAttribution,
    "--dd-case-study-narrative-color-user-accent": caseStudyNarrativeThemeColors.userAccent,
    "--dd-case-study-narrative-color-highlight": caseStudyNarrativeThemeColors.highlightAccent,
    "--dd-case-study-narrative-color-placeholder": caseStudyNarrativeThemeColors.placeholder,
    "--dd-case-study-narrative-color-tech-strip-bg": caseStudyNarrativeThemeColors.techStripBackground,
    "--dd-case-study-narrative-color-tech-strip-text": caseStudyNarrativeThemeColors.techStripText,
    "--dd-case-study-narrative-color-tech-strip-separator": caseStudyNarrativeThemeColors.techStripSeparator,
    "--dd-case-study-narrative-color-launch-btn-bg": caseStudyNarrativeThemeColors.launchButtonBackground,
    "--dd-case-study-narrative-color-launch-btn-text": caseStudyNarrativeThemeColors.launchButtonText,
    "--dd-case-study-narrative-diagram-core-border": caseStudyNarrativeThemeColors.diagramCoreBorder,
    "--dd-case-study-narrative-diagram-core-bg": caseStudyNarrativeThemeColors.diagramCoreBackground,
  };
}
