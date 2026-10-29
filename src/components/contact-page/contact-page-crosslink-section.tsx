import Link from "next/link";
import type { ContactPageCrosslinkContent } from "@/types/contact-page";

type ContactPageCrosslinkSectionProps = {
  crosslink: ContactPageCrosslinkContent;
};

export function ContactPageCrosslinkSection({ crosslink }: ContactPageCrosslinkSectionProps) {
  return (
    <section className="contact-page-crosslink" aria-labelledby="contact-page-crosslink-heading">
      <div className="contact-page-crosslink-inner">
        <p id="contact-page-crosslink-heading" className="contact-page-crosslink-intro">
          <span>{crosslink.introText}</span>{" "}
          <Link className="contact-page-crosslink-link" href={crosslink.linkHref}>
            {crosslink.linkLabel}
          </Link>
        </p>

        <ul className="contact-page-crosslink-grid">
          {crosslink.metrics.map((metric) => (
            <li key={metric.id} className="contact-page-crosslink-card">
              <p className="contact-page-crosslink-metric-label">{metric.label}</p>
              <h3 className="contact-page-crosslink-metric-title">{metric.title}</h3>
              <p className="contact-page-crosslink-metric-body">{metric.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
