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

export type CaseStudyReductionPresentation = "grid" | "compare";

export type CaseStudyReductionAuditBlock = {
  type: "reduction-audit";
  id: string;
  /** Section label for in-page TOC */
  index?: CaseStudySectionIndex;
  eyebrow: string;
  caption: string;
  cards: readonly [CaseStudyReductionCard, CaseStudyReductionCard];
  /** `compare` = V1/V2 slider (client); default `grid` = two cards */
  presentation?: CaseStudyReductionPresentation;
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
  /** Optional section index for TOC (e.g. 05 Platform approach) */
  index?: CaseStudySectionIndex;
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
  index?: CaseStudySectionIndex;
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
  /** Optional section label for in-page TOC (e.g. stack strip as 03) */
  index?: CaseStudySectionIndex;
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

/** Invigil-only narrative sections — CSS-driven diagrams and panels (see `invigil-narrative.ts`). */
export type InvigilProductTile = {
  id: string;
  label: string;
};

export type InvigilSharedLayer = {
  id: string;
  label: string;
};

export type InvigilVieraPart = {
  id: string;
  tabLabel: string;
  title: string;
  body: string;
};

export type InvigilInvestigationStep = {
  id: string;
  title: string;
  detail: string;
};

export type InvigilRoleDefinition = {
  id: string;
  label: string;
  canSee: readonly string[];
  canDo: readonly string[];
};

export type InvigilDeviceFrame = {
  id: string;
  label: string;
  detail: string;
};

export type InvigilResultStat = {
  id: string;
  label: string;
  value: string;
};

export type CaseStudyInvigilSectionBlock =
  | {
      type: "invigil-section";
      variant: "six-products-band";
      id: string;
    }
  | {
      type: "invigil-section";
      variant: "one-platform";
      id: string;
      index: CaseStudySectionIndex;
      headline: string;
      paragraphs: readonly string[];
      products: readonly InvigilProductTile[];
      sharedLayers: readonly InvigilSharedLayer[];
    }
  | {
      type: "invigil-section";
      variant: "viera-panels";
      id: string;
      index: CaseStudySectionIndex;
      headline: string;
      paragraphs: readonly string[];
      parts: readonly InvigilVieraPart[];
    }
  | {
      type: "invigil-section";
      variant: "investigation-timeline";
      id: string;
      index: CaseStudySectionIndex;
      headline: string;
      paragraphs: readonly string[];
      steps: readonly InvigilInvestigationStep[];
    }
  | {
      type: "invigil-section";
      variant: "roles-matrix";
      id: string;
      index: CaseStudySectionIndex;
      headline: string;
      paragraphs: readonly string[];
      roles: readonly InvigilRoleDefinition[];
    }
  | {
      type: "invigil-section";
      variant: "platform-frames";
      id: string;
      index: CaseStudySectionIndex;
      headline: string;
      paragraphs: readonly string[];
      devices: readonly InvigilDeviceFrame[];
    }
  | {
      type: "invigil-section";
      variant: "results-stats";
      id: string;
      index: CaseStudySectionIndex;
      headline: string;
      paragraphs: readonly string[];
      stats: readonly InvigilResultStat[];
    };

export type CaseStudyNarrativeBlock =
  | CaseStudyNarrativeProseBlock
  | CaseStudyReductionAuditBlock
  | CaseStudyPlatformRolesBlock
  | CaseStudyPlatformSplitBlock
  | CaseStudyCapabilityMatrixBlock
  | CaseStudyMatchmakingBlock
  | CaseStudyTechStripBlock
  | CaseStudyLaunchBlock
  | CaseStudyInvigilSectionBlock
  | CaseStudyBillingBabaSectionBlock;

/** Billing Baba — before/after rebuild narrative (see `billing-baba-narrative.ts`). */
export type BillingBabaSplitList = {
  title: string;
  items: readonly string[];
};

export type BillingBabaTimelineStep = {
  id: string;
  label: string;
  detail: string;
};

export type BillingBabaFeatureTile = {
  id: string;
  title: string;
  detail: string;
};

export type BillingBabaPlatformOrb = {
  id: string;
  label: string;
};

export type BillingBabaGlossaryTerm = {
  id: string;
  term: string;
  definition: string;
};

export type BillingBabaResultStat = {
  id: string;
  label: string;
  value: string;
};

export type CaseStudyBillingBabaSectionBlock =
  | {
      type: "billing-baba-section";
      variant: "previous-attempt";
      id: string;
      index: CaseStudySectionIndex;
      headline: string;
      paragraphs: readonly string[];
      pullQuote?: CaseStudyPullQuote;
      promised: BillingBabaSplitList;
      delivered: BillingBabaSplitList;
    }
  | {
      type: "billing-baba-section";
      variant: "rebuild-timeline";
      id: string;
      index: CaseStudySectionIndex;
      headline: string;
      paragraphs: readonly string[];
      struckLabel: string;
      timeline: readonly BillingBabaTimelineStep[];
    }
  | {
      type: "billing-baba-section";
      variant: "feature-grid";
      id: string;
      index: CaseStudySectionIndex;
      headline: string;
      paragraphs: readonly string[];
      features: readonly BillingBabaFeatureTile[];
    }
  | {
      type: "billing-baba-section";
      variant: "flutter-hub";
      id: string;
      index: CaseStudySectionIndex;
      headline: string;
      paragraphs: readonly string[];
      hubLabel: string;
      hubSublabel?: string;
      platforms: readonly BillingBabaPlatformOrb[];
    }
  | {
      type: "billing-baba-section";
      variant: "domain-glossary";
      id: string;
      index: CaseStudySectionIndex;
      headline: string;
      paragraphs: readonly string[];
      terms: readonly BillingBabaGlossaryTerm[];
      /** Exact substrings to wrap with `<mark>` in the given paragraph (copy unchanged). */
      paragraphHighlights?: readonly {
        paragraphIndex: number;
        phrases: readonly string[];
      }[];
    }
  | {
      type: "billing-baba-section";
      variant: "results-strip";
      id: string;
      index: CaseStudySectionIndex;
      headline: string;
      paragraphs: readonly string[];
      stats: readonly BillingBabaResultStat[];
    };

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
  narrativeReductionCompareMinHeightAtBaseline: number;
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
