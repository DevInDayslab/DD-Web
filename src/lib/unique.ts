export function assertUniqueIds<T extends { id: string }>(
  items: readonly T[],
  label: string,
): void {
  const seen = new Set<string>();

  for (const item of items) {
    if (seen.has(item.id)) {
      throw new Error(`Duplicate ${label} id: ${item.id}`);
    }
    seen.add(item.id);
  }
}

export function assertUniqueSlugs<T extends { slug: string }>(
  items: readonly T[],
  label: string,
): void {
  const seen = new Set<string>();

  for (const item of items) {
    if (seen.has(item.slug)) {
      throw new Error(`Duplicate ${label} slug: ${item.slug}`);
    }
    seen.add(item.slug);
  }
}
