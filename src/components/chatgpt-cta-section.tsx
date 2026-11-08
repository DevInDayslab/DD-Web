import { ChatGptMarkIcon } from "@/components/chatgpt-mark-icon";
import { site } from "@/config/site";
import { buildChatGptUrl } from "@/lib/chatgpt";
import type { ChatGptCtaSectionContent } from "@/types/chatgpt-cta-section";

type ChatGptCtaSectionProps = {
  content: ChatGptCtaSectionContent;
};

export function ChatGptCtaSection({ content }: ChatGptCtaSectionProps) {
  const { headline } = content;
  const siteAddress = site.url.replace(/\/+$/, "");
  const chatGptHref = buildChatGptUrl(content.chatGptPrompt.replaceAll("{site}", siteAddress));

  return (
    <section className="chatgpt-cta-section" aria-labelledby="chatgpt-cta-headline">
      <div className="chatgpt-cta-section-inner">
        <div className="chatgpt-cta-card">
          <div className="chatgpt-cta-card-glow" aria-hidden />
          <div className="chatgpt-cta-card-copy">
            <p className="chatgpt-cta-badge">{content.badge}</p>
            <h2 id="chatgpt-cta-headline" className="chatgpt-cta-headline">
              <span className="chatgpt-cta-headline-line">
                {headline.lineOneBefore}
                <span className="chatgpt-cta-headline-brand">{headline.headlineBrand}</span>
                {headline.lineOneAfter}
              </span>
              <span className="chatgpt-cta-headline-line">{headline.lineTwo}</span>
            </h2>
            <a
              className="chatgpt-cta-button"
              href={chatGptHref}
              target="_blank"
              rel="noreferrer"
              aria-label={content.ctaAriaLabel}
            >
              <span className="chatgpt-cta-button-shadow" aria-hidden />
              <span className="chatgpt-cta-button-label">{content.ctaLabel}</span>
              <span className="chatgpt-cta-button-icon" aria-hidden>
                <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="chatgpt-cta-logo-wrap" aria-hidden>
            <ChatGptMarkIcon className="chatgpt-cta-logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
