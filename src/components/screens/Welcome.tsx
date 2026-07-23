"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface WelcomeProps {
  onNext: () => void;
}

/**
 * Pantalla 1 — emotion: curiosidad ("¿Qué es esto?")
 * Beat: "Proyecto 07·08" appears huge, alone.
 * Then "Una experiencia está a punto de comenzar." fades in below.
 * No greeting by name here — that's Pantalla 2's job.
 *
 * Easter egg: tap "07·08" three times — quiet, undocumented, findable only
 * by someone who lingers on the number. Reveals one extra line, then resets.
 */
export function Welcome({ onNext }: WelcomeProps) {
  const [taps, setTaps] = useState(0);
  const revealed = taps >= 3;

  return (
    <div className="flex flex-col items-center gap-10 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="text-[var(--color-primary)]"
      >
        Proyecto{" "}
        <span
          onClick={() => setTaps((t) => (t >= 3 ? 0 : t + 1))}
          className="text-[var(--color-accent)] cursor-default"
        >
          07·08
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="font-sans text-lg text-[var(--color-text-secondary)] max-w-md"
      >
        Una experiencia está a punto de comenzar.
      </motion.p>

      <AnimatePresence>
        {revealed && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm text-[var(--color-text-secondary)] italic"
          >
            07 · 08 — no es una fecha cualquiera.
          </motion.p>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Button onClick={onNext}>Comenzar</Button>
      </motion.div>
    </div>
  );
}
