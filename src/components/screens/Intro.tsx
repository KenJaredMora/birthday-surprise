"use client";

import { Button } from "@/components/ui/button";

interface IntroProps {
  onNext: () => void;
}

/** Pantalla 2 — emotion: confianza ("Esto lo hizo Kenyon") */
export function Intro({ onNext }: IntroProps) {
  return (
    <div className="flex flex-col items-center gap-8 text-center max-w-xl">
      <h2>Hola Sam.</h2>

      <div className="font-sans text-lg leading-relaxed text-[var(--color-text-secondary)] space-y-4">
        <p>Como ya habrás notado... me gusta hacer las cosas un poquito diferentes.</p>
        <p>Y como este mes es tu cumpleaños... necesito una pequeña ayuda.</p>
        <p>Responderás algunas preguntas para que yo me encargue del resto.</p>
        <p className="text-[var(--color-text)] font-medium">
          Prometo que valdrá la pena.
        </p>
      </div>

      <Button onClick={onNext}>Empezar</Button>
    </div>
  );
}
