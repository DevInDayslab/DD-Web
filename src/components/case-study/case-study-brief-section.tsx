import Link from "next/link";
import { CaseStudyVideoSlot } from "@/components/case-study/case-study-video-slot";
import type { CaseStudyPageBrief } from "@/types/case-study-page";

type CaseStudyBriefSectionProps = {
  brief: CaseStudyPageBrief;
  portraitPlaceholderLabel: string;
};

export function CaseStudyBriefSection({
  brief,
  portraitPlaceholderLabel,
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

        <dl className="case-study-spec-table">
          {brief.specRows.map((row) => (
            <div key={row.id} className="case-study-spec-row">
              <dt className="case-study-spec-label">{row.label}</dt>
              <dd className="case-study-spec-value">
                {row.href ? (
                  <Link href={row.href} className="case-study-spec-link">
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
