"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const size = 600;
  const displaySize = Math.round(size * 5);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 0;
    let globe: ReturnType<typeof createGlobe> | null = null;

    const canvas = canvasRef.current;
    if (!canvas) return;

    globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: size,
      height: size,
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
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => globe?.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: displaySize,
        height: displaySize,
        maxWidth: "100%",
        aspectRatio: "1",
      }}
    />
  );
}
