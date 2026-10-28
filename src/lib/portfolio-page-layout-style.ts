import { portfolioPageLayout } from "@/config/portfolio-page";
import { portfolioThemeColors } from "@/config/portfolio-theme";
import { layoutBaseline } from "@/config/layout";
import { fluidLength } from "@/lib/fluid";

const { referenceWidthPx } = layoutBaseline;
const layout = portfolioPageLayout;

function fluid(value: number, bounds?: { minPx?: number; maxPx?: number }): string {
  return fluidLength(value, referenceWidthPx, {
    minPx: bounds?.minPx,
    maxPx: bounds?.maxPx ?? value,
  });
}

export function portfolioPageLayoutToCssVars(): Record<string, string> {
  return {
    "--dd-portfolio-page-max-width": fluid(layout.pageMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.pageMaxWidthAtBaseline,
    }),
    "--dd-portfolio-hero-padding-top": fluid(layout.heroPaddingTopAtBaseline, {
      minPx: 96,
      maxPx: layout.heroPaddingTopAtBaseline,
    }),
    "--dd-portfolio-hero-padding-bottom": fluid(layout.heroPaddingBottomAtBaseline, {
      minPx: 40,
      maxPx: layout.heroPaddingBottomAtBaseline,
    }),
    "--dd-portfolio-hero-content-max-width": fluid(layout.heroContentMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.heroContentMaxWidthAtBaseline,
    }),
    "--dd-portfolio-hero-title-max-width": fluid(layout.heroTitleMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.heroTitleMaxWidthAtBaseline,
    }),
    "--dd-portfolio-hero-eyebrow-size": fluid(layout.heroEyebrowFontSizeAtBaseline, {
      minPx: 11,
      maxPx: layout.heroEyebrowFontSizeAtBaseline,
    }),
    "--dd-portfolio-hero-title-size": fluid(layout.heroTitleFontSizeAtBaseline, {
      minPx: 36,
      maxPx: layout.heroTitleFontSizeAtBaseline,
    }),
    "--dd-portfolio-hero-title-line-height": fluid(layout.heroTitleLineHeightAtBaseline, {
      minPx: 40,
      maxPx: layout.heroTitleLineHeightAtBaseline,
    }),
    "--dd-portfolio-hero-subtitle-size": fluid(layout.heroSubtitleFontSizeAtBaseline, {
      minPx: 15,
      maxPx: layout.heroSubtitleFontSizeAtBaseline,
    }),
    "--dd-portfolio-hero-subtitle-line-height": fluid(layout.heroSubtitleLineHeightAtBaseline, {
      minPx: 26,
      maxPx: layout.heroSubtitleLineHeightAtBaseline,
    }),
    "--dd-portfolio-hero-subtitle-max-width": fluid(layout.heroSubtitleMaxWidthAtBaseline, {
      minPx: 280,
      maxPx: layout.heroSubtitleMaxWidthAtBaseline,
    }),
    "--dd-portfolio-grid-padding-top": fluid(layout.gridSectionPaddingTopAtBaseline, {
      minPx: 24,
      maxPx: layout.gridSectionPaddingTopAtBaseline,
    }),
    "--dd-portfolio-grid-padding-inline": fluid(layout.gridSectionPaddingInlineAtBaseline, {
      minPx: 16,
      maxPx: layout.gridSectionPaddingInlineAtBaseline,
    }),
    "--dd-portfolio-grid-padding-bottom": fluid(layout.gridSectionPaddingBottomAtBaseline, {
      minPx: 64,
      maxPx: layout.gridSectionPaddingBottomAtBaseline,
    }),
    "--dd-portfolio-grid-max-width": fluid(layout.gridMaxWidthAtBaseline, {
      minPx: 320,
      maxPx: layout.gridMaxWidthAtBaseline,
    }),
    "--dd-portfolio-cell-min-height": fluid(layout.cellMinHeightAtBaseline, {
      minPx: 160,
      maxPx: layout.cellMinHeightAtBaseline,
    }),
    "--dd-portfolio-cell-padding-block": fluid(layout.cellPaddingBlockAtBaseline, {
      minPx: 40,
      maxPx: layout.cellPaddingBlockAtBaseline,
    }),
    "--dd-portfolio-cell-padding-inline": fluid(layout.cellPaddingInlineAtBaseline, {
      minPx: 20,
      maxPx: layout.cellPaddingInlineAtBaseline,
    }),
    "--dd-portfolio-cell-title-size": fluid(layout.cellTitleFontSizeAtBaseline, {
      minPx: 28,
      maxPx: layout.cellTitleFontSizeAtBaseline,
    }),
    "--dd-portfolio-cell-title-line-height": fluid(layout.cellTitleLineHeightAtBaseline, {
      minPx: 34,
      maxPx: layout.cellTitleLineHeightAtBaseline,
    }),
    "--dd-portfolio-cell-label-size": fluid(layout.cellLabelFontSizeAtBaseline, {
      minPx: 11,
      maxPx: layout.cellLabelFontSizeAtBaseline,
    }),
    "--dd-portfolio-cell-label-margin-top": fluid(layout.cellLabelMarginTopAtBaseline, {
      minPx: 10,
      maxPx: layout.cellLabelMarginTopAtBaseline,
    }),
    "--dd-portfolio-color-page-bg": portfolioThemeColors.pageBackground,
    "--dd-portfolio-color-hero-eyebrow": portfolioThemeColors.heroEyebrow,
    "--dd-portfolio-color-hero-title": portfolioThemeColors.heroTitle,
    "--dd-portfolio-color-hero-subtitle": portfolioThemeColors.heroSubtitle,
    "--dd-portfolio-color-hero-divider": portfolioThemeColors.heroDivider,
    "--dd-portfolio-color-grid-border": portfolioThemeColors.gridBorder,
    "--dd-portfolio-color-cell-title": portfolioThemeColors.cellTitle,
    "--dd-portfolio-color-cell-label": portfolioThemeColors.cellLabel,
    "--dd-portfolio-color-cell-label-muted": portfolioThemeColors.cellLabelMuted,
    "--dd-portfolio-color-cell-hover-bg": portfolioThemeColors.cellHoverBackground,
    "--dd-portfolio-shadow-cell-hover": portfolioThemeColors.cellHoverShadow,
  };
}
