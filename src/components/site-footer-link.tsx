import Link from "next/link";
import { isExternalHref } from "@/lib/links";
import type { SiteFooterNavLink, SiteFooterSocialLink } from "@/types/site-footer";

type SiteFooterLinkProps = {
  link: SiteFooterNavLink | SiteFooterSocialLink;
  className: string;
};

export function SiteFooterLink({ link, className }: SiteFooterLinkProps) {
  const external =
    "external" in link && link.external !== undefined
      ? link.external
      : isExternalHref(link.href);

  if (external) {
    return (
      <a href={link.href} className={className} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}
