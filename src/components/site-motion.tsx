"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Blocks that ease in as they scroll into view. Headings get a light blur-up on top. */
const REVEAL_SELECTOR = [
  ".scalability-eyebrow-wrap",
  ".scalability-headline",
  ".scalability-body",
  ".scalability-panel-wrap",
  ".work-section-header",
  ".work-section-showcase",
  ".tools-section-eyebrow",
  ".tools-section-headline",
  ".tools-stack-marquee",
  ".testimonials-section-title",
  ".testimonials-carousel",
  ".chatgpt-cta-card",
  ".founder-section-grid",
  ".pricing-section-header",
  ".pricing-tabs-block",
  ".pricing-surface",
  ".faq-section-title",
  ".faq-section-body",
  ".portfolio-grid",
  ".contact-page-crosslink-intro",
  ".contact-page-crosslink-card",
  ".cp2-bottom",
  ".case-study-narrative-section",
].join(",");

const HEADING_SELECTOR = "h1,h2,h3";

/**
 * One quiet motion rule for the whole site: anything below the fold fades up as it arrives.
 * Content already on screen at load is left alone, so nothing flashes, and with reduced motion
 * (or no JavaScript) nothing is hidden at all.
 */
export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timers: number[] = [];
    const cleanups: Array<() => void> = [];
    const startTimer = window.setTimeout(() => {
      const viewportHeight = window.innerHeight;
      const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
        (element) =>
          !element.closest("[data-no-reveal]") &&
          !element.closest(".qf-root") &&
          element.getBoundingClientRect().top > viewportHeight * 0.92,
      );

      const finish = (element: HTMLElement) => {
        element.classList.remove("sm-pending", "sm-in");
        element.style.removeProperty("transition-delay");
      };

      const observer = new IntersectionObserver(
        (entries) => {
          const arriving = entries.filter((entry) => entry.isIntersecting);
          arriving.forEach((entry, index) => {
            const element = entry.target as HTMLElement;
            observer.unobserve(element);
            element.style.transitionDelay = `${Math.min(index, 4) * 70}ms`;
            element.classList.add("sm-in");
            timers.push(window.setTimeout(() => finish(element), 1400 + index * 70));
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.04 },
      );

      targets.forEach((element) => {
        element.classList.add("sm-pending");
        if (element.matches(HEADING_SELECTOR)) {
          element.classList.add("sm-heading");
        }
        observer.observe(element);
      });

      // A fast scroll or an anchor jump can skip past elements without them ever intersecting.
      // Anything already above the viewport is shown immediately, with no animation.
      let lastCheck = 0;
      let trailing = 0;
      const revealPassed = () => {
        lastCheck = performance.now();
        targets.forEach((element) => {
          if (element.classList.contains("sm-pending") && element.getBoundingClientRect().bottom < 0) {
            observer.unobserve(element);
            finish(element);
          }
        });
      };
      const onScroll = () => {
        window.clearTimeout(trailing);
        if (performance.now() - lastCheck > 120) {
          revealPassed();
        } else {
          trailing = window.setTimeout(revealPassed, 140);
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        window.clearTimeout(trailing);
      });

      timers.push(
        window.setTimeout(() => {
          // Safety net: never leave anything hidden.
          targets.forEach(finish);
          observer.disconnect();
        }, 60000),
      );
    }, 60);

    return () => {
      window.clearTimeout(startTimer);
      timers.forEach((timer) => window.clearTimeout(timer));
      cleanups.forEach((cleanup) => cleanup());
      document.querySelectorAll<HTMLElement>(".sm-pending").forEach((element) => {
        element.classList.remove("sm-pending", "sm-in", "sm-heading");
        element.style.removeProperty("transition-delay");
      });
    };
  }, [pathname]);

  return null;
}
