import Image from "next/image";
import Link from "next/link";
import type { PortfolioGridItem, PortfolioPageLabels } from "@/types/portfolio-page";

type PortfolioGridCellProps = {
  item: PortfolioGridItem;
  labels: PortfolioPageLabels;
};

const markById: Record<string, string> = {
  dater: "/logos/marks/dater.png",
  invigil: "/logos/marks/invigil.png",
  "billing-baba": "/logos/marks/billing-baba.png",
  "entry-ticket": "/logos/marks/entry-ticket.png",
  "turbo-supply": "/logos/marks/turbosupply.png",
  myndfe: "/logos/marks/myndfe.png",
  homeyfixit: "/logos/marks/homeyfixit.png",
  sailor: "/logos/marks/sailor.png",
  trustai: "/logos/marks/trustai.png",
};

function cellLabel(item: PortfolioGridItem, labels: PortfolioPageLabels): string {
  if (item.kind === "more") {
    return labels.more;
  }
  if (item.kind === "coming-soon") {
    return labels.comingSoon;
  }
  return labels.caseStudy;
}

export function PortfolioGridCell({ item, labels }: PortfolioGridCellProps) {
  const muted = item.kind === "coming-soon" || item.kind === "more";
  const isMore = item.kind === "more";
  const className = [
    "portfolio-grid-cell",
    muted ? "portfolio-grid-cell--muted" : "",
    isMore ? "portfolio-grid-cell--more" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const mark = markById[item.id];

  const body = (
    <>
      {!isMore ? (
        <span className="portfolio-grid-cell-mark" aria-hidden>
          {mark ? (
            <Image src={mark} alt="" width={44} height={44} className="portfolio-grid-cell-mark-img" />
          ) : (
            <span className="portfolio-grid-cell-mark-letter">{item.title.charAt(0)}</span>
          )}
        </span>
      ) : null}
      {!isMore ? (
        <span className="portfolio-grid-cell-text">
          <span className="portfolio-grid-cell-title">{item.title}</span>
          <span className="portfolio-grid-cell-label">{cellLabel(item, labels)}</span>
        </span>
      ) : (
        <span className="portfolio-grid-cell-label">{cellLabel(item, labels)}</span>
      )}
    </>
  );

  if (item.href) {
    return (
      <Link href={item.href} className={className}>
        {body}
      </Link>
    );
  }

  return <div className={className}>{body}</div>;
}
