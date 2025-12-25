import type { Metadata } from "next";
import { fetchAPI } from "@/lib/api";
import NewsListClient from "@/components/News/NewsListClient";

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
  title: "AI News & Updates | AI Review Insider",

  description:
    "Read the latest AI news, industry updates, breakthroughs, and insights from AI Review Insider.",

  keywords: [
    "AI news",
    "artificial intelligence updates",
    "AI trends",
    "AI industry news",
    "machine learning news",
    "AI Review Insider",
  ],

  alternates: {
    canonical: `${SITE_URL}/news`,
  },

  openGraph: {
    title: "AI News & Industry Updates | AI Review Insider",
    description:
      "Stay updated with the latest developments in AI, ML, automation, and more.",
    url: `${SITE_URL}/news`,
    siteName: "AI Review Insider",
    type: "website",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "AI News – AI Review Insider",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI News & Updates | AI Review Insider",
    description:
      "Stay updated with AI news, insights, and breakthroughs.",
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
export default async function NewsPage() {
  const news = await fetchAPI("/news"); // adjust backend route if needed

  return (
    <div className="px-6 md:px-20 py-10 max-w-7xl mx-auto">
      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "AI News",
            description:
              "Explore the latest news and insights from the AI industry.",
            url: `${SITE_URL}/news`,
            isPartOf: {
              "@type": "WebSite",
              name: "AI Review Insider",
              url: SITE_URL,
            },
          }),
        }}
      />

      <NewsListClient news={news} />
    </div>
  );
}
