"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from "ogl";
import { workCaseStudyGenieInteraction } from "@/config/work-interaction";
import { workGenieFragmentShader, workGenieVertexShader } from "@/lib/work-genie-shaders";
import {
  applyGenieUniforms,
  createSolidGenieTexture,
  loadGenieTexture,
  viewportRectToContainerRect,
} from "@/lib/work-genie-webgl";
import { openRevealAmount } from "@/lib/work-genie-reveal";

export type WorkGeniePhase = "toTile" | "toCard";

export type WorkGeniePhaseRequest = {
  tileRect: DOMRect;
  cardRect: DOMRect;
  iconRadius: number;
  expandedRadius: number;
  imageSrc: string | null;
  phase: WorkGeniePhase;
  onProgress?: (progress: number) => void;
};

export type WorkGenieCanvasHandle = {
  runPhase: (request: WorkGeniePhaseRequest) => Promise<void>;
  isSupported: () => boolean;
};

type WorkGenieCanvasProps = {
  className?: string;
};

const CAMERA_Z = 5;

export const WorkGenieCanvas = forwardRef<WorkGenieCanvasHandle, WorkGenieCanvasProps>(
  function WorkGenieCanvas({ className }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const supportedRef = useRef(false);
    const runtimeRef = useRef<{
      renderer: Renderer;
      program: Program;
      texture: Texture;
      camera: Camera;
      scene: Transform;
      mesh: Mesh;
      rafId: number;
    } | null>(null);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) {
        return;
      }

      let renderer: Renderer;
      try {
        renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio || 1, 2) });
      } catch {
        supportedRef.current = false;
        return;
      }

      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      container.appendChild(gl.canvas);

      const camera = new Camera(gl, { fov: 45 });
      camera.position.z = CAMERA_Z;

      const scene = new Transform();
      const geometry = new Plane(gl, {
        width: 1,
        height: 1,
        widthSegments: 60,
        heightSegments: 60,
      });

      const texture = new Texture(gl, { generateMipmaps: true });
      const program = new Program(gl, {
        vertex: workGenieVertexShader,
        fragment: workGenieFragmentShader,
        uniforms: {
          tMap: { value: texture },
          uAlpha: { value: 0 },
          uProgress: { value: 0 },
          uStartPos: { value: [0, 0] },
          uStartScale: { value: [1, 1] },
          uEndPos: { value: [0, 0] },
          uEndScale: { value: [1, 1] },
          uRadius: { value: [16, 24] },
          uPixelsPerUnit: { value: 1 },
          uImageRes: { value: [1, 1] },
        },
        transparent: true,
      });

      const mesh = new Mesh(gl, { geometry, program });
      mesh.setParent(scene);

      const host = container;

      function resize() {
        const rect = host.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height);
        camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
      }

      const observer = new ResizeObserver(resize);
      observer.observe(host);
      resize();

      supportedRef.current = true;
      runtimeRef.current = {
        renderer,
        program,
        texture,
        camera,
        scene,
        mesh,
        rafId: 0,
      };

      return () => {
        observer.disconnect();
        cancelAnimationFrame(runtimeRef.current?.rafId ?? 0);
        if (container.contains(gl.canvas)) {
          container.removeChild(gl.canvas);
        }
        gl.getExtension("WEBGL_lose_context")?.loseContext();
        runtimeRef.current = null;
        supportedRef.current = false;
      };
    }, []);

    useImperativeHandle(ref, () => ({
      isSupported: () => supportedRef.current,
      runPhase: (request) => {
        const container = containerRef.current;
        const runtime = runtimeRef.current;
        if (!container || !runtime || !supportedRef.current) {
          return Promise.reject(new Error("Genie canvas is not ready"));
        }

        const { renderer, program, texture, camera, scene } = runtime;
        const containerRect = container.getBoundingClientRect();
        const startRect = viewportRectToContainerRect(containerRect, request.tileRect);
        const endRect = viewportRectToContainerRect(containerRect, request.cardRect);

        applyGenieUniforms(
          program,
          containerRect,
          startRect,
          endRect,
          request.iconRadius,
          request.expandedRadius,
          CAMERA_Z,
        );

        const targetProgress = request.phase === "toCard" ? 1 : 0;
        program.uniforms.uProgress.value = request.phase === "toCard" ? 0 : 1;
        program.uniforms.uAlpha.value = 1;

        const { animationSpeed, closeLerp, openLerp, closeCardSurfaceColor } =
          workCaseStudyGenieInteraction;
        const lerp =
          (request.phase === "toCard" ? openLerp : closeLerp) * animationSpeed;

        const prepareTexture = async () => {
          if (request.phase === "toTile") {
            createSolidGenieTexture(texture, program, closeCardSurfaceColor);
            return;
          }

          if (request.imageSrc) {
            try {
              await loadGenieTexture(texture, program, request.imageSrc);
              return;
            } catch {
              /* fall through */
            }
          }
          createSolidGenieTexture(texture, program, closeCardSurfaceColor);
        };

        return prepareTexture().then(
          () =>
            new Promise<void>((resolve) => {
              const tick = () => {
                const current = program.uniforms.uProgress.value as number;
                const next = current + (targetProgress - current) * lerp;
                program.uniforms.uProgress.value = next;

                if (request.phase === "toCard") {
                  const reveal = openRevealAmount(next);
                  program.uniforms.uAlpha.value = 1 - reveal;
                } else {
                  program.uniforms.uAlpha.value = 1;
                }

                request.onProgress?.(next);

                renderer.render({ scene, camera });

                if (Math.abs(next - targetProgress) < 0.006) {
                  program.uniforms.uProgress.value = targetProgress;
                  if (request.phase === "toCard") {
                    program.uniforms.uAlpha.value = 1 - openRevealAmount(targetProgress);
                  }
                  request.onProgress?.(targetProgress);
                  renderer.render({ scene, camera });
                  resolve();
                  return;
                }

                runtime.rafId = requestAnimationFrame(tick);
              };

              request.onProgress?.(program.uniforms.uProgress.value as number);
              runtime.rafId = requestAnimationFrame(tick);
            }),
        );
      },
    }));

    return (
      <div
        ref={containerRef}
        className={className}
        aria-hidden
        data-work-genie-canvas=""
      />
    );
  },
);
