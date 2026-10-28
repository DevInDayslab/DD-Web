import Link from "next/link";
import type { PortfolioGridItem, PortfolioPageLabels } from "@/types/portfolio-page";

type PortfolioGridCellProps = {
  item: PortfolioGridItem;
  labels: PortfolioPageLabels;
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

  const body = (
    <>
      {!isMore ? (
        <span className="portfolio-grid-cell-title">{item.title}</span>
      ) : null}
      <span className="portfolio-grid-cell-label">{cellLabel(item, labels)}</span>
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
