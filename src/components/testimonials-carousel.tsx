"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { TestimonialCardText } from "@/components/testimonial-card-text";
import { TestimonialCardVideo } from "@/components/testimonial-card-video";
import type { TestimonialCard, TestimonialsSectionContent } from "@/types/testimonials-section";

type TestimonialsCarouselProps = {
  content: Pick<TestimonialsSectionContent, "carouselAriaLabel" | "cards">;
};

function TestimonialCarouselCard({ card }: { card: TestimonialCard }) {
  if (card.kind === "text") {
    return <TestimonialCardText card={card} />;
  }
  return <TestimonialCardVideo card={card} />;
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d={direction === "left" ? "M13 8H3M3 8L7 4M3 8L7 12" : "M3 8H13M13 8L9 4M13 8L9 12"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Moves the scroll position instantly: no smooth scrolling and no snapping for that one frame. */
function jump(el: HTMLElement, left: number) {
  el.style.scrollBehavior = "auto";
  el.style.scrollSnapType = "none";
  el.scrollLeft = left;
  requestAnimationFrame(() => {
    el.style.scrollBehavior = "";
    el.style.scrollSnapType = "";
  });
}

/** Enough repeats that the loop always has cards ahead of and behind the visible ones. */
function repeatCount(cardCount: number): number {
  return Math.max(5, Math.ceil(14 / Math.max(1, cardCount)) | 1);
}

export function TestimonialsCarousel({ content }: TestimonialsCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const normalizeTimer = useRef<number | null>(null);
  const cards = content.cards;
  const copies = useMemo(() => repeatCount(cards.length), [cards.length]);
  const homeCopy = Math.floor(copies / 2);

  /** Width of one full set of cards, measured from the layout so uneven card widths are fine. */
  const measureSet = useCallback((): number => {
    const el = viewportRef.current;
    if (!el || cards.length === 0) {
      return 0;
    }
    const items = el.querySelectorAll<HTMLElement>(".testimonials-carousel-item");
    const first = items[0];
    const next = items[cards.length];
    return first && next ? next.offsetLeft - first.offsetLeft : 0;
  }, [cards.length]);

  // Start in the middle set, so there is always something to scroll toward on both sides.
  useLayoutEffect(() => {
    const el = viewportRef.current;
    const setWidth = measureSet();
    if (el && setWidth > 0) {
      jump(el, setWidth * homeCopy);
    }
  }, [measureSet, homeCopy]);

  // Repeats are for looking at, not for assistive tech or tabbing through twice.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) {
      return;
    }
    el.querySelectorAll<HTMLElement>('.testimonials-carousel-item[data-repeat="true"]').forEach((item) => {
      item.setAttribute("aria-hidden", "true");
      item
        .querySelectorAll<HTMLElement>("a, button, input, [tabindex]")
        .forEach((node) => node.setAttribute("tabindex", "-1"));
    });
  }, [copies, cards]);

  // When scrolling settles, slide back into the home set by one whole set. The cards look identical, so nothing visibly moves.
  const normalize = useCallback(() => {
    const el = viewportRef.current;
    const setWidth = measureSet();
    if (!el || setWidth <= 0) {
      return;
    }
    const low = setWidth * homeCopy;
    const high = setWidth * (homeCopy + 1);
    let target = el.scrollLeft;
    while (target < low - 2) {
      target += setWidth;
    }
    while (target >= high - 2) {
      target -= setWidth;
    }
    if (Math.abs(target - el.scrollLeft) > 1) {
      jump(el, target);
    }
  }, [measureSet, homeCopy]);

  const handleScroll = () => {
    if (normalizeTimer.current !== null) {
      window.clearTimeout(normalizeTimer.current);
    }
    normalizeTimer.current = window.setTimeout(normalize, 140);
  };

  useEffect(
    () => () => {
      if (normalizeTimer.current !== null) {
        window.clearTimeout(normalizeTimer.current);
      }
    },
    [],
  );

  // Browsers that report when scrolling stops get a second, exact trigger.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) {
      return;
    }
    el.addEventListener("scrollend", normalize);
    return () => el.removeEventListener("scrollend", normalize);
  }, [normalize]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) {
      return;
    }
    const observer = new ResizeObserver(() => normalize());
    observer.observe(el);
    return () => observer.disconnect();
  }, [normalize]);

  const scrollByCard = (direction: -1 | 1) => {
    const el = viewportRef.current;
    if (!el) {
      return;
    }
    const item = el.querySelector<HTMLElement>(".testimonials-carousel-item");
    const gap = parseFloat(getComputedStyle(el.firstElementChild as Element).columnGap) || 0;
    const step = (item?.offsetWidth ?? el.clientWidth * 0.5) + gap;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="testimonials-carousel" aria-label={content.carouselAriaLabel} role="region">
      <div ref={viewportRef} className="testimonials-carousel-viewport" onScroll={handleScroll}>
        <div className="testimonials-carousel-segment">
          {Array.from({ length: copies }, (_, copyIndex) =>
            cards.map((card) => (
              <div
                key={`${copyIndex}-${card.id}`}
                className="testimonials-carousel-item"
                data-repeat={copyIndex === homeCopy ? undefined : "true"}
              >
                <TestimonialCarouselCard card={card} />
              </div>
            )),
          )}
        </div>
      </div>
      <button
        type="button"
        className="testimonials-carousel-button testimonials-carousel-button-prev"
        aria-label="Previous testimonial"
        onClick={() => scrollByCard(-1)}
      >
        <ArrowIcon direction="left" />
      </button>
      <button
        type="button"
        className="testimonials-carousel-button testimonials-carousel-button-next"
        aria-label="Next testimonial"
        onClick={() => scrollByCard(1)}
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  );
}
