"use client";

import { QualifierCta } from "@/components/project-qualifier/qualifier-cta";
import type { HeroActionCopy } from "@/types/hero-content";

type HeroActionLinkProps = {
  action: HeroActionCopy;
};

export function HeroActionLink({ action }: HeroActionLinkProps) {
  const className = `hero-action hero-action-${action.variant}`;

  return (
    <QualifierCta href={action.href} label={action.label} className={className}>
      {action.label}
    </QualifierCta>
  );
}
