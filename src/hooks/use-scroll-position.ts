"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the user has scrolled past `threshold` pixels.
 * Used to trigger the navbar's transparent -> glassmorphic transition.
 * Passive listener + rAF throttling keeps this cheap on scroll.
 */
export function useScrollPosition(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
