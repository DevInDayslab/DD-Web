import { SiteFooterLink } from "@/components/site-footer-link";
import { SiteFooterCtaButton } from "@/components/site-footer-cta-button";
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
        <SiteFooterCtaButton
          href={cta.buttonHref}
          label={cta.buttonLabel}
          ariaLabel={cta.buttonAriaLabel}
        />
      </div>

      <div className="site-footer-bar">
        <div className="site-footer-bar-inner">
          <div className="site-footer-brand">
            <p className="site-footer-brand-name">{brand.name}</p>
            <p className="site-footer-brand-tagline">{brand.tagline}</p>
          </div>

          <nav className="site-footer-nav" aria-label="Footer">
            <p className="site-footer-col-label" aria-hidden>
              Explore
            </p>
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
            <div className="site-footer-social-block">
              <p className="site-footer-col-label" aria-hidden>
                Follow
              </p>
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
            </div>
            <p className="site-footer-copyright">{content.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
