import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const baseStyles =
  "w-full bg-black/60 text-white placeholder:text-white/50 border border-white/15 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors duration-200";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(baseStyles, className)} {...props} />
  )
);

Textarea.displayName = "Textarea";
