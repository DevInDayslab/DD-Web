import { site } from "@/config/site";
import type { PageCopy } from "@/types";

export const homePage = {
  meta: {
    title: site.metadata.title,
    description: site.metadata.description,
    path: "/",
  },
} satisfies PageCopy;
