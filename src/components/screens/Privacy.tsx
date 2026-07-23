"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface PrivacyProps {
  value: number;
  onChange: (value: number) => void;
  onNext: () => void;
}

function privacyLabel(value: number): string {
  if (value < 20) return "Mientras más ambiente haya, mejor.";
  if (value < 40) return "No me molesta que haya gente alrededor.";
  if (value < 60) return "Un punto medio me parece perfecto.";
  if (value < 80) return "Prefiero un lugar tranquilo.";
  return "Solo nosotros dos.";
}

export function Privacy({
  value,
  onChange,
  onNext,
}: PrivacyProps) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">

      <Reveal>
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.35em] text-[var(--color-text-secondary)]">
          Capítulo 5
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2>
          Hay algo más que me da curiosidad.
        </h2>
      </Reveal>

      <Reveal delay={0.25}>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-8 text-[var(--color-text-secondary)]">
          Cuando imaginas un día especial...
          <br />
          ¿qué tanta privacidad te gustaría tener?
        </p>
      </Reveal>

      <Reveal delay={0.45}>
        <div className="mt-16 flex w-full max-w-xl flex-col gap-8">

          <Slider
            value={[value]}
            onValueChange={([v]) => onChange(v)}
            min={0}
            max={100}
            step={1}
          />

          <p className="font-sans text-lg font-medium text-[var(--color-text)]">
            {privacyLabel(value)}
          </p>

        </div>
      </Reveal>

      <Reveal delay={0.75}>
        <div className="mt-20">
          <Button onClick={onNext}>
            Continuar
          </Button>
        </div>
      </Reveal>

    </div>
  );
}