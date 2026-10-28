"use client";

import { useProjectQualifier } from "@/components/project-qualifier/project-qualifier-provider";
import { projectQualifierSettings } from "@/config/project-qualifier";
import { shouldOpenProjectQualifier } from "@/lib/project-qualifier-triggers";
import type { ReactNode } from "react";

type QualifierCtaProps = {
  href: string;
  label: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
};

export function QualifierCta({ href, label, className, ariaLabel, children }: QualifierCtaProps) {
  const { open } = useProjectQualifier();
  const opensQualifier = shouldOpenProjectQualifier(
    href,
    label,
    projectQualifierSettings.enabled,
  );

  if (!opensQualifier) {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel ?? label}
      onClick={open}
    >
      {children}
    </button>
  );
}
