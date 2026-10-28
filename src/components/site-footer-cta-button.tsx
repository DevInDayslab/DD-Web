"use client";

import { QualifierCta } from "@/components/project-qualifier/qualifier-cta";

type SiteFooterCtaButtonProps = {
  href: string;
  label: string;
  ariaLabel: string;
};

export function SiteFooterCtaButton({ href, label, ariaLabel }: SiteFooterCtaButtonProps) {
  return (
    <QualifierCta href={href} label={label} className="site-footer-cta-button" ariaLabel={ariaLabel}>
      <span>{label}</span>
      <span className="site-footer-cta-button-arrow" aria-hidden>
        <svg viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 2H8M8 2L6 0.2M8 2L6 3.8"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </QualifierCta>
  );
}
