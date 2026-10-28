import { FaqAccordion } from "@/components/faq-accordion";
import type { FaqSectionContent } from "@/types/faq-section";

type FaqSectionProps = {
  content: FaqSectionContent;
};

export function FaqSection({ content }: FaqSectionProps) {
  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-section-title">
      <div className="faq-section-inner">
        <h2 id="faq-section-title" className="faq-section-title">
          {content.title}
        </h2>
        <FaqAccordion content={content} />
      </div>
    </section>
  );
}
