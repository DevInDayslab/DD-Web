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
  cta: string;
  ctaSecondary: string;
};

export type Theme = {
  colors: ThemeColors;
  shadows: ThemeShadows;
};
