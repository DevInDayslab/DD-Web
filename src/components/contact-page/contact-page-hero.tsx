import type { ContactPageHeroContent } from "@/types/contact-page";

type ContactPageHeroProps = {
  hero: ContactPageHeroContent;
};

export function ContactPageHero({ hero }: ContactPageHeroProps) {
  return (
    <section className="contact-page-hero" aria-labelledby="contact-page-title">
      <div className="contact-page-hero-inner">
        <p className="contact-page-hero-eyebrow">{hero.eyebrow}</p>
        <h1 id="contact-page-title" className="contact-page-hero-headline">
          {hero.headline}
        </h1>
        <p className="contact-page-hero-subhead">{hero.subhead}</p>
        <hr className="contact-page-hero-divider" aria-hidden />
      </div>
    </section>
  );
}
