"use client";

import Link from "next/link";
import { CaseStudyStoreBadges } from "@/components/case-study/case-study-store-badges";
import type { CaseStudyPageFooter, CaseStudyPageFooterNavLink } from "@/types/case-study-page";

type CaseStudyPageFooterSectionProps = {
  footer: CaseStudyPageFooter;
  slug: string;
  appName: string;
};

function SiblingNavLink({
  link,
  direction,
}: {
  link: CaseStudyPageFooterNavLink;
  direction: "previous" | "next";
}) {
  const href = `/case-studies/${link.slug}`;
  const label = link.label.toUpperCase();

  if (direction === "previous") {
    return (
      <Link href={href} className="case-study-page-footer-sibling-link">
        <span className="case-study-page-footer-sibling-arrow" aria-hidden>
          ←
        </span>
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <Link href={href} className="case-study-page-footer-sibling-link">
      <span>{label}</span>
      <span className="case-study-page-footer-sibling-arrow" aria-hidden>
        →
      </span>
    </Link>
  );
}

export function CaseStudyPageFooterSection({ footer, slug, appName }: CaseStudyPageFooterSectionProps) {
  const liveLinkProps = footer.liveExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" as const }
    : {};

  return (
    <footer className="case-study-page-footer" aria-label="Case study footer">
      <div className="cs-footer-download">
        <div>
          <p className="case-study-page-footer-archive-eyebrow">Download this app</p>
          <p className="cs-footer-download-title">Take {appName} for a spin.</p>
        </div>
        <CaseStudyStoreBadges slug={slug} appName={appName} fallbackHref={footer.liveHref} />
      </div>

      <div className="case-study-page-footer-archive">
        <div className="case-study-page-footer-live">
          <p className="case-study-page-footer-archive-eyebrow">{footer.archiveEyebrow}</p>
          {footer.liveHref ? (
            <a href={footer.liveHref} className="case-study-page-footer-live-link" {...liveLinkProps}>
              {footer.liveLabel}
            </a>
          ) : (
            <p className="case-study-page-footer-live-link">{footer.liveLabel}</p>
          )}
        </div>
      </div>

      <nav className="case-study-page-footer-siblings" aria-label="Other case studies">
        {footer.previous ? (
          <SiblingNavLink link={footer.previous} direction="previous" />
        ) : (
          <span className="case-study-page-footer-sibling-spacer" aria-hidden />
        )}
        <span className="case-study-page-footer-siblings-divider" aria-hidden>
          /
        </span>
        {footer.next ? (
          <SiblingNavLink link={footer.next} direction="next" />
        ) : (
          <span className="case-study-page-footer-sibling-spacer" aria-hidden />
        )}
      </nav>
    </footer>
  );
}
