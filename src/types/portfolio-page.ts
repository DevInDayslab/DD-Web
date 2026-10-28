export type PortfolioGridItemKind = "case-study" | "coming-soon" | "more";

export type PortfolioGridItem = {
  id: string;
  kind: PortfolioGridItemKind;
  title: string;
  href?: string;
};

export type PortfolioPageHero = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type PortfolioPageLabels = {
  caseStudy: string;
  comingSoon: string;
  more: string;
};

export type PortfolioPageContent = {
  hero: PortfolioPageHero;
  labels: PortfolioPageLabels;
  items: readonly PortfolioGridItem[];
};

export type PortfolioPageLayoutConfig = {
  pageMaxWidthAtBaseline: number;
  heroPaddingTopAtBaseline: number;
  heroPaddingBottomAtBaseline: number;
  heroContentMaxWidthAtBaseline: number;
  heroTitleMaxWidthAtBaseline: number;
  heroEyebrowFontSizeAtBaseline: number;
  heroTitleFontSizeAtBaseline: number;
  heroTitleLineHeightAtBaseline: number;
  heroSubtitleFontSizeAtBaseline: number;
  heroSubtitleLineHeightAtBaseline: number;
  heroSubtitleMaxWidthAtBaseline: number;
  gridSectionPaddingTopAtBaseline: number;
  gridSectionPaddingInlineAtBaseline: number;
  gridSectionPaddingBottomAtBaseline: number;
  gridMaxWidthAtBaseline: number;
  gridColumnsAtBaseline: number;
  cellMinHeightAtBaseline: number;
  cellPaddingBlockAtBaseline: number;
  cellPaddingInlineAtBaseline: number;
  cellTitleFontSizeAtBaseline: number;
  cellTitleLineHeightAtBaseline: number;
  cellLabelFontSizeAtBaseline: number;
  cellLabelMarginTopAtBaseline: number;
};
