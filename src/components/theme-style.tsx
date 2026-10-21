import { themeToCssVars } from "@/lib/theme-style";
import type { Theme } from "@/types";

type ThemeStyleProps = {
  theme: Theme;
};

export function ThemeStyle({ theme }: ThemeStyleProps) {
  const vars = themeToCssVars(theme);
  const css = `:root{${Object.entries(vars)
    .map(([key, value]) => `${key}:${value}`)
    .join(";")}}`;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
