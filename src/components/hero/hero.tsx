"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="space-y-10 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container flex flex-col items-center justify-center gap-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]"
        >
          Design Now, Code Later
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-[750px] text-center text-sm text-muted-foreground sm:text-lg"
        >
          Visualize shadcn/ui colors, fonts, themes. All without coding.
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          <Button size="sm" className="h-8 px-8">
            Start Building
          </Button>
          <Button size="sm" variant="outline" className="h-8 px-8">
            View Demo
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
