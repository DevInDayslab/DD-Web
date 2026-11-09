"use client";

import { QualifierCta } from "@/components/project-qualifier/qualifier-cta";
import { isExternalHref } from "@/lib/links";
import type { NavItem } from "@/types";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
  "site-header-cta inline-flex h-[var(--dd-header-height)] max-h-11 min-h-11 shrink-0 items-center justify-center rounded-full bg-accent px-[clamp(1.25rem,2.8125vw,2.25rem)] font-ui text-[clamp(0.75rem,1.015625vw,0.8125rem)] font-medium leading-4 tracking-[0.13px] text-inverse";

// Different on/off thresholds so scrolling near the edge can never flip the state back and forth.
const SCROLL_ON_PX = 64;
const SCROLL_OFF_PX = 16;
const PILL_MAX_WIDTH_PX = 1120;
const PILL_SIDE_GUTTER_PX = 12;

export function Header({ brand, items, cta, copy }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const menuSpring = reducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 420, damping: 34, mass: 0.9 };
  const [scrolled, setScrolled] = useState(false);
  const menuLabel = menuOpen ? copy.menuCloseLabel : copy.menuOpenLabel;

  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled((current) => (current ? y > SCROLL_OFF_PX : y > SCROLL_ON_PX));
    };
    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Escape closes the open menu and returns focus to its button; growing past the phone layout closes it too.
  useEffect(() => {
    if (!menuOpen) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const query = window.matchMedia("(min-width: 768px)");
    const onChange = () => query.matches && setMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    query.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      query.removeEventListener("change", onChange);
    };
  }, [menuOpen]);

  // Both states use pixel widths, which transition reliably; percentage-to-min() does not.
  useEffect(() => {
    const element = headerRef.current;
    if (!element) {
      return;
    }
    const measure = () => setContainerWidth(element.getBoundingClientRect().width);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const shellWidth =
    containerWidth === null
      ? undefined
      : scrolled
        ? Math.min(containerWidth - PILL_SIDE_GUTTER_PX * 2, PILL_MAX_WIDTH_PX)
        : containerWidth;

  return (
    <header ref={headerRef} className="site-header pointer-events-none sticky top-0 z-50 w-full">
      <div
        className="site-header-shell pointer-events-auto"
        data-scrolled={scrolled ? "true" : "false"}
        data-menu-open={menuOpen ? "true" : "false"}
        style={shellWidth === undefined ? undefined : { width: shellWidth }}
      >
        <div className="site-header-bar flex w-full items-center md:grid md:grid-cols-[1fr_auto_1fr]">
          <Link
            href={brand.href}
            className="site-header-brand shrink-0 font-logo text-[clamp(1.125rem,1.71875vw,1.375rem)] font-semibold leading-7 tracking-[-0.55px] text-foreground md:justify-self-start"
          >
            {brand.name}
          </Link>

          <nav
            className="site-header-nav hidden shrink-0 items-center gap-1 rounded-full p-1 md:flex md:justify-self-center"
            aria-label="Primary"
          >
            {items.map((item) => (
              <TextLink key={item.id} item={item} className={navItemClassName} />
            ))}
          </nav>

          <div className="site-header-actions ml-auto flex shrink-0 items-center gap-3 md:justify-self-end">
            <CtaLink cta={cta} className={`${ctaClassName} site-header-bar-cta`} />
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex h-[var(--dd-header-height)] max-h-11 min-h-11 w-11 items-center justify-center rounded-full text-foreground md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuLabel}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="flex flex-col gap-1.5" aria-hidden>
                <motion.span
                  className="block h-px w-4 bg-foreground"
                  animate={menuOpen ? { y: 3.5, rotate: 45 } : { y: 0, rotate: 0 }}
                  transition={menuSpring}
                />
                <motion.span
                  className="block h-px w-4 bg-foreground"
                  animate={menuOpen ? { y: -3.5, rotate: -45 } : { y: 0, rotate: 0 }}
                  transition={menuSpring}
                />
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              id="mobile-nav"
              className="site-header-mobile flex flex-col gap-1 border-t border-hairline py-4 md:hidden"
              aria-label="Primary"
              style={{ transformOrigin: "top center" }}
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: menuSpring }}
              exit={{ opacity: 0, y: -8, scale: 0.98, transition: { duration: reducedMotion ? 0 : 0.14, ease: "easeOut" } }}
            >
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0, transition: { ...menuSpring, delay: reducedMotion ? 0 : 0.04 + index * 0.035 } }}
                >
                  <TextLink
                    item={item}
                    className={`${navItemClassName} w-full`}
                    onClick={() => setMenuOpen(false)}
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0, transition: { ...menuSpring, delay: reducedMotion ? 0 : 0.04 + items.length * 0.035 } }}
              >
                <CtaLink cta={cta} className={`${ctaClassName} site-header-menu-cta`} />
              </motion.div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
