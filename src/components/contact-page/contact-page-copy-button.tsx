"use client";

import { useEffect, useState } from "react";

type ContactPageCopyButtonProps = {
  value: string;
};

export function ContactPageCopyButton({ value }: ContactPageCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (insecure context, permissions); the address is still a mailto link.
    }
  };

  return (
    <button
      type="button"
      className={`cp2-copy${copied ? " cp2-copy--done" : ""}`}
      onClick={copy}
      aria-label={copied ? "Email address copied" : `Copy ${value}`}
      title={copied ? "Copied" : "Copy email"}
    >
      {copied ? (
        <svg viewBox="0 0 16 16" fill="none" width="16" height="16" aria-hidden>
          <path d="M3.5 8.5L6.5 11.5L12.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" fill="none" width="16" height="16" aria-hidden>
          <rect x="5.5" y="5.5" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M10.5 3.5V3.25C10.5 2.56 9.94 2 9.25 2H4.25C3.56 2 3 2.56 3 3.25V8.25C3 8.94 3.56 9.5 4.25 9.5H4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
