"use client";

import { motion, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}

/**
 * Standard fade-up-on-scroll wrapper used by every homepage section.
 * Centralizing this in one component guarantees consistent timing/easing
 * across the entire site (per the Motion Guidelines token spec) instead of
 * each section re-implementing its own animation variant.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 8 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
