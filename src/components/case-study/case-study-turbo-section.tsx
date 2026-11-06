import type { CaseStudyTurboSectionBlock, CaseStudySectionIndex } from "@/types/case-study-narrative";

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

function ProblemCompareSection({
  block,
}: {
  block: Extract<CaseStudyTurboSectionBlock, { variant: "problem-compare" }>;
}) {
  const sid = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-turbo-problem" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-turbo-compare" aria-label="Trade-off vs Turbo Supply">
        <div className="case-study-turbo-compare-card case-study-turbo-compare-card--a">
          <p className="case-study-turbo-compare-title">{block.left.title}</p>
          <p className="case-study-turbo-compare-body">{block.left.body}</p>
        </div>
        <div className="case-study-turbo-compare-vs" aria-hidden>
          vs
        </div>
        <div className="case-study-turbo-compare-card case-study-turbo-compare-card--b">
          <p className="case-study-turbo-compare-title">{block.right.title}</p>
          <p className="case-study-turbo-compare-body">{block.right.body}</p>
        </div>
      </div>
    </section>
  );
}

function SearchMockSection({
  block,
}: {
  block: Extract<CaseStudyTurboSectionBlock, { variant: "search-mock" }>;
}) {
  const sid = `narrative-${block.id}`;
  const { mock } = block;
  return (
    <section className="case-study-narrative-section case-study-turbo-challenge" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-turbo-search-mock" aria-label="Product listing mockup">
        <div className="case-study-turbo-search-result">
          <div className="case-study-turbo-search-thumb" aria-hidden />
          <div className="case-study-turbo-search-meta">
            <p className="case-study-turbo-search-part">{mock.partName}</p>
            <p className="case-study-turbo-search-spec">{mock.spec}</p>
            <div className="case-study-turbo-search-row">
              <span className="case-study-turbo-search-pill">{mock.size}</span>
              <span className="case-study-turbo-search-rating">{mock.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformsDualSection({
  block,
}: {
  block: Extract<CaseStudyTurboSectionBlock, { variant: "platforms-dual" }>;
}) {
  const sid = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-turbo-platforms" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-turbo-devices" aria-label="Android and iOS">
        <div className="case-study-turbo-device case-study-turbo-device--android">
          <div className="case-study-turbo-device-chrome" aria-hidden />
          <div className="case-study-turbo-device-screen">
            <p className="case-study-turbo-device-label">Android</p>
            <p className="case-study-turbo-device-sub">Flutter · native shell</p>
          </div>
        </div>
        <div className="case-study-turbo-device case-study-turbo-device--ios">
          <div className="case-study-turbo-device-chrome" aria-hidden />
          <div className="case-study-turbo-device-screen">
            <p className="case-study-turbo-device-label">iOS</p>
            <p className="case-study-turbo-device-sub">Flutter · native shell</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultsBannerSection({
  block,
}: {
  block: Extract<CaseStudyTurboSectionBlock, { variant: "results-banner" }>;
}) {
  const sid = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-turbo-results" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <div className="case-study-turbo-live-banner" role="status">
        <span>{block.bannerLabel}</span>
      </div>
      <Prose paragraphs={block.paragraphs} />
    </section>
  );
}

type CaseStudyTurboSectionProps = {
  block: CaseStudyTurboSectionBlock;
};

export function CaseStudyTurboSection({ block }: CaseStudyTurboSectionProps) {
  switch (block.variant) {
    case "problem-compare":
      return <ProblemCompareSection block={block} />;
    case "search-mock":
      return <SearchMockSection block={block} />;
    case "platforms-dual":
      return <PlatformsDualSection block={block} />;
    case "results-banner":
      return <ResultsBannerSection block={block} />;
    default: {
      const _e: never = block;
      return _e;
    }
  }
}
