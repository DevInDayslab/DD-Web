import { routes } from "@/config/navigation";
import { site } from "@/config/site";
import { caseStudies } from "@/content/case-studies";
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

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: absolutePath(`/work/${study.slug}`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
