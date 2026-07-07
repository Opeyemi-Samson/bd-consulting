import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_CASE_STUDIES } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function CaseStudies() {
  return (
    <section className="bg-surface-50 py-20 md:py-30" aria-labelledby="case-studies-heading">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Proof"
            headline="Proof, not promises."
            subheadline="A selection of engagements across stages and sectors — each measured in outcomes, not adjectives."
          />
          <Link
            href="/case-studies"
            className="hidden shrink-0 text-body-sm font-medium text-accent-primary hover:underline md:inline-flex md:items-center md:gap-1"
          >
            View all case studies <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURED_CASE_STUDIES.map((study, i) => (
            <Reveal as="li" key={study.slug} delay={i * 0.1}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group block h-full rounded-lg border border-border-subtle bg-surface-0 p-6 shadow-sm transition-all duration-250 ease-out-expo hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="inline-flex rounded-full bg-accent-primary/10 px-3 py-1 text-label uppercase text-accent-primary">
                  {study.sector}
                </span>
                <p className="mt-4 text-heading-md text-ink-900">{study.challenge}</p>
                <p className="mt-2 font-serif text-heading-lg text-accent-signal">
                  {study.outcomeStat}
                </p>
                <p className="text-body-sm text-ink-400">{study.outcomeLabel}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-body-sm font-medium text-accent-primary group-hover:underline">
                  Read the case study <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <div className="mt-8 md:hidden">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-body-sm font-medium text-accent-primary hover:underline"
          >
            View all case studies <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
