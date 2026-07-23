"use client";

import { SelectableCard } from "@/components/cards/selectable-card";
import { Button } from "@/components/ui/button";
import { foodOptions } from "@/lib/options";
import type { FoodChoice } from "@/types";

interface FoodProps {
  value: FoodChoice | null;
  onChange: (value: FoodChoice) => void;
  onNext: () => void;
}

/** Pantalla 3 — emotion: diversión ("Ah, tengo que elegir") */
export function Food({ value, onChange, onNext }: FoodProps) {
  return (
    <div className="flex flex-col items-center gap-10 text-center">
      <h2>¿Qué tipo de día te gustaría?</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {foodOptions.map((opt) => (
          <SelectableCard
            key={opt.value}
            label={opt.label}
            icon={opt.emoji}
            selected={value === opt.value}
            onSelect={() => onChange(opt.value as FoodChoice)}
          />
        ))}
      </div>

      <Button onClick={onNext} disabled={!value}>
        Continuar
      </Button>
    </div>
  );
}
