/** Vertex / fragment shaders adapted from Framer GenieCarousel (LiquidGallery). */

export const workGenieVertexShader = `
  attribute vec3 position;
  attribute vec2 uv;
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;

  uniform float uProgress;
  uniform vec2 uStartPos;
  uniform vec2 uStartScale;
  uniform vec2 uEndPos;
  uniform vec2 uEndScale;
  uniform vec2 uRadius;
  uniform float uPixelsPerUnit;

  varying vec2 vUv;
  varying vec2 vUnwarpedSize;
  varying float vRadius;

  void main() {
    vUv = uv;

    vUnwarpedSize = mix(uStartScale, uEndScale, uProgress) * uPixelsPerUnit;
    vRadius = mix(uRadius.x, uRadius.y, uProgress);

    float prog = 1.0 - clamp(uProgress, 0.0, 1.0);

    float slideT = clamp(prog / 0.5, 0.0, 1.0);
    float slideProgress = slideT * slideT * (3.0 - 2.0 * slideT);

    float transT = clamp((prog - 0.3) / 0.7, 0.0, 1.0);
    float translateProgress = transT * transT * (3.0 - 2.0 * transT);

    float fullTopY = uEndPos.y + uEndScale.y * 0.5;
    float fullBottomY = uEndPos.y - uEndScale.y * 0.5;
    float dockTopY = uStartPos.y + uStartScale.y * 0.5;
    float dockBottomY = uStartPos.y - uStartScale.y * 0.5;

    float verticalDist = dockTopY - fullTopY;
    float translationY = translateProgress * verticalDist;

    float curTopEdgeY = fullTopY + translationY;
    float curBottomEdgeY = max(fullBottomY + translationY, dockBottomY);

    float currentY = mix(curBottomEdgeY, curTopEdgeY, uv.y);

    float fullLeftX = uEndPos.x - uEndScale.x * 0.5;
    float fullRightX = uEndPos.x + uEndScale.x * 0.5;
    float dockLeftX = uStartPos.x - uStartScale.x * 0.5;
    float dockRightX = uStartPos.x + uStartScale.x * 0.5;

    float bezierBottomLeftX = mix(fullLeftX, dockLeftX, slideProgress);
    float bezierBottomRightX = mix(fullRightX, dockRightX, slideProgress);

    float xMin = fullLeftX;
    float xMax = fullRightX;

    if (currentY <= dockTopY) {
      xMin = bezierBottomLeftX;
      xMax = bezierBottomRightX;
    } else if (currentY < fullTopY) {
      float normalizedY = (currentY - dockTopY) / (fullTopY - dockTopY);
      float eased = normalizedY < 0.5
        ? 4.0 * normalizedY * normalizedY * normalizedY
        : 1.0 - pow(-2.0 * normalizedY + 2.0, 3.0) / 2.0;

      xMin = mix(bezierBottomLeftX, fullLeftX, eased);
      xMax = mix(bezierBottomRightX, fullRightX, eased);
    }

    float currentX = mix(xMin, xMax, uv.x);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(currentX, currentY, 0.0, 1.0);
  }
`;

export const workGenieFragmentShader = `
  precision highp float;
  uniform sampler2D tMap;
  uniform float uAlpha;
  uniform vec2 uImageRes;

  varying vec2 vUv;
  varying vec2 vUnwarpedSize;
  varying float vRadius;

  float udRoundBox(vec2 p, vec2 b, float r) {
    return length(max(abs(p) - b + r, 0.0)) - r;
  }

  void main() {
    float imageAspect = uImageRes.x / uImageRes.y;
    float meshAspect = vUnwarpedSize.x / vUnwarpedSize.y;

    vec2 scale = vec2(1.0);
    if (meshAspect > imageAspect) {
      scale.y = imageAspect / meshAspect;
    } else {
      scale.x = meshAspect / imageAspect;
    }
    vec2 coverUv = (vUv - 0.5) * scale + 0.5;

    vec2 pxPos = (vUv - 0.5) * vUnwarpedSize;
    vec2 halfSize = vUnwarpedSize * 0.5;
    float d = udRoundBox(pxPos, halfSize, vRadius);
    float alphaMask = 1.0 - smoothstep(0.0, 1.5, d);

    vec4 tex = texture2D(tMap, coverUv);
    gl_FragColor = vec4(tex.rgb, tex.a * uAlpha * alphaMask);
  }
`;
