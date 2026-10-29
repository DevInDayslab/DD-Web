export type ContactPageHeroContent = {
  eyebrow: string;
  headline: string;
  subhead: string;
};

export type ContactPageFormField = {
  id: string;
  label: string;
  optionalSuffix?: string;
  placeholder: string;
  required: boolean;
  type: "text" | "email" | "textarea";
  autoComplete?: string;
};

export type ContactPageTimeSlot = {
  id: string;
  label: string;
  defaultSelected?: boolean;
};

export type ContactPageBookingWidgetContent = {
  eyebrow: string;
  title: string;
  durationLabel: string;
  slotsHeadingPrefix: string;
  timeSlots: readonly ContactPageTimeSlot[];
};

export type ContactPageSplitColumnContent = {
  title: string;
  description: string;
};

export type ContactPageBookCallContent = ContactPageSplitColumnContent & {
  widget: ContactPageBookingWidgetContent;
};

export type ContactPageMessageContent = ContactPageSplitColumnContent & {
  fields: readonly ContactPageFormField[];
  submitLabel: string;
  submitAriaLabel: string;
  footerNote: string;
  formSubject: string;
  successMessage: string;
  errorMessage: string;
  missingRequiredMessage: string;
};

export type ContactPageSplitContent = {
  bookCall: ContactPageBookCallContent;
  message: ContactPageMessageContent;
};

export type ContactPageLedgerAvatar = {
  initials: string;
  variant: "primary" | "secondary";
};

export type ContactPageLedgerMetaRow = {
  label: string;
  value: string;
  href?: string;
};

export type ContactPageLedgerArchitectsContent = {
  heading: string;
  body: string;
  avatars: readonly ContactPageLedgerAvatar[];
  footerLabel: string;
};

export type ContactPageLedgerLogisticsContent = {
  heading: string;
  body: string;
  metaRows: readonly ContactPageLedgerMetaRow[];
};

export type ContactPageLedgerContent = {
  architects: ContactPageLedgerArchitectsContent;
  logistics: ContactPageLedgerLogisticsContent;
};

export type ContactPageCrosslinkMetric = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export type ContactPageCrosslinkContent = {
  introText: string;
  linkLabel: string;
  linkHref: string;
  metrics: readonly ContactPageCrosslinkMetric[];
};

export type ContactPageContent = {
  meta: {
    title: string;
    description: string;
    path: string;
  };
  hero: ContactPageHeroContent;
  split: ContactPageSplitContent;
  ledger: ContactPageLedgerContent;
  crosslink: ContactPageCrosslinkContent;
};

export type ContactPageLayoutConfig = {
  pageMaxWidthAtBaseline: number;
  heroPaddingTopAtBaseline: number;
  heroPaddingInlineAtBaseline: number;
  heroPaddingBottomAtBaseline: number;
  heroCopyMaxWidthAtBaseline: number;
  heroDividerMaxWidthAtBaseline: number;
  heroEyebrowFontSizeAtBaseline: number;
  heroEyebrowMarginBottomAtBaseline: number;
  heroHeadlineFontSizeAtBaseline: number;
  heroHeadlineLineHeightAtBaseline: number;
  heroSubheadFontSizeAtBaseline: number;
  heroSubheadLineHeightAtBaseline: number;
  heroSubheadMarginTopAtBaseline: number;
  heroDividerMarginTopAtBaseline: number;
  splitPaddingBlockAtBaseline: number;
  splitPaddingInlineAtBaseline: number;
  splitMaxWidthAtBaseline: number;
  splitInnerGapAtBaseline: number;
  splitColumnPaddingAtBaseline: number;
  splitColumnTitleSizeAtBaseline: number;
  splitColumnDescriptionMaxWidthAtBaseline: number;
  splitColumnDescriptionSizeAtBaseline: number;
  splitFormGapAtBaseline: number;
  splitFieldGapAtBaseline: number;
  splitInputRadiusAtBaseline: number;
  splitBookingCardRadiusAtBaseline: number;
  ledgerPaddingTopAtBaseline: number;
  ledgerPaddingInlineAtBaseline: number;
  ledgerMaxWidthAtBaseline: number;
  ledgerBlockPaddingAtBaseline: number;
  ledgerHeadingSizeAtBaseline: number;
  ledgerHeadingLineHeightAtBaseline: number;
  ledgerBodySizeAtBaseline: number;
  ledgerBodyLineHeightAtBaseline: number;
  ledgerCopyGapAtBaseline: number;
  ledgerMetaLabelSizeAtBaseline: number;
  ledgerMetaValueSizeAtBaseline: number;
  ledgerFootBorderPaddingTopAtBaseline: number;
  ledgerLogisticsMetaGapAtBaseline: number;
  crosslinkPaddingBlockAtBaseline: number;
  crosslinkPaddingInlineAtBaseline: number;
  crosslinkMaxWidthAtBaseline: number;
  crosslinkIntroSizeAtBaseline: number;
  crosslinkIntroLineHeightAtBaseline: number;
  crosslinkGridMaxWidthAtBaseline: number;
  crosslinkGridGapAtBaseline: number;
  crosslinkGridMarginTopAtBaseline: number;
  crosslinkCardPaddingAtBaseline: number;
  crosslinkCardRadiusAtBaseline: number;
  crosslinkCardGapAtBaseline: number;
  crosslinkMetricLabelSizeAtBaseline: number;
  crosslinkMetricTitleSizeAtBaseline: number;
  crosslinkMetricBodySizeAtBaseline: number;
  crosslinkMetricBodyLineHeightAtBaseline: number;
};
