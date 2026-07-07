"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaButton } from "@/components/shared/cta-button";

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-surface-0 py-20 md:py-30" aria-labelledby="process-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Our process"
          headline="Diagnose. Design. Deliver."
          subheadline="A structured, three-phase method applied to every engagement — regardless of size, sector, or urgency."
          align="center"
          className="mx-auto"
        />

        <div ref={containerRef} className="relative mt-16">
          {/* Connecting line — desktop horizontal, drawn on scroll entry */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border-subtle md:block" aria-hidden="true">
            <motion.div
              className="h-full bg-ink-900"
              initial={{ scaleX: 0 }}
              animate={isInView && !shouldReduceMotion ? { scaleX: 1 } : shouldReduceMotion ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.li
                key={step.number}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-surface-0 font-serif text-heading-md text-ink-900 md:bg-surface-0">
                  {step.number}
                </span>
                <h3 className="mt-4 text-heading-lg text-ink-900">{step.title}</h3>
                <p className="mt-2 text-body-md text-ink-700">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex justify-center">
          <CtaButton href="/approach" variant="secondary">
            See our full approach
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
