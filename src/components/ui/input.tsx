import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const baseStyles =
  "w-full bg-black/60 text-white placeholder:text-white/50 border border-white/15 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors duration-200";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(baseStyles, className)} {...props} />
  )
);

Input.displayName = "Input";
