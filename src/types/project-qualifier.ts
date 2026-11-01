export type ProjectQualifierStepId =
  | "fullName"
  | "workEmail"
  | "book"
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
  /** Slider bounds in dollars; the top of the track means "and up". */
  min: number;
  max: number;
  step: number;
  defaultLow: number;
  defaultHigh: number;
};

export type ProjectQualifierBookingStep = ProjectQualifierStepBase & {
  kind: "booking";
};

export type ProjectQualifierStep =
  | ProjectQualifierBookingStep
  | ProjectQualifierTextStep
  | ProjectQualifierChoiceStep
  | ProjectQualifierBudgetStep;

export type ProjectQualifierFormValues = {
  fullName: string;
  workEmail: string;
  /** "booked" or "skipped" once the booking step has been answered. */
  book: string;
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
  submittingLabel: string;
  skipLabel: string;
  backLabel: string;
  nextLabel: string;
  closeLabel: string;
  exit: {
    title: string;
    body: string;
    stayLabel: string;
    leaveLabel: string;
  };
  booking: {
    confirmLabel: string;
    confirmWithTimeTemplate: string;
    fallbackText: string;
    fallbackLinkLabel: string;
    missingTime: string;
    summaryLabel: string;
  };
  welcome: {
    title: string;
    body: string;
    startLabel: string;
    duration: string;
  };
  hints: {
    continue: string;
    close: string;
    pick: string;
    back: string;
  };
  errors: {
    required: string;
    email: string;
    choice: string;
    submit: string;
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
