"use client";
import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line, Environment, Text } from "@react-three/drei";

export default function app({ repete }: { repete: number }) {
  const distance = 3;
  return (
    <div className="flex justify-center items-center h-screen">
      <Canvas className="h-2xl w-2xl">
        <Environment preset="park" background />
        <ambientLight />

        <pointLight position={[10, 10, 10]} />
        {Array(repete)
          .fill(null)
          .map((_, index) => (
            <mesh key={index} position={[0, 0, index * -distance]}>
              <boxGeometry args={[6, 2, 3]} />
              <meshBasicMaterial color="blue" />
            </mesh>
          ))}

        {/* <Suspense fallback={null}>
          <Scene index={repete} distance={distance} />
        </Suspense> */}
        <Line
          points={[
            [3.02, -1.02, 1.52],
            [3.02, -1.02, -distance * repete + 1 * distance - 1.5],
          ]}
          color={"#23aaff"}
          lineWidth={4}
        />
        <Text
          color="white"
          fontSize={0.2}
          anchorX={"center"}
          anchorY={"top-baseline"}
          position={[3.02, -1.02, (-distance * repete + 1 * distance) / 2]}
          rotation={[0, Math.PI / 2, 0]}
        >
          {repete * 3}m
        </Text>
        <Line
          points={[
            [3.02, -1.02, 1.52],
            [3.02, 1.02, 1.52],
          ]}
          color={"#23aaff"}
          lineWidth={4}
        />
        <Text
          color="white"
          fontSize={0.2}
          position={[3.02, 0, 1.52]}
          anchorX={"left"}
          rotation={[0, Math.PI / 2, 0]}
        >
          2.3m
        </Text>
        <Line
          points={[
            [3.02, -1.02, 1.52],
            [-3.02, -1.02, 1.52],
          ]}
          color={"#23aaff"}
          lineWidth={4}
        />
        <OrbitControls />
        <Text
          color="white"
          fontSize={0.2}
          anchorX={"center"}
          anchorY={"top-baseline"}
          position={[0, -1.02, 1.52]}
        >
          3m
        </Text>
      </Canvas>
    </div>
  );
}
