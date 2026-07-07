import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

// Serif display face — editorial authority, used only for headlines/pull-quotes
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600"],
});

// Grotesk UI face — used for everything else
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Strategic Advisory for Every Stage of Growth",
    path: "",
  }),
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0D0F",
  width: "device-width",
  initialScale: 1,
};

// Organization structured data — improves SEO rich results and institutional
// credibility signals for search engines (important for a B2B advisory brand)
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Strategic advisory firm serving startups, SMEs, investors, NGOs, corporations, and government institutions across the full business lifecycle.",
  areaServed: "Global",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-surface-0 text-ink-900">
        {/* Skip link — first-tab-stop accessibility requirement */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-body-sm focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
