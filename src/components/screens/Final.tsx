"use client";

import { motion } from "framer-motion";

/** Pantalla final — emotion: expectativa ("Ya quiero saber qué eligió") */
export function Final() {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        Tus respuestas fueron recibidas.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="font-sans text-lg text-[var(--color-text-secondary)] max-w-md"
      >
        Ahora solo queda esperar... Muy pronto recibirás una invitación oficial.
      </motion.p>
    </div>
  );
}
