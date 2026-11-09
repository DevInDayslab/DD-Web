"use client";

import { useEffect, useRef, useState } from "react";
import { TestimonialVideoDialog } from "@/components/testimonial-video-dialog";
import type { TestimonialVideoCard } from "@/types/testimonials-section";

const warmed = new Set<string>();

/**
 * Starts fetching a video before anyone taps play, so a first visit doesn't wait on the whole file.
 * Skipped on Save-Data and very slow connections. Each file is only warmed once, even though the carousel repeats its cards.
 */
function warmVideo(src: string) {
  if (warmed.has(src)) {
    return;
  }
  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;
  if (connection?.saveData || connection?.effectiveType === "slow-2g" || connection?.effectiveType === "2g") {
    return;
  }
  warmed.add(src);
  const element = document.createElement("video");
  element.preload = "auto";
  element.muted = true;
  element.src = src;
  element.load();
}

type TestimonialCardVideoProps = {
  card: TestimonialVideoCard;
};

export function TestimonialCardVideo({ card }: TestimonialCardVideoProps) {
  // No video files yet: tapping play says so instead of doing nothing.
  const [showSoon, setShowSoon] = useState(false);
  const [playing, setPlaying] = useState(false);
  const video = card.video;
  const articleRef = useRef<HTMLElement>(null);

  // Warm the video once the card is near the screen, or as soon as someone points at it.
  useEffect(() => {
    const element = articleRef.current;
    const src = video?.src;
    if (!element || !src) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          warmVideo(src);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(element);
    const onIntent = () => warmVideo(src);
    element.addEventListener("pointerdown", onIntent, { passive: true });
    element.addEventListener("pointerenter", onIntent, { passive: true });
    return () => {
      observer.disconnect();
      element.removeEventListener("pointerdown", onIntent);
      element.removeEventListener("pointerenter", onIntent);
    };
  }, [video?.src]);

  useEffect(() => {
    if (!showSoon) {
      return;
    }
    const timer = window.setTimeout(() => setShowSoon(false), 2200);
    return () => window.clearTimeout(timer);
  }, [showSoon]);

  return (
    <article
      ref={articleRef}
      className="testimonial-card testimonial-card-video"
      data-orientation={video ? (video.height > video.width ? "portrait" : "landscape") : undefined}
      style={video ? { ["--tcv-ratio" as string]: `${video.width} / ${video.height}` } : undefined}
    >
      <div
        className="testimonial-card-video-bg"
        aria-hidden
        style={video ? { backgroundImage: `url(${video.posterSrc})` } : undefined}
      />
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
          onClick={() => (video ? setPlaying(true) : setShowSoon(true))}
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
      {playing && video ? (
        <TestimonialVideoDialog card={{ ...card, video }} onClose={() => setPlaying(false)} />
      ) : null}
    </article>
  );
}
