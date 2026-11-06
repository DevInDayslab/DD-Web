import type { CaseStudyPageIntro } from "@/types/case-study-page";

type CaseStudyIntroSectionProps = {
  intro: CaseStudyPageIntro;
};

export function CaseStudyIntroSection({ intro }: CaseStudyIntroSectionProps) {
  const { breadcrumb } = intro;
  const isTurboTimer = intro.heroAccent?.variant === "turbo-timer";
  const accent = intro.heroAccent;

  return (
    <section
      className={isTurboTimer ? "case-study-intro case-study-intro--turbo" : "case-study-intro"}
      aria-labelledby="case-study-page-title"
    >
      <div className={isTurboTimer ? "case-study-intro-inner case-study-intro-inner--turbo" : "case-study-intro-inner"}>
        <p className="case-study-breadcrumb">
          <span>{breadcrumb.projectName}</span>
          <span className="case-study-breadcrumb-dot" aria-hidden />
          <span>{breadcrumb.industry}</span>
        </p>
        {isTurboTimer ? (
          <div className="case-study-intro-turbo-headline-row">
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
            {accent?.variant === "turbo-timer" ? (
              <div className="case-study-turbo-hero-timer" aria-label={`${accent.value} ${accent.unit} delivery`}>
                <span className="case-study-turbo-hero-timer-ring" aria-hidden />
                <div className="case-study-turbo-hero-timer-inner">
                  <span className="case-study-turbo-hero-timer-value">{accent.value}</span>
                  <span className="case-study-turbo-hero-timer-unit">{accent.unit}</span>
                </div>
              </div>
            ) : null}
          </div>
        ) : (
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
        )}
        <p className="case-study-intro-subhead">{intro.subhead}</p>
      </div>
    </section>
  );
}
