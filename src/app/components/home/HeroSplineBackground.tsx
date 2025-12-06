"use client";

import SplineClient from "@/app/components/home/SplineClient";

export function HeroSplineBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: "scale(1.25)", transformOrigin: "center" }}
      >
        <SplineClient scene="https://prod.spline.design/xasN6jN3w1ggRc6p/scene.splinecode" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/65" />
    </div>
  );
}
