"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

type GlobeProps = {
  className?: string;
};

export default function Globe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 0;
    let globe: ReturnType<typeof createGlobe> | null = null;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const getSize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      return {
        width: Math.max(1, Math.round(width * dpr)),
        height: Math.max(1, Math.round(height * dpr)),
      };
    };

    const applyCanvasSize = (w: number, h: number) => {
      if (canvas.width !== w) canvas.width = w;
      if (canvas.height !== h) canvas.height = h;
    };

    let { width, height } = getSize();
    applyCanvasSize(width, height);

    const init = () => {
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width,
        height,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.1, 0.1, 0.15],
        markerColor: [0.96, 0.62, 0.04],
        glowColor: [0.96, 0.62, 0.04],
        markers: [
          { location: [3.848, 11.502], size: 0.08 }, // Douala
          { location: [48.8566, 2.3522], size: 0.05 }, // Paris
        ],
        onRender: (state) => {
          // Keep COBE uniforms in sync with the current canvas size.
          state.width = width;
          state.height = height;
          state.phi = phi;
          phi += 0.003;
        },
      });
    };

    // Canvas can be 0×0 if hidden; wait for a real size.
    if (width > 1 && height > 1) init();

    const ro = new ResizeObserver(() => {
      const size = getSize();
      width = size.width;
      height = size.height;
      applyCanvasSize(width, height);

      if (!globe && width > 1 && height > 1) init();
      globe?.resize();
    });
    ro.observe(canvas);

    return () => {
      ro.disconnect();
      globe?.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full ${className ?? ""}`}
    />
  );
}
