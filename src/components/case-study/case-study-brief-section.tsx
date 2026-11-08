import Link from "next/link";
import { CaseStudyLineArt } from "@/components/case-study/case-study-line-art";
import { CaseStudyStoreBadges } from "@/components/case-study/case-study-store-badges";
import { CaseStudyVideoSlot } from "@/components/case-study/case-study-video-slot";
import type { CaseStudyPageBrief } from "@/types/case-study-page";

type CaseStudyBriefSectionProps = {
  brief: CaseStudyPageBrief;
  portraitPlaceholderLabel: string;
  slug: string;
  appName: string;
  fallbackHref?: string;
};

export function CaseStudyBriefSection({
  brief,
  portraitPlaceholderLabel,
  slug,
  appName,
  fallbackHref,
}: CaseStudyBriefSectionProps) {
  return (
    <section className="case-study-brief" aria-label="Project overview">
      <div className="case-study-brief-copy">
        {brief.storeLinks.length > 0 ? (
          <ul className="case-study-store-links">
            {brief.storeLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="case-study-store-link"
                  {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span className="case-study-store-link-eyebrow">{link.eyebrow}</span>
                  <span className="case-study-store-link-label">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="cs-download-card">
          <p className="cs-download-eyebrow">Download this app</p>
          <p className="cs-download-title">See {appName} on your phone.</p>
          <CaseStudyStoreBadges slug={slug} appName={appName} fallbackHref={fallbackHref} />
        </div>

        <dl className="case-study-spec-table">
          {brief.specRows.map((row) => (
            <div key={row.id} className="case-study-spec-row" data-spec={row.id}>
              <dt className="case-study-spec-label">{row.label}</dt>
              <dd className="case-study-spec-value">
                {row.href ? (
                  <Link
                    href={row.href}
                    className="case-study-spec-link"
                    {...(row.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {row.value}
                  </Link>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="case-study-brief-media">
        <CaseStudyLineArt slug={slug} className="cs-stage-art" />
        <div className="case-study-phone-shell">
          <CaseStudyVideoSlot
            variant="portrait"
            video={brief.portraitVideo}
            placeholderLabel={portraitPlaceholderLabel}
            className="case-study-phone-screen"
          />
        </div>
      </div>
    </section>
  );
}
