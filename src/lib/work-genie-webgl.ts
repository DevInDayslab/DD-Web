import type { Program, Texture } from "ogl";

export type WorkGenieRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export function viewportRectToContainerRect(
  container: DOMRect,
  target: DOMRect,
): WorkGenieRect {
  return {
    left: target.left - container.left,
    top: target.top - container.top,
    width: target.width,
    height: target.height,
  };
}

export function applyGenieUniforms(
  program: Program,
  containerRect: DOMRect,
  startRect: WorkGenieRect,
  endRect: WorkGenieRect,
  iconRadius: number,
  expandedRadius: number,
  cameraZ: number,
): void {
  const fov = (45 * Math.PI) / 180;
  const wHeight = 2 * Math.tan(fov / 2) * cameraZ;
  const wWidth = wHeight * (containerRect.width / containerRect.height);

  program.uniforms.uPixelsPerUnit.value = containerRect.height / wHeight;
  program.uniforms.uRadius.value = [iconRadius, expandedRadius];

  const startCenterX = startRect.left + startRect.width / 2;
  const startCenterY = startRect.top + startRect.height / 2;
  const startNx = (startCenterX / containerRect.width) * 2 - 1;
  const startNy = -(startCenterY / containerRect.height) * 2 + 1;
  const startScaleX = (startRect.width / containerRect.width) * wWidth;
  const startScaleY = (startRect.height / containerRect.height) * wHeight;

  program.uniforms.uStartPos.value = [(startNx * wWidth) / 2, (startNy * wHeight) / 2];
  program.uniforms.uStartScale.value = [startScaleX, startScaleY];

  const endCenterX = endRect.left + endRect.width / 2;
  const endCenterY = endRect.top + endRect.height / 2;
  const endNx = (endCenterX / containerRect.width) * 2 - 1;
  const endNy = -(endCenterY / containerRect.height) * 2 + 1;
  const endScaleX = (endRect.width / containerRect.width) * wWidth;
  const endScaleY = (endRect.height / containerRect.height) * wHeight;

  program.uniforms.uEndPos.value = [(endNx * wWidth) / 2, (endNy * wHeight) / 2];
  program.uniforms.uEndScale.value = [endScaleX, endScaleY];
}

export function loadGenieTexture(
  texture: Texture,
  program: Program,
  imageSrc: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    img.onload = () => {
      texture.image = img;
      program.uniforms.uImageRes.value = [img.width, img.height];
      program.uniforms.uAlpha.value = 1;
      resolve();
    };
    img.onerror = () => {
      reject(new Error(`Failed to load genie texture: ${imageSrc}`));
    };
  });
}

export function createSolidGenieTexture(
  texture: Texture,
  program: Program,
  fill: string,
): void {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  ctx.fillStyle = fill;
  ctx.fillRect(0, 0, 64, 64);
  texture.image = canvas;
  program.uniforms.uImageRes.value = [64, 64];
  program.uniforms.uAlpha.value = 1;
}
