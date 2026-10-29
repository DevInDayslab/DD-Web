"use client";

import Link from "next/link";
import { QualifierCta } from "@/components/project-qualifier/qualifier-cta";
import type { CaseStudyPageFooter, CaseStudyPageFooterNavLink } from "@/types/case-study-page";

type CaseStudyPageFooterSectionProps = {
  footer: CaseStudyPageFooter;
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

export function CaseStudyPageFooterSection({ footer }: CaseStudyPageFooterSectionProps) {
  const liveLinkProps = footer.liveExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" as const }
    : {};

  return (
    <footer className="case-study-page-footer" aria-label="Case study footer">
      <div className="case-study-page-footer-archive">
        <div className="case-study-page-footer-live">
          <p className="case-study-page-footer-archive-eyebrow">{footer.archiveEyebrow}</p>
          <a href={footer.liveHref} className="case-study-page-footer-live-link" {...liveLinkProps}>
            {footer.liveLabel}
          </a>
        </div>
        <QualifierCta
          href={footer.bookCallHref}
          label={footer.bookCallLabel}
          className="case-study-page-footer-cta"
          ariaLabel={footer.bookCallAriaLabel}
        >
          <span>{footer.bookCallLabel}</span>
          <span className="case-study-page-footer-cta-arrow" aria-hidden>
            →
          </span>
        </QualifierCta>
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
