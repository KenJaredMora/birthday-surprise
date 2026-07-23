import { cn } from "@/lib/utils";
import * as React from "react";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        // Layout
        "w-full",
        "h-16",
        "rounded-[22px]",
        "border",

        // Colores
        "border-[var(--color-line)]",
        "bg-white",

        // Espaciado
        "px-7",

        // Texto
        "font-sans",
        "text-lg",
        "font-medium",
        "text-[var(--color-text)]",

        // Placeholder
        "placeholder:text-[17px]",
        "placeholder:font-normal",
        "placeholder:text-[var(--color-text-secondary)]",

        // Animaciones
        "transition-all",
        "duration-200",

        // Focus
        "focus:outline-none",
        "focus:border-[var(--color-accent)]",
        "focus:ring-4",
        "focus:ring-[rgba(186,147,125,0.18)]",

        // Shadow
        "shadow-[0_6px_24px_rgba(0,0,0,.04)]",

        className
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
