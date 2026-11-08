"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { TestimonialVideoCard } from "@/types/testimonials-section";

type TestimonialVideoDialogProps = {
  card: TestimonialVideoCard & { video: NonNullable<TestimonialVideoCard["video"]> };
  onClose: () => void;
};

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "0:00";
  }
  const whole = Math.floor(seconds);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
}

/** A quiet, custom player: tap to play, a thin progress line, captions and sound toggles. */
export function TestimonialVideoDialog({ card, onClose }: TestimonialVideoDialogProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { video } = card;

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [captionsOn, setCaptionsOn] = useState(true);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown, true);

    return () => {
      window.removeEventListener("keydown", onKeyDown, true);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  useEffect(() => {
    const track = videoRef.current?.textTracks[0];
    if (track) {
      track.mode = captionsOn ? "showing" : "hidden";
    }
  }, [captionsOn]);

  const togglePlay = useCallback(() => {
    const element = videoRef.current;
    if (!element) {
      return;
    }
    if (element.paused) {
      void element.play();
    } else {
      element.pause();
    }
  }, []);

  const progress = duration > 0 ? (current / duration) * 100 : 0;

  return createPortal(
    <div
      className="tvd-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`${card.name} video story`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="tvd-panel"
        data-orientation={video.height > video.width ? "portrait" : "landscape"}
        style={{
          ["--tvd-ratio" as string]: `${video.width} / ${video.height}`,
          ["--tvd-ratio-num" as string]: String(video.width / video.height),
          ["--tvd-max-width" as string]: video.height > video.width ? "380px" : "880px",
        }}
      >
        <div className="tvd-stage">
          <video
            ref={videoRef}
            className="tvd-video"
            src={video.src}
            poster={video.posterSrc}
            autoPlay
            playsInline
            preload="metadata"
            controlsList="nodownload noplaybackrate noremoteplayback"
            disablePictureInPicture
            muted={muted}
            onClick={togglePlay}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
            onTimeUpdate={(event) => setCurrent(event.currentTarget.currentTime)}
          >
            <track
              kind="captions"
              src={video.captionsSrc}
              srcLang={video.captionsLanguage}
              label="English"
              default
            />
          </video>

          <button
            ref={closeRef}
            type="button"
            className="tvd-icon-button tvd-close"
            onClick={onClose}
            aria-label="Close video"
          >
            <svg viewBox="0 0 16 16" aria-hidden>
              <path
                d="M3 3l10 10M13 3L3 13"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {!playing ? (
            <button type="button" className="tvd-play" onClick={togglePlay} aria-label="Play video">
              <span className="tvd-play-icon" aria-hidden />
            </button>
          ) : null}

          <div className="tvd-controls">
            <input
              type="range"
              className="tvd-seek"
              min={0}
              max={duration || 0}
              step={0.1}
              value={current}
              aria-label="Seek"
              style={{ ["--tvd-progress" as string]: `${progress}%` }}
              onChange={(event) => {
                const element = videoRef.current;
                if (element) {
                  element.currentTime = Number(event.target.value);
                }
              }}
            />
            <div className="tvd-controls-row">
              <span className="tvd-time">
                {formatTime(current)} / {formatTime(duration)}
              </span>
              <div className="tvd-controls-right">
                <button
                  type="button"
                  className="tvd-pill"
                  aria-pressed={captionsOn}
                  onClick={() => setCaptionsOn((value) => !value)}
                >
                  CC
                </button>
                <button
                  type="button"
                  className="tvd-pill"
                  aria-pressed={muted}
                  onClick={() => setMuted((value) => !value)}
                >
                  {muted ? "Sound off" : "Sound on"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="tvd-meta">
          <p className="tvd-meta-name">
            <strong>{card.name}</strong>
            <span>{card.title}</span>
          </p>
          <div className="tvd-meta-links">
            {card.links?.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="tvd-transcript-toggle"
              aria-expanded={showTranscript}
              onClick={() => setShowTranscript((value) => !value)}
            >
              {showTranscript ? "Hide transcript" : "Transcript"}
            </button>
          </div>
        </div>

        {showTranscript ? (
          <div className="tvd-transcript-body">
            {video.transcript.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
