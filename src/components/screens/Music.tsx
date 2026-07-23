"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const musicSchema = z.object({
  music: z.string().min(2, "Escribe al menos una canción."),
});

type MusicForm = z.infer<typeof musicSchema>;

interface MusicProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export function Music({
  value,
  onChange,
  onNext,
}: MusicProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MusicForm>({
    resolver: zodResolver(musicSchema),
    defaultValues: {
      music: value,
    },
  });

  function onSubmit(data: MusicForm) {
    onChange(data.music);
    onNext();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
    >
      <Reveal>
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.35em] text-[var(--color-text-secondary)]">
          Capítulo 7
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h2>
          Pongámosle música al recuerdo.
        </h2>
      </Reveal>

      <Reveal delay={0.25}>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-8 text-[var(--color-text-secondary)]">
          Hay canciones que inmediatamente nos transportan a un momento.
          <br />
          ¿Cuál te gustaría escuchar ese día?
        </p>
      </Reveal>

      <Reveal delay={0.45}>
        <div className="mt-14 w-full max-w-xl">

          <Input
            placeholder="Nombre de la canción."
            {...register("music")}
          />

          {errors.music && (
            <p className="mt-3 text-left font-sans text-sm text-red-500">
              {errors.music.message}
            </p>
          )}

        </div>
      </Reveal>

      <Reveal delay={0.75}>
        <div className="mt-16">
          <Button type="submit">
            Continuar
          </Button>
        </div>
      </Reveal>
    </form>
  );
}