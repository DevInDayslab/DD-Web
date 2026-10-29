import { CaseStudyScrollReveal } from "@/components/case-study/case-study-scroll-reveal";
import type { CaseStudyTechStripBlock } from "@/types/case-study-narrative";

type CaseStudyTechStripSectionProps = {
  block: CaseStudyTechStripBlock;
  revealDelay: number;
};

export function CaseStudyTechStripSection({ block, revealDelay }: CaseStudyTechStripSectionProps) {
  return (
    <section className="case-study-stack-strip" aria-label={block.ariaLabel ?? "Technical stack"}>
      <CaseStudyScrollReveal className="case-study-stack-strip-inner" delay={revealDelay}>
        <ul className="case-study-stack-strip-list">
          {block.items.map((item, itemIndex) => (
            <li key={`${itemIndex}-${item}`} className="case-study-stack-strip-item">
              {item}
            </li>
          ))}
        </ul>
      </CaseStudyScrollReveal>
    </section>
  );
}
