import { TRUST_STATS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Reveal } from "@/components/shared/reveal";

export function TrustIndicators() {
  return (
    <section className="bg-surface-0 py-20 md:py-30" aria-labelledby="trust-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Evidence"
          headline="Rigor you can verify, not just claim."
          subheadline="Every engagement is grounded in a named methodology, sector-specific proof, and outcomes stated in numbers — not superlatives."
        />

        <dl className="mt-14 grid grid-cols-1 gap-10 divide-y divide-border-subtle sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {TRUST_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="pt-8 text-center first:pt-0 sm:px-6 sm:pt-0 sm:first:pl-0">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-serif text-display-lg text-accent-signal"
                />
                <p className="mt-2 text-body-sm text-ink-400">{stat.label}</p>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
