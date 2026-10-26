import Image from "next/image";
import { FounderPortrait } from "@/components/founder-portrait";
import type { FounderSectionContent } from "@/types/founder-section";

type FounderSectionProps = {
  content: FounderSectionContent;
};

export function FounderSection({ content }: FounderSectionProps) {
  const { signoff } = content;

  return (
    <section className="founder-section" aria-labelledby="founder-section-title">
      <div className="founder-section-inner">
        <div className="founder-section-grid">
          <div className="founder-section-letter">
            <div className="founder-section-copy">
              <h2 id="founder-section-title" className="founder-section-title">
                {content.title}
              </h2>
              <div className="founder-section-editorial">
                <p className="founder-section-intro">{content.intro}</p>
                {content.bodyParagraphs.map((paragraph, index) => (
                  <p key={index} className="founder-section-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="founder-section-signoff">
              <div className="founder-signoff-mark">
                <Image
                  className="founder-signoff-signature-trace"
                  src={signoff.signatureImageSrc}
                  alt=""
                  width={224}
                  height={72}
                  aria-hidden
                />
                <p className="founder-signoff-name">{signoff.name}</p>
                <p className="founder-signoff-role">{signoff.role}</p>
              </div>
            </div>
          </div>

          <div className="founder-section-portrait">
            <FounderPortrait
              portrait={content.portrait}
              placeholderLabel={content.portraitPlaceholderLabel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
