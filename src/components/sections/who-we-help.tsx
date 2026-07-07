import { WHO_WE_HELP } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function WhoWeHelp() {
  return (
    <section className="bg-surface-0 py-20 md:py-30" aria-labelledby="who-we-help-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Who we help"
          headline="Built for the moment, not the industry label."
          subheadline="Whether you're raising your first round or modernizing a national institution, the model doesn't change. Only the scale does."
        />

        <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          {WHO_WE_HELP.map((persona, i) => (
            <Reveal as="li" key={persona.name} delay={i * 0.05}>
              <p className="text-heading-md text-ink-900">{persona.name}</p>
              <p className="mt-1 text-body-sm text-ink-400">{persona.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
