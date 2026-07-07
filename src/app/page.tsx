import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/hero";
import { ClientLogos } from "@/components/sections/client-logos";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { Services } from "@/components/sections/services";
import { WhoWeHelp } from "@/components/sections/who-we-help";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Process } from "@/components/sections/process";
import { CaseStudies } from "@/components/sections/case-studies";
import { Insights } from "@/components/sections/insights";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = buildMetadata({
  title: "Strategic Advisory for Every Stage of Growth",
  description:
    "BD Consulting delivers strategic clarity across the full business lifecycle — from first raise to global scale — for startups, SMEs, investors, NGOs, corporations, and government institutions.",
  path: "/",
});

/**
 * Homepage. A pure composition of Server Components — no data fetching or
 * client-side state lives here. Each section is independently responsible
 * for its own content, animation, and accessibility, per the "one section,
 * one file" architectural rule documented in STRUCTURE.md.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <TrustIndicators />
      <Services />
      <WhoWeHelp />
      <WhyChooseUs />
      <Process />
      <CaseStudies />
      <Insights />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
