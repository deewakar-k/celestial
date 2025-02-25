import React from "react";
import ThemeToggle from "../dropdown/mode-toggle";

export default function Switcher() {
  return (
    <>
      <span className="text-xs text-muted-foreground">Mode</span>
      <ThemeToggle />
    </>
  );
}
