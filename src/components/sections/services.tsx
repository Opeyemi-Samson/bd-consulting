import Link from "next/link";
import { ArrowRight, Compass, TrendingUp, Globe2, Cpu, ShieldCheck } from "lucide-react";
import { LIFECYCLE_STAGES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const STAGE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  foundation: Compass,
  capital: TrendingUp,
  growth: Globe2,
  modernization: Cpu,
  resilience: ShieldCheck,
};

export function Services() {
  return (
    <section
      id="services"
      className="bg-surface-50 py-20 md:py-30"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            headline="One firm. Every stage of the business lifecycle."
            subheadline="Most firms sell services. We sell continuity — the same rigor, the same method, applied from your first strategic decision to your largest."
          />
          <Link
            href="/services"
            className="hidden shrink-0 text-body-sm font-medium text-accent-primary hover:underline md:inline-flex md:items-center md:gap-1"
          >
            View all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {LIFECYCLE_STAGES.map((stage, i) => {
            const Icon = STAGE_ICONS[stage.slug] ?? Compass;
            return (
              <Reveal as="li" key={stage.slug} delay={i * 0.08}>
                <div className="group h-full rounded-lg border border-border-subtle bg-surface-0 p-6 shadow-sm transition-all duration-250 ease-out-expo hover:-translate-y-0.5 hover:shadow-md">
                  <Icon className="h-6 w-6 text-ink-900" aria-hidden="true" />
                  <h3 className="mt-4 text-heading-md text-ink-900">{stage.name}</h3>
                  <p className="mt-1 text-body-sm text-ink-400">{stage.description}</p>

                  <ul className="mt-4 flex flex-col gap-1.5">
                    {stage.services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-body-sm text-ink-700 transition-colors group-hover:text-ink-900 hover:underline"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services#${stage.slug}`}
                    className="mt-5 inline-flex items-center gap-1 text-body-sm font-medium text-accent-primary hover:underline"
                  >
                    Explore <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-8 md:hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-body-sm font-medium text-accent-primary hover:underline"
          >
            View all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
