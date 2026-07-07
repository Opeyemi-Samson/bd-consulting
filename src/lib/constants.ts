import type {
  NavLink,
  LifecycleStage,
  CaseStudy,
  InsightArticle,
  Testimonial,
  FaqItem,
  TrustStat,
} from "@/types";

export const SITE_NAME = "BD Consulting";
export const SITE_URL = "https://www.bdconsulting.com";
export const SITE_DESCRIPTION =
  "BD Consulting delivers strategic clarity across the full business lifecycle — from first raise to global scale — for startups, SMEs, investors, NGOs, corporations, and government institutions.";

export const PRIMARY_NAV: NavLink[] = [
  { label: "Approach", href: "/approach" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export const FOOTER_NAV = {
  services: [
    { label: "Foundation", href: "/services#foundation" },
    { label: "Capital", href: "/services#capital" },
    { label: "Growth", href: "/services#growth" },
    { label: "Modernization", href: "/services#modernization" },
    { label: "Resilience", href: "/services#resilience" },
  ],
  company: [
    { label: "Approach", href: "/approach" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Insights", href: "/insights" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Book a Consultation", href: "/consultation" },
  ],
};

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    slug: "foundation",
    name: "Foundation",
    description: "Strategic clarity at the outset.",
    services: [
      { name: "Business Strategy", slug: "business-strategy" },
      { name: "Business Valuation", slug: "business-valuation" },
    ],
  },
  {
    slug: "capital",
    name: "Capital",
    description: "Readiness for the raise.",
    services: [
      { name: "Fundraising Readiness", slug: "fundraising-readiness" },
      { name: "Strategic Partnerships", slug: "strategic-partnerships" },
    ],
  },
  {
    slug: "growth",
    name: "Growth",
    description: "Expansion, engineered.",
    services: [
      { name: "Market Expansion", slug: "market-expansion" },
      { name: "International Growth", slug: "international-growth" },
    ],
  },
  {
    slug: "modernization",
    name: "Modernization",
    description: "Built for what's next.",
    services: [
      { name: "Digital Transformation", slug: "digital-transformation" },
      { name: "AI Adoption Strategy", slug: "ai-adoption-strategy" },
    ],
  },
  {
    slug: "resilience",
    name: "Resilience",
    description: "Stability under pressure.",
    services: [
      { name: "Operational Excellence", slug: "operational-excellence" },
      { name: "Business Turnaround", slug: "business-turnaround" },
    ],
  },
];

export const WHO_WE_HELP = [
  { name: "Startups", description: "scaling with proof" },
  { name: "SMEs", description: "professionalizing for growth" },
  { name: "Investors", description: "de-risking capital" },
  { name: "NGOs", description: "stretching mission-driven funding" },
  { name: "Corporates", description: "modernizing at scale" },
  { name: "Government", description: "modernizing public institutions" },
];

export const TRUST_STATS: TrustStat[] = [
  { value: 10, suffix: "+", label: "years combined advisory experience" },
  { value: 6, label: "sectors served at institutional scale" },
  { value: 1, label: "methodology across the full business lifecycle" },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We map the real problem beneath the stated one, using structured discovery, not assumption.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We build the specific model, plan, or framework your situation requires — never a templated deck.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "We stay engaged through execution, because a strategy that isn't implemented isn't a strategy.",
  },
];

