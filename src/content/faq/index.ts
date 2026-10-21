import { assertUniqueIds } from "@/lib/unique";
import type { FaqItem } from "@/types";

export const faqItems: readonly FaqItem[] = [];

assertUniqueIds(faqItems, "faq");
