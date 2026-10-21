import type { ExternalLink as ExternalLinkData } from "@/types";

type ExternalLinkProps = ExternalLinkData & {
  className?: string;
};

export function ExternalLink({ href, label, className }: ExternalLinkProps) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}
