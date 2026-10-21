"use client";

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
  const external = isExternalHref(cta.href);

  if (external) {
    return (
      <a href={cta.href} className={className} target="_blank" rel="noreferrer">
        {cta.label}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  );
}

const navItemClassName =
  "inline-flex items-center rounded-full px-4 py-1 font-ui text-[13px] font-semibold leading-4 tracking-[0.13px] text-muted transition-colors hover:text-foreground";

const ctaClassName =
  "inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-accent px-9 font-ui text-[13px] font-medium leading-4 tracking-[0.13px] text-inverse [box-shadow:var(--dd-shadow-cta)]";

export function Header({ brand, items, cta, copy }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuLabel = menuOpen ? copy.menuCloseLabel : copy.menuOpenLabel;

  return (
    <header className="sticky top-0 z-50 w-full bg-background backdrop-blur-[12px]">
      <div className="mx-auto grid h-20 w-full max-w-[1280px] grid-cols-[1fr_auto] items-center px-8 md:grid-cols-[1fr_auto_1fr]">
        <Link
          href={brand.href}
          className="justify-self-start font-logo text-[22px] font-semibold leading-7 tracking-[-0.55px] text-foreground"
        >
          {brand.name}
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full bg-surface p-1 md:flex"
          aria-label="Primary"
        >
          {items.map((item) => (
            <TextLink key={item.id} item={item} className={navItemClassName} />
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-3">
          <CtaLink cta={cta} className={`${ctaClassName} hidden sm:inline-flex`} />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuLabel}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span className="block h-px w-4 bg-foreground" />
              <span className="block h-px w-4 bg-foreground" />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-hairline px-8 py-4 md:hidden"
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
