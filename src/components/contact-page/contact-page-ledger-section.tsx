import type { ContactPageLedgerContent } from "@/types/contact-page";

type ContactPageLedgerSectionProps = {
  ledger: ContactPageLedgerContent;
};

export function ContactPageLedgerSection({ ledger }: ContactPageLedgerSectionProps) {
  const { architects, logistics } = ledger;

  return (
    <section className="contact-page-ledger" aria-label="Leadership and logistics">
      <div className="contact-page-ledger-shell">
        <div className="contact-page-ledger-inner">
          <article className="contact-page-ledger-block contact-page-ledger-block--architects">
            <div className="contact-page-ledger-copy">
              <h2 className="contact-page-ledger-heading">{architects.heading}</h2>
              <p className="contact-page-ledger-body">{architects.body}</p>
            </div>

            <div className="contact-page-ledger-foot contact-page-ledger-foot--architects">
              <div className="contact-page-ledger-avatars" aria-hidden>
                {architects.avatars.map((avatar, index) => (
                  <span
                    key={avatar.initials}
                    className={`contact-page-ledger-avatar contact-page-ledger-avatar--${avatar.variant}${
                      index > 0 ? " contact-page-ledger-avatar--overlap" : ""
                    }`}
                  >
                    {avatar.initials}
                  </span>
                ))}
              </div>
              <p className="contact-page-ledger-foot-label">{architects.footerLabel}</p>
            </div>
          </article>

          <div className="contact-page-ledger-divider" aria-hidden />

          <article className="contact-page-ledger-block contact-page-ledger-block--logistics">
            <div className="contact-page-ledger-copy">
              <h2 className="contact-page-ledger-heading">{logistics.heading}</h2>
              <p className="contact-page-ledger-body">{logistics.body}</p>
            </div>

            <dl className="contact-page-ledger-meta">
              {logistics.metaRows.map((row) => (
                <div key={row.label} className="contact-page-ledger-meta-row">
                  <dt className="contact-page-ledger-meta-label">{row.label}</dt>
                  <dd className="contact-page-ledger-meta-value">
                    {row.href ? (
                      <a className="contact-page-ledger-meta-link" href={row.href}>
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </div>
    </section>
  );
}
