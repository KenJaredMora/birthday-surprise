import { Countdown } from "@/components/ui/countdown";

/**
 * The whole trick from the spec: this constant is the only thing that
 * changes between "not ready yet" and "here's the invitation".
 * Flip it to `true` once you've actually booked everything, redeploy,
 * and Sam's link (already sent by email) instantly reveals the invite.
 */
const UNLOCKED = true;

export default function InvitationPage() {
  if (!UNLOCKED) {
    return (
      <main className="flex h-dvh w-dvw flex-col items-center justify-center gap-4 bg-[var(--color-bg,#f8f5f0)] px-6 text-center">
        <h1 className="text-[var(--color-primary,#7a2e2e)]">Todavía no.</h1>
        <p className="max-w-sm font-sans text-[var(--color-text-secondary,#6f655e)]">
          Esta página se activará cuando todo esté listo. Vuelve a revisar
          pronto.
        </p>
      </main>
    );
  }

  return (
    <main className="flex h-dvh w-dvw flex-col items-center justify-center gap-6 bg-[var(--color-bg,#f8f5f0)] px-6 text-center">
      <h1 className="text-[var(--color-primary,#7a2e2e)]">Nos vemos</h1>
      <p className="font-sans text-2xl text-[var(--color-text,#322b28)]">
        30 de Agosto · 10:00 AM
      </p>
      <Countdown target={new Date("2026-08-30T12:00:00")} />
    </main>
  );
}
