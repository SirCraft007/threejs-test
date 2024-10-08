"use client";
import * as THREE from "three";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Line, Environment, Text } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Suspense, useRef } from "react";
import { DDSLoader } from "three-stdlib";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = ({ index, distance }: { index: number; distance: number }) => {
  const obj = useLoader(OBJLoader, "tent.obj");
  return (
    <primitive
      key={index}
      position={[0, 0, index * -distance]}
      object={obj}
      rotation={[-Math.PI / 2, 0, 0]}
    />
  );
};

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
        <Environment preset="park" background />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {Array(repete)
          .fill(null)
          .map((_, index) => (
            <Suspense fallback={null} key={index}>
              <Scene key={index} index={index} distance={distance} />
            </Suspense>
          ))}

        {/* <Suspense fallback={null}>
          <Scene index={repete} distance={distance} />
        </Suspense> */}
        <Line
          points={[
            [0.52, -0.52, 0.52],
            [0.52, -0.52, -distance * repete + 1 * distance - 0.5],
          ]}
          color={"#23aaff"}
          lineWidth={4}
        />
        <Text
          color="white"
          fontSize={0.2}
          anchorX={"center"}
          anchorY={"top-baseline"}
          position={[0.52, -0.5, (-distance * repete + 1 * distance) / 2]}
          rotation={[0, Math.PI / 2, 0]}
        >
          {repete}m
        </Text>
        <Line
          points={[
            [0.52, -0.52, 0.52],
            [0.52, 0.5, 0.52],
          ]}
          color={"#23aaff"}
          lineWidth={4}
        />
        <Text
          color="white"
          fontSize={0.2}
          position={[0.52, 0, 0.52]}
          anchorX={"left"}
          rotation={[0, Math.PI / 2, 0]}
        >
          1m
        </Text>
        <Line
          points={[
            [0.52, -0.52, 0.52],
            [-0.5, -0.5, 0.52],
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
          position={[0, -0.5, 0.52]}
        >
          1m
        </Text>
      </Canvas>
    </div>
  );
}
