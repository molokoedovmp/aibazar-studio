import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start"
      )}
    >
      <Badge variant="outline">{label}</Badge>
      <div className="text-3xl md:text-4xl font-medium leading-tight tracking-tight">
        {title}
      </div>
      {description ? (
        <p className="text-base text-white/60 max-w-2xl">{description}</p>
      ) : null}
    </div>
  );
}
