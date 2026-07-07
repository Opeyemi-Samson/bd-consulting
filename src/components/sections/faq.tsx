import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/constants";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section className="bg-surface-50 py-20 md:py-30" aria-labelledby="faq-heading">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          headline="Before you book, a few things worth knowing."
          subheadline="Straightforward answers to the questions we hear most — from first-time founders to institutional buyers."
        />

        <Accordion type="single" collapsible className="mt-12 max-w-3xl">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-8 text-body-sm text-ink-400">
          Still have a question?{" "}
          <Link href="/contact" className="font-medium text-accent-primary hover:underline">
            Contact us →
          </Link>
        </p>
      </div>
    </section>
  );
}
