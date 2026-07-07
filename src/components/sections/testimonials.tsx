"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [active, setActive] = React.useState(0);
  const shouldReduceMotion = useReducedMotion();
  const testimonial = TESTIMONIALS[active];

  if (!testimonial) return null;

  return (
    <section
      className="bg-surface-900 py-20 md:py-30"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <h2 id="testimonials-heading" className="sr-only">
          What it&apos;s like to work with us
        </h2>

        <div className="mx-auto max-w-2xl text-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={shouldReduceMotion ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-balance font-serif text-display-md text-white">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 text-body-sm text-white/60">
                {testimonial.attribution}, {testimonial.role}
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex justify-center gap-2" role="tablist" aria-label="Testimonials">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.attribution}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show testimonial from ${t.attribution}`}
                onClick={() => setActive(i)}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors duration-250",
                  i === active ? "bg-white" : "bg-white/30 hover:bg-white/50",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
