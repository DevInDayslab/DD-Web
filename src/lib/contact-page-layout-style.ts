import { contactPageLayout } from "@/config/contact-page";
import { contactPageThemeColors } from "@/config/contact-page-theme";
import { layoutBaseline } from "@/config/layout";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = contactPageLayout;

function fluid(value: number, bounds?: { minPx?: number; maxPx?: number }): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function contactPageLayoutToCssVars(): Record<string, string> {
  return {
    "--dd-contact-page-max-width": fluid(layout.pageMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.pageMaxWidthAtBaseline,
    }),
    "--dd-contact-hero-padding-top": fluid(layout.heroPaddingTopAtBaseline, {
      minPx: 40,
      maxPx: layout.heroPaddingTopAtBaseline,
    }),
    "--dd-contact-hero-padding-inline": fluid(layout.heroPaddingInlineAtBaseline, {
      minPx: 20,
      maxPx: layout.heroPaddingInlineAtBaseline,
    }),
    "--dd-contact-hero-padding-bottom": fluid(layout.heroPaddingBottomAtBaseline, {
      minPx: 32,
      maxPx: layout.heroPaddingBottomAtBaseline,
    }),
    "--dd-contact-hero-copy-max-width": fluid(layout.heroCopyMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.heroCopyMaxWidthAtBaseline,
    }),
    "--dd-contact-hero-divider-max-width": fluid(layout.heroDividerMaxWidthAtBaseline, {
      minPx: 280,
      maxPx: layout.heroDividerMaxWidthAtBaseline,
    }),
    "--dd-contact-hero-eyebrow-size": fluid(layout.heroEyebrowFontSizeAtBaseline, {
      minPx: 10,
      maxPx: layout.heroEyebrowFontSizeAtBaseline,
    }),
    "--dd-contact-hero-eyebrow-margin-bottom": fluid(
      layout.heroEyebrowMarginBottomAtBaseline,
      { minPx: 12, maxPx: layout.heroEyebrowMarginBottomAtBaseline },
    ),
    "--dd-contact-hero-headline-size": fluid(layout.heroHeadlineFontSizeAtBaseline, {
      minPx: 40,
      maxPx: layout.heroHeadlineFontSizeAtBaseline,
    }),
    "--dd-contact-hero-headline-line-height": fluid(
      layout.heroHeadlineLineHeightAtBaseline,
      { minPx: 44, maxPx: layout.heroHeadlineLineHeightAtBaseline },
    ),
    "--dd-contact-hero-subhead-size": fluid(layout.heroSubheadFontSizeAtBaseline, {
      minPx: 16,
      maxPx: layout.heroSubheadFontSizeAtBaseline,
    }),
    "--dd-contact-hero-subhead-line-height": fluid(
      layout.heroSubheadLineHeightAtBaseline,
      { minPx: 26, maxPx: layout.heroSubheadLineHeightAtBaseline },
    ),
    "--dd-contact-hero-subhead-margin-top": fluid(
      layout.heroSubheadMarginTopAtBaseline,
      { minPx: 16, maxPx: layout.heroSubheadMarginTopAtBaseline },
    ),
    "--dd-contact-hero-divider-margin-top": fluid(
      layout.heroDividerMarginTopAtBaseline,
      { minPx: 28, maxPx: layout.heroDividerMarginTopAtBaseline },
    ),
    "--dd-contact-split-padding-block": fluid(layout.splitPaddingBlockAtBaseline, {
      minPx: 32,
      maxPx: layout.splitPaddingBlockAtBaseline,
    }),
    "--dd-contact-split-padding-inline": fluid(layout.splitPaddingInlineAtBaseline, {
      minPx: 20,
      maxPx: layout.splitPaddingInlineAtBaseline,
    }),
    "--dd-contact-split-max-width": fluid(layout.splitMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.splitMaxWidthAtBaseline,
    }),
    "--dd-contact-split-inner-gap": fluid(layout.splitInnerGapAtBaseline, {
      minPx: 32,
      maxPx: layout.splitInnerGapAtBaseline,
    }),
    "--dd-contact-split-column-padding": fluid(layout.splitColumnPaddingAtBaseline, {
      minPx: 0,
      maxPx: layout.splitColumnPaddingAtBaseline,
    }),
    "--dd-contact-split-column-title-size": fluid(
      layout.splitColumnTitleSizeAtBaseline,
      { minPx: 20, maxPx: layout.splitColumnTitleSizeAtBaseline },
    ),
    "--dd-contact-split-description-max-width": fluid(
      layout.splitColumnDescriptionMaxWidthAtBaseline,
      { minPx: 280, maxPx: layout.splitColumnDescriptionMaxWidthAtBaseline },
    ),
    "--dd-contact-split-description-size": fluid(
      layout.splitColumnDescriptionSizeAtBaseline,
      { minPx: 14, maxPx: layout.splitColumnDescriptionSizeAtBaseline },
    ),
    "--dd-contact-split-form-gap": fluid(layout.splitFormGapAtBaseline, {
      minPx: 16,
      maxPx: layout.splitFormGapAtBaseline,
    }),
    "--dd-contact-split-field-gap": fluid(layout.splitFieldGapAtBaseline, {
      minPx: 6,
      maxPx: layout.splitFieldGapAtBaseline,
    }),
    "--dd-contact-split-input-radius": fluid(layout.splitInputRadiusAtBaseline, {
      minPx: 10,
      maxPx: layout.splitInputRadiusAtBaseline,
    }),
    "--dd-contact-split-booking-card-radius": fluid(
      layout.splitBookingCardRadiusAtBaseline,
      { minPx: 10, maxPx: layout.splitBookingCardRadiusAtBaseline },
    ),
    "--dd-contact-ledger-padding-top": fluid(layout.ledgerPaddingTopAtBaseline, {
      minPx: 32,
      maxPx: layout.ledgerPaddingTopAtBaseline,
    }),
    "--dd-contact-ledger-padding-inline": fluid(layout.ledgerPaddingInlineAtBaseline, {
      minPx: 20,
      maxPx: layout.ledgerPaddingInlineAtBaseline,
    }),
    "--dd-contact-ledger-max-width": fluid(layout.ledgerMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.ledgerMaxWidthAtBaseline,
    }),
    "--dd-contact-ledger-block-padding": fluid(layout.ledgerBlockPaddingAtBaseline, {
      minPx: 24,
      maxPx: layout.ledgerBlockPaddingAtBaseline,
    }),
    "--dd-contact-ledger-heading-size": fluid(layout.ledgerHeadingSizeAtBaseline, {
      minPx: 17,
      maxPx: layout.ledgerHeadingSizeAtBaseline,
    }),
    "--dd-contact-ledger-heading-line-height": fluid(
      layout.ledgerHeadingLineHeightAtBaseline,
      { minPx: 26, maxPx: layout.ledgerHeadingLineHeightAtBaseline },
    ),
    "--dd-contact-ledger-body-size": fluid(layout.ledgerBodySizeAtBaseline, {
      minPx: 14,
      maxPx: layout.ledgerBodySizeAtBaseline,
    }),
    "--dd-contact-ledger-body-line-height": fluid(
      layout.ledgerBodyLineHeightAtBaseline,
      { minPx: 24, maxPx: layout.ledgerBodyLineHeightAtBaseline },
    ),
    "--dd-contact-ledger-copy-gap": fluid(layout.ledgerCopyGapAtBaseline, {
      minPx: 10,
      maxPx: layout.ledgerCopyGapAtBaseline,
    }),
    "--dd-contact-ledger-meta-label-size": fluid(
      layout.ledgerMetaLabelSizeAtBaseline,
      { minPx: 12, maxPx: layout.ledgerMetaLabelSizeAtBaseline },
    ),
    "--dd-contact-ledger-meta-value-size": fluid(
      layout.ledgerMetaValueSizeAtBaseline,
      { minPx: 12, maxPx: layout.ledgerMetaValueSizeAtBaseline },
    ),
    "--dd-contact-ledger-foot-border-padding-top": fluid(
      layout.ledgerFootBorderPaddingTopAtBaseline,
      { minPx: 24, maxPx: layout.ledgerFootBorderPaddingTopAtBaseline },
    ),
    "--dd-contact-ledger-logistics-meta-gap": fluid(
      layout.ledgerLogisticsMetaGapAtBaseline,
      { minPx: 10, maxPx: layout.ledgerLogisticsMetaGapAtBaseline },
    ),
    "--dd-contact-crosslink-padding-block": fluid(layout.crosslinkPaddingBlockAtBaseline, {
      minPx: 48,
      maxPx: layout.crosslinkPaddingBlockAtBaseline,
    }),
    "--dd-contact-crosslink-padding-inline": fluid(
      layout.crosslinkPaddingInlineAtBaseline,
      { minPx: 20, maxPx: layout.crosslinkPaddingInlineAtBaseline },
    ),
    "--dd-contact-crosslink-max-width": fluid(layout.crosslinkMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.crosslinkMaxWidthAtBaseline,
    }),
    "--dd-contact-crosslink-intro-size": fluid(layout.crosslinkIntroSizeAtBaseline, {
      minPx: 16,
      maxPx: layout.crosslinkIntroSizeAtBaseline,
    }),
    "--dd-contact-crosslink-intro-line-height": fluid(
      layout.crosslinkIntroLineHeightAtBaseline,
      { minPx: 24, maxPx: layout.crosslinkIntroLineHeightAtBaseline },
    ),
    "--dd-contact-crosslink-grid-max-width": fluid(
      layout.crosslinkGridMaxWidthAtBaseline,
      { minPx: 320, maxPx: layout.crosslinkGridMaxWidthAtBaseline },
    ),
    "--dd-contact-crosslink-grid-gap": fluid(layout.crosslinkGridGapAtBaseline, {
      minPx: 16,
      maxPx: layout.crosslinkGridGapAtBaseline,
    }),
    "--dd-contact-crosslink-grid-margin-top": fluid(
      layout.crosslinkGridMarginTopAtBaseline,
      { minPx: 32, maxPx: layout.crosslinkGridMarginTopAtBaseline },
    ),
    "--dd-contact-crosslink-card-padding": fluid(layout.crosslinkCardPaddingAtBaseline, {
      minPx: 20,
      maxPx: layout.crosslinkCardPaddingAtBaseline,
    }),
    "--dd-contact-crosslink-card-radius": fluid(layout.crosslinkCardRadiusAtBaseline, {
      minPx: 14,
      maxPx: layout.crosslinkCardRadiusAtBaseline,
    }),
    "--dd-contact-crosslink-card-gap": fluid(layout.crosslinkCardGapAtBaseline, {
      minPx: 4,
      maxPx: layout.crosslinkCardGapAtBaseline,
    }),
    "--dd-contact-crosslink-metric-label-size": fluid(
      layout.crosslinkMetricLabelSizeAtBaseline,
      { minPx: 10, maxPx: layout.crosslinkMetricLabelSizeAtBaseline },
    ),
    "--dd-contact-crosslink-metric-title-size": fluid(
      layout.crosslinkMetricTitleSizeAtBaseline,
      { minPx: 22, maxPx: layout.crosslinkMetricTitleSizeAtBaseline },
    ),
    "--dd-contact-crosslink-metric-body-size": fluid(
      layout.crosslinkMetricBodySizeAtBaseline,
      { minPx: 13, maxPx: layout.crosslinkMetricBodySizeAtBaseline },
    ),
    "--dd-contact-crosslink-metric-body-line-height": fluid(
      layout.crosslinkMetricBodyLineHeightAtBaseline,
      { minPx: 20, maxPx: layout.crosslinkMetricBodyLineHeightAtBaseline },
    ),
    "--dd-contact-page-color-ledger-avatar-primary": contactPageThemeColors.ledgerAvatarPrimary,
    "--dd-contact-page-color-ledger-avatar-secondary":
      contactPageThemeColors.ledgerAvatarSecondary,
    "--dd-contact-page-color-ledger-avatar-border": contactPageThemeColors.ledgerAvatarBorder,
    "--dd-contact-page-color-bg": contactPageThemeColors.pageBackground,
    "--dd-contact-page-color-eyebrow": contactPageThemeColors.eyebrow,
    "--dd-contact-page-color-headline": contactPageThemeColors.headline,
    "--dd-contact-page-color-subhead": contactPageThemeColors.subhead,
    "--dd-contact-page-color-divider": contactPageThemeColors.divider,
    "--dd-contact-page-color-border": contactPageThemeColors.border,
    "--dd-contact-page-color-border-soft": contactPageThemeColors.borderSoft,
    "--dd-contact-page-color-border-faint": contactPageThemeColors.borderFaint,
    "--dd-contact-page-color-border-muted": contactPageThemeColors.borderMuted,
    "--dd-contact-page-color-surface": contactPageThemeColors.surface,
    "--dd-contact-page-color-surface-muted": contactPageThemeColors.surfaceMuted,
    "--dd-contact-page-color-placeholder": contactPageThemeColors.placeholder,
    "--dd-contact-page-color-placeholder-muted": contactPageThemeColors.placeholderMuted,
    "--dd-contact-page-color-optional-label": contactPageThemeColors.optionalLabel,
    "--dd-contact-page-color-button-primary": contactPageThemeColors.buttonPrimary,
    "--dd-contact-page-color-button-primary-text": contactPageThemeColors.buttonPrimaryText,
    "--dd-contact-page-color-slot-selected": contactPageThemeColors.slotSelected,
    "--dd-contact-page-color-slot-selected-text": contactPageThemeColors.slotSelectedText,
    "--dd-contact-page-color-form-error": contactPageThemeColors.formError,
  };
}
