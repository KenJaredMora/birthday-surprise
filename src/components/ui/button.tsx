"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useSound } from "@/hooks/useSound";

/**
 * Button — Capítulo 2 spec:
 *  height: 56px · radius: 9999px · padding-x: 32px
 *  font: Poppins SemiBold 16px · hover scale 1.03 · click scale 0.98
 *  duration: 220ms · focus: 2px outline var(--color-accent)
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "h-14 min-w-[220px] rounded-[var(--radius-pill)] px-8",
    "font-sans text-base font-semibold tracking-[0.2px]",
    "transition-transform duration-[220ms] ease-[var(--ease-editorial)]",
    "hover:scale-[1.03] active:scale-[0.98]",
    "disabled:pointer-events-none disabled:opacity-40",
    "cursor-pointer select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "text-[var(--color-card)] bg-[var(--color-primary)] hover:shadow-[0_12px_32px_rgba(122,46,46,0.18)]",
        outline:
          "bg-transparent text-[var(--color-text)] border border-[var(--color-line)] hover:border-[var(--color-accent)]",
        ghost:
          "bg-transparent text-[var(--color-text-secondary)] min-w-0 h-auto px-2 hover:text-[var(--color-text)]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const { playClick } = useSound();

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          playClick();
          onClick?.(e);
        }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
