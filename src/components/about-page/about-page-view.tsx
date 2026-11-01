import Image from "next/image";
import Link from "next/link";
import { QualifierCta } from "@/components/project-qualifier/qualifier-cta";
import { FounderPortrait } from "@/components/founder-portrait";
import { founderSectionContent } from "@/content/founder-section";
import type { AboutCaseRow, AboutPageContent } from "@/types/about-page";

type AboutPageViewProps = {
  content: AboutPageContent;
  caseRows: readonly AboutCaseRow[];
  hasPortrait: boolean;
};

export function AboutPageView({ content, caseRows, hasPortrait }: AboutPageViewProps) {
  const { hero, letter, build, beliefs, work, closing } = content;
  const { signoff, portrait, portraitPlaceholderLabel } = founderSectionContent;

  return (
    <div className="ab">
      <section className="ab-hero" aria-labelledby="about-page-title">
        <p className="ab-eyebrow">{hero.eyebrow}</p>
        <h1 id="about-page-title" className="ab-title">
          {hero.headline}
        </h1>
        <p className="ab-lede">{hero.lede}</p>

      </section>

      <section className="ab-letter ab-reveal" aria-labelledby="about-letter-title">
        <div className="ab-portrait">
          {hasPortrait ? (
            <FounderPortrait portrait={portrait} placeholderLabel={portraitPlaceholderLabel} />
          ) : (
            <div className="ab-monogram" role="img" aria-label={letter.portraitFallbackCaption}>
              <span aria-hidden>R</span>
            </div>
          )}
        </div>

        <div className="ab-letter-copy">
          <h2 id="about-letter-title" className="ab-h2">
            {letter.heading}
          </h2>
          <p className="ab-letter-intro">{letter.intro}</p>
          {letter.paragraphs.map((paragraph) => (
            <p key={paragraph} className="ab-body">
              {paragraph}
            </p>
          ))}
          <div className="ab-signoff">
            <Image
              src={signoff.signatureImageSrc}
              alt=""
              width={224}
              height={72}
              aria-hidden
              className="ab-signature"
            />
            <p className="ab-signoff-name">
              {signoff.name}
              <span className="ab-signoff-role">{signoff.role}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="ab-section ab-build ab-reveal" aria-labelledby="about-build-title">
        <div className="ab-build-intro">
          <h2 id="about-build-title" className="ab-h2">
            {build.heading}
          </h2>
          <p className="ab-body">{build.body}</p>
        </div>
        <div className="ab-build-groups">
          {build.groups.map((group) => (
            <div key={group.label} className="ab-build-group">
              <h3 className="ab-build-label">{group.label}</h3>
              <ul className="ab-chips">
                {group.items.map((item) => (
                  <li key={item} className="ab-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="ab-build-footnote">{build.footnote}</p>
        </div>
      </section>

      <section className="ab-section ab-reveal" aria-labelledby="about-beliefs-title">
        <h2 id="about-beliefs-title" className="ab-h2">
          {beliefs.heading}
        </h2>
        <ul className="ab-beliefs">
          {beliefs.items.map((item) => (
            <li key={item.title} className="ab-belief">
              <h3 className="ab-belief-title">{item.title}</h3>
              <p className="ab-belief-body">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ab-section ab-reveal" aria-labelledby="about-work-title">
        <div className="ab-work-head">
          <div>
            <h2 id="about-work-title" className="ab-h2">
              {work.heading}
            </h2>
            <p className="ab-body">{work.body}</p>
          </div>
          <Link href={work.linkHref} className="ab-link">
            {work.linkLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>

        <ul className="ab-cases">
          {caseRows.map((row) => (
            <li key={row.slug}>
              <Link href={`/case-studies/${row.slug}`} className="ab-case">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={row.logoSrc} alt="" width={56} height={56} className="ab-case-logo" />
                <span className="ab-case-main">
                  <span className="ab-case-name">{row.name}</span>
                  <span className="ab-case-industry">{row.industry}</span>
                </span>
                <span className="ab-case-headline">{row.headline}</span>
                <span className="ab-case-arrow" aria-hidden>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="ab-more">
          <p className="ab-more-label">{work.moreLabel}</p>
          <ul className="ab-logos">
            {work.moreLogos.map((logo) => (
              <li key={logo.alt}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} title={logo.alt} width={64} height={64} />
              </li>
            ))}
            <li>
              <Link href={work.nextHref} className="ab-logo-next" aria-label={work.nextAriaLabel}>
                <span className="ab-logo-next-plus" aria-hidden>
                  +
                </span>
                <span className="ab-logo-next-text">{work.nextLabel}</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="ab-closing ab-reveal" aria-labelledby="about-closing-title">
        <h2 id="about-closing-title" className="ab-closing-title">
          {closing.heading}
        </h2>
        <p className="ab-closing-body">{closing.body}</p>
        <div className="ab-closing-actions">
          <QualifierCta
            href="/#book"
            label={closing.primaryLabel}
            className="ab-button ab-button--primary"
          >
            {closing.primaryLabel}
          </QualifierCta>
          <Link href={closing.secondaryHref} className="ab-button ab-button--ghost">
            {closing.secondaryLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
