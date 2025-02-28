"use client";

import { CheckIcon, CopyIcon, DownloadIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  MorphingDialog,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogTitle,
  MorphingDialogTrigger,
} from "../ui/morphing-dialog";
import { useColorStore } from "@/store/use-color-store";
import useRadius from "@/hooks/use-radius";
import { useState } from "react";
import { hexToHSL } from "@/lib/color-utils";

export default function ExportDialog() {
  const { color } = useColorStore();
  const { radius } = useRadius();
  const [copied, setCopied] = useState(false);

  // Convert hex to HSL
  const { h, s, l } = hexToHSL(color);
  const hslValue = `${h} ${s}% ${l}%`;

  const cssCode = `@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: ${hslValue};
    --primary-foreground: 0 85.7% 97.3%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 72.2% 50.6%;
    --radius: ${radius}rem;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: ${hslValue};
    --primary-foreground: 0 85.7% 97.3%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 72.2% 50.6%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}`.trim();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <MorphingDialog
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger>
        <Button size="icon" variant={"outline"}>
          <DownloadIcon className="size-4" />
        </Button>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "12px",
          }}
          className="relative h-auto w-[600px] border bg-dock-light dark:bg-dock-dark"
        >
          <div className="p-6">
            <MorphingDialogTitle className="text-foreground font-medium">
              Theme
            </MorphingDialogTitle>
            <MorphingDialogDescription className="text-muted-foreground text-sm pb-4">
              Copy and paste the following code into your CSS file.
            </MorphingDialogDescription>
            <div className="relative">
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-2 top-2 h-6 w-6 transition-all duration-200"
                onClick={handleCopy}
              >
                {copied ? (
                  <CheckIcon className="size-3" />
                ) : (
                  <CopyIcon className="size-3" />
                )}
              </Button>
              <pre className="rounded-lg bg-muted p-4 font-mono text-xs overflow-auto max-h-[500px]">
                {cssCode}
              </pre>
            </div>
          </div>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
