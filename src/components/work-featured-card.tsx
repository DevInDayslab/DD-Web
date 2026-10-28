import Link from "next/link";
import type { WorkFeaturedCaseStudy } from "@/types/work-section";

type WorkFeaturedCardProps = {
  caseStudy: WorkFeaturedCaseStudy;
  phonePlaceholderLabel: string;
};

export function WorkFeaturedCard({ caseStudy, phonePlaceholderLabel }: WorkFeaturedCardProps) {
  const ctaInner = (
    <>
      <span>{caseStudy.ctaLabel}</span>
      <span className="work-featured-cta-icon" aria-hidden>
        <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 7L7 1M7 1H2.5M7 1V5.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  );

  return (
    <article className="work-featured-card" aria-labelledby={`work-featured-title-${caseStudy.id}`}>
      <div className="work-featured-card-main">
        <div className="work-featured-card-copy">
          <p className="work-featured-badge">{caseStudy.category}</p>
          <h3 id={`work-featured-title-${caseStudy.id}`} className="work-featured-title">
            {caseStudy.title}
          </h3>
          <p className="work-featured-body">{caseStudy.body}</p>

          <div className="work-featured-tags-block">
            <ul className="work-featured-tags">
              {caseStudy.tags.map((tag) => (
                <li key={tag}>
                  <span className="work-featured-tag">{tag}</span>
                </li>
              ))}
            </ul>
          </div>

          {caseStudy.ctaHref ? (
            <Link href={caseStudy.ctaHref} className="work-featured-cta">
              {ctaInner}
            </Link>
          ) : (
            <button type="button" className="work-featured-cta">
              {ctaInner}
            </button>
          )}
        </div>

        <div
          className="work-featured-phone"
          role="img"
          aria-label={phonePlaceholderLabel}
        />
      </div>
    </article>
  );
}
