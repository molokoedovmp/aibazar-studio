import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "outline";
}

export function Badge({
  className,
  variant = "solid",
  ...props
}: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full text-xs uppercase tracking-[0.08em]";
  const styles =
    variant === "outline"
      ? "border border-white/40 px-3 py-1 text-white"
      : "bg-white text-black px-3 py-1";

  return <span className={cn(base, styles, className)} {...props} />;
}
