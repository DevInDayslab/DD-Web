"use client";

import { BookingPicker } from "@/components/booking-picker";
import {
  ProjectQualifierRangeSlider,
  formatBudgetRange,
} from "@/components/project-qualifier/project-qualifier-range-slider";
import { useProjectQualifier } from "@/components/project-qualifier/project-qualifier-provider";
import { RevealText } from "@/components/reveal-text";
import { site } from "@/config/site";
import { projectQualifierSettings } from "@/config/project-qualifier";
import { projectQualifierContent } from "@/content/project-qualifier";
import { formatSlotDay, formatSlotTime } from "@/lib/booking-slots";
import type {
  ProjectQualifierFormValues,
  ProjectQualifierStep,
  ProjectQualifierStepId,
} from "@/types/project-qualifier";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

const content = projectQualifierContent;
const steps = content.steps;
const totalSteps = projectQualifierSettings.totalSteps;

type Phase = "welcome" | "steps" | "success";
type ShellMode = "welcome" | "normal" | "wide";

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

function formatBookedTime(iso: string): string {
  const date = new Date(iso);
  return `${formatSlotDay(date)} · ${formatSlotTime(date)}`;
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

const STEP_ICON_PATHS: Record<ProjectQualifierStepId, string[]> = {
  fullName: ["M12 12a4 4 0 100-8 4 4 0 000 8z", "M4.5 20c.8-3.4 3.8-5.5 7.5-5.5s6.7 2.1 7.5 5.5"],
  workEmail: ["M4 6.5h16v11H4z", "M4.5 7l7.5 6 7.5-6"],
  book: ["M5 6.5h14v13H5z", "M5 10.5h14", "M8.5 4v4M15.5 4v4"],
  companyName: ["M5 20V5.5h9V20", "M14 10h5v10", "M8 9h3M8 12.5h3M8 16h3", "M3.5 20h17"],
  websiteOrFigma: [
    "M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1",
    "M14 10a4 4 0 00-5.7 0l-3 3A4 4 0 0011 18.7l1-1",
  ],
  projectStage: ["M6 20V4.5", "M6 5h11l-2.5 3.5L17 12H6"],
  budget: [
    "M12 3.5v17",
    "M16 7.5c-.7-1.3-2.2-2-4-2-2.4 0-4 1.1-4 2.9 0 4 8.2 1.7 8.2 5.7 0 1.9-1.7 3.1-4.2 3.1-2 0-3.6-.8-4.3-2.2",
  ],
  timeline: ["M12 20a8 8 0 100-16 8 8 0 000 16z", "M12 7.5V12l3 2"],
};

function StepIcon({ id }: { id: ProjectQualifierStepId }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden>
      {STEP_ICON_PATHS[id].map((d) => (
        <path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

export function ProjectQualifierModal() {
  const { isOpen, close, initialSlot } = useProjectQualifier();
  const reducedMotion = useReducedMotion();
  const dialogTitleId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);
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
  // While one screen is leaving, the card keeps its size; it resizes as the next screen arrives.
  const [holdLayout, setHoldLayout] = useState(false);
  const [confirmingExit, setConfirmingExit] = useState(false);
  const [shellMode, setShellMode] = useState<ShellMode>("welcome");
  const firstScreenRef = useRef(true);

  const budgetStep = useMemo(() => steps.find((entry) => entry.kind === "budget"), []);
  const [budgetRange, setBudgetRange] = useState<[number, number]>(() =>
    budgetStep && budgetStep.kind === "budget"
      ? [budgetStep.defaultLow, budgetStep.defaultHigh]
      : [0, 0],
  );

  // Focus a text field the moment it appears (screens mount after the previous one has left).
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

  const reset = useCallback(() => {
    setPhase("welcome");
    setStepIndex(0);
    setMaxReached(0);
    setDirection(1);
    setValues(emptyFormValues());
    setError(null);
    setSubmitting(false);
    if (budgetStep && budgetStep.kind === "budget") {
      setBudgetRange([budgetStep.defaultLow, budgetStep.defaultHigh]);
    }
  }, [budgetStep]);

  const handleClose = useCallback(() => {
    setConfirmingExit(false);
    close();
    // Let the exit animation play before the state is wiped.
    window.setTimeout(reset, 400);
  }, [close, reset]);

  // Closing mid-flow asks first; the welcome and success screens close straight away.
  const requestClose = useCallback(() => {
    if (phase === "steps" && !submitting) {
      setConfirmingExit(true);
      return;
    }
    handleClose();
  }, [handleClose, phase, submitting]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // A time picked elsewhere (the contact page calendar) arrives preselected.
  useEffect(() => {
    if (isOpen && initialSlot) {
      setValues((prev) => ({ ...prev, book: initialSlot }));
    }
  }, [initialSlot, isOpen]);

  // The budget range always has a value once its step is reached.
  useEffect(() => {
    if (phase !== "steps" || currentStep?.kind !== "budget") {
      return;
    }
    const max = currentStep.max;
    setValues((prev) =>
      prev.budget ? prev : { ...prev, budget: formatBudgetRange(budgetRange[0], budgetRange[1], max) },
    );
  }, [budgetRange, currentStep, phase]);

  // While the flow is open, the page behind it cannot take focus, and focus lands inside the dialog.
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const dialog = document.querySelector<HTMLElement>(".qf-root");
    const behind = Array.from(document.body.children).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement &&
        element !== dialog &&
        !element.matches("script, style, link, next-route-announcer") &&
        !element.hasAttribute("inert"),
    );
    behind.forEach((element) => {
      element.inert = true;
    });
    if (dialog && !dialog.contains(document.activeElement)) {
      dialog.focus({ preventScroll: true });
    }
    return () => {
      behind.forEach((element) => {
        element.inert = false;
      });
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [isOpen]);

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

  // The shell changes width only once the screen that needs it is the one on show.
  useEffect(() => {
    if (!holdLayout) {
      setShellMode(
        phase === "welcome"
          ? "welcome"
          : phase === "steps" && currentStep?.kind === "booking"
            ? "wide"
            : "normal",
      );
    }
  }, [currentStep, holdLayout, phase]);

  const validateStep = useCallback((): boolean => {
    if (!currentStep) {
      return false;
    }
    if (currentStep.kind === "booking") {
      if (!values.book) {
        setError(content.booking.missingTime);
        return false;
      }
      setError(null);
      return true;
    }
    if (currentStep.kind === "budget") {
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
          body: JSON.stringify({
            ...values,
            bookingLabel: values.book ? formatBookedTime(values.book) : "",
            _subject: "DevInDays project qualifier",
          }),
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

  const setValue = useCallback((id: ProjectQualifierStepId, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
    setError(null);
  }, []);

  // Keyboard: Enter continues, Escape closes, 1-9 and arrows pick options.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (confirmingExit) {
        if (event.key === "Escape") {
          setConfirmingExit(false);
        }
        return;
      }
      if (event.key === "Escape") {
        requestClose();
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
        void goNext();
        return;
      }

      if (phase !== "steps" || !currentStep || typing || currentStep.kind !== "choice") {
        return;
      }

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
        setValue(currentStep.id, options[next].id);
        return;
      }
      const digit = Number.parseInt(event.key, 10);
      if (digit >= 1 && digit <= options.length) {
        event.preventDefault();
        setValue(currentStep.id, options[digit - 1].id);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [confirmingExit, currentStep, goNext, handleClose, isOpen, phase, requestClose, setValue, values]);

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
  const bookedLabel = values.book ? formatBookedTime(values.book) : "";
  const primaryLabel = submitting
    ? content.submittingLabel
    : currentStep?.kind === "booking"
      ? bookedLabel
        ? content.booking.confirmWithTimeTemplate.replace("{time}", bookedLabel)
        : content.booking.confirmLabel
      : isLast
        ? content.submitLabel
        : content.continueLabel;

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="qf-root"
          tabIndex={-1}
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

          <button type="button" className="qf-close" aria-label={content.closeLabel} onClick={requestClose}>
            <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden>
              <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          <AnimatePresence>
            {confirmingExit ? (
              <motion.div
                className="qf-exit-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.2 }}
                onClick={() => setConfirmingExit(false)}
              >
                <motion.div
                  className="qf-exit"
                  role="alertdialog"
                  aria-modal="true"
                  aria-labelledby={`${dialogTitleId}-exit`}
                  initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.94, y: reducedMotion ? 0 : 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.97 }}
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  onClick={(event) => event.stopPropagation()}
                >
                  <h2 id={`${dialogTitleId}-exit`} className="qf-exit-title">
                    {content.exit.title}
                  </h2>
                  <p className="qf-exit-body">{content.exit.body}</p>
                  <div className="qf-exit-actions">
                    <button type="button" className="qf-exit-leave" onClick={handleClose}>
                      {content.exit.leaveLabel}
                    </button>
                    <button
                      type="button"
                      className="qf-exit-stay"
                      autoFocus
                      onClick={() => setConfirmingExit(false)}
                    >
                      {content.exit.stayLabel}
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className={`qf-shell qf-shell--${shellMode}`}>
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
                            transition={{ ...spring, delay: reducedMotion ? 0 : 0.3 }}
                          >
                            {content.welcome.body}
                          </motion.p>
                          <motion.div
                            className="qf-welcome-cta"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...spring, delay: reducedMotion ? 0 : 0.42 }}
                          >
                            <button type="button" className="qf-primary" onClick={start}>
                              <span>{content.welcome.startLabel}</span>
                              <EnterKey />
                            </button>
                            <p className="qf-duration">{content.welcome.duration}</p>
                          </motion.div>
                        </div>
                      ) : null}

                      {phase === "steps" && currentStep ? (
                        <div className="qf-step">
                          <div className="qf-step-meta">
                            <span className="qf-mark" aria-hidden>
                              <StepIcon id={currentStep.id} />
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
                                <BookingPicker value={values.book} onChange={(iso) => setValue("book", iso)} />
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
                                  onChange={(event) => setValue(currentStep.id, event.target.value)}
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
                                      onClick={() => setValue(currentStep.id, option.id)}
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
                              <ProjectQualifierRangeSlider
                                min={currentStep.min}
                                max={currentStep.max}
                                step={currentStep.step}
                                low={budgetRange[0]}
                                high={budgetRange[1]}
                                ariaLabel={currentStep.question}
                                onChange={(low, high) => {
                                  setBudgetRange([low, high]);
                                  setValue("budget", formatBudgetRange(low, high, currentStep.max));
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
                              onClick={() => void goNext()}
                            >
                              <span>{primaryLabel}</span>
                              {submitting ? <span className="qf-spinner" aria-hidden /> : <EnterKey />}
                            </button>
                            {"optional" in currentStep && currentStep.optional ? (
                              <button
                                type="button"
                                className="qf-skip"
                                onClick={() => {
                                  setValue(currentStep.id, "");
                                  goToStep(stepIndex + 1, 1);
                                }}
                              >
                                {content.skipLabel}
                              </button>
                            ) : null}
                          </div>

                          <div className="qf-hints">
                            {stepIndex > 0 ? (
                              <button type="button" className="qf-hint-back" onClick={goBack}>
                                ← {content.hints.back}
                              </button>
                            ) : (
                              <span />
                            )}
                            <span className="qf-hint-keys" aria-hidden>
                              {currentStep.kind === "choice" ? (
                                <span>
                                  <kbd>1</kbd>
                                  <kbd>{currentStep.options.length}</kbd> {content.hints.pick}
                                </span>
                              ) : null}
                              <span>
                                <kbd>↵</kbd> {content.hints.continue}
                              </span>
                              <span>
                                <kbd>esc</kbd> {content.hints.close}
                              </span>
                            </span>
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
                          {bookedLabel ? (
                            <motion.p
                              className="qf-booked"
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ ...spring, delay: reducedMotion ? 0 : 0.5 }}
                            >
                              <span>{content.booking.summaryLabel}</span>
                              {bookedLabel}
                            </motion.p>
                          ) : null}
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
