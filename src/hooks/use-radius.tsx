import { useEffect, useState } from "react";

export default function useRadius() {
  const [radius, setRadius] = useState("0.5");

  useEffect(() => {
    document.documentElement.style.setProperty("--radius", `${radius}rem`);
  }, [radius]);

  return { radius, setRadius };
}
