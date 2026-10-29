
"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from
  "@react-three/drei";
import { Suspense } from "react";

function CoreObject() {
  return (
    <Float
      speed={1}
      rotationIntensity={0.25}
      floatIntensity={0.45}
    >
      <mesh>
        <torusKnotGeometry args={[1, 0.28, 128, 16]} />
        <MeshDistortMaterial
          color="#B5FF65"
          metalness={0.8}
          roughness={0.22}
          distort={0.12}
          speed={1.4}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[3, 4, 5]}
          intensity={2}
        />
        <CoreObject />
      </Suspense>
    </Canvas>
  );
}
