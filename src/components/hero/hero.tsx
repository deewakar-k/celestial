"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full space-y-10 py-24">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 text-center px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1] max-w-4xl"
        >
          Design Now, Code Later
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, filter: "blur(8px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="max-w-[750px] text-center text-sm text-muted-foreground sm:text-lg"
        >
          Visualize shadcn/ui colors, fonts, themes. All without coding.
        </motion.span>
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)", y: 15 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex gap-4"
        >
          <Button size="sm" className="h-8 px-8">
            Start Building
          </Button>
          <Button size="sm" variant="outline" className="h-8 px-8">
            View Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
