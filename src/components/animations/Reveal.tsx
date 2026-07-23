"use client";

import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * ============================================================================
 * Reveal
 * ----------------------------------------------------------------------------
 * Animación editorial reutilizable para cualquier elemento de la interfaz.
 *
 * Este componente NO controla el cambio entre pantallas.
 * Esa responsabilidad pertenece a ScreenTransition.
 *
 * Reveal únicamente anima elementos individuales como:
 *
 * • Títulos
 * • Subtítulos
 * • Botones
 * • Tarjetas
 * • Imágenes
 * • Iconos
 *
 * Inspiración:
 * Apple · Linear · Stripe · Framer
 * ============================================================================
 */

const EASE_EDITORIAL: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1,
];

interface RevealCustom {
  x: number;
  y: number;
  blur: number;
}

const variants: Variants = {
  hidden: (custom: RevealCustom) => ({
    opacity: 0,
    x: custom.x,
    y: custom.y,
    filter: `blur(${custom.blur}px)`,
  }),

  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
  },
};

interface RevealProps {
  children: ReactNode;

  className?: string;

  /**
   * Delay antes de comenzar la animación.
   */
  delay?: number;

  /**
   * Duración de la animación.
   */
  duration?: number;

  /**
   * Desplazamiento horizontal inicial.
   */
  x?: number;

  /**
   * Desplazamiento vertical inicial.
   */
  y?: number;

  /**
   * Blur inicial.
   */
  blur?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.75,
  x = 0,
  y = 24,
  blur = 10,
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      custom={{ x, y, blur }}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay,
        duration,
        ease: EASE_EDITORIAL,
      }}
      style={{
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </motion.div>
  );
}