import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import type { TestimonialsSectionContent } from "@/types/testimonials-section";

type TestimonialsSectionProps = {
  content: TestimonialsSectionContent;
};

export function TestimonialsSection({ content }: TestimonialsSectionProps) {
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-section-title">
      <div className="testimonials-section-inner">
        <h2 id="testimonials-section-title" className="testimonials-section-title">
          {content.title}
        </h2>
        <TestimonialsCarousel content={content} />
      </div>
    </section>
  );
}
