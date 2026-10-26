type TestimonialStarsProps = {
  count: number;
};

export function TestimonialStars({ count }: TestimonialStarsProps) {
  return (
    <div className="testimonial-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, index) => (
        <span key={index} className="testimonial-star" aria-hidden />
      ))}
    </div>
  );
}
