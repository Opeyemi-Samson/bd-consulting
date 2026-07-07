import Link from "next/link";
import { Linkedin } from "lucide-react";
import { FOOTER_NAV } from "@/lib/constants";
import { Logo } from "@/components/shared/logo";
import { NewsletterForm } from "@/components/layout/newsletter-form";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-surface-900 text-white">
      <div className="container py-18 md:py-30">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
          </div>

          <FooterColumn title="Services" links={FOOTER_NAV.services} />
          <FooterColumn title="Company" links={FOOTER_NAV.company} />
          <FooterColumn title="Resources" links={FOOTER_NAV.resources} />

          <div>
            <p className="text-label uppercase text-ink-400">Connect</p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-body-sm text-white/90 hover:text-white hover:underline"
              aria-label="BD Consulting on LinkedIn (opens in a new tab)"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="text-body-md text-white/90">
            Strategic insight, once a month. No noise.
          </p>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-body-sm text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} BD Consulting. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-label uppercase text-ink-400">{title}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-body-sm text-white/90 hover:text-white hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
