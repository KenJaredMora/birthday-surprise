"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const musicSchema = z.object({
  music: z.string().min(2, "Escribe al menos el nombre de la canción"),
});

type MusicForm = z.infer<typeof musicSchema>;

interface MusicProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export function Music({ value, onChange, onNext }: MusicProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MusicForm>({
    resolver: zodResolver(musicSchema),
    defaultValues: { music: value },
  });

  function onSubmit(data: MusicForm) {
    onChange(data.music);
    onNext();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-8 text-center w-full max-w-md"
    >
      <h2>¿Qué canción no puede faltar?</h2>

      <div className="w-full">
        <Input
          placeholder="Nombre de la canción o link de Spotify"
          {...register("music")}
        />
        {errors.music && (
          <p className="mt-2 text-left font-sans text-sm text-[var(--color-primary)]">
            {errors.music.message}
          </p>
        )}
      </div>

      <Button type="submit">Continuar</Button>
    </form>
  );
}
