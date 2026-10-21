import type { PageMeta } from "@/types/site";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type CaseStudyVideo = {
  src: string;
  posterSrc: string;
  mimeType: "video/mp4";
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  video: CaseStudyVideo;
  tags: string[];
};

export type PageCopy = {
  meta: PageMeta;
};
