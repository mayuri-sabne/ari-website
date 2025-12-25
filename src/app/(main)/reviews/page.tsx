import type { Metadata } from "next";
import { fetchAPI } from "@/lib/api";
import ReviewToolsClient from "@/components/Reviews/ReviewToolsClient";

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
  title: "AI Tools Reviews | User Ratings & Feedback | AI Review Insider",

  description:
    "Explore authentic AI tool reviews, user ratings, and detailed insights. Compare tools and share your experience on AI Review Insider.",

  keywords: [
    "AI tool reviews",
    "AI reviews",
    "AI user ratings",
    "AI software feedback",
    "AI tool comparison",
    "AI Review Insider",
  ],

  alternates: {
    canonical: `${SITE_URL}/reviews`,
  },

  openGraph: {
    title: "AI Tools Reviews | User Ratings & Feedback",
    description:
      "Browse ratings, feedback, and comparisons of popular AI tools on AI Review Insider.",
    url: `${SITE_URL}/reviews`,
    siteName: "AI Review Insider",
    type: "website",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "AI Tool Reviews – AI Review Insider",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Tools Reviews | User Ratings & Feedback",
    description:
      "Discover real user feedback and ratings for AI tools on AI Review Insider.",
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
export default async function ReviewsPage() {
  const tools = await fetchAPI("/tools/published");
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
            name: "AI Tool Reviews",
            description:
              "A collection of AI tools reviewed and rated by users on AI Review Insider.",
            url: `${SITE_URL}/reviews`,
            isPartOf: {
              "@type": "WebSite",
              name: "AI Review Insider",
              url: SITE_URL,
            },
          }),
        }}
      />

      <ReviewToolsClient tools={tools} categories={categories} />
    </div>
  );
}
