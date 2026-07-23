"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import type { ReactNode } from "react";

// Editorial easeOut — never bounce. Shared with globals.css --ease-editorial.
const EASE_EDITORIAL: Easing = [0.16, 1, 0.3, 1];

/**
 * Every screen is 100vh, no scroll, one at a time — Capítulo 2.
 * Outgoing screen: opacity 1→0, y 0→-30
 * Incoming screen: opacity 0→1, y 30→0
 * Duration: 700ms · Ease: easeOut · Never bounce.
 */
const variants: Variants = {
  initial: { opacity: 0, y: 30, filter: "blur(12px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE_EDITORIAL },
  },
  exit: {
    opacity: 0,
    y: -30,
    filter: "blur(12px)",
    transition: { duration: 0.7, ease: EASE_EDITORIAL },
  },
};

export function ScreenTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 flex flex-col items-center justify-center px-6 md:px-20 lg:px-40"
    >
      {children}
    </motion.div>
  );
}
