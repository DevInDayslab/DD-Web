import { TestimonialStars } from "@/components/testimonial-stars";
import type { TestimonialTextCard } from "@/types/testimonials-section";

type TestimonialCardTextProps = {
  card: TestimonialTextCard;
};

export function TestimonialCardText({ card }: TestimonialCardTextProps) {
  const quoteClassName =
    card.quoteFontWeight === "regular"
      ? "testimonial-quote testimonial-quote-regular"
      : "testimonial-quote";

  return (
    <article className="testimonial-card testimonial-card-text">
      <div className="testimonial-card-top">
        <div className="testimonial-card-top-row">
          <TestimonialStars count={card.rating} />
          {card.verifiedBadge ? (
            <span className="testimonial-verified-badge">{card.verifiedBadge}</span>
          ) : null}
        </div>
        <blockquote className={quoteClassName}>{card.quote}</blockquote>
      </div>
      <footer className="testimonial-card-footer">
        <span
          className="testimonial-avatar"
          style={{ background: card.avatarBackground }}
          aria-hidden
        >
          {card.initials}
        </span>
        <div className="testimonial-person">
          <p className="testimonial-name">{card.name}</p>
          <p
            className={
              card.verifiedBadge
                ? "testimonial-role testimonial-role-muted"
                : "testimonial-role"
            }
          >
            {card.role}
          </p>
        </div>
      </footer>
    </article>
  );
}
