"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { WorkFeaturedCaseStudy } from "@/types/work-section";

type WorkFeaturedCardContentProps = {
  caseStudy: WorkFeaturedCaseStudy;
  phonePlaceholderLabel: string;
};

/** Card body only: the shell (border, background, radius) lives in the showcase so it stays put while content swaps. */
export function WorkFeaturedCardContent({
  caseStudy,
  phonePlaceholderLabel,
}: WorkFeaturedCardContentProps) {
  const reducedMotion = useReducedMotion();
  const fade = reducedMotion ? 0 : 0.32;

  const ctaInner = (
    <>
      <span>{caseStudy.ctaLabel}</span>
      <span className="work-featured-cta-icon" aria-hidden>
        <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 7L7 1M7 1H2.5M7 1V5.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </>
  );

  return (
    <div className="work-featured-card-main">
      <div className="work-featured-card-copy">
        {/* Only the words change between projects, so only they fade. The CTA and phone stay put.
            Two blocks (heading, description) so the phone can sit between them on small screens. */}
        <div className="work-featured-copy-head">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={caseStudy.id}
              className="work-featured-copy-text-inner"
              initial={reducedMotion ? false : { opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={reducedMotion ? undefined : { opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: fade, ease: "easeInOut" }}
            >
              <p className="work-featured-badge">{caseStudy.category}</p>
              <h3 id={`work-featured-title-${caseStudy.id}`} className="work-featured-title">
                {caseStudy.title}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="work-featured-copy-body">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={caseStudy.id}
              className="work-featured-copy-text-inner"
              initial={reducedMotion ? false : { opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={reducedMotion ? undefined : { opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: fade, ease: "easeInOut", delay: reducedMotion ? 0 : 0.04 }}
            >
              <p className="work-featured-body">{caseStudy.body}</p>
              <ul className="work-pills" aria-label={`${caseStudy.title} built with`}>
                {caseStudy.points.map((point) => (
                  <li key={point} className="work-pill">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {caseStudy.ctaHref ? (
          <Link href={caseStudy.ctaHref} className="work-featured-cta">
            {ctaInner}
          </Link>
        ) : (
          <button type="button" className="work-featured-cta">
            {ctaInner}
          </button>
        )}
      </div>

      <div
        className="work-featured-phone"
        role="img"
        aria-label={phonePlaceholderLabel}
      >
        <span className="work-featured-phone-badge" aria-hidden>
          <span className="work-featured-phone-play" />
        </span>
        <span className="work-featured-phone-label" aria-hidden>
          Walkthrough coming soon
        </span>
      </div>
  </div>
  );
}
