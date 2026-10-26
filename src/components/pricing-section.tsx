import { PricingTierShowcase } from "@/components/pricing-tier-showcase";
import type { PricingSectionContent } from "@/types/pricing-section";

type PricingSectionProps = {
  content: PricingSectionContent;
};

export function PricingSection({ content }: PricingSectionProps) {
  return (
    <section className="pricing-section" aria-labelledby="pricing-section-title">
      <div className="pricing-section-inner">
        <header className="pricing-section-header">
          <h2 id="pricing-section-title" className="pricing-section-title">
            {content.title}
          </h2>
          <p className="pricing-section-subtitle">{content.subtitle}</p>
        </header>

        <PricingTierShowcase content={content} />
      </div>
    </section>
  );
}
