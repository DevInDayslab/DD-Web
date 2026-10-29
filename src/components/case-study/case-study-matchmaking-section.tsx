import { CaseStudyScrollReveal } from "@/components/case-study/case-study-scroll-reveal";
import type { CaseStudyMatchmakingBlock, CaseStudySectionIndex } from "@/types/case-study-narrative";

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

type CaseStudyMatchmakingSectionProps = {
  block: CaseStudyMatchmakingBlock;
  revealDelay: number;
};

export function CaseStudyMatchmakingSection({ block, revealDelay }: CaseStudyMatchmakingSectionProps) {
  return (
    <section
      className="case-study-matchmaking-chapter"
      aria-labelledby={`narrative-${block.id}-headline`}
    >
      <div className="case-study-matchmaking-chapter-column">
        <CaseStudyScrollReveal className="case-study-matchmaking-intro" delay={revealDelay}>
          <SectionIndex index={block.index} />
          <h2 id={`narrative-${block.id}-headline`} className="case-study-matchmaking-headline">
            {block.headline}
          </h2>
          <div className="case-study-matchmaking-prose">
            {block.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}
          </div>
        </CaseStudyScrollReveal>

        <div className="case-study-matchmaking-pipeline">
          <CaseStudyScrollReveal delay={revealDelay + 0.08}>
            <p className="case-study-matchmaking-pipeline-eyebrow">{block.pipelineEyebrow}</p>
          </CaseStudyScrollReveal>
          <div className="case-study-matchmaking-pipeline-grid">
            {block.pipelineCards.map((card, cardIndex) => {
              const isHighlight = card.variant === "highlight";
              return (
                <CaseStudyScrollReveal
                  key={card.id}
                  className="case-study-matchmaking-pipeline-grid-cell"
                  delay={revealDelay + 0.1 + cardIndex * 0.05}
                >
                  <article
                    className={`case-study-matchmaking-pipeline-card${
                      isHighlight ? " case-study-matchmaking-pipeline-card--highlight" : ""
                    }`}
                  >
                    <div
                      className={`case-study-matchmaking-pipeline-card-meta${
                        isHighlight ? " case-study-matchmaking-pipeline-card-meta--highlight" : ""
                      }`}
                    >
                      <span>{card.passLabel}</span>
                      <span>{card.categoryLabel}</span>
                    </div>
                    <p className="case-study-matchmaking-pipeline-card-title">{card.title}</p>
                    <p className="case-study-matchmaking-pipeline-card-description">
                      {card.description}
                    </p>
                  </article>
                </CaseStudyScrollReveal>
              );
            })}
          </div>
          <CaseStudyScrollReveal delay={revealDelay + 0.2}>
            <p className="case-study-matchmaking-pipeline-footer">{block.pipelineFooter}</p>
          </CaseStudyScrollReveal>
        </div>
      </div>
    </section>
  );
}
