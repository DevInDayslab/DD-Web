import { heroFlanks } from "@/config/hero";
import { serializeCssCustomProperties } from "@/lib/css-vars";
import { heroMobileLayoutCssBlock } from "@/lib/hero-mobile-style";
import { layoutToCssVars } from "@/lib/layout-style";
import { scalabilityMobileLayoutCssBlock } from "@/lib/scalability-mobile-style";
import { scalabilityLayoutToCssVars } from "@/lib/scalability-layout-style";

export function SiteLayoutStyle() {
  const rootVars = serializeCssCustomProperties({
    ...layoutToCssVars(),
    ...scalabilityLayoutToCssVars(),
  });
  const css = `:root{${rootVars}}.hero-flank{background:${heroFlanks.panel.gradient}}${heroMobileLayoutCssBlock()}${scalabilityMobileLayoutCssBlock()}`;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
