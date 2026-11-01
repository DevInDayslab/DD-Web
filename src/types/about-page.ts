import type { PageMeta } from "@/types";

export type AboutCaseRow = {
  slug: string;
  name: string;
  industry: string;
  headline: string;
  logoSrc: string;
};

export type AboutPageContent = {
  meta: PageMeta;
  hero: {
    eyebrow: string;
    headline: string;
    lede: string;
  };
  letter: {
    heading: string;
    intro: string;
    paragraphs: readonly string[];
    portraitFallbackCaption: string;
  };
  build: {
    heading: string;
    body: string;
    groups: readonly { label: string; items: readonly string[] }[];
    footnote: string;
  };
  beliefs: {
    heading: string;
    items: readonly { title: string; body: string }[];
  };
  work: {
    heading: string;
    body: string;
    linkLabel: string;
    linkHref: string;
    moreLabel: string;
    moreLogos: readonly { src: string; alt: string }[];
    nextLabel: string;
    nextAriaLabel: string;
    nextHref: string;
  };
  closing: {
    heading: string;
    body: string;
    primaryLabel: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};
