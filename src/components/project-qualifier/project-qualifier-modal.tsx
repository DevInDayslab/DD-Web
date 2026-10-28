"use client";

import { ProjectQualifierBudgetSlider } from "@/components/project-qualifier/project-qualifier-budget-slider";
import { useProjectQualifier } from "@/components/project-qualifier/project-qualifier-provider";
import { site } from "@/config/site";
import { projectQualifierSettings } from "@/config/project-qualifier";
import { projectQualifierContent } from "@/content/project-qualifier";
import type {
  ProjectQualifierFormValues,
  ProjectQualifierStep,
} from "@/types/project-qualifier";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

const content = projectQualifierContent;
const steps = content.steps;
const totalSteps = projectQualifierSettings.totalSteps;

const emptyFormValues = (): ProjectQualifierFormValues => ({
  fullName: "",
  workEmail: "",
  companyName: "",
  websiteOrFigma: "",
  projectStage: "",
  budget: "",
  timeline: "",
});

function formatStepBadge(current: number, total: number): string {
  return content.stepBadgeTemplate
    .replace("{current}", String(current))
    .replace("{total}", String(total));
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function getFieldValue(values: ProjectQualifierFormValues, step: ProjectQualifierStep): string {
  return values[step.id];
}

function setFieldValue(
  values: ProjectQualifierFormValues,
  step: ProjectQualifierStep,
  value: string,
): ProjectQualifierFormValues {
  return { ...values, [step.id]: value };
}

export function ProjectQualifierModal() {
  const { isOpen, close } = useProjectQualifier();
  const dialogTitleId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<ProjectQualifierFormValues>(emptyFormValues);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const currentStep = steps[stepIndex];
  const progressRatio = (stepIndex + 1) / totalSteps;

  const budgetIndex = useMemo(() => {
    const step = steps.find((entry) => entry.id === "budget");
    if (!step || step.kind !== "budget") {
      return 0;
    }
    const index = step.options.findIndex((option) => option.id === values.budget);
    return index >= 0 ? index : 0;
  }, [values.budget]);

  const reset = useCallback(() => {
    setStepIndex(0);
    setValues(emptyFormValues());
    setError(null);
    setSubmitting(false);
    setSubmitted(false);
  }, []);

  const handleClose = useCallback(() => {
    close();
    reset();
  }, [close, reset]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen || submitted) {
      return;
    }

    const step = steps[stepIndex];
    if (step?.kind === "budget" && !values.budget && step.options[0]) {
      setValues((prev) => ({ ...prev, budget: step.options[0].id }));
    }
  }, [isOpen, stepIndex, submitted, values.budget]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || submitted) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => cancelAnimationFrame(frame);
  }, [isOpen, stepIndex, submitted]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleClose, isOpen]);

  const validateStep = useCallback((): boolean => {
    if (!currentStep) {
      return false;
    }

    const value = getFieldValue(values, currentStep).trim();

    if (currentStep.kind === "text") {
      const optional = "optional" in currentStep && currentStep.optional === true;
      if (!value && !optional) {
        setError("This field is required.");
        return false;
      }
      if (currentStep.id === "workEmail" && value && !isValidEmail(value)) {
        setError("Enter a valid work email.");
        return false;
      }
      setError(null);
      return true;
    }

    if (currentStep.kind === "choice" || currentStep.kind === "budget") {
      if (!value) {
        setError("Select an option to continue.");
        return false;
      }
      setError(null);
      return true;
    }

    return true;
  }, [currentStep, values]);

  const goNext = useCallback(async () => {
    if (!validateStep()) {
      return;
    }

    if (stepIndex >= steps.length - 1) {
      setSubmitting(true);
      setError(null);

      const endpoint = site.contact.formEndpoint;
      const payload = {
        ...values,
        _subject: "DevInDays project qualifier",
      };

      try {
        if (endpoint) {
          const response = await fetch(endpoint, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            throw new Error("Submit failed");
          }
        }

        setSubmitted(true);
      } catch {
        setError("Something went wrong. Please try again.");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    setStepIndex((index) => index + 1);
    setError(null);
  }, [stepIndex, validateStep, values]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="project-qualifier-root"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <button
            type="button"
            className="project-qualifier-backdrop"
            aria-label={content.closeLabel}
            onClick={handleClose}
          />
          <div
            className="project-qualifier-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="project-qualifier-scenery" aria-hidden>
              <div className="project-qualifier-scenery-image" />
            </div>

            <div className="project-qualifier-body">
              <header className="project-qualifier-header">
                <div className="project-qualifier-brand">
                  <span className="project-qualifier-brand-mark" aria-hidden>
                    <span className="project-qualifier-brand-mark-icon">◆</span>
                  </span>
                  <span className="project-qualifier-brand-name">{content.brandName}</span>
                </div>
                <div className="project-qualifier-progress" aria-hidden={submitted}>
                  <div className="project-qualifier-progress-track">
                    <div
                      className="project-qualifier-progress-fill"
                      style={{ width: `${progressRatio * 100}%` }}
                    />
                  </div>
                </div>
              </header>

              <div className="project-qualifier-stage">
              <div className="project-qualifier-card-glow" aria-hidden />
              <div className="project-qualifier-card">
                {submitted ? (
                  <div className="project-qualifier-success">
                    <p className="project-qualifier-step-badge">
                      {formatStepBadge(totalSteps, totalSteps)}
                    </p>
                    <h2 id={dialogTitleId} className="project-qualifier-headline">
                      {content.successTitle}
                    </h2>
                    <p className="project-qualifier-description">{content.successBody}</p>
                    <button
                      type="button"
                      className="project-qualifier-submit"
                      onClick={handleClose}
                    >
                      <span>{content.successCloseLabel}</span>
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="project-qualifier-step-badge">
                      {formatStepBadge(stepIndex + 1, totalSteps)}
                    </p>
                    <div className="project-qualifier-form">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentStep?.id ?? "step"}
                          className="project-qualifier-step"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <h2 id={dialogTitleId} className="project-qualifier-headline">
                            {currentStep?.question}
                          </h2>
                          <p className="project-qualifier-description">{currentStep?.description}</p>

                          {currentStep?.kind === "text" ? (
                            <label className="project-qualifier-input-wrap">
                              <span className="sr-only">{currentStep.question}</span>
                              <input
                                ref={inputRef}
                                className="project-qualifier-input"
                                type={currentStep.inputMode === "email" ? "email" : "text"}
                                inputMode={currentStep.inputMode === "email" ? "email" : "text"}
                                placeholder={currentStep.placeholder}
                                value={getFieldValue(values, currentStep)}
                                onChange={(event) => {
                                  setValues((prev) =>
                                    setFieldValue(prev, currentStep, event.target.value),
                                  );
                                  setError(null);
                                }}
                                onKeyDown={(event) => {
                                  if (event.key === "Enter") {
                                    event.preventDefault();
                                    void goNext();
                                  }
                                }}
                              />
                            </label>
                          ) : null}

                          {currentStep?.kind === "choice" ? (
                            <div className="project-qualifier-options" role="radiogroup" aria-label={currentStep.question}>
                              {currentStep.options.map((option) => {
                                const selected = values[currentStep.id] === option.id;
                                return (
                                  <button
                                    key={option.id}
                                    type="button"
                                    role="radio"
                                    aria-checked={selected}
                                    className={
                                      selected
                                        ? "project-qualifier-option project-qualifier-option--active"
                                        : "project-qualifier-option"
                                    }
                                    onClick={() => {
                                      setValues((prev) =>
                                        setFieldValue(prev, currentStep, option.id),
                                      );
                                      setError(null);
                                    }}
                                  >
                                    {option.label}
                                  </button>
                                );
                              })}
                            </div>
                          ) : null}

                          {currentStep?.kind === "budget" ? (
                            <ProjectQualifierBudgetSlider
                              options={currentStep.options}
                              valueIndex={budgetIndex}
                              ariaLabel={currentStep.question}
                              onChange={(index) => {
                                const option = currentStep.options[index];
                                if (option) {
                                  setValues((prev) =>
                                    setFieldValue(prev, currentStep, option.id),
                                  );
                                  setError(null);
                                }
                              }}
                            />
                          ) : null}

                          {currentStep?.kind === "text" ? (
                            <p className="project-qualifier-keyboard-hint">
                              <span>{content.keyboardHint.press}</span>
                              <kbd className="project-qualifier-key">{content.keyboardHint.enter}</kbd>
                              <span>{content.keyboardHint.orClickContinue}</span>
                            </p>
                          ) : null}

                          {error ? <p className="project-qualifier-error">{error}</p> : null}
                        </motion.div>
                      </AnimatePresence>

                      <div className="project-qualifier-actions">
                        <button
                          type="button"
                          className="project-qualifier-submit"
                          disabled={submitting}
                          onClick={() => {
                            void goNext();
                          }}
                        >
                          <span>
                            {stepIndex >= steps.length - 1
                              ? content.submitLabel
                              : content.continueLabel}
                          </span>
                          <span className="project-qualifier-submit-arrow" aria-hidden>
                            →
                          </span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            </div>

            <button
              type="button"
              className="project-qualifier-close"
              aria-label={content.closeLabel}
              onClick={handleClose}
            >
              ×
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
