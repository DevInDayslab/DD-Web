import Link from "next/link";
import { HomeHero } from "@/components/home-hero";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/config/site";
import { ScalabilitySection } from "@/components/scalability-section";
import { ChatGptCtaSection } from "@/components/chatgpt-cta-section";
import { FounderSection } from "@/components/founder-section";
import { FaqSection } from "@/components/faq-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ToolsSection } from "@/components/tools-section";
import { WorkSection } from "@/components/work-section";
import { scalabilitySectionContent } from "@/content/scalability-section";
import { chatgptCtaSectionContent } from "@/content/chatgpt-cta-section";
import { founderSectionContent } from "@/content/founder-section";
import { faqSectionContent } from "@/content/faq-section";
import { pricingSectionContent } from "@/content/pricing-section";
import { testimonialsSectionContent } from "@/content/testimonials-section";
import { toolsSectionContent } from "@/content/tools-section";
import { workSectionContent, workSectionUiCopy } from "@/content/work-section";
import { faqPageJsonLd } from "@/lib/schema";

export function HomePage() {
  return (
    <div className="home-page">
      <JsonLd data={faqPageJsonLd(site, faqSectionContent.items)} />
      <HomeHero />
      <ScalabilitySection content={scalabilitySectionContent} />
      <WorkSection
        content={workSectionContent}
        phonePlaceholderLabel={workSectionUiCopy.phonePlaceholderLabel}
      />
      <ToolsSection content={toolsSectionContent} />
      <TestimonialsSection content={testimonialsSectionContent} />
      <ChatGptCtaSection content={chatgptCtaSectionContent} />
      <FounderSection content={founderSectionContent} />
      <PricingSection content={pricingSectionContent} />
      <FaqSection content={faqSectionContent} />
      <div className="home-mobile-faq-link">
        <p className="home-mobile-faq-title">Still have questions?</p>
        <p className="home-mobile-faq-text">Pricing, timelines, ownership and how we work are all answered.</p>
        <Link href="/faq" className="home-mobile-faq-button">
          Read the FAQ
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
