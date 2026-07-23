import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-card)]",
        "px-6 py-4 font-sans text-base text-[var(--color-text)]",
        "placeholder:text-[var(--color-text-secondary)]",
        "transition-colors duration-[220ms] ease-[var(--ease-editorial)]",
        "focus:outline-none focus:border-[var(--color-accent)]",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
