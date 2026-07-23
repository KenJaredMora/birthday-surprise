"use client";

import { Reveal } from "@/components/animations/Reveal";
import { motion } from "framer-motion";

interface LocationProps {
  onNext: () => void;
}

const LOCATIONS = [
  {
    id: "domo",
    label: "Domo",
    image: "/images/glamping/domo-del-huerto.jpg",
  },
  {
    id: "parejas",
    label: "Teepee",
    image: "/images/glamping/parejas.jpg",
  },
] as const;

export function Location({ onNext }: LocationProps) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">

      <Reveal>
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.35em] text-[var(--color-text-secondary)]">
          Capítulo 4
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2>
          Última decisión.
        </h2>
      </Reveal>

      <Reveal delay={0.22}>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-8 text-[var(--color-text-secondary)]">
          Imagina que ambos lugares están disponibles.
          <br />
          ¿Cuál escogerías sin pensarlo demasiado?
        </p>
      </Reveal>

      <Reveal delay={0.45}>
        <div className="mt-14 grid w-full grid-cols-1 gap-8 md:grid-cols-2">

          {LOCATIONS.map((location) => (
            <motion.button
              key={location.id}
              onClick={onNext}
              whileHover={{
                y: -6,
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group overflow-hidden rounded-[28px] bg-white text-left shadow-lg"
            >
              <div className="relative h-[420px] overflow-hidden">

                <img
                  src={location.image}
                  alt={location.label}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/900x900/F3ECE5/8B6F5A?text=Próximamente";
                  }}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-display text-3xl text-white">
                    {location.label}
                  </h3>
                </div>

              </div>
            </motion.button>
          ))}

        </div>
      </Reveal>

    </div>
  );
}