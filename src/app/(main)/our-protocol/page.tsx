// app/methodology/page.tsx
import type { Metadata } from "next";
import ARIFactCheckProtocol from "@/components/submit-tool/Protocol";

/* ---------------------------------------------------
   Constants
--------------------------------------------------- */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://aireviewinsider.com";

const LOGO_URL = `${SITE_URL}/logo.png`;

/* ---------------------------------------------------
   Metadata
--------------------------------------------------- */
export const metadata: Metadata = {
  title: "ARI Fact-Check Protocol | AI Review Insider Methodology",

  description:
    "Learn how AI Review Insider verifies accuracy using the ARI Fact-Check Protocol. Our methodology ensures every review, comparison, and pricing page is transparent, reliable, and regularly updated.",

  keywords: [
    "AI Review Insider",
    "AI tool reviews methodology",
    "Fact-check protocol",
    "AI accuracy verification",
    "AI review process",
    "AI research standards",
  ],

  alternates: {
    canonical: `${SITE_URL}/our-protocol`,
  },

  openGraph: {
    title: "ARI Fact-Check Protocol | AI Review Insider",
    description:
      "A detailed look at the ARI Fact-Check Protocol — our system for ensuring accurate, trustworthy AI tool reviews and comparisons.",
    url: `${SITE_URL}/our-protocol`,
    siteName: "AI Review Insider",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "ARI Fact-Check Protocol",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ARI Fact-Check Protocol | AI Review Insider",
    description:
      "Discover how AI Review Insider ensures accuracy and transparency through its Fact-Check Protocol.",
    images: [LOGO_URL],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* ---------------------------------------------------
   Page
--------------------------------------------------- */
export default function MethodologyPage() {
  return (
    <div className="px-6 md:px-20 py-12 max-w-5xl mx-auto">
      <ARIFactCheckProtocol />
    </div>
  );
}
