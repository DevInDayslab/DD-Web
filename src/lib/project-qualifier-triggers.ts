const QUALIFIER_LABELS = [
  "book a call",
  "start project",
  "book a consultation",
] as const;

export function shouldOpenProjectQualifier(href: string, label: string, enabled: boolean): boolean {
  if (!enabled) {
    return false;
  }

  const normalizedLabel = label.trim().toLowerCase();
  if (QUALIFIER_LABELS.some((entry) => normalizedLabel === entry)) {
    return true;
  }

  if (href === "/#book" || href.endsWith("#book")) {
    return true;
  }

  return false;
}
