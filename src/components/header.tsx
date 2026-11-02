"use client";

import { QualifierCta } from "@/components/project-qualifier/qualifier-cta";
import { headerLayoutTokens } from "@/config/layout";
import { headerScrollMorph } from "@/config/navigation";
import { theme } from "@/config/theme";
import {
  useHeaderScrollMorphFloating,
  useHeaderScrollMorphProgress,
} from "@/hooks/use-header-scroll-morph-progress";
import { isExternalHref } from "@/lib/links";
import type { NavItem } from "@/types";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

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

const morph = headerScrollMorph;
const { colors } = theme;

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
  "site-header-nav-link inline-flex items-center rounded-full px-[clamp(0.5rem,1.25vw,1rem)] py-1 font-ui text-[clamp(0.75rem,1.015625vw,0.8125rem)] font-semibold leading-4 tracking-[0.13px] text-muted transition-colors hover:text-foreground";

const ctaClassName =
  "site-header-cta-pill shrink-0 rounded-full bg-accent font-ui font-medium leading-4 tracking-[0.13px] text-inverse [box-shadow:var(--dd-shadow-cta)]";

export function Header({ brand, items, cta, copy }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuLabel = menuOpen ? copy.menuCloseLabel : copy.menuOpenLabel;
  const scrollProgress = useHeaderScrollMorphProgress();
  const menuOpenMotion = useMotionValue(0);

  useEffect(() => {
    menuOpenMotion.set(menuOpen ? 1 : 0);
  }, [menuOpen, menuOpenMotion]);

  const morphProgress = useTransform([scrollProgress, menuOpenMotion], (values) => {
    const scroll = values[0] as number;
    const open = values[1] as number;
    return open ? 0 : scroll;
  });

  const floating = useHeaderScrollMorphFloating(morphProgress, morph.floatingActiveProgress);

  const topInset = useTransform(morphProgress, [0, 1], [0, morph.pillTopInsetAtBaseline]);
  const topInsetCss = useTransform(topInset, (value) => `${value}px`);
  const borderRadius = useTransform(morphProgress, [0, 1], [0, morph.pillBorderRadiusAtBaseline]);
  const boxShadow = useTransform(morphProgress, [0, 1], [morph.pillShadowAtRest, morph.pillShadowAtFloat]);
  const backdropBlur = useTransform(
    morphProgress,
    [0, 1],
    [`blur(${morph.shellBackdropBlurPx}px)`, `blur(${morph.pillBackdropBlurPx}px)`],
  );
  const borderColor = useTransform(
    morphProgress,
    [0, 1],
    ["rgba(228, 230, 232, 0)", colors.hairline],
  );
  const shellBackground = useTransform(
    morphProgress,
    [0, 1],
    [`color-mix(in srgb, ${colors.background} 78%, transparent)`, colors.surface],
  );
  const barHeight = useTransform(
    morphProgress,
    [0, 1],
    [headerLayoutTokens.barHeightAtBaseline, morph.pillBarHeightAtBaseline],
  );
  const barHeightCss = useTransform(barHeight, (value) => `${value}px`);
  const barPaddingInline = useTransform(morphProgress, [0, 1], [
    headerLayoutTokens.edgePaddingAtBaseline,
    morph.pillPaddingInlineAtBaseline,
  ]);
  const barPaddingCss = useTransform(barPaddingInline, (value) => `${value}px`);

  const ctaHeight = useTransform(morphProgress, [0, 1], [
    morph.barCtaHeightAtBaseline,
    morph.pillCtaHeightAtBaseline,
  ]);
  const ctaHeightCss = useTransform(ctaHeight, (value) => `${value}px`);
  const ctaPaddingInline = useTransform(morphProgress, [0, 1], [
    morph.barCtaPaddingInlineAtBaseline,
    morph.pillCtaPaddingInlineAtBaseline,
  ]);
  const ctaPaddingCss = useTransform(ctaPaddingInline, (value) => `${value}px`);
  const ctaFontSize = useTransform(morphProgress, [0, 1], [
    morph.barCtaFontSizeAtBaseline,
    morph.pillCtaFontSizeAtBaseline,
  ]);
  const ctaFontSizeCss = useTransform(ctaFontSize, (value) => `${value}px`);

  const brandFontSize = useTransform(morphProgress, [0, 1], [
    morph.barBrandFontSizeAtBaseline,
    morph.pillBrandFontSizeAtBaseline,
  ]);
  const brandFontSizeCss = useTransform(brandFontSize, (value) => `${value}px`);
  const brandLineHeight = useTransform(morphProgress, [0, 1], [
    morph.barBrandLineHeightAtBaseline,
    morph.pillBrandLineHeightAtBaseline,
  ]);
  const brandLineHeightCss = useTransform(brandLineHeight, (value) => `${value}px`);

  const navClusterBackground = useTransform(
    morphProgress,
    [0, 0.4, 1],
    [colors.surface, `color-mix(in srgb, ${colors.surface} 35%, transparent)`, "transparent"],
  );

  const brandScale = useTransform(morphProgress, [0, 1], [1, morph.brandScaleAtFloat]);
  const ctaScale = useTransform(morphProgress, [0, 1], [1, morph.brandScaleAtFloat]);
  const edgeOpacity = useTransform(
    morphProgress,
    [0, 0.35, 0.65, 1],
    [1, morph.edgeItemOpacityMinDuringMorph, morph.edgeItemOpacityMinDuringMorph, 1],
  );
  const edgeTranslateY = useTransform(morphProgress, [0, 0.5, 1], [0, 3, 0]);

  const floatingWidth = useTransform(morphProgress, (progress) => {
    if (progress <= 0) {
      return "100%";
    }
    const inset = morph.pillInsetInlineAtBaseline * progress;
    return `calc(100% - ${inset * 2}px)`;
  });

  const floatingMaxWidth = useTransform(morphProgress, (progress) => {
    if (progress <= 0) {
      return "100%";
    }
    return `min(100%, var(--dd-header-pill-max-width))`;
  });

  const barMotionStyle = {
    paddingInline: barPaddingCss,
    height: barHeightCss,
    minHeight: barHeightCss,
    maxHeight: barHeightCss,
    ["--dd-header-bar-height" as string]: barHeightCss,
    ["--dd-header-cta-height" as string]: ctaHeightCss,
    ["--dd-header-cta-padding-inline" as string]: ctaPaddingCss,
    ["--dd-header-cta-font-size" as string]: ctaFontSizeCss,
  };

  const edgeMotionStyle = {
    opacity: edgeOpacity,
    y: edgeTranslateY,
  };

  return (
    <motion.header
      className="site-header-shell"
      style={{
        paddingTop: topInsetCss,
        ["--dd-header-shell-padding-top" as string]: topInsetCss,
      }}
    >
      <motion.div
        className="site-header-floating-bar"
        data-floating={floating ? "true" : "false"}
        style={{
          width: floatingWidth,
          maxWidth: floatingMaxWidth,
          borderRadius,
          boxShadow,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
          borderColor,
          background: shellBackground,
        }}
      >
        <motion.div className="site-header-bar" style={barMotionStyle}>
          <motion.div
            className="site-header-brand-slot"
            style={{ ...edgeMotionStyle, scale: brandScale }}
          >
            <Link
              href={brand.href}
              className="site-header-brand shrink-0 font-logo font-semibold tracking-[-0.55px] text-foreground"
            >
              <motion.span
                className="inline-block"
                style={{
                  fontSize: brandFontSizeCss,
                  lineHeight: brandLineHeightCss,
                }}
              >
                {brand.name}
              </motion.span>
            </Link>
          </motion.div>

          <motion.nav
            className="site-header-nav-cluster hidden shrink-0 items-center gap-1 rounded-full p-1 md:flex md:justify-self-center"
            aria-label="Primary"
            style={{ backgroundColor: navClusterBackground }}
          >
            {items.map((item) => (
              <TextLink key={item.id} item={item} className={navItemClassName} />
            ))}
          </motion.nav>

          <div className="site-header-actions-slot">
            <motion.div
              className="hidden shrink-0 sm:flex"
              style={{ ...edgeMotionStyle, scale: ctaScale }}
            >
              <CtaLink cta={cta} className={ctaClassName} />
            </motion.div>
            <button
              type="button"
              className="inline-flex h-[var(--dd-header-bar-height)] max-h-11 min-h-[var(--dd-header-bar-height)] w-11 items-center justify-center rounded-full text-foreground md:hidden"
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
        </motion.div>
      </motion.div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="site-header-mobile pointer-events-auto flex flex-col gap-1 border-t border-hairline bg-background py-4 md:hidden"
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
    </motion.header>
  );
}
