export type CaseStudySectionIndex = {
  number: string;
  title: string;
};

export type CaseStudyPullQuote = {
  quote: string;
  attribution: string;
};

export type CaseStudyNarrativeProseBlock = {
  type: "prose";
  id: string;
  index: CaseStudySectionIndex;
  headline: string;
  paragraphs: readonly string[];
  pullQuote?: CaseStudyPullQuote;
};

export type CaseStudyReductionWireframeV1 = {
  kind: "v1";
  screenEyebrow: string;
  alertBadge: string;
  footerButtons: readonly string[];
};

export type CaseStudyReductionWireframeV2 = {
  kind: "v2";
  brand: string;
  mode: string;
  essayLabel: string;
  quote: string;
  footerLabel: string;
};

export type CaseStudyReductionCard = {
  id: string;
  variant: "v1" | "v2";
  headerLeft: string;
  headerRight: string;
  caption: string;
  wireframe: CaseStudyReductionWireframeV1 | CaseStudyReductionWireframeV2;
};

export type CaseStudyReductionAuditBlock = {
  type: "reduction-audit";
  id: string;
  eyebrow: string;
  caption: string;
  cards: readonly [CaseStudyReductionCard, CaseStudyReductionCard];
};

export type CaseStudyDiagramNode = {
  id: string;
  eyebrow: string;
  title: string;
  detail?: string;
};

export type CaseStudyDiagramTier =
  | {
      id: string;
      kind: "nodes";
      nodes: readonly CaseStudyDiagramNode[];
    }
  | {
      id: string;
      kind: "core";
      label: string;
      sublabel: string;
      badge?: string;
    }
  | {
      id: string;
      kind: "connector";
      label: string;
    };

export type CaseStudyPlatformRolesBlock = {
  type: "platform-roles";
  id: string;
  eyebrow: string;
  headline: string;
  paragraphs: readonly string[];
  diagramHeaderLeft: string;
  diagramHeaderRight: string;
  tiers: readonly CaseStudyDiagramTier[];
  matrixEyebrow: string;
  rows: readonly CaseStudyCapabilityRow[];
};

export type CaseStudyPlatformSplitBlock = {
  type: "platform-split";
  id: string;
  eyebrow: string;
  headline: string;
  paragraphs: readonly string[];
  diagramHeaderLeft: string;
  diagramHeaderRight: string;
  tiers: readonly CaseStudyDiagramTier[];
};

export type CaseStudyCapabilityRow = {
  id: string;
  label: string;
  tone: "user" | "admin";
  body: string;
};

export type CaseStudyCapabilityMatrixBlock = {
  type: "capability-matrix";
  id: string;
  eyebrow: string;
  rows: readonly CaseStudyCapabilityRow[];
};

export type CaseStudyPipelineCard = {
  id: string;
  passLabel: string;
  categoryLabel: string;
  title: string;
  description: string;
  variant?: "default" | "highlight";
};

export type CaseStudyMatchmakingBlock = {
  type: "matchmaking";
  id: string;
  index: CaseStudySectionIndex;
  headline: string;
  paragraphs: readonly string[];
  pipelineEyebrow: string;
  pipelineCards: readonly CaseStudyPipelineCard[];
  pipelineFooter: string;
};

export type CaseStudyTechStripBlock = {
  type: "tech-strip";
  id: string;
  ariaLabel?: string;
  items: readonly string[];
};

export type CaseStudyLaunchStoreBadge = {
  id: string;
  platform: "ios" | "android";
  label: string;
  meta: string;
  href?: string;
};

export type CaseStudyLaunchViewport = {
  id: string;
  screenLabel: string;
  title: string;
  placeholderLabel: string;
};

export type CaseStudyLaunchBlock = {
  type: "launch";
  id: string;
  index: CaseStudySectionIndex;
  headline: string;
  subhead: string;
  storeBadges: readonly CaseStudyLaunchStoreBadge[];
  viewports: readonly CaseStudyLaunchViewport[];
};

export type CaseStudyStatsBlock = {
  type: "stats";
  id: string;
  items: readonly { value: string; label: string }[];
};

export type CaseStudyOptionsBlock = {
  type: "options";
  id: string;
  eyebrow: string;
  headline: string;
  items: readonly {
    id: string;
    tag: string;
    title: string;
    body: string;
    tone: "muted" | "good";
  }[];
};

export type CaseStudyStepsBlock = {
  type: "steps";
  id: string;
  eyebrow: string;
  headline: string;
  items: readonly { title: string; body: string }[];
};

