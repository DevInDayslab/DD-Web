import type { ChatGptCtaSectionLayoutConfig } from "@/types/chatgpt-cta-section";

export const chatgptCtaSectionLayout = {
  widthAtBaseline: 960,
  minHeightAtBaseline: 374,
  paddingInlineAtBaseline: 40,
  marginTopAtBaseline: 120,
  paddingAtBaseline: 64,
  innerGapAtBaseline: 56,
  borderRadiusAtBaseline: 32,
  badgeFontSizeAtBaseline: 13,
  badgeLetterSpacingAtBaseline: 0.65,
  badgePaddingYAtBaseline: 6,
  badgePaddingXAtBaseline: 16,
  headlineFontSizeAtBaseline: 52,
  headlineLineHeightAtBaseline: 52,
  headlineMaxWidthAtBaseline: 512,
  headlineMarginBottomAtBaseline: 32,
  badgeMarginBottomAtBaseline: 20,
  ctaPaddingYAtBaseline: 16,
  ctaPaddingXAtBaseline: 32,
  ctaFontSizeAtBaseline: 15,
  ctaLineHeightAtBaseline: 22,
  ctaGapAtBaseline: 10,
  // Decorative mark — tune size + overflow to match Figma crop at top-right.
  logoSizeAtBaseline: 260,
  logoOverflowTopAtBaseline: 40,
  logoOverflowRightAtBaseline: 48,
} as const satisfies ChatGptCtaSectionLayoutConfig;
