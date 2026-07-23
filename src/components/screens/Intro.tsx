"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";

interface IntroProps {
  onNext: () => void;
}

export function Intro({ onNext }: IntroProps) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">

      <Reveal>
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.35em] text-[var(--color-text-secondary)]">
          Capítulo 1
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="max-w-2xl">
          Hola, Saam.
        </h2>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-10 max-w-2xl space-y-6 font-sans text-lg leading-8 text-[var(--color-text-secondary)]">

          <p>
            Como ya habrás notado...
            <br />
            me gusta hacer las cosas un poquito diferentes.
          </p>

          <p>
            Y como este mes es tu cumpleaños,
            pensé que sería más divertido dejar que tú
            eligieras algunos detalles.
          </p>

          <p>
            Solo responderás unas cuantas preguntas.
            Yo me encargaré absolutamente de todo lo demás.
          </p>

        </div>
      </Reveal>

      <Reveal delay={0.55}>
        <p className="mt-10 font-sans text-xl font-medium text-[var(--color-text)]">
          Confía en mí.
          <br />
          Prometo que valdrá la pena.
        </p>
      </Reveal>

      <Reveal delay={0.8}>
        <div className="mt-20">
          <Button onClick={onNext}>
            Continuar
          </Button>
        </div>
      </Reveal>

    </div>
  );
}