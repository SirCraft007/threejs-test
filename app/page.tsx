"use client";
import ThreeScene from "@/components/ThreeScene";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [Amount, setAmount] = useState(1);
  const [distance, setDistance] = useState(1);

  return (
    <body>
      <input
        type="range"
        value={Amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        min={1}
        max={10}
      />
      <input
        type="range"
        value={distance}
        onChange={(e) => setDistance(Number(e.target.value))}
        min={1}
        max={10}
      />

      <ThreeScene repete={Amount} distance={distance} />
    </body>
  );
}
