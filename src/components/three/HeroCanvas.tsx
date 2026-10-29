
"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("./HeroScene"),
  {
    ssr: false,
    loading: () => (
      <div
        className="absolute inset-0 animate-pulse"
        aria-hidden="true"
      />
    ),
  }
);

export default function HeroCanvas() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <HeroScene />
    </div>
  );
}
