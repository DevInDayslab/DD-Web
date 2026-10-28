export type GenieTransformOrigin = {
  xPercent: number;
  yPercent: number;
};

export function genieOriginFromRects(
  sourceRect: DOMRect,
  targetRect: DOMRect,
): GenieTransformOrigin {
  const sourceCenterX = sourceRect.left + sourceRect.width / 2;
  const sourceCenterY = sourceRect.top + sourceRect.height / 2;

  const xPercent =
    targetRect.width > 0 ? ((sourceCenterX - targetRect.left) / targetRect.width) * 100 : 50;
  const yPercent =
    targetRect.height > 0 ? ((sourceCenterY - targetRect.top) / targetRect.height) * 100 : 100;

  return {
    xPercent: Math.min(100, Math.max(0, xPercent)),
    yPercent: Math.min(100, Math.max(0, yPercent)),
  };
}
