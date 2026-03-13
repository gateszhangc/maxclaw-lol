import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--ink)] px-5 py-3 text-[var(--paper)] shadow-[0_16px_45px_rgba(18,24,39,0.18)] hover:-translate-y-0.5 hover:bg-[var(--ink-soft)]",
        signal:
          "bg-[var(--signal)] px-5 py-3 text-[var(--ink)] shadow-[0_18px_40px_rgba(198,255,77,0.32)] hover:-translate-y-0.5 hover:bg-[var(--signal-soft)]",
        outline:
          "border border-[color:var(--line-strong)] bg-white/65 px-5 py-3 text-[var(--ink)] backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white",
        ghost: "px-3 py-2 text-[var(--ink)] hover:bg-black/5",
      },
      size: {
        default: "h-11",
        lg: "h-12 px-6 text-[0.95rem]",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
