"use client";

import { AnimatePresence, motion } from "motion/react";
import type { CSSProperties } from "react";

type ProjectQualifierRangeSliderProps = {
  min: number;
  max: number;
  step: number;
  low: number;
  high: number;
  onChange: (low: number, high: number) => void;
  ariaLabel: string;
};

export function formatBudgetAmount(value: number, max: number): string {
  return `$${value.toLocaleString("en-US")}${value >= max ? "+" : ""}`;
}

export function formatBudgetRange(low: number, high: number, max: number): string {
  if (high >= max) {
    return `${formatBudgetAmount(low, max + 1)}+`;
  }
  return `${formatBudgetAmount(low, max + 1)} - ${formatBudgetAmount(high, max + 1)}`;
}

/** Two handles on one track: drag either to any value, in either direction. */
export function ProjectQualifierRangeSlider({
  min,
  max,
  step,
  low,
  high,
  onChange,
  ariaLabel,
}: ProjectQualifierRangeSliderProps) {
  const span = max - min;
  const lowPercent = ((low - min) / span) * 100;
  const highPercent = ((high - min) / span) * 100;
  const minGap = step * 2;

  const label =
    high >= max
      ? `${formatBudgetAmount(low, max + 1)} and up`
      : `${formatBudgetAmount(low, max + 1)} to ${formatBudgetAmount(high, max + 1)}`;

  return (
    <div className="qf-budget">
      <div className="qf-budget-value" aria-live="polite" aria-label={label}>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={`${low}-${high >= max ? "open" : "closed"}`}
            className="qf-budget-amount"
            initial={{ opacity: 0.4, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.12 }}
          >
            {formatBudgetAmount(low, max + 1)}
            <span className="qf-budget-dash"> {high >= max ? "and up" : "to"} </span>
            {high >= max ? "" : formatBudgetAmount(high, max + 1)}
          </motion.span>
        </AnimatePresence>
      </div>

      <div
        className="qf-dual"
        style={{ "--qf-low": `${lowPercent}%`, "--qf-high": `${highPercent}%` } as CSSProperties}
      >
        <div className="qf-dual-track" aria-hidden />
        <div className="qf-dual-fill" aria-hidden />
        <input
          type="range"
          className="qf-dual-input"
          min={min}
          max={max}
          step={step}
          value={low}
          aria-label={`${ariaLabel}: minimum`}
          onChange={(event) => {
            const next = Math.min(Number(event.target.value), high - minGap);
            onChange(Math.max(min, next), high);
          }}
        />
        <input
          type="range"
          className="qf-dual-input"
          min={min}
          max={max}
          step={step}
          value={high}
          aria-label={`${ariaLabel}: maximum`}
          onChange={(event) => {
            const next = Math.max(Number(event.target.value), low + minGap);
            onChange(low, Math.min(max, next));
          }}
        />
      </div>

      <div className="qf-dual-scale" aria-hidden>
        <span>{formatBudgetAmount(min, max + 1)}</span>
        <span>{formatBudgetAmount(max, max)}</span>
      </div>
    </div>
  );
}
