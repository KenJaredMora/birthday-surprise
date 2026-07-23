"use client";

import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * ============================================================
 * ScreenTransition
 * ------------------------------------------------------------
 * Wrapper utilizado por todas las pantallas de la aplicación.
 *
 * Objetivos:
 * - Una sola pantalla visible a la vez.
 * - Movimiento editorial.
 * - Sin rebotes.
 * - Animaciones suaves.
 * - Reutilizable.
 *
 * Inspiración:
 * Apple • Linear • Stripe
 * ============================================================
 */

const EASE_EDITORIAL: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1,
];

const containerVariants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
    filter: "blur(14px)",
  },

  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },

  exit: {
    opacity: 0,
    y: -24,
    filter: "blur(10px)",
  },
};

interface ScreenTransitionProps {
  children: ReactNode;

  /**
   * Clases adicionales.
   */
  className?: string;

  /**
   * Centrar verticalmente el contenido.
   * true = centro absoluto.
   * false = libre para layouts futuros.
   */
  centered?: boolean;

  /**
   * Delay opcional.
   */
  delay?: number;

  /**
   * Duración opcional.
   */
  duration?: number;
}

export function ScreenTransition({
  children,
  className,
  centered = true,
  delay = 0,
  duration = 0.8,
}: ScreenTransitionProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration,
        delay,
        ease: EASE_EDITORIAL,
      }}
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden px-6 md:px-20 lg:px-40",
        centered && "flex items-center justify-center",
        className
      )}
    >
      {children}
    </motion.div>
  );
}