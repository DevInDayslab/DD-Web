import { PortfolioGridCell } from "@/components/portfolio-grid-cell";
import { portfolioPageContent } from "@/content/portfolio-page";

export function PortfolioPage() {
  const { hero, labels, items } = portfolioPageContent;

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero" aria-labelledby="portfolio-hero-title">
        <div className="portfolio-hero-inner">
          <p className="portfolio-hero-eyebrow">{hero.eyebrow}</p>
          <h1 id="portfolio-hero-title" className="portfolio-hero-title">
            {hero.title}
          </h1>
          <p className="portfolio-hero-subtitle">{hero.subtitle}</p>
          <hr className="portfolio-hero-divider" />
        </div>
      </section>

      <section className="portfolio-grid-section" aria-label="Portfolio projects">
        <div className="portfolio-grid">
          {items.map((item) => (
            <PortfolioGridCell key={item.id} item={item} labels={labels} />
          ))}
        </div>
      </section>
    </div>
  );
}
