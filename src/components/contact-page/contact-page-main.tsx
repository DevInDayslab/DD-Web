"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ContactPageBookingWidget } from "@/components/contact-page/contact-page-booking-widget";
import { ContactPageCopyButton } from "@/components/contact-page/contact-page-copy-button";
import { ContactPageMessageForm } from "@/components/contact-page/contact-page-message-form";
import type { ContactPageContent } from "@/types/contact-page";

type ContactPageMainProps = {
  content: ContactPageContent;
};

type TabId = "message" | "book";

export function ContactPageMain({ content }: ContactPageMainProps) {
  const [tab, setTab] = useState<TabId>("message");
  const { hero, details, trust, nextSteps, split } = content;
  const reducedMotion = useReducedMotion();
  const panelsRef = useRef<HTMLDivElement>(null);
  const [panelsHeight, setPanelsHeight] = useState<number | null>(null);

  // Measure whichever panel is showing so the card can spring to its height.
  useEffect(() => {
    const el = panelsRef.current;
    if (!el) {
      return;
    }
    const update = () => setPanelsHeight(el.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const spring = reducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 420, damping: 34, mass: 0.9 };
  const panelVariants = {
    hide: { opacity: 0, y: 10, scale: 0.99, transition: { duration: 0.1 } },
    show: { opacity: 1, y: 0, scale: 1, transition: spring },
  };

  // Deep link: /contact#book opens the calendar, /contact#message the form.
  useEffect(() => {
    const fromHash = () => {
      if (window.location.hash === "#book") {
        setTab("book");
      } else if (window.location.hash === "#message") {
        setTab("message");
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const tabs: { id: TabId; label: string }[] = [
    { id: "message", label: split.message.title },
    { id: "book", label: split.bookCall.title },
  ];

  return (
    <section className="cp2" aria-labelledby="contact-page-title">
      <div className="cp2-top">
        <h1 id="contact-page-title" className="cp2-title">
          {hero.headline}
        </h1>
        <p className="cp2-lede">{hero.subhead}</p>

        <dl className="cp2-details">
          {details.map((detail) => (
            <div key={detail.id} className="cp2-detail">
              <dt>{detail.label}</dt>
              <dd>
                {detail.href ? (
                  <a className="cp2-detail-link" href={detail.href}>
                    {detail.value}
                  </a>
                ) : (
                  <span>{detail.value}</span>
                )}
                {detail.copyable ? <ContactPageCopyButton value={detail.value} /> : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="cp2-bottom">
        <div className="cp2-trust">
          <p className="cp2-trust-label">{trust.label}</p>
          <ul className="cp2-trust-logos">
            {trust.logos.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <li key={logo.alt}>
                <img src={logo.src} alt={logo.alt} title={logo.alt} width={40} height={40} />
              </li>
            ))}
          </ul>
        </div>

        <div className="cp2-steps-block">
          <h2 className="cp2-steps-title">{nextSteps.heading}</h2>
          <ol className="cp-steps">
            {nextSteps.steps.map((step, index) => (
              <li key={step.title} className="cp-step">
                <span className="cp-step-number" aria-hidden>
                  {index + 1}
                </span>
                <div>
                  <p className="cp-step-title">{step.title}</p>
                  <p className="cp-step-body">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="cp-card">
        <div className="cp-tabs" role="tablist" aria-label="How would you like to reach us?">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`cp-tab-${item.id}`}
              aria-selected={tab === item.id}
              aria-controls={`cp-panel-${item.id}`}
              className={`cp-tab${tab === item.id ? " cp-tab--active" : ""}`}
              onClick={() => setTab(item.id)}
            >
              {tab === item.id ? (
                <motion.span layoutId="cp-tab-pill" className="cp-tab-pill" transition={spring} />
              ) : null}
              <span className="cp-tab-label">{item.label}</span>
            </button>
          ))}
        </div>

        <motion.div
          className="cp-panels"
          initial={false}
          animate={panelsHeight === null ? undefined : { height: panelsHeight }}
          transition={spring}
        >
          <div ref={panelsRef}>
            <motion.div
              id="cp-panel-message"
              role="tabpanel"
              aria-labelledby="cp-tab-message"
              className="cp-panel"
              hidden={tab !== "message"}
              initial={false}
              animate={tab === "message" ? "show" : "hide"}
              variants={panelVariants}
            >
              <p className="cp-panel-description">{split.message.description}</p>
              <ContactPageMessageForm content={split.message} />
            </motion.div>

            <motion.div
              id="cp-panel-book"
              role="tabpanel"
              aria-labelledby="cp-tab-book"
              className="cp-panel"
              hidden={tab !== "book"}
              initial={false}
              animate={tab === "book" ? "show" : "hide"}
              variants={panelVariants}
            >
              <p className="cp-panel-description">{split.bookCall.description}</p>
              <ContactPageBookingWidget content={split.bookCall} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
