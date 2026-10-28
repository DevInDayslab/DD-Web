export function mirrorBorderRadius(borderRadius: string): string {
  const [topLeft, topRight, bottomRight, bottomLeft] = borderRadius.split(" ");

  if (!topLeft || !topRight || !bottomRight || !bottomLeft) {
    return borderRadius;
  }

  return `${topRight} ${topLeft} ${bottomLeft} ${bottomRight}`;
}
