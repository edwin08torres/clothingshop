"use client";
import { HeroHighlight, Highlight } from "@/shared/ui/hero-highlight";
import { motion } from "motion/react";

export default function HeroHighlightSection() {
  return (
    <HeroHighlight containerClassName="">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="text-xl px-4 max-w-md text-center font-bold text-neutral-700 dark:text-white leading-relaxed"
      >
        La moda no se crea — se
        <Highlight className="text-black dark:text-white">vive día a día.</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
