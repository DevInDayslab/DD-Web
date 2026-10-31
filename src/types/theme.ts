export type ThemeColors = {
  background: string;
  foreground: string;
  muted: string;
  hairline: string;
  accent: string;
  surface: string;
  inverse: string;
  ctaSecondaryBorder: string;
};

export type ThemeShadows = {
  /** Elevation scale: xs = chips/tiles, sm = cards, md = raised/floating. Light from above, no x-offset. */
  xs: string;
  sm: string;
  md: string;
  cta: string;
  ctaSecondary: string;
};

export type Theme = {
  colors: ThemeColors;
  shadows: ThemeShadows;
};
