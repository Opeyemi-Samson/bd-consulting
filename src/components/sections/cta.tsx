import Link from "next/link";
import { CtaButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";

export function Cta() {
  return (
    <section className="bg-surface-900 py-20 md:py-30" aria-labelledby="cta-heading">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2
            id="cta-heading"
            className="text-balance font-serif text-display-md text-white"
          >
            Your inflection point doesn&apos;t wait. Neither should you.
          </h2>
          <p className="mt-4 text-body-lg text-white/80">
            Start with a short diagnostic conversation — no generic sales
            call, no obligation beyond clarity.
          </p>
          <p className="mt-3 text-body-sm text-white/60">
            We respond within one business day and confirm a session within
            three. What you bring is the problem. What we bring is the
            structure to solve it.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CtaButton href="/consultation" size="lg" variant="onDark">
              Book a Consultation
            </CtaButton>
            <Link
              href="/contact"
              className="text-body-sm font-medium text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              Or send us a message →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
