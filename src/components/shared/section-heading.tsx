import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  headline,
  subheadline,
  align = "left",
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-label uppercase",
            invert ? "text-accent-signal" : "text-ink-400",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 text-balance font-serif text-display-md",
          invert ? "text-white" : "text-ink-900",
        )}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={cn(
            "mt-4 text-body-lg",
            invert ? "text-white/80" : "text-ink-700",
          )}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
