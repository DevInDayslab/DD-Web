import Link from "next/link";
import type { ReactNode } from "react";

const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

type FaqInlineMarkdownProps = {
  text: string;
  className?: string;
};

function renderInlineMarkdown(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let linkIndex = 0;
  let match: RegExpExecArray | null;

  MARKDOWN_LINK_PATTERN.lastIndex = 0;
  while ((match = MARKDOWN_LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const label = match[1];
    const href = match[2];
    const key = `${keyPrefix}-link-${linkIndex}`;
    linkIndex += 1;

    if (href.startsWith("/")) {
      nodes.push(
        <Link key={key} href={href} className="faq-inline-link">
          {label}
        </Link>,
      );
    } else {
      nodes.push(
        <a key={key} href={href} className="faq-inline-link" target="_blank" rel="noopener noreferrer">
          {label}
        </a>,
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

export function FaqInlineMarkdown({ text, className }: FaqInlineMarkdownProps) {
  return <p className={className}>{renderInlineMarkdown(text, "faq")}</p>;
}
