"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";

interface WelcomeProps {
  onNext: () => void;
}

const EASE: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1,
];

export function Welcome({ onNext }: WelcomeProps) {
  const [taps, setTaps] = useState(0);
  const [loading, setLoading] = useState(false);

  const revealed = taps >= 3;

  function handleContinue() {
    if (loading) return;

    setLoading(true);

    setTimeout(() => {
      onNext();
    }, 900);
  }

  return (
    <div className="relative flex w-full max-w-4xl flex-col items-center text-center">

      {/* Proyecto */}
      <Reveal>
        <p className="mb-2 font-sans text-xs uppercase tracking-[0.45em] text-[var(--color-text-secondary)]">
          Proyecto
        </p>
      </Reveal>

      {/* 07·08 */}
      <Reveal delay={0.15}>
        <motion.h1
          onClick={() => setTaps((value) => (value >= 3 ? 0 : value + 1))}
          whileTap={{ scale: 0.98 }}
          className="
            cursor-default
            select-none
            text-[5.2rem]
            font-semibold
            leading-none
            tracking-[-0.05em]
            text-[var(--color-accent)]
            md:text-[7.5rem]
          "
        >
          07·08
        </motion.h1>
      </Reveal>

      {/* subtitulo */}
      <Reveal delay={0.35}>
        <p
          className="
            mt-10
            max-w-xl
            font-sans
            text-lg
            leading-8
            text-[var(--color-text-secondary)]
          "
        >
          No todas las invitaciones comienzan con una pregunta.
          <br />
          Algunas empiezan con un poco de curiosidad.
        </p>
      </Reveal>

      {/* easter egg */}

      <AnimatePresence mode="wait">
        {revealed && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: .45,
              ease: EASE,
            }}
            className="mt-8"
          >
            <p className="font-sans text-sm italic text-[var(--color-text-secondary)]">
              🙂
              <br />
              Sabía que intentarías descubrir si escondí algo aquí.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* botón */}

      <Reveal delay={0.75}>
        <div className="mt-20">

          <Button
            disabled={loading}
            onClick={handleContinue}
          >
            {loading
              ? "Preparando tu invitación..."
              : "Empecemos"}
          </Button>

        </div>
      </Reveal>
    </div>
  );
}