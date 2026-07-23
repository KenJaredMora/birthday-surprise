"use client";

import { motion } from "framer-motion";

export function BackgroundDecoration() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Luz superior */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -20, 20, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          -top-56
          h-[650px]
          w-[650px]
          rounded-full
          blur-[130px]
          opacity-50
        "
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.95) 0%, rgba(255,255,255,.05) 72%, transparent 100%)",
        }}
      />

      {/* Luz cálida */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.94, 1.08, 1],
        }}
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-180px]
          top-[25%]
          h-[520px]
          w-[520px]
          rounded-full
          blur-[130px]
          opacity-25
        "
        style={{
          background:
            "radial-gradient(circle, rgba(199,106,67,.55) 0%, rgba(199,106,67,.05) 72%, transparent 100%)",
        }}
      />

      {/* Vino */}
      <motion.div
        animate={{
          x: [0, 25, -40, 0],
          y: [0, -25, 30, 0],
          scale: [1, 1.06, 0.96, 1],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-230px]
          left-[20%]
          h-[620px]
          w-[620px]
          rounded-full
          blur-[140px]
          opacity-15
        "
        style={{
          background:
            "radial-gradient(circle, rgba(122,46,46,.45) 0%, rgba(122,46,46,.05) 72%, transparent 100%)",
        }}
      />

      {/* Glow central */}
      <motion.div
        animate={{
          opacity: [0.35, 0.55, 0.35],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[160px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,.30) 0%, transparent 75%)",
        }}
      />
    </div>
  );
}