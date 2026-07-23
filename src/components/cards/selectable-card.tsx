"use client";

import { useSound } from "@/hooks/useSound";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import * as React from "react";

export interface SelectableCardProps {
  label: string;
  icon: React.ReactNode;
  selected: boolean;
  onSelect: () => void;
}

export function SelectableCard({
  label,
  icon,
  selected,
  onSelect,
}: SelectableCardProps) {
  const { playClick } = useSound();

  return (
    <motion.button
      type="button"
      aria-pressed={selected}
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.22,
      }}
      onClick={() => {
        playClick();
        onSelect();
      }}
      className={cn(
        "group",
        "flex flex-col items-center justify-center",
        "min-h-[220px]",
        "w-full",
        "rounded-[28px]",
        "border",
        "bg-white",
        "px-8",
        "py-8",
        "transition-all",
        "duration-200",

        selected
          ? "border-[var(--color-accent)] shadow-[0_20px_50px_rgba(0,0,0,.10)]"
          : "border-[var(--color-line)] shadow-[0_8px_30px_rgba(0,0,0,.05)]"
      )}
    >
      <div className="mb-6 text-6xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <span
        className="
          text-center
          text-xl
          font-semibold
          leading-7
          text-[var(--color-text)]
        "
      >
        {label}
      </span>
    </motion.button>
  );
}