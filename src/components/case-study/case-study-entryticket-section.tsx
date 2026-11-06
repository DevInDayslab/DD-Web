import type { CaseStudyEntryTicketSectionBlock, CaseStudySectionIndex } from "@/types/case-study-narrative";

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

function Prose({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="case-study-narrative-prose">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function ChallengeUnifiedSection({
  block,
}: {
  block: Extract<CaseStudyEntryTicketSectionBlock, { variant: "challenge-unified" }>;
}) {
  const sid = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-et-challenge" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-et-unified-diagram" aria-label="Live website and native app share one booking backend">
        <div className="case-study-et-unified-surfaces">
          <div className="case-study-et-unified-surface case-study-et-unified-surface--web">
            <span className="case-study-et-unified-surface-label">Live website</span>
            <span className="case-study-et-unified-surface-sub">Bookings · events · payments</span>
          </div>
          <div className="case-study-et-unified-surface case-study-et-unified-surface--app">
            <span className="case-study-et-unified-surface-label">Native app</span>
            <span className="case-study-et-unified-surface-sub">iOS &amp; Android</span>
          </div>
        </div>
        <div className="case-study-et-unified-converge" aria-hidden>
          <span className="case-study-et-unified-arrow" />
        </div>
        <div className="case-study-et-unified-backend">
          <span className="case-study-et-unified-backend-label">PHP backend</span>
          <span className="case-study-et-unified-backend-sub">Single source of truth · booking &amp; inventory</span>
        </div>
      </div>

      <blockquote className="case-study-narrative-quote case-study-et-challenge-quote">
        <p>{block.pullQuote.quote}</p>
        <footer>{block.pullQuote.attribution}</footer>
      </blockquote>
    </section>
  );
}

function BackendSequenceSection({
  block,
}: {
  block: Extract<CaseStudyEntryTicketSectionBlock, { variant: "backend-sequence" }>;
}) {
  const sid = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-et-seq" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-et-seq-wrap" role="list" aria-label="Booking flow through the backend">
        {block.steps.map((step, i) => (
          <div
            key={step.id}
            className={
              step.highlight
                ? "case-study-et-seq-step case-study-et-seq-step--highlight"
                : "case-study-et-seq-step"
            }
            role="listitem"
          >
            {i > 0 ? <span className="case-study-et-seq-connector" aria-hidden /> : null}
            <div className="case-study-et-seq-card">
              <p className="case-study-et-seq-label">{step.label}</p>
              {step.sub ? <p className="case-study-et-seq-sub">{step.sub}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TeamHandoffSection({
  block,
}: {
  block: Extract<CaseStudyEntryTicketSectionBlock, { variant: "team-handoff" }>;
}) {
  const sid = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-et-team" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-et-team-grid">
        <div className="case-study-et-team-col case-study-et-team-col--left">
          <h3 className="case-study-et-team-title">{block.left.title}</h3>
          <ul className="case-study-et-team-list">
            {block.left.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <div className="case-study-et-team-rail" aria-hidden>
          <span className="case-study-et-team-rail-line" />
          <span className="case-study-et-team-rail-label">In sync</span>
          <span className="case-study-et-team-rail-line" />
        </div>
        <div className="case-study-et-team-col case-study-et-team-col--right">
          <h3 className="case-study-et-team-title">{block.right.title}</h3>
          <ul className="case-study-et-team-list">
            {block.right.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function DesignDualSurfaceSection({
  block,
}: {
  block: Extract<CaseStudyEntryTicketSectionBlock, { variant: "design-dual-surface" }>;
}) {
  const sid = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-et-design" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-et-design-pair">
        <div className="case-study-et-design-card case-study-et-design-card--web">
          <p className="case-study-et-design-label">{block.web.label}</p>
          <p className="case-study-et-design-tagline">{block.web.tagline}</p>
        </div>
        <div className="case-study-et-design-card case-study-et-design-card--app">
          <p className="case-study-et-design-label">{block.app.label}</p>
          <p className="case-study-et-design-tagline">{block.app.tagline}</p>
        </div>
      </div>
    </section>
  );
}

function AppFeaturesTicketSection({
  block,
}: {
  block: Extract<CaseStudyEntryTicketSectionBlock, { variant: "app-features-ticket" }>;
}) {
  const sid = `narrative-${block.id}`;
  const groupName = `et-features-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-et-app" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-et-app-split">
        <div className="case-study-et-feature-shell">
          {block.features.map((f, i) => (
            <input
              key={f.id}
              type="radio"
              name={groupName}
              value={f.id}
              id={`${sid}-feat-${f.id}`}
              className="case-study-et-feature-input"
              defaultChecked={i === 0}
            />
          ))}
          <ul className="case-study-et-app-feature-grid">
            {block.features.map((f) => (
              <li key={f.id}>
                <label htmlFor={`${sid}-feat-${f.id}`} className={`case-study-et-feature-tile case-study-et-feature-tile--${f.id}`}>
                  {f.label}
                </label>
              </li>
            ))}
          </ul>
          <div className="case-study-et-feature-detail-wrap">
            {block.features.map((f) => (
              <p key={f.id} className={`case-study-et-feature-detail case-study-et-feature-detail--${f.id}`}>
                {f.detail}
              </p>
            ))}
          </div>
        </div>
        <div className="case-study-et-phone">
          <div className="case-study-et-phone-shell">
            <div className="case-study-et-phone-notch" aria-hidden />
            <div className="case-study-et-phone-screen">
              <p className="case-study-et-ticket-venue">Event</p>
              <p className="case-study-et-ticket-title">Entry confirmed</p>
              <p className="case-study-et-ticket-meta">Sec A · Row 12 · Seat 8</p>
              <div className="case-study-et-ticket-qr" aria-hidden>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <p className="case-study-et-ticket-foot">Show at door</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LaunchLiveBannerSection({
  block,
}: {
  block: Extract<CaseStudyEntryTicketSectionBlock, { variant: "launch-live-banner" }>;
}) {
  const sid = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-et-launch" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <div className="case-study-et-live-banner" role="status">
        <span className="case-study-et-live-banner-label">{block.bannerLabel}</span>
      </div>
      <Prose paragraphs={block.paragraphs} />
    </section>
  );
}

type CaseStudyEntryTicketSectionProps = {
  block: CaseStudyEntryTicketSectionBlock;
};

export function CaseStudyEntryTicketSection({ block }: CaseStudyEntryTicketSectionProps) {
  switch (block.variant) {
    case "challenge-unified":
      return <ChallengeUnifiedSection block={block} />;
    case "backend-sequence":
      return <BackendSequenceSection block={block} />;
    case "team-handoff":
      return <TeamHandoffSection block={block} />;
    case "design-dual-surface":
      return <DesignDualSurfaceSection block={block} />;
    case "app-features-ticket":
      return <AppFeaturesTicketSection block={block} />;
    case "launch-live-banner":
      return <LaunchLiveBannerSection block={block} />;
    default: {
      const _e: never = block;
      return _e;
    }
  }
}
