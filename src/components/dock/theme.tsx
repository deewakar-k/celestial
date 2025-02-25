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
import { themes } from "@/lib/data";

export default function Themes() {
  const [theme, setTheme] = React.useState("Ice");
  return (
    <>
      <span className="text-xs text-muted-foreground pl-1">Theme</span>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="h-7 bg-[#E6E6E6] dark:bg-[#181818]"
        >
          <Button variant="outline" size="sm" className="gap-1">
            {theme}
            <ChevronDown className="size-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-dock-light dark:bg-dock-dark">
          {themes.map((t) => (
            <DropdownMenuItem key={t} onClick={() => setTheme(t.toLowerCase())}>
              <Dot
                className={`${theme === t.toLowerCase() ? "opacity-100" : "opacity-0"}`}
              />
              {t}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
