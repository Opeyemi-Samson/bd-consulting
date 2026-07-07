import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_INSIGHTS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function Insights() {
  return (
    <section className="bg-surface-0 py-20 md:py-30" aria-labelledby="insights-heading">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Insights"
            headline="Original thinking, published plainly."
            subheadline="Frameworks and perspective from the team — for those who want to understand our thinking before they need our help."
          />
          <Link
            href="/insights"
            className="hidden shrink-0 text-body-sm font-medium text-accent-primary hover:underline md:inline-flex md:items-center md:gap-1"
          >
            View all insights <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURED_INSIGHTS.map((article, i) => (
            <Reveal as="li" key={article.slug} delay={i * 0.1}>
              <Link
                href={`/insights/${article.slug}`}
                className="group block h-full border-t border-border-subtle pt-6 transition-colors"
              >
                <span className="text-label uppercase text-ink-400">{article.stageTag}</span>
                <h3 className="mt-3 text-heading-md text-ink-900 group-hover:underline">
                  {article.title}
                </h3>
                <p className="mt-2 text-body-sm text-ink-700">{article.thesis}</p>
                <p className="mt-4 text-body-sm text-ink-400">
                  {article.author} · {article.readTime}
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>

        <div className="mt-8 md:hidden">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-body-sm font-medium text-accent-primary hover:underline"
          >
            View all insights <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
