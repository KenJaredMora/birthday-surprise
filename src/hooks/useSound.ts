"use client";

import { useRef, useCallback } from "react";

/**
 * A single, discreet "click" — like Notion's selection sound, not a game SFX.
 * Synthesized with the Web Audio API (short sine blip + fast decay) instead
 * of an mp3 asset, so there's nothing to source, license, or ship.
 * Respects the person's OS sound settings implicitly — never autoplays,
 * only ever fires on explicit interaction.
 */
export function useSound() {
  const ctxRef = useRef<AudioContext | null>(null);

  const playClick = useCallback(() => {
    if (typeof window === "undefined") return;

    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!ctxRef.current) ctxRef.current = new AudioCtx();
      const ctx = ctxRef.current;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(720, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(480, ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);

      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch {
      // Silently no-op if Web Audio isn't available — sound is a garnish, never a dependency
    }
  }, []);

  return { playClick };
}
