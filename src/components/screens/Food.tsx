"use client";

import { Reveal } from "@/components/animations/Reveal";
import { SelectableCard } from "@/components/cards/selectable-card";
import { Button } from "@/components/ui/button";
import { foodOptions } from "@/lib/options";
import type { FoodChoice } from "@/types";

interface FoodProps {
  value: FoodChoice | null;
  onChange: (value: FoodChoice) => void;
  onNext: () => void;
}

export function Food({
  value,
  onChange,
  onNext,
}: FoodProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">

      <Reveal>
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.35em] text-[var(--color-text-secondary)]">
          Capítulo 2
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="max-w-3xl">
          Empecemos por algo sencillo.
        </h2>
      </Reveal>

      <Reveal delay={0.22}>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-8 text-[var(--color-text-secondary)]">
          Imagina que este día ya llegó.
          <br />
          ¿Qué tipo de experiencia se te antoja más?
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="mt-14 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {foodOptions.map((option) => (
            <SelectableCard
              key={option.value}
              label={option.label}
              icon={option.emoji}
              selected={value === option.value}
              onSelect={() => onChange(option.value as FoodChoice)}
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