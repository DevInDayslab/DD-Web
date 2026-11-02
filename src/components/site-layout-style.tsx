import { heroFlanks } from "@/config/hero";
import { serializeCssCustomProperties } from "@/lib/css-vars";
import { heroMobileLayoutCssBlock } from "@/lib/hero-mobile-style";
import { headerScrollMorphToCssVars } from "@/lib/header-scroll-morph-style";
import { layoutToCssVars } from "@/lib/layout-style";
import { scalabilityMobileLayoutCssBlock } from "@/lib/scalability-mobile-style";
import { scalabilityLayoutToCssVars } from "@/lib/scalability-layout-style";
import {
  scalabilityPanelLayoutCssBlock,
  scalabilityPanelLayoutToCssVars,
} from "@/lib/scalability-panel-layout-style";
import { chatgptCtaSectionLayoutToCssVars } from "@/lib/chatgpt-cta-section-layout-style";
import { founderSectionLayoutToCssVars } from "@/lib/founder-section-layout-style";
import { faqSectionLayoutToCssVars } from "@/lib/faq-section-layout-style";
import { faqPageLayoutToCssVars } from "@/lib/faq-page-layout-style";
import { contactPageLayoutToCssVars } from "@/lib/contact-page-layout-style";
import { siteFooterLayoutToCssVars } from "@/lib/site-footer-layout-style";
import { projectQualifierLayoutToCssVars } from "@/lib/project-qualifier-layout-style";
import { pricingSectionLayoutToCssVars } from "@/lib/pricing-section-layout-style";
import { testimonialsSectionLayoutToCssVars } from "@/lib/testimonials-section-layout-style";
import {
  toolsSectionLayoutCssBlock,
  toolsSectionLayoutToCssVars,
} from "@/lib/tools-section-layout-style";
import { workSectionLayoutToCssVars } from "@/lib/work-section-layout-style";
import { portfolioPageLayoutToCssVars } from "@/lib/portfolio-page-layout-style";
import { caseStudyPageLayoutToCssVars } from "@/lib/case-study-page-layout-style";
import { caseStudyNarrativeLayoutToCssVars } from "@/lib/case-study-narrative-layout-style";

export function SiteLayoutStyle() {
  const rootVars = serializeCssCustomProperties({
    ...layoutToCssVars(),
    ...headerScrollMorphToCssVars(),
    ...scalabilityLayoutToCssVars(),
    ...scalabilityPanelLayoutToCssVars(),
    ...workSectionLayoutToCssVars(),
    ...toolsSectionLayoutToCssVars(),
    ...testimonialsSectionLayoutToCssVars(),
    ...chatgptCtaSectionLayoutToCssVars(),
    ...founderSectionLayoutToCssVars(),
    ...pricingSectionLayoutToCssVars(),
    ...faqSectionLayoutToCssVars(),
    ...faqPageLayoutToCssVars(),
    ...contactPageLayoutToCssVars(),
    ...siteFooterLayoutToCssVars(),
    ...projectQualifierLayoutToCssVars(),
    ...portfolioPageLayoutToCssVars(),
    ...caseStudyPageLayoutToCssVars(),
    ...caseStudyNarrativeLayoutToCssVars(),
  });
  const css = `:root{${rootVars}}.hero-flank{background:${heroFlanks.panel.gradient}}${heroMobileLayoutCssBlock()}${scalabilityMobileLayoutCssBlock()}${scalabilityPanelLayoutCssBlock()}${toolsSectionLayoutCssBlock()}`;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
