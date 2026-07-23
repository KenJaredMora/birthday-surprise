"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  target: Date;
}

function getRemaining(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}

/** Quiet countdown — numbers only update once a second, no flashy odometer effect. */
export function Countdown({ target }: CountdownProps) {
  const [remaining, setRemaining] = useState(() => getRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "días", value: remaining.days },
    { label: "hrs", value: remaining.hours },
    { label: "min", value: remaining.minutes },
    { label: "seg", value: remaining.seconds },
  ];

  return (
    <div className="flex gap-8">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center gap-1">
          <span className="font-display text-4xl text-[var(--color-primary,#7a2e2e)] tabular-nums">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="font-sans text-xs uppercase tracking-wide text-[var(--color-text-secondary,#6f655e)]">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
