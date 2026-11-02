import type { NavItem, RouteDefinition } from "@/types";
import type { HeaderScrollMorphConfig } from "@/types/header-scroll-morph";

export const routes = [
  {
    id: "home",
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    id: "case-studies",
    path: "/case-studies",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    id: "faq",
    path: "/faq",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    id: "contact",
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.85,
  },
] as const satisfies readonly RouteDefinition[];

export const navigation: NavItem[] = [
  { id: "case-studies", label: "Case Studies", href: "/case-studies" },
  { id: "faqs", label: "FAQs", href: "/faq" },
  { id: "about", label: "About", href: "/#about" },
  { id: "contact", label: "Contact", href: "/contact" },
];

/**
 * Scroll-linked header → floating pill morph (Rainbrand-style).
 * Tune threshold, spring, and pill geometry here — wired via CSS vars + `Header`.
 */
export const headerScrollMorph = {
  /** Progress at/above this value sets `data-floating` on the pill bar. */
  floatingActiveProgress: 0.88,
  scrollThresholdPx: 28,
  scrollRangePx: 160,
  spring: {
    stiffness: 260,
    damping: 34,
    mass: 0.95,
  },
  scrollUpFollowsScrollTarget: true,
  pillMaxWidthAtBaseline: 920,
  /** Horizontal margin from viewport edges when floating (pill stays centered). */
  pillInsetInlineAtBaseline: 28,
  /** Inner padding left/right inside the white pill. */
  pillPaddingInlineAtBaseline: 18,
  /** Gap between top of viewport and floating pill (shell `padding-top`, scroll-linked). */
  pillTopInsetAtBaseline: 16,
  /** Total bar height when fully morphed (Rainbrand ~56px). */
  pillBarHeightAtBaseline: 56,
  pillBorderRadiusAtBaseline: 9999,
  barCtaHeightAtBaseline: 44,
  pillCtaHeightAtBaseline: 32,
  barCtaPaddingInlineAtBaseline: 36,
  pillCtaPaddingInlineAtBaseline: 16,
  barCtaFontSizeAtBaseline: 13,
  pillCtaFontSizeAtBaseline: 12,
  barBrandFontSizeAtBaseline: 22,
  barBrandLineHeightAtBaseline: 28,
  pillBrandFontSizeAtBaseline: 20,
  pillBrandLineHeightAtBaseline: 24,
  pillNavLinkPaddingBlockAtBaseline: 2,
  brandScaleAtFloat: 0.98,
  edgeItemOpacityMinDuringMorph: 0.88,
  pillShadowAtRest: "0 0 0 rgba(17, 22, 27, 0)",
  pillShadowAtFloat: "0 10px 40px rgba(17, 22, 27, 0.1), 0 2px 8px rgba(17, 22, 27, 0.06)",
  shellBackdropBlurPx: 12,
  pillBackdropBlurPx: 18,
} as const satisfies HeaderScrollMorphConfig;
