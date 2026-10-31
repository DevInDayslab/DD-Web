import { site } from "@/config/site";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/** Search engines and AI crawlers are allowed on purpose: the FAQ and llms.txt strategy depends on it. */
const allowedCrawlers = [
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "CCBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...allowedCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
