import Link from "next/link";
import { StatusIllustration } from "@/components/status-illustration";
import { notFoundPage } from "@/content/pages/not-found";

export default function NotFound() {
  return (
    <main className="status-page">
      <StatusIllustration kind="lost" />
      <p className="status-page-eyebrow">{notFoundPage.eyebrow}</p>
      <h1 className="status-page-title">{notFoundPage.title}</h1>
      <p className="status-page-copy">{notFoundPage.description}</p>
      <Link href={notFoundPage.action.href} className="status-page-primary">
        {notFoundPage.action.label}
      </Link>
      <ul className="status-page-links" aria-label="Popular pages">
        {notFoundPage.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="status-page-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
