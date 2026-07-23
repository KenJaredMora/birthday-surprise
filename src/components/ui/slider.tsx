"use client";

import { cn } from "@/lib/utils";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { motion } from "framer-motion";
import * as React from "react";

const MotionThumb = motion(SliderPrimitive.Thumb);

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className="
        relative
        h-2
        w-full
        grow
        overflow-hidden
        rounded-full
        bg-[var(--color-line)]
      "
    >
      <SliderPrimitive.Range
        className="
          absolute
          h-full
          rounded-full
          bg-[var(--color-accent)]
        "
      />
    </SliderPrimitive.Track>

    <MotionThumb
      whileHover={{
        scale: 1.12,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.18,
      }}
      className={cn(
        "block",
        "h-8",
        "w-8",
        "rounded-full",
        "border-[3px]",
        "border-[var(--color-accent)]",
        "bg-white",
        "shadow-[0_8px_25px_rgba(0,0,0,.12)]",
        "focus-visible:outline-none",
        "focus-visible:ring-4",
        "focus-visible:ring-[rgba(186,147,125,.18)]",
        "cursor-grab",
        "active:cursor-grabbing"
      )}
    />
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
