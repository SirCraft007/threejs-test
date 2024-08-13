"use client";
import * as THREE from "three";

import { useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import { Vector } from "three/examples/jsm/Addons.js";

export default function ThreeScene({
  repete,
  distance,
}: {
  repete: number;
  distance: number;
}) {
  return (
    <div className="flex justify-center items-center h-screen">
      <Canvas className="h-2xl w-2xl">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {Array(repete)
          .fill(null)
          .map((_, index) => (
            <mesh key={index} position={[0, 0, index * -distance]}>
              <boxGeometry />
              <meshBasicMaterial color="blue" />
            </mesh>
          ))}
        <Line
          points={[
            [0.52, -0.52, 0.52],
            [0.52, -0.52, -distance * repete + 1 * distance - 0.5],
          ]}
          color={"#23aaff"} // Default
          lineWidth={4} // In pixels (default)
          // segments             // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
        />
        <Line
          points={[
            [0.52, -0.52, 0.52],
            [0.52, 0.5, 0.52],
          ]}
          color={"#23aaff"}
          lineWidth={4}
        />
        <Line
          points={[
            [0.52, -0.52, 0.52],
            [-0.5, -0.5, 0.52],
          ]}
          color={"#23aaff"}
          lineWidth={4}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
