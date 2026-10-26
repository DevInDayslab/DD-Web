import { founderSectionLayout } from "@/config/founder-section";
import { founderThemeColors } from "@/config/founder-theme";
import { layoutBaseline } from "@/config/layout";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = founderSectionLayout;

function fluid(
  value: number,
  bounds?: { minPx?: number; maxPx?: number },
): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function founderSectionLayoutToCssVars(): Record<string, string> {
  return {
    "--dd-founder-margin-top": fluid(layout.marginTopAtBaseline, {
      minPx: 64,
      maxPx: layout.marginTopAtBaseline,
    }),
    "--dd-founder-max-width": fluid(layout.maxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.maxWidthAtBaseline,
    }),
    "--dd-founder-padding-inline": fluid(layout.paddingInlineAtBaseline, {
      minPx: 16,
      maxPx: layout.paddingInlineAtBaseline,
    }),
    "--dd-founder-padding-block": fluid(layout.paddingBlockAtBaseline, {
      minPx: 48,
      maxPx: layout.paddingBlockAtBaseline,
    }),
    "--dd-founder-column-gap": fluid(layout.columnGapAtBaseline, {
      minPx: 32,
      maxPx: layout.columnGapAtBaseline,
    }),
    "--dd-founder-copy-gap": fluid(layout.copyGapAtBaseline, {
      minPx: 20,
      maxPx: layout.copyGapAtBaseline,
    }),
    "--dd-founder-body-gap": fluid(layout.bodyGapAtBaseline, {
      minPx: 12,
      maxPx: layout.bodyGapAtBaseline,
    }),
    "--dd-founder-signoff-margin-top": fluid(layout.signoffMarginTopAtBaseline, {
      minPx: 40,
      maxPx: layout.signoffMarginTopAtBaseline,
    }),
    "--dd-founder-title-size": fluid(layout.titleFontSizeAtBaseline, {
      minPx: 28,
      maxPx: layout.titleFontSizeAtBaseline,
    }),
    "--dd-founder-title-line-height": fluid(layout.titleLineHeightAtBaseline, {
      minPx: 36,
      maxPx: layout.titleLineHeightAtBaseline,
    }),
    "--dd-founder-title-letter-spacing": `${layout.titleLetterSpacingAtBaseline}px`,
    "--dd-founder-intro-size": fluid(layout.introFontSizeAtBaseline, {
      minPx: 16,
      maxPx: layout.introFontSizeAtBaseline,
    }),
    "--dd-founder-intro-line-height": fluid(layout.introLineHeightAtBaseline, {
      minPx: 22,
      maxPx: layout.introLineHeightAtBaseline,
    }),
    "--dd-founder-body-size": fluid(layout.bodyFontSizeAtBaseline, {
      minPx: 15,
      maxPx: layout.bodyFontSizeAtBaseline,
    }),
    "--dd-founder-body-line-height": fluid(layout.bodyLineHeightAtBaseline, {
      minPx: 24,
      maxPx: layout.bodyLineHeightAtBaseline,
    }),
    "--dd-founder-signoff-name-size": fluid(layout.signoffNameFontSizeAtBaseline, {
      minPx: 22,
      maxPx: layout.signoffNameFontSizeAtBaseline,
    }),
    "--dd-founder-signoff-name-line-height": fluid(layout.signoffNameLineHeightAtBaseline, {
      minPx: 30,
      maxPx: layout.signoffNameLineHeightAtBaseline,
    }),
    "--dd-founder-signoff-name-letter-spacing": `${layout.signoffNameLetterSpacingAtBaseline}px`,
    "--dd-founder-signoff-role-size": fluid(layout.signoffRoleFontSizeAtBaseline, {
      minPx: 13,
      maxPx: layout.signoffRoleFontSizeAtBaseline,
    }),
    "--dd-founder-signoff-role-line-height": fluid(layout.signoffRoleLineHeightAtBaseline, {
      minPx: 18,
      maxPx: layout.signoffRoleLineHeightAtBaseline,
    }),
    "--dd-founder-signoff-role-letter-spacing": `${layout.signoffRoleLetterSpacingAtBaseline}px`,
    "--dd-founder-signature-width": fluid(layout.signatureTraceWidthAtBaseline, {
      minPx: 96,
      maxPx: layout.signatureTraceWidthAtBaseline,
    }),
    "--dd-founder-signature-height": fluid(layout.signatureTraceHeightAtBaseline, {
      minPx: 30,
      maxPx: layout.signatureTraceHeightAtBaseline,
    }),
    "--dd-founder-portrait-width": fluid(layout.portraitWidthAtBaseline, {
      minPx: 280,
      maxPx: layout.portraitWidthAtBaseline,
    }),
    "--dd-founder-portrait-height": fluid(layout.portraitHeightAtBaseline, {
      minPx: 320,
      maxPx: layout.portraitHeightAtBaseline,
    }),
    "--dd-founder-portrait-radius": fluid(layout.portraitRadiusAtBaseline, {
      minPx: 20,
      maxPx: layout.portraitRadiusAtBaseline,
    }),
    "--dd-founder-color-section-bg": founderThemeColors.sectionBackground,
    "--dd-founder-color-title": founderThemeColors.title,
    "--dd-founder-color-intro": founderThemeColors.intro,
    "--dd-founder-color-body": founderThemeColors.body,
    "--dd-founder-color-signoff-name": founderThemeColors.signoffName,
    "--dd-founder-color-signoff-role": founderThemeColors.signoffRole,
    "--dd-founder-portrait-overlay": founderThemeColors.portraitOverlay,
    "--dd-founder-portrait-placeholder-bg": founderThemeColors.portraitPlaceholderBackground,
    "--dd-founder-portrait-placeholder-text": founderThemeColors.portraitPlaceholderText,
  };
}
