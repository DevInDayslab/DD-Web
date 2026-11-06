import type {
  CaseStudyReductionCard,
  CaseStudyReductionWireframeV1,
  CaseStudyReductionWireframeV2,
} from "@/types/case-study-narrative";

export function ReductionMockupV1({ wireframe }: { wireframe: CaseStudyReductionWireframeV1 }) {
  return (
    <div className="case-study-reduction-mockup case-study-reduction-mockup--v1" aria-hidden>
      <div className="case-study-reduction-mockup-screen">
        <div className="case-study-reduction-mockup-screen-bar">
          <span>{wireframe.screenEyebrow}</span>
          <span className="case-study-reduction-mockup-badge case-study-reduction-mockup-badge--alert">
            {wireframe.alertBadge}
          </span>
        </div>
        <div className="case-study-reduction-mockup-chrome">
          <span className="case-study-reduction-mockup-line case-study-reduction-mockup-line--lg" />
          <span className="case-study-reduction-mockup-line case-study-reduction-mockup-line--md" />
          <div className="case-study-reduction-mockup-avatars">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="case-study-reduction-mockup-actions">
          {wireframe.footerButtons.map((label, buttonIndex) => (
            <span
              key={`${buttonIndex}-${label}`}
              className={
                label.toLowerCase().includes("pass")
                  ? "case-study-reduction-mockup-pill case-study-reduction-mockup-pill--alert"
                  : label.toLowerCase().includes("like")
                    ? "case-study-reduction-mockup-pill case-study-reduction-mockup-pill--accent"
                    : "case-study-reduction-mockup-pill"
              }
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ReductionMockupV2({ wireframe }: { wireframe: CaseStudyReductionWireframeV2 }) {
  return (
    <div className="case-study-reduction-mockup case-study-reduction-mockup--v2" aria-hidden>
      <div className="case-study-reduction-mockup-screen">
        <div className="case-study-reduction-mockup-screen-top">
          <span className="case-study-reduction-mockup-brand">{wireframe.brand}</span>
          <span className="case-study-reduction-mockup-mode">{wireframe.mode}</span>
        </div>
        <div className="case-study-reduction-mockup-essay">
          <span className="case-study-reduction-mockup-essay-label">{wireframe.essayLabel}</span>
          <p className="case-study-reduction-mockup-essay-quote">{wireframe.quote}</p>
        </div>
        <div className="case-study-reduction-mockup-screen-foot">
          <span>
            {wireframe.footerLabel}
            <span aria-hidden> →</span>
          </span>
          <span className="case-study-reduction-mockup-dot" />
        </div>
      </div>
    </div>
  );
}

type CaseStudyReductionCardViewProps = {
  card: CaseStudyReductionCard;
};

export function CaseStudyReductionCardView({ card }: CaseStudyReductionCardViewProps) {
  return (
    <article
      className={`case-study-reduction-card case-study-reduction-card--${card.variant}`}
    >
      <header className="case-study-reduction-card-header">
        <span
          className={
            card.variant === "v1"
              ? "case-study-reduction-card-header-left case-study-reduction-card-header-left--alert"
              : "case-study-reduction-card-header-left case-study-reduction-card-header-left--accent"
          }
        >
          {card.headerLeft}
        </span>
        <span className="case-study-reduction-card-header-right">{card.headerRight}</span>
      </header>
      {card.wireframe.kind === "v1" ? (
        <ReductionMockupV1 wireframe={card.wireframe} />
      ) : (
        <ReductionMockupV2 wireframe={card.wireframe} />
      )}
      <p className="case-study-reduction-card-caption">{card.caption}</p>
    </article>
  );
}
