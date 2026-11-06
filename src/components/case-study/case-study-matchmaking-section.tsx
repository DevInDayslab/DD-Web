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
};

export function CaseStudyMatchmakingSection({ block }: CaseStudyMatchmakingSectionProps) {
  return (
    <section
      className="case-study-matchmaking-chapter"
      aria-labelledby={`narrative-${block.id}-headline`}
    >
      <div className="case-study-matchmaking-chapter-column">
        <div className="case-study-matchmaking-intro">
          <SectionIndex index={block.index} />
          <h2 id={`narrative-${block.id}-headline`} className="case-study-matchmaking-headline">
            {block.headline}
          </h2>
          <div className="case-study-matchmaking-prose">
            {block.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="case-study-matchmaking-pipeline">
          <p className="case-study-matchmaking-pipeline-eyebrow">{block.pipelineEyebrow}</p>
          <div className="case-study-matchmaking-pipeline-grid">
            {block.pipelineCards.map((card) => {
              const isHighlight = card.variant === "highlight";
              return (
                <div key={card.id} className="case-study-matchmaking-pipeline-grid-cell">
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
                </div>
              );
            })}
          </div>
          <p className="case-study-matchmaking-pipeline-footer">{block.pipelineFooter}</p>
        </div>
      </div>
    </section>
  );
}
