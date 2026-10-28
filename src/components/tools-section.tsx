import { ToolsStackMarquee } from "@/components/tools-stack-marquee";
import type { ToolsSectionContent } from "@/types/tools-section";

type ToolsSectionProps = {
  content: ToolsSectionContent;
};

export function ToolsSection({ content }: ToolsSectionProps) {
  const { eyebrow, headline } = content;

  return (
    <section className="tools-section" aria-labelledby="tools-section-headline">
      <div className="tools-section-inner">
        <p className="tools-section-eyebrow">{eyebrow}</p>
        <h2 id="tools-section-headline" className="tools-section-headline">
          <span>{headline.lineOne}</span>
          <span>{headline.lineTwo}</span>
        </h2>
        <ToolsStackMarquee content={content} />
      </div>
    </section>
  );
}
