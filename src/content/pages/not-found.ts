import type { PageCopy } from "@/types";

export const notFoundPage = {
  meta: {
    title: "Not found",
    description: "This page does not exist.",
    path: "/404",
  },
  title: "Not found",
  description: "This page does not exist.",
  action: {
    label: "Go home",
    href: "/",
  },
} as const satisfies PageCopy & {
  title: string;
  description: string;
  action: { label: string; href: string };
};
