import { HomePage } from "@/components/home-page";
import { homePage } from "@/content/pages/home";
import { buildPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata(homePage.meta);

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
