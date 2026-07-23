"use client";

import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface PrivacyProps {
  value: number;
  onChange: (value: number) => void;
  onNext: () => void;
}

function privacyLabel(value: number): string {
  if (value < 25) return "Nada, mientras más gente mejor";
  if (value < 50) return "Un poco de compañía está bien";
  if (value < 75) return "Prefiero que seamos pocos";
  return "Solo nosotros dos";
}

/** Pantalla 6 — slider, no cards. Deliberately different interaction shape. */
export function Privacy({ value, onChange, onNext }: PrivacyProps) {
  return (
    <div className="flex flex-col items-center gap-12 text-center w-full max-w-md">
      <h2>¿Qué tan importante es para ti la privacidad?</h2>

      <div className="flex w-full flex-col gap-6">
        <Slider
          value={[value]}
          onValueChange={([v]) => onChange(v)}
          min={0}
          max={100}
          step={1}
        />
        <p className="font-sans text-base text-[var(--color-text-secondary)]">
          {privacyLabel(value)}
        </p>
      </div>

      <Button onClick={onNext}>Continuar</Button>
    </div>
  );
}
