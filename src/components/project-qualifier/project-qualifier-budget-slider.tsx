"use client";

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

  return (
    <div className="project-qualifier-budget">
      <input
        type="range"
        className="project-qualifier-budget-range"
        style={{ "--budget-fill": `${fillPercent}%` } as CSSProperties}
        min={0}
        max={maxIndex}
        step={1}
        value={valueIndex}
        aria-label={ariaLabel}
        onChange={(event) => {
          onChange(Number.parseInt(event.target.value, 10));
        }}
      />
      <ul className="project-qualifier-budget-labels">
        {options.map((option, index) => (
          <li key={option.id}>
            <button
              type="button"
              className={
                index === valueIndex
                  ? "project-qualifier-budget-label project-qualifier-budget-label--active"
                  : "project-qualifier-budget-label"
              }
              onClick={() => {
                onChange(index);
              }}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
