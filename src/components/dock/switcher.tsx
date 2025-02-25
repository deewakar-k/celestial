import React from "react";
import ThemeToggle from "../dropdown/mode-toggle";

export default function Mode() {
  return (
    <>
      <p className="text-xs text-muted-foreground">Mode</p>
      <ThemeToggle />
    </>
  );
}
