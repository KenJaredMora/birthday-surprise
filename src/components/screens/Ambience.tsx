"use client";

import { SelectableCard } from "@/components/cards/selectable-card";
import { Button } from "@/components/ui/button";
import { ambienceOptions } from "@/lib/options";
import type { AmbienceChoice } from "@/types";

interface AmbienceProps {
  value: AmbienceChoice | null;
  onChange: (value: AmbienceChoice) => void;
  onNext: () => void;
}

export function Ambience({ value, onChange, onNext }: AmbienceProps) {
  return (
    <div className="flex flex-col items-center gap-10 text-center">
      <h2>¿Qué prefieres?</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {ambienceOptions.map((opt) => (
          <SelectableCard
            key={opt.value}
            label={opt.label}
            icon={opt.emoji}
            selected={value === opt.value}
            onSelect={() => onChange(opt.value as AmbienceChoice)}
          />
        ))}
      </div>

      <Button onClick={onNext} disabled={!value}>
        Continuar
      </Button>
    </div>
  );
}
