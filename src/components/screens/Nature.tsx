"use client";

import { Reveal } from "@/components/animations/Reveal";
import { SelectableCard } from "@/components/cards/selectable-card";
import { Button } from "@/components/ui/button";
import { natureOptions } from "@/lib/options";
import type { NatureChoice } from "@/types";

interface NatureProps {
  value: NatureChoice | null;
  onChange: (value: NatureChoice) => void;
  onNext: () => void;
}

export function Nature({
  value,
  onChange,
  onNext,
}: NatureProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">

      <Reveal>
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.35em] text-[var(--color-text-secondary)]">
          Capítulo 3
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="max-w-3xl">
          Ahora imagina el lugar.
        </h2>
      </Reveal>

      <Reveal delay={0.22}>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-8 text-[var(--color-text-secondary)]">
          Si pudieras escoger el escenario perfecto...
          <br />
          ¿cuál se parece más a lo que disfrutarías?
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="mt-14 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {natureOptions.map((option) => (
            <SelectableCard
              key={option.value}
              label={option.label}
              icon={option.emoji}
              selected={value === option.value}
              onSelect={() => onChange(option.value as NatureChoice)}
            />
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.7}>
        <div className="mt-16">
          <Button
            disabled={!value}
            onClick={onNext}
          >
            Continuar
          </Button>
        </div>
      </Reveal>

    </div>
  );
}