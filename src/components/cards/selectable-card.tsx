"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useSound } from "@/hooks/useSound";

export interface SelectableCardProps {
  label: string;
  icon: React.ReactNode;
  selected: boolean;
  onSelect: () => void;
}

/**
 * The "tarjeta" from the spec: no radio buttons anywhere.
 * Selected state: scale + shadow + accent border, per Capítulo 3.
 */
export function SelectableCard({
  label,
  icon,
  selected,
  onSelect,
}: SelectableCardProps) {
  const { playClick } = useSound();

  return (
    <button
      type="button"
      onClick={() => {
        playClick();
        onSelect();
      }}
      aria-pressed={selected}
      className={cn(
        "flex flex-col items-center justify-center gap-4",
        "w-full max-w-[220px] aspect-[4/5] rounded-3xl",
        "bg-[var(--color-card)] border transition-all duration-[220ms] ease-[var(--ease-editorial)]",
        "cursor-pointer",
        selected
          ? "border-[var(--color-accent)] scale-[1.03] shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
          : "border-[var(--color-line)] shadow-[var(--shadow-soft)] hover:scale-[1.015]"
      )}
    >
      <span className="text-5xl">{icon}</span>
      <span className="font-sans text-base font-semibold text-[var(--color-text)]">
        {label}
      </span>
    </button>
  );
}
