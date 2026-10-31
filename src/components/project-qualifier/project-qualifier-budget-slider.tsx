"use client";

import { AnimatePresence, motion } from "motion/react";
import type { CSSProperties } from "react";
import type { ProjectQualifierChoiceOption } from "@/types/project-qualifier";

type ProjectQualifierBudgetSliderProps = {
  options: readonly ProjectQualifierChoiceOption[];
  valueIndex: number;
  onChange: (index: number) => void;
  ariaLabel: string;
};

export function ProjectQualifierBudgetSlider({
  options,
  valueIndex,
  onChange,
  ariaLabel,
}: ProjectQualifierBudgetSliderProps) {
  const maxIndex = Math.max(0, options.length - 1);
  const fillPercent = maxIndex > 0 ? (valueIndex / maxIndex) * 100 : 100;
  const current = options[valueIndex];

  return (
    <div className="qf-budget">
      <div className="qf-budget-value" aria-live="polite">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={current?.id}
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
          >
            {current?.label}
          </motion.span>
        </AnimatePresence>
      </div>

      <input
        type="range"
        className="qf-range"
        style={{ "--qf-fill": `${fillPercent}%` } as CSSProperties}
        min={0}
        max={maxIndex}
        step={1}
        value={valueIndex}
        aria-label={ariaLabel}
        onChange={(event) => onChange(Number.parseInt(event.target.value, 10))}
      />

      <ul className="qf-budget-labels">
        {options.map((option, index) => (
          <li key={option.id}>
            <button
              type="button"
              className={`qf-budget-label${index === valueIndex ? " qf-budget-label--active" : ""}`}
              onClick={() => onChange(index)}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
