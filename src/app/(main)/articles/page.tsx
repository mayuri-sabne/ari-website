import type { Metadata } from "next";
import { fetchAPI } from "@/lib/api";
import ArticlesClient from "@/components/Articles/ArticlesClient";

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
  title: "Latest AI Articles, Guides & Insights | AI Review Insider",

  description:
    "Explore the latest AI articles, tutorials, insights, and expert-written guides from AI Review Insider. Stay updated on tools, trends, and AI best practices.",

  keywords: [
    "AI articles",
    "AI insights",
    "AI guides",
    "AI tutorials",
    "AI news",
    "artificial intelligence blog",
    "AI tools insights",
    "Latest AI trends",
    "AI Review Insider",
  ],

  alternates: {
    canonical: `${SITE_URL}/articles`,
  },

  openGraph: {
    title: "Latest AI Articles & Insights | AI Review Insider",
    description:
      "Read curated articles and insights on AI tools, trends, and best practices from AI Review Insider.",
    url: `${SITE_URL}/articles`,
    siteName: "AI Review Insider",
    type: "website",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "AI Articles – AI Review Insider",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Latest AI Articles & Insights | AI Review Insider",
    description:
      "Stay updated with AI articles, guides, and expert insights from AI Review Insider.",
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
export default async function ArticlesPage() {
  const categories = await fetchAPI("/categories");
  const articles = await fetchAPI("/articles");

  return (
    <div className="px-6 md:px-20 py-10 max-w-7xl mx-auto">
      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "AI Articles",
            description:
              "Explore the latest AI insights, articles, and industry news from AI Review Insider.",
            url: `${SITE_URL}/articles`,
            isPartOf: {
              "@type": "WebSite",
              name: "AI Review Insider",
              url: SITE_URL,
            },
          }),
        }}
      />

      <ArticlesClient categories={categories} articles={articles} />
    </div>
  );
}
