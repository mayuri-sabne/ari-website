import type { Metadata } from "next";
import { fetchAPI } from "@/lib/api";
import ToolCardCarousel from "@/components/ai-tools/Card";
import AiToolReviews from "@/components/ai-tools/Reviews";

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
  title: "Top AI Tools 2025 – Reviews, Ratings & Insights | AI Review Insider",

  description:
    "Explore expert reviews and real user insights for the best AI tools of 2025. Compare features, pricing, and performance before you choose the right AI for your workflow.",

  keywords: [
    "AI tools",
    "AI reviews",
    "best AI software",
    "AI tool comparison",
    "AI productivity tools",
    "AI for writers",
    "AI for developers",
    "AI for designers",
    "AI automation tools",
    "Latest AI trends",
    "AI Review Insider",
  ],

  alternates: {
    canonical: `${SITE_URL}/ai-tools`,
  },

  openGraph: {
    title: "Top AI Tools 2025 – Reviews, Ratings & Insights | AI Review Insider",
    description:
      "Detailed, honest reviews of the latest AI tools for writers, designers, developers, marketers, and businesses.",
    url: `${SITE_URL}/ai-tools`,
    siteName: "AI Review Insider",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "AI Tools Reviews – AI Review Insider",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Top AI Tools 2025 – Reviews, Ratings & Insights | AI Review Insider",
    description:
      "Compare features, ratings, and real user feedback on the best AI tools of 2025.",
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
export default async function AiToolsPage() {
  const tools = await fetchAPI("/tools/published");
  const sliderTools = await fetchAPI("/tools/published?slider=true&limit=10");
  const categories = await fetchAPI("/categories");

  return (
    <div className="px-6 md:px-20 py-10 max-w-7xl mx-auto">
      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Top AI Tools",
            description:
              "A curated collection of the best AI tools with detailed reviews, ratings, and comparisons.",
            url: `${SITE_URL}/ai-tools`,
            isPartOf: {
              "@type": "WebSite",
              name: "AI Review Insider",
              url: SITE_URL,
            },
          }),
        }}
      />

      <ToolCardCarousel tools={sliderTools} />
      <AiToolReviews tools={tools} categories={categories} />
    </div>
  );
}
