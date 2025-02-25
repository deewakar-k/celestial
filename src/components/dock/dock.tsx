"use client";

import { Card } from "@/components/ui/card";
import Themes from "./theme";
import Switcher from "./switcher";
import Radius from "./radius";
import Fonts from "./fonts";

export function Dock() {
  return (
    <div className="fixed inset-x-0 bottom-0 flex justify-center px-4 pb-4">
      <Card className="relative flex w-full max-w-4xl items-center justify-between gap-6 rounded-sm border border-dock-light dark:border-dock-dark border-b-transparent bg-dock-light p-4 backdrop-blur-sm dark:bg-dock-dark dark:border-b-transparent">
        <div className="flex w-full items-center justify-between gap-x-6">
          <div className="flex items-center gap-x-6">
            <div className="flex flex-col items-start gap-y-2">
              <Themes />
            </div>
            <div className="flex flex-col items-start">
              <Switcher />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <Radius />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <Fonts />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
