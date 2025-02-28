"use client";

import React from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { radiusSizes } from "@/lib/data";
import useRadius from "@/hooks/use-radius";

export default function Radius() {
  const { radius, setRadius } = useRadius();

  return (
    <>
      <span className="text-xs text-muted-foreground">Radius</span>
      <ToggleGroup
        type="single"
        value={radius}
        onValueChange={(value) => value && setRadius(value)}
        className="justify-start"
      >
        {radiusSizes.map((size) => (
          <ToggleGroupItem
            key={size}
            value={size}
            className="h-7 w-10 px-2 text-xs"
          >
            {size}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </>
  );
}
