export type ThemeColors = {
  background: string;
  foreground: string;
  muted: string;
  hairline: string;
  accent: string;
  surface: string;
  inverse: string;
};

export type ThemeShadows = {
  cta: string;
};

export type Theme = {
  colors: ThemeColors;
  shadows: ThemeShadows;
};
