import { SectionHeading } from "@/components/shared/section-heading";
import { CtaButton } from "@/components/shared/cta-button";
import { Reveal } from "@/components/shared/reveal";

const PILLARS = [
  {
    title: "Rigor over opinion",
    description:
      "Every recommendation is structured, evidenced, and defensible — not a best guess dressed up in confidence.",
  },
  {
    title: "Full lifecycle, one methodology",
    description:
      "Strategy, capital, and transformation under a single continuous framework, not five disconnected vendors.",
  },
  {
    title: "Discretion as default",
    description:
      "Turnarounds, valuations, and fundraising are sensitive by nature. We operate accordingly.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-surface-50 py-20 md:py-30" aria-labelledby="why-choose-us-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Why choose us"
          headline="Range without dilution. Rigor without delay."
          subheadline="Most firms make you choose between depth and speed, or between boutique attention and institutional credibility. We don't think that trade-off should exist."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 divide-y divide-border-subtle md:grid-cols-3 md:divide-x md:divide-y-0">
          {PILLARS.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 0.1}
              className="pt-8 first:pt-0 md:px-8 md:pt-0 md:first:pl-0 md:last:pr-0"
            >
              <h3 className="text-heading-lg text-ink-900">{pillar.title}</h3>
              <p className="mt-3 text-body-md text-ink-700">{pillar.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <CtaButton href="/approach" variant="secondary">
            Read our approach
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
