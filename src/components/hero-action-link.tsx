import { isExternalHref } from "@/lib/links";
import type { HeroActionCopy } from "@/types/hero-content";
import Link from "next/link";

type HeroActionLinkProps = {
  action: HeroActionCopy;
};

export function HeroActionLink({ action }: HeroActionLinkProps) {
  const className = `hero-action hero-action-${action.variant}`;
  const external = isExternalHref(action.href);

  if (external) {
    return (
      <a href={action.href} className={className} target="_blank" rel="noreferrer">
        {action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className}>
      {action.label}
    </Link>
  );
}
