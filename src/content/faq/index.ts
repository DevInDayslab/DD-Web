import { faqSectionContent } from "@/content/faq-section";
import { assertUniqueIds } from "@/lib/unique";
import type { FaqItem } from "@/types";

export const faqItems: readonly FaqItem[] = faqSectionContent.items;

assertUniqueIds(faqItems, "faq");
