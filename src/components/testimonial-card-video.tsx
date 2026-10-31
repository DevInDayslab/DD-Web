"use client";

import { useEffect, useState } from "react";
import type { TestimonialVideoCard } from "@/types/testimonials-section";

type TestimonialCardVideoProps = {
  card: TestimonialVideoCard;
};

export function TestimonialCardVideo({ card }: TestimonialCardVideoProps) {
  // No video files yet: tapping play says so instead of doing nothing.
  const [showSoon, setShowSoon] = useState(false);

  useEffect(() => {
    if (!showSoon) {
      return;
    }
    const timer = window.setTimeout(() => setShowSoon(false), 2200);
    return () => window.clearTimeout(timer);
  }, [showSoon]);

  return (
    <article className="testimonial-card testimonial-card-video">
      <div className="testimonial-card-video-bg" aria-hidden />
      <div className="testimonial-card-video-overlay" aria-hidden />
      <header className="testimonial-video-header">
        <span className="testimonial-video-badge">{card.badgeLabel}</span>
        <span className="testimonial-video-duration">{card.duration}</span>
      </header>
      <div className="testimonial-video-play-wrap">
        <button
          type="button"
          className="testimonial-video-play"
          aria-label={card.playButtonAriaLabel}
          onClick={() => setShowSoon(true)}
        >
          <span className="testimonial-video-play-icon" aria-hidden />
        </button>
        <span
          className={`testimonial-video-soon${showSoon ? " testimonial-video-soon--visible" : ""}`}
          role="status"
        >
          {showSoon ? "Video coming soon" : ""}
        </span>
      </div>
      <footer className="testimonial-video-footer">
        <blockquote className="testimonial-video-quote">{card.quote}</blockquote>
        <div className="testimonial-video-meta">
          <span className="testimonial-video-name">{card.name}</span>
          <span className="testimonial-video-title">{card.title}</span>
        </div>
      </footer>
    </article>
  );
}
