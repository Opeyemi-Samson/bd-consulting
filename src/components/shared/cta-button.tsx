import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends ButtonProps {
  href: string;
  showArrow?: boolean;
}

/**
 * The single CTA component used everywhere on the site ("Book a Consultation →",
 * "Explore our Approach", etc.) — guarantees every call-to-action across every
 * page shares identical styling, spacing, and arrow behavior.
 */
export function CtaButton({
  href,
  showArrow = true,
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: CtaButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={cn(className)} {...props}>
      <Link href={href}>
        {children}
        {showArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </Link>
    </Button>
  );
}
