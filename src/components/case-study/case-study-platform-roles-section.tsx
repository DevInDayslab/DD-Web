import { CaseStudySystemDiagram } from "@/components/case-study/case-study-system-diagram";
import type { CaseStudyPlatformRolesBlock, CaseStudySectionIndex } from "@/types/case-study-narrative";

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

type CaseStudyPlatformRolesSectionProps = {
  block: CaseStudyPlatformRolesBlock;
};

export function CaseStudyPlatformRolesSection({ block }: CaseStudyPlatformRolesSectionProps) {
  return (
    <section
      className="case-study-platform-roles"
      aria-labelledby={`narrative-${block.id}-headline`}
    >
      <div className="case-study-platform-roles-inner">
        <div className="case-study-platform-roles-split">
          <div className="case-study-platform-roles-copy">
            {block.index ? <SectionIndex index={block.index} /> : null}
            <p className="case-study-platform-roles-eyebrow">{block.eyebrow}</p>
            <h2 id={`narrative-${block.id}-headline`} className="case-study-platform-roles-headline">
              {block.headline}
            </h2>
            <div className="case-study-platform-roles-prose">
              {block.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="case-study-platform-roles-diagram">
            <CaseStudySystemDiagram
              headerLeft={block.diagramHeaderLeft}
              headerRight={block.diagramHeaderRight}
              tiers={block.tiers}
            />
          </div>
        </div>

        <div className="case-study-platform-roles-matrix" aria-labelledby={`narrative-${block.id}-matrix`}>
          <p id={`narrative-${block.id}-matrix`} className="case-study-platform-roles-matrix-eyebrow">
            {block.matrixEyebrow}
          </p>
          <div className="case-study-platform-matrix">
            {block.rows.map((row) => (
              <div
                key={row.id}
                className={`case-study-platform-matrix-row case-study-platform-matrix-row--${row.tone}`}
              >
                <p className="case-study-platform-matrix-label">
                  <span className="case-study-platform-matrix-dot" aria-hidden />
                  {row.label}
                </p>
                <p className="case-study-platform-matrix-body">{row.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
