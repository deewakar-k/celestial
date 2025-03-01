"use client";

import { Card } from "@/components/ui/card";
import Themes from "./theme";
import Switcher from "./switcher";
import Radius from "./radius";
import Fonts from "./fonts";
import { ColorPicker } from "./color-picker";
import React, { useEffect } from "react";
import { useState } from "react";

export function Dock() {
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
      className={`fixed inset-x-0 bottom-0 flex justify-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Card className="relative w-full max-w-4xl mx-auto rounded-t-lg border border-dock-light dark:border-dock-dark border-b-transparent bg-dock-light/80 p-2 sm:p-4 backdrop-blur-sm dark:bg-dock-dark/80">
        {/* Mobile View - Vertical Stack */}
        <div className="flex flex-col sm:hidden gap-y-4">
          <div className="grid grid-cols-2 gap-4">
            <DockItem title="Theme">
              <Themes />
            </DockItem>
            <DockItem title="Color">
              <ColorPicker />
            </DockItem>
            <DockItem title="Mode">
              <Switcher />
            </DockItem>
            <DockItem title="Radius">
              <Radius />
            </DockItem>
            <DockItem title="Font">
              <Fonts />
            </DockItem>
          </div>
        </div>

        {/* Tablet and Desktop View - Horizontal Layout */}
        <div className="hidden sm:flex items-center justify-center w-full">
          <div className="flex items-center justify-center gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16">
            <DockItem title="Theme">
              <Themes />
            </DockItem>
            <DockItem title="Color">
              <ColorPicker />
            </DockItem>
            <DockItem title="Mode">
              <Switcher />
            </DockItem>
            <DockItem title="Radius">
              <Radius />
            </DockItem>
            <DockItem title="Font">
              <Fonts />
            </DockItem>
          </div>
        </div>
      </Card>
    </div>
  );
}

const DockItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col items-start gap-y-1">
    <span className="text-xs text-gray-500 dark:text-gray-400">{title}</span>
    <div>{children}</div>
  </div>
);
