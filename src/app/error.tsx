"use client";

import Link from "next/link";
import { StatusIllustration } from "@/components/status-illustration";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="status-page">
      <StatusIllustration kind="error" />
      <p className="status-page-eyebrow">Something broke</p>
      <h1 className="status-page-title">That didn&rsquo;t load properly.</h1>
      <p className="status-page-copy">
        It&rsquo;s on our side, not yours. Try again, or head back to the homepage.
      </p>
      <button type="button" className="status-page-primary" onClick={reset}>
        Try again
      </button>
      <ul className="status-page-links" aria-label="Other pages">
        <li>
          <Link href="/" className="status-page-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/contact" className="status-page-link">
            Contact us
          </Link>
        </li>
      </ul>
    </main>
  );
}
