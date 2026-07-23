"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { smellOptions } from "@/lib/options";
import { useSound } from "@/hooks/useSound";

interface SmellProps {
  value: string | null;
  onChange: (value: string) => void;
  onNext: () => void;
}

export function Smell({ value, onChange, onNext }: SmellProps) {
  const { playClick } = useSound();

  return (
    <div className="flex flex-col items-center gap-10 text-center max-w-lg">
      <h2>Si este día tuviera un olor... ¿cuál sería?</h2>

      <div className="grid grid-cols-2 gap-4 w-full">
        {smellOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => {
              playClick();
              onChange(opt.value);
            }}
            className={cn(
              "rounded-2xl border px-6 py-5 font-sans text-base transition-all duration-[220ms] ease-[var(--ease-editorial)] cursor-pointer",
              value === opt.value
                ? "border-[var(--color-accent)] bg-[var(--color-card)] scale-[1.02] shadow-[var(--shadow-soft)]"
                : "border-[var(--color-line)] bg-transparent hover:border-[var(--color-accent)]"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <Button onClick={onNext} disabled={!value}>
        Continuar
      </Button>
    </div>
  );
}
