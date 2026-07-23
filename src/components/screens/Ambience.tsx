"use client";

import { Reveal } from "@/components/animations/Reveal";
import { SelectableCard } from "@/components/cards/selectable-card";
import { Button } from "@/components/ui/button";
import { ambienceOptions } from "@/lib/options";
import type { AmbienceChoice } from "@/types";

interface AmbienceProps {
  value: AmbienceChoice | null;
  onChange: (value: AmbienceChoice) => void;
  onNext: () => void;
}

export function Ambience({
  value,
  onChange,
  onNext,
}: AmbienceProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">

      <Reveal>
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.35em] text-[var(--color-text-secondary)]">
          Capítulo 6
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2>
          Ahora imaginemos el ambiente.
        </h2>
      </Reveal>

      <Reveal delay={0.25}>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-8 text-[var(--color-text-secondary)]">
          Hay personas que disfrutan la energía de un lugar...
          <br />
          y otras que prefieren la calma.
          <br />
          ¿Cuál se parece más a ti?
        </p>
      </Reveal>

      <Reveal delay={0.45}>
        <div className="mt-14 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {ambienceOptions.map((option) => (
            <SelectableCard
              key={option.value}
              label={option.label}
              icon={option.emoji}
              selected={value === option.value}
              onSelect={() =>
                onChange(option.value as AmbienceChoice)
              }
            />
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.75}>
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