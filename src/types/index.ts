export interface NavLink {
  label: string;
  href: string;
}

export interface LifecycleStage {
  slug: string;
  name: string;
  description: string;
  services: { name: string; slug: string }[];
}

export interface Service {
  slug: string;
  name: string;
  stage: string;
  headline: string;
  summary: string;
  approach: string[];
  audience: string;
}

export interface CaseStudy {
  slug: string;
  sector: string;
  serviceUsed: string;
  duration: string;
  challenge: string;
  outcomeStat: string;
  outcomeLabel: string;
  situation: string;
  approach: string;
  outcome: string;
}

export interface InsightArticle {
  slug: string;
  stageTag: string;
  title: string;
  thesis: string;
  author: string;
  readTime: string;
  publishedAt: string;
}

export interface Testimonial {
  quote: string;
  attribution: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TrustStat {
  value: number;
  suffix?: string;
  label: string;
}
