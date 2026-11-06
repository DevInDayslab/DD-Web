import type { CaseStudySectionIndex, CaseStudyTechStripBlock } from "@/types/case-study-narrative";

function SectionIndex({ index }: { index: CaseStudySectionIndex }) {
  return (
    <p className="case-study-narrative-index">
      <span>{index.number}</span>
      <span className="case-study-narrative-index-sep" aria-hidden>
        /
      </span>
      <span>{index.title}</span>
    </p>
  );
}

type CaseStudyTechStripSectionProps = {
  block: CaseStudyTechStripBlock;
};

export function CaseStudyTechStripSection({ block }: CaseStudyTechStripSectionProps) {
  return (
    <section className="case-study-stack-strip" aria-label={block.ariaLabel ?? "Technical stack"}>
      <div className="case-study-stack-strip-inner">
        {block.index ? <SectionIndex index={block.index} /> : null}
        <ul className="case-study-stack-strip-list">
          {block.items.map((item, itemIndex) => (
            <li key={`${itemIndex}-${item}`} className="case-study-stack-strip-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
