import Link from "next/link";
import type {
  CaseStudyLaunchBlock,
  CaseStudyLaunchStoreBadge,
  CaseStudySectionIndex,
} from "@/types/case-study-narrative";

function SectionIndex({ index }: { index: CaseStudySectionIndex }) {
  return (
    <p className="case-study-narrative-index case-study-launch-index">
      <span>{index.number}</span>
      <span className="case-study-narrative-index-sep" aria-hidden>
        /
      </span>
      <span>{index.title}</span>
    </p>
  );
}

function StorePlatformIcon({ platform }: { platform: CaseStudyLaunchStoreBadge["platform"] }) {
  if (platform === "ios") {
    return (
      <svg
        className="case-study-launch-badge-icon"
        width="15"
        height="12"
        viewBox="0 0 15 12"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M12.02 6.32c-.02-2.14 1.75-3.17 1.83-3.22-1-.46-1.72-.53-2.1-.54-1.12-.11-2.19.66-2.76.66-.58 0-1.47-.64-2.42-.62-1.24.02-2.39.72-3.03 1.83-1.29 2.24-.33 5.56.93 7.38.62.9 1.36 1.91 2.33 1.87.94-.04 1.29-.6 2.42-.6 1.13 0 1.45.6 2.44.58 1.01-.02 1.65-.92 2.26-1.83.71-1.04 1-2.04 1.02-2.09-.02-.01-1.96-.75-1.98-2.98ZM10.5.96c.52-.63.87-1.5.77-2.37-.75.03-1.66.5-2.2 1.13-.48.56-.9 1.45-.79 2.31.84.06 1.7-.43 2.22-1.07Z"
        />
      </svg>
    );
  }

  return (
    <svg
      className="case-study-launch-badge-icon"
      width="17"
      height="10"
      viewBox="0 0 17 10"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M1.02.38 9.5 5.5 1.02 10.62A1.1 1.1 0 0 1 0 9.72V.28A1.1 1.1 0 0 1 1.02.38ZM11.2 7.1l1.58.9c.5.28.5.98 0 1.26l-1.4.81-1.58-.9L11.2 7.1Zm2.38-4.1 1.4.81c.5.28.5.98 0 1.26l-6.48 3.74-1.58-.9 6.66-3.91Z"
      />
    </svg>
  );
}

function LaunchStoreBadge({ badge }: { badge: CaseStudyLaunchStoreBadge }) {
  const className = "case-study-launch-badge";
  const content = (
    <>
      <StorePlatformIcon platform={badge.platform} />
      <span className="case-study-launch-badge-label">{badge.label}</span>
      <span className="case-study-launch-badge-meta">{badge.meta}</span>
    </>
  );

  if (badge.href) {
    return (
      <Link href={badge.href} className={className} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  return <span className={className}>{content}</span>;
}

type CaseStudyLaunchSectionProps = {
  block: CaseStudyLaunchBlock;
};

export function CaseStudyLaunchSection({ block }: CaseStudyLaunchSectionProps) {
  return (
    <section
      className="case-study-launch-section"
      aria-labelledby={`narrative-${block.id}-headline`}
    >
      <div className="case-study-launch-inner">
        <div className="case-study-launch-hero">
          <SectionIndex index={block.index} />
          <h2 id={`narrative-${block.id}-headline`} className="case-study-launch-headline">
            {block.headline}
          </h2>
          <p className="case-study-launch-subhead">{block.subhead}</p>
          <div className="case-study-launch-badges">
            {block.storeBadges.map((badge) => (
              <LaunchStoreBadge key={badge.id} badge={badge} />
            ))}
          </div>
        </div>

        <div className="case-study-launch-viewports">
          {block.viewports.map((viewport) => (
            <div key={viewport.id} className="case-study-launch-viewport">
              <header className="case-study-launch-viewport-header">
                <span>{viewport.screenLabel}</span>
                <span>{viewport.title}</span>
              </header>
              <div className="case-study-launch-viewport-shell">
                <div
                  className="case-study-launch-viewport-slot case-study-narrative-visual-placeholder"
                  role="img"
                  aria-label={viewport.placeholderLabel}
                >
                  <span>{viewport.placeholderLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
