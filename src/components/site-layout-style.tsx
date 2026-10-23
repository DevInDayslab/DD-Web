import { heroFlanks } from "@/config/hero";
import { serializeCssCustomProperties } from "@/lib/css-vars";
import { layoutToCssVars } from "@/lib/layout-style";

export function SiteLayoutStyle() {
  const rootVars = serializeCssCustomProperties(layoutToCssVars());
  const css = `:root{${rootVars}}.hero-flank{background:${heroFlanks.panel.gradient}}`;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
