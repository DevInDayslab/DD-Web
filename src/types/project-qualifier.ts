export type ProjectQualifierStepId =
  | "fullName"
  | "workEmail"
  | "companyName"
  | "websiteOrFigma"
  | "projectStage"
  | "budget"
  | "timeline";

export type ProjectQualifierChoiceOption = {
  id: string;
  label: string;
};

export type ProjectQualifierStepBase = {
  id: ProjectQualifierStepId;
  question: string;
  description: string;
};

export type ProjectQualifierTextStep = ProjectQualifierStepBase & {
  kind: "text";
  placeholder: string;
  optional?: boolean;
  inputMode?: "text" | "email" | "url";
};

export type ProjectQualifierChoiceStep = ProjectQualifierStepBase & {
  kind: "choice";
  options: readonly ProjectQualifierChoiceOption[];
};

export type ProjectQualifierBudgetStep = ProjectQualifierStepBase & {
  kind: "budget";
  options: readonly ProjectQualifierChoiceOption[];
};

export type ProjectQualifierStep =
  | ProjectQualifierTextStep
  | ProjectQualifierChoiceStep
  | ProjectQualifierBudgetStep;

export type ProjectQualifierFormValues = {
  fullName: string;
  workEmail: string;
  companyName: string;
  websiteOrFigma: string;
  projectStage: string;
  budget: string;
  timeline: string;
};

export type ProjectQualifierContent = {
  brandName: string;
  stepBadgeTemplate: string;
  continueLabel: string;
  submitLabel: string;
  closeLabel: string;
  keyboardHint: {
    press: string;
    enter: string;
    orClickContinue: string;
  };
  successTitle: string;
  successBody: string;
  successCloseLabel: string;
  steps: readonly ProjectQualifierStep[];
};

export type ProjectQualifierLayoutConfig = {
  backdropImageSrc: string;
  shellMaxWidthAtBaseline: number;
  cardMaxWidthAtBaseline: number;
  cardPaddingAtBaseline: number;
  cardRadiusAtBaseline: number;
  cardGapAtBaseline: number;
  headlineSizeAtBaseline: number;
  headlineLineHeightAtBaseline: number;
  progressTrackWidthAtBaseline: number;
  progressTrackHeightAtBaseline: number;
  overlayPaddingInlineAtBaseline: number;
  overlayPaddingBlockAtBaseline: number;
  sceneMinHeightAtBaseline: number;
  panelRadiusAtBaseline: number;
  /** Form card horizontal inset inside the popup (1280px baseline). */
  cardStagePaddingInlineAtBaseline: number;
  /** How far the form card overlaps upward into the header/scenery zone. */
  cardStageOverlapAtBaseline: number;
  /**
   * Scenery extends this many px past the popup edge on each side (full-height backdrop).
   */
  sceneStripWidenInlineAtBaseline: number;
  /** Extra zoom/pan inside the strip — image layer only (1280px baseline). */
  sceneImageBleedInlineAtBaseline: number;
  /** background-size width % — raise to show more landscape left/right. */
  sceneImageCoverWidthPercentAtBaseline: number;
  /** background-size height % — usually 100–120. */
  sceneImageCoverHeightPercentAtBaseline: number;
  /** CSS background-position for the scene strip (e.g. `center 32%`). */
  sceneImagePosition: string;
  sceneImagePositionMobile: string;
};
