"use client";

import { ProjectQualifierBudgetSlider } from "@/components/project-qualifier/project-qualifier-budget-slider";
import { useProjectQualifier } from "@/components/project-qualifier/project-qualifier-provider";
import { RevealText } from "@/components/reveal-text";
import { site } from "@/config/site";
import { projectQualifierSettings } from "@/config/project-qualifier";
import { projectQualifierContent } from "@/content/project-qualifier";
import type {
  ProjectQualifierFormValues,
  ProjectQualifierStep,
} from "@/types/project-qualifier";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

const content = projectQualifierContent;
const steps = content.steps;
const totalSteps = projectQualifierSettings.totalSteps;

type Phase = "welcome" | "steps" | "success";

const emptyFormValues = (): ProjectQualifierFormValues => ({
  fullName: "",
  workEmail: "",
  book: "",
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

function EnterKey() {
  return (
    <kbd className="qf-kbd" aria-hidden>
      ↵
    </kbd>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden>
      <path
        d={direction === "left" ? "M10 3.5L5.5 8L10 12.5" : "M6 3.5L10.5 8L6 12.5"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProjectQualifierModal() {
  const { isOpen, close } = useProjectQualifier();
  const reducedMotion = useReducedMotion();
  const dialogTitleId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<Phase>("welcome");
  const [stepIndex, setStepIndex] = useState(0);
  const [maxReached, setMaxReached] = useState(0);
  const [direction, setDirection] = useState(1);
  const [values, setValues] = useState<ProjectQualifierFormValues>(emptyFormValues);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [cardHeight, setCardHeight] = useState<number | null>(null);
  const [bookingLoaded, setBookingLoaded] = useState(false);
  // While one screen is leaving, the card keeps its size; it resizes as the next screen arrives.
  const [holdLayout, setHoldLayout] = useState(false);
  const [shellWide, setShellWide] = useState(false);
  const firstScreenRef = useRef(true);

  // Focus a text field the moment it appears (screens now mount after the previous one has left).
  const setInputRef = useCallback((element: HTMLInputElement | null) => {
    inputRef.current = element;
    if (element) {
      window.requestAnimationFrame(() => element.focus({ preventScroll: true }));
    }
  }, []);

  const currentStep: ProjectQualifierStep | undefined = steps[stepIndex];
  const screenKey = phase === "steps" ? (currentStep?.id ?? "step") : phase;

  const progressRatio =
    phase === "welcome" ? 0.02 : phase === "success" ? 1 : (stepIndex + 1) / totalSteps;

  const spring = reducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 340, damping: 32, mass: 0.9 };

  const budgetIndex = useMemo(() => {
    const step = steps.find((entry) => entry.id === "budget");
    if (!step || step.kind !== "budget") {
      return 0;
    }
    const index = step.options.findIndex((option) => option.id === values.budget);
    return index >= 0 ? index : 0;
  }, [values.budget]);

  const reset = useCallback(() => {
    setPhase("welcome");
    setStepIndex(0);
    setMaxReached(0);
    setDirection(1);
    setValues(emptyFormValues());
    setError(null);
    setSubmitting(false);
    setBookingLoaded(false);
  }, []);

  const handleClose = useCallback(() => {
    close();
    // Let the exit animation play before the state is wiped.
    window.setTimeout(reset, 400);
  }, [close, reset]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Budget starts on its first option so the slider always has a value.
  useEffect(() => {
    if (!isOpen || phase !== "steps") {
      return;
    }
    if (currentStep?.kind === "budget" && !values.budget && currentStep.options[0]) {
      setValues((prev) => ({ ...prev, budget: currentStep.options[0].id }));
    }
  }, [currentStep, isOpen, phase, values.budget]);

  // Lock page scroll while the flow is open.
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

  // The card follows the height of whatever step is showing.
  useEffect(() => {
    const element = contentRef.current;
    if (!element || !isOpen || holdLayout) {
      return;
    }
    const update = () => setCardHeight(element.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [isOpen, screenKey, error, holdLayout]);

  // Freeze the card the moment the screen changes; release when the old screen has finished leaving.
  useEffect(() => {
    if (firstScreenRef.current) {
      firstScreenRef.current = false;
      return;
    }
    setHoldLayout(true);
    const safety = window.setTimeout(() => setHoldLayout(false), 700);
    return () => window.clearTimeout(safety);
  }, [screenKey]);

  // The shell widens for the calendar only once the calendar is the thing on screen.
  useEffect(() => {
    if (!holdLayout) {
      setShellWide(phase === "steps" && currentStep?.kind === "booking");
    }
  }, [currentStep, holdLayout, phase]);

  const validateStep = useCallback((): boolean => {
    if (!currentStep) {
      return false;
    }
    if (currentStep.kind === "booking") {
      setError(null);
      return true;
    }
    const value = values[currentStep.id].trim();

    if (currentStep.kind === "text") {
      const optional = "optional" in currentStep && currentStep.optional === true;
      if (!value && !optional) {
        setError(content.errors.required);
        return false;
      }
      if (currentStep.id === "workEmail" && value && !isValidEmail(value)) {
        setError(content.errors.email);
        return false;
      }
    } else if (!value) {
      setError(content.errors.choice);
      return false;
    }
    setError(null);
    return true;
  }, [currentStep, values]);

  const goToStep = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setStepIndex(index);
    setMaxReached((current) => Math.max(current, index));
    setError(null);
  }, []);

  const start = useCallback(() => {
    setDirection(1);
    setPhase("steps");
    setError(null);
  }, []);

  const goBack = useCallback(() => {
    if (phase !== "steps" || submitting) {
      return;
    }
    if (stepIndex === 0) {
      setDirection(-1);
      setPhase("welcome");
      return;
    }
    goToStep(stepIndex - 1, -1);
  }, [goToStep, phase, stepIndex, submitting]);

  const goForwardIfVisited = useCallback(() => {
    if (phase === "welcome" && maxReached > 0) {
      start();
      return;
    }
    if (phase === "steps" && stepIndex < maxReached && validateStep()) {
      goToStep(stepIndex + 1, 1);
    }
  }, [goToStep, maxReached, phase, start, stepIndex, validateStep]);

  const goNext = useCallback(async () => {
    if (phase === "welcome") {
      start();
      return;
    }
    if (phase !== "steps" || submitting || !validateStep()) {
      return;
    }

    if (stepIndex < steps.length - 1) {
      goToStep(stepIndex + 1, 1);
      return;
    }

    setSubmitting(true);
    setError(null);
    // No backend yet: until NEXT_PUBLIC_FORMSPREE_ENDPOINT is set nothing is sent and the visitor
    // still sees the confirmation. Connect the endpoint before launch.
    const endpoint = site.contact.formEndpoint;
    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, _subject: "DevInDays project qualifier" }),
        });
        if (!response.ok) {
          throw new Error("Submit failed");
        }
      } else {
        // A short beat so the sending state is visible rather than a flash.
        await new Promise((resolve) => window.setTimeout(resolve, 700));
      }
      setDirection(1);
      setPhase("success");
    } catch {
      setError(content.errors.submit);
    } finally {
      setSubmitting(false);
    }
  }, [goToStep, phase, start, stepIndex, submitting, validateStep, values]);

  const selectChoice = useCallback(
    (step: ProjectQualifierStep, optionId: string) => {
      setValues((prev) => ({ ...prev, [step.id]: optionId }));
      setError(null);
    },
    [],
  );

  // Keyboard: Enter continues, Escape closes, 1-9 and arrows pick options.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
        return;
      }
      if (event.isComposing || event.metaKey || event.ctrlKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const isButton = target instanceof HTMLButtonElement;
      const typing =
        target instanceof HTMLInputElement && target.type !== "range" && target.type !== "button";

      if (event.key === "Enter") {
        // Buttons handle their own Enter; everywhere else it means "continue".
        if (isButton) {
          return;
        }
        event.preventDefault();
        if (phase === "success") {
          handleClose();
          return;
        }
        // Booking happens inside the calendar, so moving on is always a deliberate click.
        if (phase === "steps" && currentStep?.kind === "booking") {
          return;
        }
        void goNext();
        return;
      }

      if (phase !== "steps" || !currentStep || typing) {
        return;
      }

      if (currentStep.kind === "choice") {
        const options = currentStep.options;
        const currentIndex = options.findIndex((option) => option.id === values[currentStep.id]);
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          const delta = event.key === "ArrowDown" ? 1 : -1;
          const next =
            currentIndex < 0
              ? delta > 0
                ? 0
                : options.length - 1
              : (currentIndex + delta + options.length) % options.length;
          selectChoice(currentStep, options[next].id);
          return;
        }
        const digit = Number.parseInt(event.key, 10);
        if (digit >= 1 && digit <= options.length) {
          event.preventDefault();
          selectChoice(currentStep, options[digit - 1].id);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentStep, goNext, handleClose, isOpen, phase, selectChoice, values]);

  const stepVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      y: reducedMotion ? 0 : dir * 14,
      filter: reducedMotion ? "blur(0px)" : "blur(5px)",
    }),
    center: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: reducedMotion
        ? { duration: 0 }
        : { type: "spring" as const, stiffness: 380, damping: 34, mass: 0.8 },
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: reducedMotion ? 0 : dir * -10,
      filter: reducedMotion ? "blur(0px)" : "blur(4px)",
      transition: { duration: reducedMotion ? 0 : 0.1, ease: [0.4, 0, 1, 1] as const },
    }),
  };

  if (!mounted) {
    return null;
  }

  const isLast = stepIndex >= steps.length - 1;
  const primaryLabel = submitting
    ? content.submittingLabel
    : isLast
      ? content.submitLabel
      : content.continueLabel;

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="qf-root"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.28 }}
        >
          <motion.div
            className="qf-bg"
            aria-hidden
            initial={{ scale: reducedMotion ? 1 : 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: reducedMotion ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="qf-wash" aria-hidden />

          <button type="button" className="qf-close" aria-label={content.closeLabel} onClick={handleClose}>
            <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden>
              <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          <div className={`qf-shell${shellWide ? " qf-shell--wide" : ""}`}>
            <motion.p
              className="qf-brand"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: reducedMotion ? 0 : 0.1 }}
            >
              {content.brandName}
            </motion.p>

            <motion.div
              className="qf-progress"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: reducedMotion ? 0 : 0.18 }}
            >
              <button
                type="button"
                className="qf-progress-nav"
                aria-label={content.backLabel}
                disabled={phase !== "steps" || submitting}
                onClick={goBack}
              >
                <ArrowIcon direction="left" />
              </button>
              <div
                className="qf-progress-track"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={totalSteps}
                aria-valuenow={phase === "success" ? totalSteps : phase === "steps" ? stepIndex + 1 : 0}
              >
                <motion.div
                  className="qf-progress-fill"
                  initial={false}
                  animate={{ width: `${progressRatio * 100}%` }}
                  transition={spring}
                />
              </div>
              <button
                type="button"
                className="qf-progress-nav"
                aria-label={content.nextLabel}
                disabled={
                  phase === "success" ||
                  submitting ||
                  (phase === "welcome" && maxReached === 0) ||
                  (phase === "steps" && stepIndex >= maxReached)
                }
                onClick={goForwardIfVisited}
              >
                <ArrowIcon direction="right" />
              </button>
            </motion.div>

            <motion.div
              className="qf-card"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                height: cardHeight === null ? "auto" : cardHeight,
              }}
              transition={{
                ...spring,
                delay: reducedMotion ? 0 : 0.12,
                height: spring,
              }}
            >
              <div className="qf-card-clip">
                <div ref={contentRef} className="qf-card-content">
                  <AnimatePresence
                    mode="wait"
                    initial={false}
                    custom={direction}
                    onExitComplete={() => setHoldLayout(false)}
                  >
                    <motion.div
                      key={screenKey}
                      className="qf-screen"
                      custom={direction}
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      {phase === "welcome" ? (
                        <div className="qf-welcome">
                          <p className="qf-eyebrow">
                            <span className="qf-eyebrow-marker" aria-hidden />
                            <span className="qf-eyebrow-text">{content.welcome.eyebrow}</span>
                          </p>
                          <RevealText
                            as="h2"
                            id={dialogTitleId}
                            className="qf-welcome-title"
                            text={content.welcome.title}
                            delay={0.1}
                          />
                          <motion.p
                            className="qf-body"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...spring, delay: reducedMotion ? 0 : 0.35 }}
                          >
                            {content.welcome.body}
                          </motion.p>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...spring, delay: reducedMotion ? 0 : 0.45 }}
                          >
                            <button type="button" className="qf-primary" onClick={start}>
                              <span>{content.welcome.startLabel}</span>
                              <EnterKey />
                            </button>
                          </motion.div>
                        </div>
                      ) : null}

                      {phase === "steps" && currentStep ? (
                        <div className="qf-step">
                          <div className="qf-step-meta">
                            <span className="qf-mark" aria-hidden>
                              D
                            </span>
                            <span className="qf-counter">{formatStepBadge(stepIndex + 1, totalSteps)}</span>
                          </div>

                          <h2 id={dialogTitleId} className="qf-question">
                            {currentStep.question}
                          </h2>
                          <p className="qf-description">{currentStep.description}</p>

                          <div className="qf-field">
                            {currentStep.kind === "booking" ? (
                              <div className="qf-booking">
                                <div className="qf-booking-frame">
                                  {!bookingLoaded ? (
                                    <div className="qf-booking-loading" aria-live="polite">
                                      <span className="qf-spinner qf-spinner--dark" aria-hidden />
                                      {content.booking.loadingLabel}
                                    </div>
                                  ) : null}
                                  <iframe
                                    className="qf-booking-embed"
                                    title={currentStep.question}
                                    src={site.booking.scheduleEmbedUrl}
                                    onLoad={() => setBookingLoaded(true)}
                                  />
                                </div>
                                <p className="qf-booking-fallback">
                                  {content.booking.fallbackText}{" "}
                                  <a href={site.booking.scheduleUrl} target="_blank" rel="noopener noreferrer">
                                    {content.booking.fallbackLinkLabel}
                                  </a>
                                </p>
                              </div>
                            ) : null}

                            {currentStep.kind === "text" ? (
                              <label className="qf-input-wrap">
                                <span className="sr-only">{currentStep.question}</span>
                                <input
                                  ref={setInputRef}
                                  className={`qf-input${error ? " qf-input--error" : ""}`}
                                  type={
                                    currentStep.inputMode === "email"
                                      ? "email"
                                      : currentStep.inputMode === "url"
                                        ? "url"
                                        : "text"
                                  }
                                  inputMode={currentStep.inputMode ?? "text"}
                                  autoComplete={
                                    currentStep.id === "fullName"
                                      ? "name"
                                      : currentStep.id === "workEmail"
                                        ? "email"
                                        : currentStep.id === "companyName"
                                          ? "organization"
                                          : "off"
                                  }
                                  spellCheck={false}
                                  placeholder={currentStep.placeholder}
                                  value={values[currentStep.id]}
                                  aria-invalid={Boolean(error)}
                                  onChange={(event) => {
                                    setValues((prev) => ({
                                      ...prev,
                                      [currentStep.id]: event.target.value,
                                    }));
                                    setError(null);
                                  }}
                                />
                              </label>
                            ) : null}

                            {currentStep.kind === "choice" ? (
                              <div className="qf-options" role="radiogroup" aria-label={currentStep.question}>
                                {currentStep.options.map((option, index) => {
                                  const selected = values[currentStep.id] === option.id;
                                  return (
                                    <motion.button
                                      key={option.id}
                                      type="button"
                                      role="radio"
                                      aria-checked={selected}
                                      className={`qf-option${selected ? " qf-option--active" : ""}`}
                                      whileTap={reducedMotion ? undefined : { scale: 0.985 }}
                                      onClick={() => selectChoice(currentStep, option.id)}
                                    >
                                      <span className="qf-option-key" aria-hidden>
                                        {index + 1}
                                      </span>
                                      <span className="qf-option-label">{option.label}</span>
                                      <svg
                                        className="qf-option-check"
                                        viewBox="0 0 16 16"
                                        width="16"
                                        height="16"
                                        fill="none"
                                        aria-hidden
                                      >
                                        <path
                                          d="M3.5 8.5L6.5 11.5L12.5 5"
                                          stroke="currentColor"
                                          strokeWidth="1.8"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </motion.button>
                                  );
                                })}
                              </div>
                            ) : null}

                            {currentStep.kind === "budget" ? (
                              <ProjectQualifierBudgetSlider
                                options={currentStep.options}
                                valueIndex={budgetIndex}
                                ariaLabel={currentStep.question}
                                onChange={(index) => {
                                  const option = currentStep.options[index];
                                  if (option) {
                                    selectChoice(currentStep, option.id);
                                  }
                                }}
                              />
                            ) : null}
                          </div>

                          <AnimatePresence initial={false}>
                            {error ? (
                              <motion.p
                                key={error}
                                className="qf-error"
                                role="alert"
                                initial={{ opacity: 0, y: -6, x: 0 }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                  x: reducedMotion ? 0 : [0, -6, 6, -4, 4, 0],
                                }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{ duration: 0.32 }}
                              >
                                {error}
                              </motion.p>
                            ) : null}
                          </AnimatePresence>

                          <div className="qf-actions">
                            <button
                              type="button"
                              className="qf-primary"
                              disabled={submitting}
                              onClick={() => {
                                if (currentStep.kind === "booking") {
                                  setValues((prev) => ({ ...prev, book: "booked" }));
                                }
                                void goNext();
                              }}
                            >
                              <span>
                                {currentStep.kind === "booking" ? content.booking.doneLabel : primaryLabel}
                              </span>
                              {submitting ? (
                                <span className="qf-spinner" aria-hidden />
                              ) : currentStep.kind === "booking" ? null : (
                                <EnterKey />
                              )}
                            </button>
                            {currentStep.kind === "booking" ? (
                              <button
                                type="button"
                                className="qf-skip"
                                onClick={() => {
                                  setValues((prev) => ({ ...prev, book: "skipped" }));
                                  goToStep(stepIndex + 1, 1);
                                }}
                              >
                                {content.booking.laterLabel}
                              </button>
                            ) : null}
                            {"optional" in currentStep && currentStep.optional ? (
                              <button
                                type="button"
                                className="qf-skip"
                                onClick={() => {
                                  setValues((prev) => ({ ...prev, [currentStep.id]: "" }));
                                  goToStep(stepIndex + 1, 1);
                                }}
                              >
                                {content.skipLabel}
                              </button>
                            ) : null}
                          </div>
                        </div>
                      ) : null}

                      {phase === "success" ? (
                        <div className="qf-success">
                          <motion.span
                            className="qf-success-icon"
                            initial={{ scale: reducedMotion ? 1 : 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ ...spring, delay: reducedMotion ? 0 : 0.1 }}
                            aria-hidden
                          >
                            <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                              <motion.path
                                d="M5.5 12.5L10 17L18.5 7.5"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: reducedMotion ? 1 : 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.3, ease: "easeOut" }}
                              />
                            </svg>
                          </motion.span>
                          <RevealText
                            as="h2"
                            id={dialogTitleId}
                            className="qf-question"
                            text={content.successTitle}
                            delay={0.25}
                          />
                          <motion.p
                            className="qf-description"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...spring, delay: reducedMotion ? 0 : 0.6 }}
                          >
                            {content.successBody}
                          </motion.p>
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...spring, delay: reducedMotion ? 0 : 0.7 }}
                          >
                            <button type="button" className="qf-primary" onClick={handleClose}>
                              <span>{content.successCloseLabel}</span>
                              <EnterKey />
                            </button>
                          </motion.div>
                        </div>
                      ) : null}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
