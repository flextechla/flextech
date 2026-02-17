import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import { SITE } from "@/lib/constants";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// ── Font Loading (next/font for optimal performance) ──
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// ── Global Metadata ──
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} – ${SITE.tagline} | ${SITE.location}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "computer repair Baton Rouge",
    "IT services Baton Rouge",
    "virus removal Louisiana",
    "on-site computer service",
    "data recovery Baton Rouge",
    "managed IT services",
    "computer consulting",
    "remote tech support",
    "FlexTech",
    "FlexTech LA",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} – ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} – ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} – ${SITE.tagline}`,
    description: SITE.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ── JSON-LD Structured Data ──
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Baton Rouge",
    addressRegion: "LA",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Baton Rouge",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
