"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { PRIMARY_NAV, LIFECYCLE_STAGES } from "@/lib/constants";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { CtaButton } from "@/components/shared/cta-button";
import { Logo } from "@/components/shared/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cn } from "@/lib/utils";

/**
 * Fixed navbar. Transparent-over-dark-hero at rest, transitions to a
 * glassmorphic surface (per the design system's single sanctioned
 * glassmorphism moment) once the page scrolls past the hero.
 *
 * Only this component and MobileNav are Client Components in the header —
 * everything else in the site shell renders on the server.
 */
export function Navbar() {
  const scrolled = useScrollPosition(80);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-250 ease-out-expo",
        scrolled
          ? "border-b border-border-subtle bg-surface-0/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-[72px]">
        <Logo variant={scrolled ? "dark" : "light"} />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {PRIMARY_NAV.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 text-body-sm font-medium transition-colors",
                    scrolled ? "text-ink-900" : "text-white",
                  )}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </button>

                {servicesOpen && (
                  <div
                    className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-4"
                    role="menu"
                  >
                    <div className="grid grid-cols-5 gap-4 rounded-lg border border-border-subtle bg-surface-0 p-6 shadow-lg">
                      {LIFECYCLE_STAGES.map((stage) => (
                        <div key={stage.slug} role="none">
                          <p className="text-label uppercase text-ink-400">
                            {stage.name}
                          </p>
                          <ul className="mt-3 flex flex-col gap-2">
                            {stage.services.map((service) => (
                              <li key={service.slug}>
                                <Link
                                  href={`/services/${service.slug}`}
                                  role="menuitem"
                                  className="text-body-sm text-ink-700 hover:text-accent-primary hover:underline"
                                >
                                  {service.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-body-sm font-medium underline-offset-4 transition-colors hover:underline",
                  scrolled ? "text-ink-900" : "text-white",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <CtaButton
            href="/consultation"
            size="sm"
            variant={scrolled ? "primary" : "onDark"}
          >
            Book a Consultation
          </CtaButton>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
