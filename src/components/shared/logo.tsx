import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

/**
 * Wordmark logo. "dark" variant (ink-900 text) is used on light backgrounds
 * (navbar at rest, most pages); "light" variant (white text) is used on the
 * dark hero/footer sections. Rendered as text, not an <img>, so it's crisp
 * at any density with zero image request.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-serif text-heading-md font-semibold tracking-tight",
        variant === "dark" ? "text-ink-900" : "text-white",
        className,
      )}
      aria-label="BD Consulting — Home"
    >
      BD Consulting
    </Link>
  );
}
