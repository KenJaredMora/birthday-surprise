"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Answers } from "@/types";

interface ProcessingProps {
  answers: Answers;
  onDone: () => void;
  onError: () => void;
}

/**
 * Pantalla 10 — no emotion listed explicitly in the spec for this one;
 * it's a functional beat, kept quiet on purpose so "Final" carries the payoff.
 * Progress bar is cosmetic (fixed timing) so it never stalls mid-fetch on a
 * slow connection — the real request runs in parallel and gates the button.
 */
export function Processing({ answers, onDone, onError }: ProcessingProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => {
      setProgress((p) => Math.min(p + 4, 96));
    }, 90);

    async function send() {
      try {
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(answers),
        });
        if (!res.ok) throw new Error("send-email failed");
        setProgress(100);
        setTimeout(onDone, 500);
      } catch {
        onError();
      }
    }

    send();
    return () => clearInterval(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 text-center w-full max-w-sm">
      <h2>Procesando...</h2>

      <div className="h-1 w-full overflow-hidden rounded-full bg-[var(--color-line)]">
        <motion.div
          className="h-full bg-[var(--color-accent)]"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <p className="font-sans text-sm text-[var(--color-text-secondary)]">
        Guardando tus respuestas
      </p>
    </div>
  );
}
