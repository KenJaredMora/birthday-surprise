"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import * as React from "react";

import { useSound } from "@/hooks/useSound";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "font-semibold",
    "select-none",
    "transition-all",
    "duration-200",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "h-16",
          "min-w-[260px]",
          "px-10",
          "bg-[var(--color-primary)]",
          "text-white",
          "text-lg",
          "shadow-[0_12px_40px_rgba(122,46,46,.18)]",
          "hover:shadow-[0_18px_55px_rgba(122,46,46,.25)]",
        ].join(" "),

        outline: [
          "h-16",
          "min-w-[260px]",
          "px-10",
          "border",
          "border-[var(--color-line)]",
          "bg-white",
          "text-[var(--color-text)]",
          "text-lg",
        ].join(" "),

        ghost: [
          "bg-transparent",
          "text-[var(--color-text-secondary)]",
          "px-4",
          "py-2",
          "text-base",
        ].join(" "),
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

const MotionButton = motion.button;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      asChild = false,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const { playClick } = useSound();

    if (asChild) {
      const Comp = Slot;

      return (
        <Comp
          ref={ref}
          className={cn(buttonVariants({ variant }), className)}
          {...props}
        />
      );
    }

    return (
      <MotionButton
        ref={ref}
        whileHover={{
          scale: 1.03,
          y: -2,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(buttonVariants({ variant }), className)}
        onClick={(e) => {
          playClick();
          onClick?.(e);
        }}
        {...props}
      >
        {children}
      </MotionButton>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
