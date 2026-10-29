import { CaseStudyScrollReveal } from "@/components/case-study/case-study-scroll-reveal";
import { CaseStudySystemDiagram } from "@/components/case-study/case-study-system-diagram";
import type { CaseStudyPlatformRolesBlock } from "@/types/case-study-narrative";

type CaseStudyPlatformRolesSectionProps = {
  block: CaseStudyPlatformRolesBlock;
  revealDelay: number;
};

export function CaseStudyPlatformRolesSection({ block, revealDelay }: CaseStudyPlatformRolesSectionProps) {
  return (
    <section
      className="case-study-platform-roles"
      aria-labelledby={`narrative-${block.id}-headline`}
    >
      <div className="case-study-platform-roles-inner">
        <div className="case-study-platform-roles-split">
          <CaseStudyScrollReveal className="case-study-platform-roles-copy" delay={revealDelay}>
            <p className="case-study-platform-roles-eyebrow">{block.eyebrow}</p>
            <h2 id={`narrative-${block.id}-headline`} className="case-study-platform-roles-headline">
              {block.headline}
            </h2>
            <div className="case-study-platform-roles-prose">
              {block.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
            </div>
          </CaseStudyScrollReveal>

          <CaseStudyScrollReveal className="case-study-platform-roles-diagram" delay={revealDelay + 0.08}>
            <CaseStudySystemDiagram
              headerLeft={block.diagramHeaderLeft}
              headerRight={block.diagramHeaderRight}
              tiers={block.tiers}
            />
          </CaseStudyScrollReveal>
        </div>

        <div className="case-study-platform-roles-matrix" aria-labelledby={`narrative-${block.id}-matrix`}>
          <CaseStudyScrollReveal delay={revealDelay + 0.12}>
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
          </CaseStudyScrollReveal>
        </div>
      </div>
    </section>
  );
}
