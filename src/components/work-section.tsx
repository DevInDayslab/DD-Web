import { WorkSectionShowcase } from "@/components/work-section-showcase";
import type { WorkSectionContent } from "@/types/work-section";

type WorkSectionProps = {
  content: WorkSectionContent;
  phonePlaceholderLabel: string;
};

export function WorkSection({ content, phonePlaceholderLabel }: WorkSectionProps) {
  const { headline, subtitle } = content;

  return (
    <section id="case-studies" className="work-section" aria-labelledby="work-section-headline">
      <div className="work-section-inner">
        <header className="work-section-header">
          <h2 id="work-section-headline" className="work-section-headline">
            <span>{headline.before}</span>
            <em>{headline.italic}</em>
          </h2>
          <p className="work-section-subtitle">{subtitle}</p>
        </header>

        <WorkSectionShowcase content={content} phonePlaceholderLabel={phonePlaceholderLabel} />
      </div>
    </section>
  );
}
