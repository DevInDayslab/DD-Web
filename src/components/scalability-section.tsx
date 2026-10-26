import { ScalabilityPanel } from "@/components/scalability-panel";
import type { ScalabilitySectionContent } from "@/types/scalability-section";

type ScalabilitySectionProps = {
  content: ScalabilitySectionContent;
};

export function ScalabilitySection({ content }: ScalabilitySectionProps) {
  const { eyebrow, headline, paragraphs, emphasis } = content;

  return (
    <section className="scalability-section" aria-labelledby="scalability-headline">
      <div className="scalability-section-inner">
        <div className="scalability-eyebrow-wrap">
          <p className="scalability-eyebrow">{eyebrow}</p>
        </div>

        <h2 id="scalability-headline" className="scalability-headline">{headline}</h2>

        <div className="scalability-body">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "scalability-paragraph scalability-paragraph-narrow"
                  : "scalability-paragraph"
              }
            >
              {paragraph}
            </p>
          ))}
          <p className="scalability-emphasis">{emphasis}</p>
        </div>

        <ScalabilityPanel content={content} />
      </div>
    </section>
  );
}