export type CaseStudyNarrativeBlock =
  | CaseStudyStatsBlock
  | CaseStudyOptionsBlock
  | CaseStudyStepsBlock
  | CaseStudyNarrativeProseBlock
  | CaseStudyReductionAuditBlock
  | CaseStudyPlatformRolesBlock
  | CaseStudyPlatformSplitBlock
  | CaseStudyCapabilityMatrixBlock
  | CaseStudyMatchmakingBlock
  | CaseStudyTechStripBlock
  | CaseStudyLaunchBlock;

export type CaseStudyNarrativeContent = {
  blocks: readonly CaseStudyNarrativeBlock[];
};

export type CaseStudyNarrativeLayoutConfig = {
  narrativeMaxWidthAtBaseline: number;
  narrativeProseMaxWidthAtBaseline: number;
  narrativeEditorialMaxWidthAtBaseline: number;
  narrativeEditorialGapAtBaseline: number;
  narrativeSectionPaddingBlockAtBaseline: number;
  narrativeIndexFontSizeAtBaseline: number;
  narrativeHeadlineFontSizeAtBaseline: number;
  narrativeHeadlineLineHeightAtBaseline: number;
  narrativeEditorialHeadlineSizeAtBaseline: number;
  narrativeEditorialHeadlineLineHeightAtBaseline: number;
  narrativeBodyFontSizeAtBaseline: number;
  narrativeBodyLineHeightAtBaseline: number;
  narrativeEditorialBodySizeAtBaseline: number;
  narrativeEditorialBodyLineHeightAtBaseline: number;
  narrativeQuoteFontSizeAtBaseline: number;
  narrativeEditorialQuoteSizeAtBaseline: number;
  narrativeEditorialQuoteMaxWidthAtBaseline: number;
  narrativeCardRadiusAtBaseline: number;
  narrativeReductionCardHeightAtBaseline: number;
  narrativeReductionCardWidthAtBaseline: number;
  narrativePipelineGapAtBaseline: number;
  platformSectionMaxWidthAtBaseline: number;
  platformSectionPaddingBlockAtBaseline: number;
  platformSectionPaddingInlineAtBaseline: number;
  platformSectionStackGapAtBaseline: number;
  platformCopyMaxWidthAtBaseline: number;
  platformHeadlineSizeAtBaseline: number;
  platformHeadlineLineHeightAtBaseline: number;
  platformBodySizeAtBaseline: number;
  platformBodyLineHeightAtBaseline: number;
  platformMatrixBodySizeAtBaseline: number;
  platformMatrixBodyLineHeightAtBaseline: number;
  platformMatrixGapAtBaseline: number;
  diagramPanelPaddingAtBaseline: number;
  matchmakingChapterPaddingBlockAtBaseline: number;
  matchmakingChapterColumnMaxWidthAtBaseline: number;
  matchmakingChapterStackGapAtBaseline: number;
  matchmakingIntroHeadlineOffsetAtBaseline: number;
  matchmakingProseGapAtBaseline: number;
  matchmakingPipelineSectionPaddingTopAtBaseline: number;
  matchmakingPipelineStackGapAtBaseline: number;
  matchmakingPipelineGridMinWidthAtBaseline: number;
  matchmakingPipelineGridGapAtBaseline: number;
  techStripPaddingBlockAtBaseline: number;
  techStripPaddingInlineAtBaseline: number;
  techStripMaxWidthAtBaseline: number;
  techStripItemGapAtBaseline: number;
  techStripRowGapAtBaseline: number;
  launchSectionMaxWidthAtBaseline: number;
  launchSectionPaddingBlockAtBaseline: number;
  launchSectionPaddingInlineAtBaseline: number;
  launchSectionStackGapAtBaseline: number;
  launchHeroMaxWidthAtBaseline: number;
  launchHeadlineSizeAtBaseline: number;
  launchHeadlineLineHeightAtBaseline: number;
  launchSubheadSizeAtBaseline: number;
  launchSubheadLineHeightAtBaseline: number;
  launchSubheadMaxWidthAtBaseline: number;
  launchStoreBadgeGapAtBaseline: number;
  launchViewportsMaxWidthAtBaseline: number;
  launchViewportGapAtBaseline: number;
  launchViewportInnerMinHeightAtBaseline: number;
  revealOffsetYAtBaseline: number;
};

export type CaseStudyNarrativeInteractionConfig = {
  revealDurationMs: number;
  revealStaggerMs: number;
  cardHoverLiftPx: number;
};
