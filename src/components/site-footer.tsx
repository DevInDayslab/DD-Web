import { SiteFooterLink } from "@/components/site-footer-link";
import { siteFooterContent } from "@/content/site-footer";

export function SiteFooter() {
  const content = siteFooterContent;
  const { brand, cta, navLinks, socialLinks } = content;

  return (
    <footer className="site-footer">
      <div className="site-footer-backdrop" aria-hidden>
        <div className="site-footer-backdrop-image" />
        <div className="site-footer-backdrop-scrim" />
        <div className="site-footer-backdrop-gradient" />
        <div className="site-footer-backdrop-bar-band" />
      </div>

      <div className="site-footer-cta">
        <h2 className="site-footer-headline">{cta.headline}</h2>
        <p className="site-footer-subtext">{cta.subtext}</p>
        <a className="site-footer-cta-button" href={cta.buttonHref} aria-label={cta.buttonAriaLabel}>
          <span>{cta.buttonLabel}</span>
          <span className="site-footer-cta-button-arrow" aria-hidden>
            <svg viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 2H8M8 2L6 0.2M8 2L6 3.8"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>

      <div className="site-footer-bar">
        <div className="site-footer-bar-inner">
          <div className="site-footer-brand">
            <p className="site-footer-brand-name">{brand.name}</p>
            <p className="site-footer-brand-tagline">{brand.tagline}</p>
          </div>

          <nav className="site-footer-nav" aria-label="Footer">
            <ul className="site-footer-nav-list">
              {navLinks.map((link, index) => (
                <li key={link.id} className="site-footer-nav-item">
                  {index > 0 ? (
                    <span className="site-footer-nav-separator" aria-hidden>
                      {content.navSeparator}
                    </span>
                  ) : null}
                  <SiteFooterLink link={link} className="site-footer-nav-link" />
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer-meta">
            <div className="site-footer-social">
              {socialLinks.map((link, index) => (
                <span key={link.id} className="site-footer-social-item">
                  {index > 0 ? (
                    <span className="site-footer-social-separator" aria-hidden>
                      {content.socialSeparator}
                    </span>
                  ) : null}
                  <SiteFooterLink link={link} className="site-footer-social-link" />
                </span>
              ))}
            </div>
            <p className="site-footer-copyright">{content.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
