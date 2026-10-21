import type { Theme, ThemeColors, ThemeShadows } from "@/types";

function toKebabCase(value: string): string {
  return value.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
}

export function themeToCssVars(theme: Theme): Record<string, string> {
  const vars: Record<string, string> = {};

  (Object.keys(theme.colors) as Array<keyof ThemeColors>).forEach((key) => {
    vars[`--dd-color-${toKebabCase(key)}`] = theme.colors[key];
  });

  (Object.keys(theme.shadows) as Array<keyof ThemeShadows>).forEach((key) => {
    vars[`--dd-shadow-${toKebabCase(key)}`] = theme.shadows[key];
  });

  return vars;
}
