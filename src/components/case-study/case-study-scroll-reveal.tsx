import type { ReactNode } from "react";

type CaseStudyScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** @deprecated No scroll animation; kept for call-site compatibility. */
  delay?: number;
};

export function CaseStudyScrollReveal({
  children,
  className = "",
}: CaseStudyScrollRevealProps) {
  return <div className={className}>{children}</div>;
}
