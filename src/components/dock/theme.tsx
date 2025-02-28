"use client";

import { ChevronDown, Dot } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import React from "react";
import { themes, themeConfig } from "@/lib/data";
import { useColorStore } from "@/store/use-color-store";

export default function Themes() {
  const { color, setColor } = useColorStore();

  return (
    <>
      <span className="text-xs text-muted-foreground pl-1">Theme</span>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="h-7 bg-[#E6E6E6] dark:bg-[#181818]"
        >
          <Button variant="outline" size="sm" className="gap-1">
            <div
              className="h-4 w-4 rounded-full"
              style={{ backgroundColor: color }}
            />
            <ChevronDown className="size-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-dock-light dark:bg-dock-dark">
          {themes.map((t) => (
            <DropdownMenuItem
              key={t}
              onClick={() => setColor(themeConfig[t].color)}
              className="gap-2"
            >
              <Dot
                className={`${
                  themeConfig[t].color === color ? "opacity-100" : "opacity-0"
                }`}
              />
              <div
                className="h-4 w-4 rounded-full"
                style={{
                  backgroundColor: themeConfig[t].color,
                }}
              />
              {t}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
