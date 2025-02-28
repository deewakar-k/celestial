"use client";

import { useEffect, useState } from "react";
import ExportDialog from "../dialog/export-dialog";
import BuyMeCoffee from "../footer/buy-me-coffee";

export default function FixedButtons() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const nearBottom = scrollPosition >= document.body.scrollHeight - 300;

      setIsVisible(!nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed bottom-4 right-4 flex gap-2 transition-transform duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ExportDialog />
      <BuyMeCoffee />
    </div>
  );
}
