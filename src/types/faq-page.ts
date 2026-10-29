export type FaqPageCategory = {
  id: string;
  label: string;
};

export type FaqPageItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqPageSection = {
  id: string;
  label: string;
  items: readonly FaqPageItem[];
};

export type FaqPageHeroContent = {
  eyebrow: string;
  headline: string;
  description: string;
  searchPlaceholder: string;
  searchAriaLabel: string;
};

export type FaqPageContent = {
  meta: {
    title: string;
    description: string;
    path: string;
  };
  hero: FaqPageHeroContent;
  sections: readonly FaqPageSection[];
  defaultSectionId: string;
};

export type FaqPageLayoutConfig = {
  pageMaxWidthAtBaseline: number;
  heroPaddingTopAtBaseline: number;
  heroPaddingBottomAtBaseline: number;
  heroPaddingInlineAtBaseline: number;
  heroCopyMaxWidthAtBaseline: number;
  heroNavMaxWidthAtBaseline: number;
  heroEyebrowFontSizeAtBaseline: number;
  heroHeadlineFontSizeAtBaseline: number;
  heroHeadlineLineHeightAtBaseline: number;
  heroDescriptionFontSizeAtBaseline: number;
  heroDescriptionLineHeightAtBaseline: number;
  heroDescriptionMaxWidthAtBaseline: number;
  heroSearchFontSizeAtBaseline: number;
  heroCategoryFontSizeAtBaseline: number;
  heroCategoryGapAtBaseline: number;
  heroStackGapAtBaseline: number;
  listMaxWidthAtBaseline: number;
  listPaddingBlockAtBaseline: number;
  listPaddingInlineAtBaseline: number;
};
