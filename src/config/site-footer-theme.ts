export const siteFooterThemeColors = {
  headline: "#FFFFFF",
  subtext: "rgba(255, 255, 255, 0.8)",
  headlineTextShadow: "0 1px 1px rgba(0, 0, 0, 0.08), 0 12px 40px rgba(0, 0, 0, 0.35)",
  ctaBackground: "#FFFFFF",
  ctaText: "#14181C",
  ctaShadow: "0px 8px 30px rgba(0, 0, 0, 0.25)",
  barBorder: "rgba(255, 255, 255, 0.1)",
  brandName: "#FFFFFF",
  brandTagline: "rgba(255, 255, 255, 0.5)",
  navLink: "rgba(255, 255, 255, 0.7)",
  navSeparator: "rgba(255, 255, 255, 0.3)",
  socialLink: "rgba(255, 255, 255, 0.7)",
  socialSeparator: "rgba(255, 255, 255, 0.3)",
  copyright: "rgba(255, 255, 255, 0.5)",
} as const;

/**
 * Footer background overlays — tune opacity and stops here to match the design comp.
 * RGB is shared across scrim + gradients (default #14181C → 20, 24, 28).
 */
export const siteFooterOverlay = {
  scrimRgb: "20, 24, 28",
  /** Even wash over the full photo (raises overall contrast). */
  scrimOpacity: 0.44,
  /** Main top → bottom gradient (CTA readability). */
  gradientTopOpacity: 0.42,
  gradientMidStopPercent: 50,
  gradientMidOpacity: 0.76,
  gradientBottomOpacity: 0.94,
  /** Extra darkening band for the bottom nav / links row. */
  barBandStartPercent: 56,
  barBandMidStopPercent: 72,
  barBandMidOpacity: 0.88,
  barBandBottomOpacity: 0.98,
  /** Subtle extra tint on the link row itself (above the border). */
  barRowTintTopOpacity: 0.14,
  barRowTintBottomOpacity: 0.34,
} as const;

export const siteFooterBackground = {
  /** Desktop / large — shifts crop toward mountains (less bright sky). */
  position: "center 36%",
  /** Narrow viewports — slightly lower focal point. */
  positionMobile: "center 42%",
} as const;
