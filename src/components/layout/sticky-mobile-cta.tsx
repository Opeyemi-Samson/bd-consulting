"use client";

import { useScrollPosition } from "@/hooks/use-scroll-position";
import { CtaButton } from "@/components/shared/cta-button";
import { cn } from "@/lib/utils";

/**
 * Mobile-only sticky CTA bar. Appears once the visitor scrolls past the hero
 * (matching the design spec's requirement that "Book a Consultation" is
 * never more than one tap away on mobile). Hidden on md+ where the navbar's
 * persistent CTA button already covers this need.
 */
export function StickyMobileCta() {
  const scrolled = useScrollPosition(400);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-border-subtle bg-surface-0/95 p-3 backdrop-blur-md transition-transform duration-250 ease-out-expo md:hidden",
        scrolled ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!scrolled}
    >
      <CtaButton href="/consultation" className="w-full" size="default">
        Book a Consultation
      </CtaButton>
    </div>
  );
}
