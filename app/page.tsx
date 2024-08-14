"use client";
import ThreeScene from "@/components/ThreeScene";
import { useState } from "react";

export default function Home() {
  const [Amount, setAmount] = useState(2);
  const [distance, setDistance] = useState(4);

  return (
    <body>
      <ThreeScene repete={Amount} distance={distance} />
      <input
        className="absolute top-0 right-0"
        type="range"
        value={Amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        min={1}
        max={10}
      />
      <input
        type="range"
        className="absolute top-10 right-0"
        value={distance}
        onChange={(e) => setDistance(Number(e.target.value))}
        min={1}
        max={10}
      />
    </body>
  );
}
