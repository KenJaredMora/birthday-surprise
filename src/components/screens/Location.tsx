"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LocationProps {
  onNext: () => void;
}

const LOCATIONS = [
  {
    id: "domo",
    label: "Domo del Huerto",
    // Drop a real photo at public/images/glamping/domo-del-huerto.jpg
    image: "/images/glamping/domo-del-huerto.jpg",
  },
  {
    id: "parejas",
    label: "Parejas",
    // Drop a real photo at public/images/glamping/parejas.jpg
    image: "/images/glamping/parejas.jpg",
  },
] as const;

/**
 * Pantalla 5 — only reachable when nature === "glamping".
 * Two photographs, each half the screen, hover = zoom, click = confirm + advance.
 * Uses <img> with onError fallback rather than next/image because these are
 * user-supplied local photos that may not exist yet at build time.
 */
export function Location({ onNext }: LocationProps) {
  return (
    <div className="flex h-full w-full flex-col md:flex-row -mx-6 md:-mx-20 lg:-mx-40 -my-6">
      {LOCATIONS.map((loc) => (
        <motion.button
          key={loc.id}
          type="button"
          onClick={onNext}
          className={cn(
            "group relative flex-1 overflow-hidden",
            "flex items-end justify-center p-10 cursor-pointer"
          )}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src={loc.image}
            alt={loc.label}
            onError={(e) => {
              // Placeholder tone-matched gradient if the real photo isn't in place yet
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/10 to-[var(--color-primary)]/50" />
          <span className="relative z-10 font-display text-3xl text-[var(--color-card)] tracking-wide">
            {loc.label.toUpperCase()}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
