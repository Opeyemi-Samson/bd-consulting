"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CtaButton } from "@/components/shared/cta-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const easing = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-surface-900 pt-24"
      aria-label="Introduction"
    >
      {/* Subtle background grid motif — 4% opacity, purely decorative */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="max-w-[820px]">
          <motion.h1
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "show"}
            variants={variants}
            transition={{ duration: 0.5, ease: easing }}
            className="text-balance font-serif text-display-lg text-white md:text-display-xl"
          >
            Clarity at every inflection point.
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "show"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.08, ease: easing }}
            className="mt-6 max-w-xl text-body-lg text-white/80"
          >
            Strategy, capital, and transformation — under one methodology,
            for organizations at the moment that decides what comes next.
          </motion.p>

          <motion.p
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "show"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.14, ease: easing }}
            className="mt-3 max-w-xl text-body-md text-white/60"
          >
            From first raise to global scale, BD Consulting brings structure
            to ambiguity — for startups, SMEs, investors, NGOs, corporations,
            and government institutions.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "show"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2, ease: easing }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <CtaButton href="/consultation" size="lg" variant="onDark">
              Book a Consultation
            </CtaButton>
            <Button asChild variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link href="/approach">Explore our Approach</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
