export type SiteFooterNavLink = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
};

export type SiteFooterSocialLink = {
  id: string;
  label: string;
  href: string;
};

export type SiteFooterCta = {
  headline: string;
  subtext: string;
  buttonLabel: string;
  buttonHref: string;
  buttonAriaLabel: string;
};

export type SiteFooterBrand = {
  name: string;
  tagline: string;
};

export type SiteFooterContent = {
  brand: SiteFooterBrand;
  cta: SiteFooterCta;
  navLinks: readonly SiteFooterNavLink[];
  navSeparator: string;
  socialLinks: readonly SiteFooterSocialLink[];
  socialSeparator: string;
  copyright: string;
};

export type SiteFooterLayoutConfig = {
  backgroundImageSrc: string;
  minHeightAtBaseline: number;
  minHeightMobileAtBaseline: number;
  ctaMaxWidthAtBaseline: number;
  ctaPaddingTopAtBaseline: number;
  ctaPaddingBottomAtBaseline: number;
  ctaPaddingInlineAtBaseline: number;
  headlineFontSizeAtBaseline: number;
  headlineLineHeightAtBaseline: number;
  headlineLetterSpacingAtBaseline: number;
  subtextMarginTopAtBaseline: number;
  subtextFontSizeAtBaseline: number;
  subtextLineHeightAtBaseline: number;
  ctaButtonMarginTopAtBaseline: number;
  ctaButtonPaddingYAtBaseline: number;
  ctaButtonPaddingXAtBaseline: number;
  ctaButtonFontSizeAtBaseline: number;
  ctaButtonLineHeightAtBaseline: number;
  ctaButtonGapAtBaseline: number;
  barMaxWidthAtBaseline: number;
  barPaddingTopAtBaseline: number;
  barPaddingBottomAtBaseline: number;
  barPaddingInlineAtBaseline: number;
  brandNameFontSizeAtBaseline: number;
  brandNameLineHeightAtBaseline: number;
  brandNameLetterSpacingAtBaseline: number;
  brandTaglineFontSizeAtBaseline: number;
  brandTaglineLineHeightAtBaseline: number;
  navFontSizeAtBaseline: number;
  navLineHeightAtBaseline: number;
  navGapAtBaseline: number;
  socialFontSizeAtBaseline: number;
  socialLineHeightAtBaseline: number;
  socialGapAtBaseline: number;
  barColumnGapAtBaseline: number;
};
