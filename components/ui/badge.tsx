import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em]",
  {
    variants: {
      variant: {
        outline:
          "border-[color:var(--line-strong)] bg-white/55 text-[var(--muted-strong)]",
        signal:
          "border-transparent bg-[var(--signal)] text-[var(--ink)] shadow-[0_10px_24px_rgba(198,255,77,0.24)]",
        subtle:
          "border-transparent bg-[rgba(18,24,39,0.06)] text-[var(--muted-strong)]",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
