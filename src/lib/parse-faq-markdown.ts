import type { FaqPageItem, FaqPageSection } from "@/types/faq-page";

const FAQ_SECTION_PATTERN = /^## (\d+\.\s+.+)$/;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function sectionLabelFromHeading(heading: string): string {
  return heading.replace(/^\d+\.\s+/, "").trim();
}

function escapeTsString(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

export function parseFaqMarkdownSections(markdown: string): FaqPageSection[] {
  const sections: FaqPageSection[] = [];
  const parts = markdown.split(/^## /m).slice(1);

  for (const part of parts) {
    const headingLine = part.split("\n")[0]?.trim() ?? "";
    if (!FAQ_SECTION_PATTERN.test(`## ${headingLine}`)) {
      continue;
    }

    const label = sectionLabelFromHeading(headingLine);
    const id = slugify(label);
    const body = part.slice(headingLine.length);
    const items: FaqPageItem[] = [];
    const re = /\*\*([^*]+)\*\*\n([\s\S]*?)(?=\n\*\*|\n---|\n## |$)/g;
    let match: RegExpExecArray | null;

    while ((match = re.exec(body)) !== null) {
      const question = match[1].trim();
      const answer = match[2].trim().replace(/\n+/g, " ");
      if (!question.endsWith("?")) {
        continue;
      }
      items.push({
        id: slugify(question),
        question,
        answer,
      });
    }

    if (items.length > 0) {
      sections.push({ id, label, items });
    }
  }

  return sections;
}

export function flattenFaqPageItems(sections: readonly FaqPageSection[]): FaqPageItem[] {
  return sections.flatMap((section) => section.items);
}

export function formatFaqPageSectionsModule(sections: readonly FaqPageSection[]): string {
  const lines: string[] = [
    `import type { FaqPageSection } from "@/types/faq-page";`,
    `import { assertUniqueIds } from "@/lib/unique";`,
    ``,
    `export const faqPageSections = [`,
  ];

  for (const section of sections) {
    lines.push(`  {`);
    lines.push(`    id: "${escapeTsString(section.id)}",`);
    lines.push(`    label: "${escapeTsString(section.label)}",`);
    lines.push(`    items: [`);
    for (const item of section.items) {
      lines.push(`      {`);
      lines.push(`        id: "${escapeTsString(item.id)}",`);
      lines.push(`        question: "${escapeTsString(item.question)}",`);
      lines.push(`        answer:`);
      lines.push(`          "${escapeTsString(item.answer)}",`);
      lines.push(`      },`);
    }
    lines.push(`    ],`);
    lines.push(`  },`);
  }

  lines.push(`] as const satisfies readonly FaqPageSection[];`);
  lines.push(``);
  lines.push(`assertUniqueIds(`);
  lines.push(`  faqPageSections.flatMap((section) => section.items),`);
  lines.push(`  "faq-page",`);
  lines.push(`);`);
  lines.push(``);

  return lines.join("\n");
}
