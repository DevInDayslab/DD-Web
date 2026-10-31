"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

export function TestimonialsCarousel({ content }: TestimonialsCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateEdges = useCallback(() => {
    const el = viewportRef.current;
    if (!el) {
      return;
    }
    setCanScrollPrev(el.scrollLeft > 4);
    setCanScrollNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = viewportRef.current;
    if (!el) {
      return;
    }
    const observer = new ResizeObserver(updateEdges);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateEdges, content.cards.length]);

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
      <div ref={viewportRef} className="testimonials-carousel-viewport" onScroll={updateEdges}>
        <div className="testimonials-carousel-segment">
          {content.cards.map((card) => (
            <div key={card.id} className="testimonials-carousel-item">
              <TestimonialCarouselCard card={card} />
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="testimonials-carousel-button testimonials-carousel-button-prev"
        aria-label="Previous testimonial"
        disabled={!canScrollPrev}
        onClick={() => scrollByCard(-1)}
      >
        <ArrowIcon direction="left" />
      </button>
      <button
        type="button"
        className="testimonials-carousel-button testimonials-carousel-button-next"
        aria-label="Next testimonial"
        disabled={!canScrollNext}
        onClick={() => scrollByCard(1)}
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  );
}
