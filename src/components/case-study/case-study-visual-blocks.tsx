import { CaseStudyScrollReveal } from "@/components/case-study/case-study-scroll-reveal";
import type {
  CaseStudyOptionsBlock,
  CaseStudyStatsBlock,
  CaseStudyStepsBlock,
} from "@/types/case-study-narrative";

export function CaseStudyStatsSection({ block }: { block: CaseStudyStatsBlock }) {
  return (
    <section className="cs-stats" aria-label="Project at a glance">
      <CaseStudyScrollReveal>
        <dl className="cs-stats-grid">
          {block.items.map((item) => (
            <div key={item.label} className="cs-stat">
              <dt className="cs-stat-label">{item.label}</dt>
              <dd className="cs-stat-value">{item.value}</dd>
            </div>
          ))}
        </dl>
      </CaseStudyScrollReveal>
    </section>
  );
}

export function CaseStudyOptionsSection({ block }: { block: CaseStudyOptionsBlock }) {
  return (
    <section className="case-study-narrative-section" aria-labelledby={`narrative-${block.id}`}>
      <CaseStudyScrollReveal>
        <p id={`narrative-${block.id}`} className="case-study-narrative-eyebrow">
          {block.eyebrow}
        </p>
        <h2 className="case-study-narrative-headline">{block.headline}</h2>
      </CaseStudyScrollReveal>
      <CaseStudyScrollReveal>
        <ul className="cs-options">
          {block.items.map((item) => (
            <li key={item.id} className={`cs-option cs-option--${item.tone}`}>
              <span className="cs-option-tag">{item.tag}</span>
              <h3 className="cs-option-title">{item.title}</h3>
              <p className="cs-option-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </CaseStudyScrollReveal>
    </section>
  );
}

export function CaseStudyStepsSection({ block }: { block: CaseStudyStepsBlock }) {
  return (
    <section className="case-study-narrative-section" aria-labelledby={`narrative-${block.id}`}>
      <CaseStudyScrollReveal>
        <p id={`narrative-${block.id}`} className="case-study-narrative-eyebrow">
          {block.eyebrow}
        </p>
        <h2 className="case-study-narrative-headline">{block.headline}</h2>
      </CaseStudyScrollReveal>
      <CaseStudyScrollReveal>
        <ol className="cs-steps">
          {block.items.map((item, index) => (
            <li key={item.title} className="cs-step">
              <span className="cs-step-number" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="cs-step-title">{item.title}</h3>
                <p className="cs-step-body">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </CaseStudyScrollReveal>
    </section>
  );
}

