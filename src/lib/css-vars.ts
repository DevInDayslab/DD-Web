function serializeCSSValue(value: string): string {
  if (value.startsWith("linear-gradient(")) {
    return `"${value.replace(/"/g, '\\"')}"`;
  }

  return value;
}

export function serializeCssCustomProperties(vars: Record<string, string>): string {
  return Object.entries(vars)
    .map(([name, value]) => `${name}:${serializeCSSValue(value)}`)
    .join(";");
}
