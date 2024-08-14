"use client";
import { useState } from "react";
import App from "@/components/App";

export default function Home() {
  const [Amount, setAmount] = useState(2);
  return (
    <body>
      <App repete={Amount} />
      <input
        className="absolute top-1 right-1"
        type="range"
        value={Amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        min={1}
        max={10}
      />
    </body>
  );
}
