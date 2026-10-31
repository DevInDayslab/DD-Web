import type { PageMeta } from "@/types/site";
import type { CaseStudyNarrativeContent } from "@/types/case-study-narrative";

export type CaseStudyBreadcrumb = {
  projectName: string;
  industry: string;
};

export type CaseStudyVideoAsset = {
  src?: string;
  posterSrc?: string;
  mimeType?: "video/mp4";
};

export type CaseStudySpecRow = {
  id: string;
  label: string;
  value: string;
  href?: string;
  valueTone?: "default" | "accent" | "muted";
};

export type CaseStudyStoreLink = {
  eyebrow: string;
  label: string;
  href: string;
  external?: boolean;
};

export type CaseStudyPageIntro = {
  breadcrumb: CaseStudyBreadcrumb;
  headlineLines: readonly string[];
  subhead: string;
};

export type CaseStudyPageHero = {
  landscapeVideo: CaseStudyVideoAsset;
};

export type CaseStudyPageBrief = {
  storeLinks: readonly CaseStudyStoreLink[];
  specRows: readonly CaseStudySpecRow[];
  portraitVideo: CaseStudyVideoAsset;
};

export type CaseStudyPageFooterNavLink = {
  slug: string;
  label: string;
};

export type CaseStudyPageFooter = {
  archiveEyebrow: string;
  liveLabel: string;
  /** Omit until the product has a public link; the label renders as plain text. */
  liveHref?: string;
  liveExternal?: boolean;
  bookCallLabel: string;
  bookCallHref: string;
  bookCallAriaLabel?: string;
  previous?: CaseStudyPageFooterNavLink;
  next?: CaseStudyPageFooterNavLink;
};

export type CaseStudyPageContent = {
  slug: string;
  materialPath: string;
  meta: PageMeta;
  intro: CaseStudyPageIntro;
  hero?: CaseStudyPageHero;
  brief: CaseStudyPageBrief;
  placeholders: {
    portraitVideo: string;
    landscapeVideo?: string;
  };
  narrative: CaseStudyNarrativeContent;
  footer: CaseStudyPageFooter;
};

export type CaseStudyPageLayoutConfig = {
  pageMaxWidthAtBaseline: number;
  sectionPaddingInlineAtBaseline: number;
  heroPaddingTopAtBaseline: number;
  heroPaddingBottomAtBaseline: number;
  introCopyMaxWidthAtBaseline: number;
  introHeadlineMaxWidthAtBaseline: number;
  introSubheadMaxWidthAtBaseline: number;
  introBreadcrumbFontSizeAtBaseline: number;
  introHeadlineFontSizeAtBaseline: number;
  introHeadlineLineHeightAtBaseline: number;
  introHeadlineMarginTopAtBaseline: number;
  introSubheadFontSizeAtBaseline: number;
  introSubheadLineHeightAtBaseline: number;
  introSubheadMarginTopAtBaseline: number;
  introSectionPaddingBottomAtBaseline: number;
  heroPreviewMinHeightAtBaseline: number;
  briefPaddingTopAtBaseline: number;
  briefPaddingBottomAtBaseline: number;
  briefGapAtBaseline: number;
  briefCopyMaxWidthAtBaseline: number;
  briefSpecLabelFontSizeAtBaseline: number;
  briefSpecValueFontSizeAtBaseline: number;
  phoneWidthAtBaseline: number;
  phoneHeightAtBaseline: number;
  phoneRadiusAtBaseline: number;
  phonePaddingAtBaseline: number;
  footerPaddingBlockAtBaseline: number;
  footerArchivePaddingBottomAtBaseline: number;
  footerNavPaddingTopAtBaseline: number;
  footerLiveLinkFontSizeAtBaseline: number;
  footerLiveLinkLineHeightAtBaseline: number;
  footerCtaFontSizeAtBaseline: number;
  footerCtaLineHeightAtBaseline: number;
  footerNavFontSizeAtBaseline: number;
};
