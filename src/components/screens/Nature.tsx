"use client";

import { SelectableCard } from "@/components/cards/selectable-card";
import { Button } from "@/components/ui/button";
import { natureOptions } from "@/lib/options";
import type { NatureChoice } from "@/types";

interface NatureProps {
  value: NatureChoice | null;
  onChange: (value: NatureChoice) => void;
  onNext: () => void;
}

/** Pantalla 4 — emotion: participación ("Estoy ayudando a construir el día") */
export function Nature({ value, onChange, onNext }: NatureProps) {
  return (
    <div className="flex flex-col items-center gap-10 text-center">
      <h2>Naturaleza</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {natureOptions.map((opt) => (
          <SelectableCard
            key={opt.value}
            label={opt.label}
            icon={opt.emoji}
            selected={value === opt.value}
            onSelect={() => onChange(opt.value as NatureChoice)}
          />
        ))}
      </div>

      <Button onClick={onNext} disabled={!value}>
        Continuar
      </Button>
    </div>
  );
}