export const FEATURED_CASE_STUDIES: CaseStudy[] = [
  {
    slug: "series-b-fintech-readiness",
    sector: "Fintech",
    serviceUsed: "Fundraising Readiness",
    duration: "6 weeks",
    challenge: "Series B readiness gap closed in 6 weeks",
    outcomeStat: "6 weeks",
    outcomeLabel: "to full investor readiness",
    situation:
      "A Series A fintech had a strong product but a financial model that could not withstand institutional due diligence.",
    approach:
      "We audited the model, rebuilt the data room, and restructured the investor narrative around defensible unit economics.",
    outcome: "The company closed its Series B within the following quarter.",
  },
  {
    slug: "national-digitization-roadmap",
    sector: "Public Sector",
    serviceUsed: "Digital Transformation",
    duration: "4 months",
    challenge: "National digitization roadmap delivered",
    outcomeStat: "4 months",
    outcomeLabel: "from diagnostic to delivered roadmap",
    situation:
      "A government agency needed a modernization roadmap that could survive procurement scrutiny and multi-year budget cycles.",
    approach:
      "We ran a structured diagnostic across departments and designed a phased transformation plan with clear governance checkpoints.",
    outcome: "The roadmap was formally adopted and is now in year one of execution.",
  },
  {
    slug: "ngo-funding-efficiency",
    sector: "NGO",
    serviceUsed: "Operational Excellence",
    duration: "10 weeks",
    challenge: "Funding efficiency improved by 40%",
    outcomeStat: "+40%",
    outcomeLabel: "improvement in funding efficiency",
    situation:
      "A mission-driven NGO was stretching limited funding across too many overlapping programs.",
    approach:
      "We restructured the operating model around three core programs and rebuilt the resource allocation framework.",
    outcome: "Funding efficiency improved by 40% within two fiscal quarters.",
  },
];

export const FEATURED_INSIGHTS: InsightArticle[] = [
  {
    slug: "why-investors-fund-evidence",
    stageTag: "Capital",
    title: "Why investors fund evidence, not ambition",
    thesis:
      "The gap between a good pitch and a fundable one is almost always in the model, not the story.",
    author: "BD Consulting",
    readTime: "6 min",
    publishedAt: "2026-05-12",
  },
  {
    stageTag: "Modernization",
    slug: "the-ai-adoption-mistake",
    title: "The AI adoption mistake most firms make",
    thesis:
      "Most AI strategies fail before deployment — because they were never sequenced against operational readiness.",
    author: "BD Consulting",
    readTime: "8 min",
    publishedAt: "2026-04-03",
  },
  {
    slug: "when-to-restructure",
    stageTag: "Resilience",
    title: "When to restructure — before it's forced",
    thesis:
      "By the time a turnaround feels urgent, the best options have usually already closed.",
    author: "BD Consulting",
    readTime: "5 min",
    publishedAt: "2026-02-21",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They rebuilt our model in three weeks — the same work our previous advisor quoted six months for.",
    attribution: "CFO",
    role: "Series B Fintech",
  },
  {
    quote:
      "The clearest strategic engagement we've run in a decade — no ambiguity, no wasted sessions.",
    attribution: "Director of Strategy",
    role: "National Development Agency",
  },
  {
    quote:
      "They treated our funding constraints as a design problem, not an excuse. That reframe changed everything.",
    attribution: "Executive Director",
    role: "International NGO",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What does an initial consultation involve?",
    answer:
      "A structured 30–45 minute conversation focused entirely on your situation — not a sales pitch. We ask the questions a strategist would ask before taking on the work, and we tell you honestly whether we're the right fit.",
  },
  {
    question: "Do you work with early-stage startups, or only established organizations?",
    answer:
      "Both. Our engagements range from pre-seed founders preparing their first raise to national institutions modernizing at scale. The methodology is the same; only the scope changes.",
  },
  {
    question: "How do you handle confidentiality during turnaround or fundraising engagements?",
    answer:
      "By default, not by request. Every engagement involving sensitive financial, operational, or strategic information is treated as confidential from the first conversation, governed by a formal agreement before any material is shared.",
  },
  {
    question: "Can government or institutional clients engage you through formal procurement?",
    answer:
      "Yes. We're structured to support formal procurement processes, including documentation, references, and institutional compliance requirements. Contact our institutional line directly to begin that process.",
  },
  {
    question: "What if we're not sure which service we need?",
    answer:
      "That's the most common starting point. Tell us what's not working, and we'll help identify the actual problem before recommending a service — that diagnostic work is where every engagement begins.",
  },
];
