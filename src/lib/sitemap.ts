import { routes } from "@/config/navigation";
import { site } from "@/config/site";
import { getAllCaseStudyPages } from "@/content/case-studies/pages-registry";
import type { MetadataRoute } from "next";

function absolutePath(path: string): string {
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return new URL(withSlash, site.url).toString();
}

export function buildSitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: absolutePath(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const caseStudyDetailRoutes: MetadataRoute.Sitemap = getAllCaseStudyPages().map((page) => ({
    url: absolutePath(page.meta.path),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...caseStudyDetailRoutes];
}
