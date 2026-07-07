"use client";

import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

/**
 * Count-up animation for the Trust Indicators stat row — the one section
 * where a slightly more expressive animation is earned (it reinforces
 * "evidence" as a brand value). Fires once when the element enters the
 * viewport; respects prefers-reduced-motion by rendering the final value
 * immediately.
 */
export function AnimatedCounter({ value, suffix = "", className }: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      el.textContent = `${value}${suffix}`;
      return;
    }

    const counter = { current: 0 };
    const tween = gsap.to(counter, {
      current: value,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        if (el) el.textContent = `${Math.round(counter.current)}${suffix}`;
      },
    });

    return () => {
      tween.kill();
    };
  }, [value, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
