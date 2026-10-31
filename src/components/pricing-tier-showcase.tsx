"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { QualifierCta } from "@/components/project-qualifier/qualifier-cta";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PricingCheckIcon } from "@/components/pricing-check-icon";
import { pricingSurfaceInteraction } from "@/config/pricing-interaction";
import type { PricingSectionContent, PricingTier, PricingTierId } from "@/types/pricing-section";

const surfaceBorderPx = 2;
const surfaceLayoutEase = [0.22, 1, 0.36, 1] as const;

type PricingTierShowcaseProps = {
  content: Pick<
    PricingSectionContent,
    "tabsAriaLabel" | "defaultTierId" | "tiers"
  >;
};

export function PricingTierShowcase({ content }: PricingTierShowcaseProps) {
  const [activeTierId, setActiveTierId] = useState<PricingTierId>(content.defaultTierId);
  const reducedMotion = useReducedMotion();

  const activeTier = useMemo(
    () => content.tiers.find((tier) => tier.id === activeTierId) ?? content.tiers[0],
    [activeTierId, content.tiers],
  );

  const measureRef = useRef<HTMLDivElement>(null);
  const [surfaceHeight, setSurfaceHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = measureRef.current;
    if (!el) {
      return;
    }
    const update = () => setSurfaceHeight(el.offsetHeight + surfaceBorderPx);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const heightTransition = reducedMotion
    ? { duration: 0 }
    : {
        duration: pricingSurfaceInteraction.surfaceLayoutDurationSeconds,
        ease: surfaceLayoutEase,
      };

  const fadeDuration = pricingSurfaceInteraction.contentFadeDurationSeconds;

  return (
    <>
      <div className="pricing-tabs-block">
        <div className="pricing-tabs" role="tablist" aria-label={content.tabsAriaLabel}>
          {content.tiers.map((tier) => {
            const isActive = tier.id === activeTierId;
            return (
              <motion.button
                key={tier.id}
                type="button"
                role="tab"
                id={`pricing-tab-${tier.id}`}
                aria-selected={isActive}
                aria-controls={`pricing-panel-${tier.id}`}
                tabIndex={isActive ? 0 : -1}
                className={`pricing-tab${isActive ? " pricing-tab-active" : ""}`}
                onClick={() => setActiveTierId(tier.id)}
                whileTap={
                  reducedMotion ? undefined : { scale: pricingSurfaceInteraction.tabTapScale }
                }
              >
                {isActive && !reducedMotion ? (
                  <motion.span
                    layoutId="pricing-tab-active-pill"
                    className="pricing-tab-active-bg"
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 32,
                      mass: 1,
                    }}
                  />
                ) : null}
                {isActive && reducedMotion ? (
                  <span className="pricing-tab-active-bg" aria-hidden />
                ) : null}
                <span className="pricing-tab-label">{tier.tabLabel}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <motion.div
        className="pricing-surface"
        data-tier={activeTier.id}
        initial={false}
        animate={surfaceHeight === null ? undefined : { height: surfaceHeight }}
        transition={heightTransition}
      >
        <div ref={measureRef} className="pricing-surface-measure">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTier.id}
              id={`pricing-panel-${activeTier.id}`}
              role="tabpanel"
              aria-labelledby={`pricing-tab-${activeTier.id}`}
              className="pricing-surface-panel"
              initial={reducedMotion ? false : { opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={reducedMotion ? undefined : { opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: reducedMotion ? 0 : fadeDuration, ease: "easeInOut" }}
            >
              <PricingTierPanel tier={activeTier} />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}

function PricingTierPanel({ tier }: { tier: PricingTier }) {
  return (
    <div className="pricing-tier-layout">
      <div className="pricing-tier-scope">
        <div className="pricing-tier-header">
          <h3 className="pricing-tier-title">{tier.title}</h3>
          <span className="pricing-tier-duration">{tier.durationBadge}</span>
        </div>
        <ul className="pricing-feature-list">
          {tier.features.map((feature) => (
            <li key={feature} className="pricing-feature-item">
              <PricingCheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pricing-price-card">
        <div className="pricing-price-card-glow" aria-hidden />
        <p className="pricing-investment-label">{tier.investmentLabel}</p>
        <p className="pricing-price">{tier.price}</p>
        {tier.priceSubtitle ? (
          <p className="pricing-price-subtitle">{tier.priceSubtitle}</p>
        ) : null}
        <QualifierCta
          className="pricing-cta"
          href={tier.ctaHref}
          label={tier.ctaLabel}
          ariaLabel={tier.ctaAriaLabel}
        >
          <span>{tier.ctaLabel}</span>
          <span className="pricing-cta-icon" aria-hidden>
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </QualifierCta>
      </div>
    </div>
  );
}
