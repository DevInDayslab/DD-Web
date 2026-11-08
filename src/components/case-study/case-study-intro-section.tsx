import { CaseStudyLineArt } from "@/components/case-study/case-study-line-art";
import type { CaseStudyPageIntro } from "@/types/case-study-page";

type CaseStudyIntroSectionProps = {
  intro: CaseStudyPageIntro;
  slug: string;
};

export function CaseStudyIntroSection({ intro, slug }: CaseStudyIntroSectionProps) {
  const { breadcrumb } = intro;

  return (
    <section className="case-study-intro" aria-labelledby="case-study-page-title">
      <div className="case-study-intro-inner">
        <div className="cs-intro-copy">
        <p className="case-study-breadcrumb">
          <span>{breadcrumb.projectName}</span>
          <span className="case-study-breadcrumb-dot" aria-hidden />
          <span>{breadcrumb.industry}</span>
        </p>
        <h1 id="case-study-page-title" className="case-study-intro-title">
          {intro.headlineLines.map((line, index) => (
            <span key={index} className="case-study-intro-title-line">
              {index > 0 ? (
                <>
                  <br />
                  {line}
                </>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>
        <p className="case-study-intro-subhead">{intro.subhead}</p>
        </div>
        <CaseStudyLineArt slug={slug} className="cs-intro-art" />
      </div>
    </section>
  );
}
