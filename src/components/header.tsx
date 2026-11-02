"use client";

import { QualifierCta } from "@/components/project-qualifier/qualifier-cta";
import { isExternalHref } from "@/lib/links";
import type { NavItem } from "@/types";
import Link from "next/link";
import { useState } from "react";

type Brand = {
  name: string;
  href: string;
};

type Cta = {
  label: string;
  href: string;
};

type HeaderCopy = {
  menuOpenLabel: string;
  menuCloseLabel: string;
};

export type HeaderProps = {
  brand: Brand;
  items: NavItem[];
  cta: Cta;
  copy: HeaderCopy;
};

function TextLink({
  item,
  className,
  onClick,
}: {
  item: NavItem;
  className: string;
  onClick?: () => void;
}) {
  const external = item.external ?? isExternalHref(item.href);

  if (external) {
    return (
      <a href={item.href} className={className} target="_blank" rel="noreferrer" onClick={onClick}>
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className} onClick={onClick}>
      {item.label}
    </Link>
  );
}

function CtaLink({ cta, className }: { cta: Cta; className: string }) {
  return (
    <QualifierCta href={cta.href} label={cta.label} className={className}>
      {cta.label}
    </QualifierCta>
  );
}

const navItemClassName =
  "inline-flex items-center rounded-full px-[clamp(0.5rem,1.25vw,1rem)] py-1 font-ui text-[clamp(0.75rem,1.015625vw,0.8125rem)] font-semibold leading-4 tracking-[0.13px] text-muted transition-colors hover:text-foreground";

const ctaClassName =
  "inline-flex h-[var(--dd-header-height)] max-h-11 min-h-11 shrink-0 items-center justify-center rounded-full bg-accent px-[clamp(1.25rem,2.8125vw,2.25rem)] font-ui text-[clamp(0.75rem,1.015625vw,0.8125rem)] font-medium leading-4 tracking-[0.13px] text-inverse [box-shadow:var(--dd-shadow-cta)]";

export function Header({ brand, items, cta, copy }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuLabel = menuOpen ? copy.menuCloseLabel : copy.menuOpenLabel;

  return (
    <header className="sticky top-0 z-50 w-full bg-background backdrop-blur-[12px]">
      <div className="site-header-bar flex w-full items-center md:grid md:grid-cols-[1fr_auto_1fr]">
        <Link
          href={brand.href}
          className="shrink-0 font-logo text-[clamp(1.125rem,1.71875vw,1.375rem)] font-semibold leading-7 tracking-[-0.55px] text-foreground md:justify-self-start"
        >
          {brand.name}
        </Link>

        <nav
          className="hidden shrink-0 items-center gap-1 rounded-full bg-surface p-1 md:flex md:justify-self-center"
          aria-label="Primary"
        >
          {items.map((item) => (
            <TextLink key={item.id} item={item} className={navItemClassName} />
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3 md:justify-self-end">
          <CtaLink cta={cta} className={`${ctaClassName} hidden sm:inline-flex`} />
          <button
            type="button"
            className="inline-flex h-[var(--dd-header-height)] max-h-11 min-h-11 w-11 items-center justify-center rounded-full text-foreground md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuLabel}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="site-header-menu-icon" aria-hidden>
              <span className="site-header-menu-icon-line" />
              <span className="site-header-menu-icon-line" />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="site-header-mobile flex flex-col gap-1 border-t border-hairline py-4 md:hidden"
          aria-label="Primary"
        >
          {items.map((item) => (
            <TextLink
              key={item.id}
              item={item}
              className={`${navItemClassName} w-full`}
              onClick={() => setMenuOpen(false)}
            />
          ))}
          <CtaLink cta={cta} className={`${ctaClassName} mt-2 w-full sm:hidden`} />
        </nav>
      ) : null}
    </header>
  );
}
