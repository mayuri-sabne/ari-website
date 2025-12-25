import type { Metadata } from "next";
import { fetchAPI } from "@/lib/api";

import MainPage from "@/components/Homepage/MainPage";
import LatestAITools from "@/components/Homepage/LatestAITools";
import FeaturedNews from "@/components/Homepage/FeaturedNews";
import CouponCode from "@/components/Homepage/CouponCode";
import Testimonials from "@/components/Homepage/Testimonials";
import NewsletterSection from "@/components/Homepage/Newsletter";

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
  title:
    "AI Review Insider – Honest Reviews of AI Tools, Software & Platforms",

  description:
    "AI Review Insider provides honest, in-depth reviews of AI tools and platforms. Discover the best AI software, compare features, and make informed decisions.",

  keywords: [
    "AI reviews",
    "AI tools",
    "AI software reviews",
    "AI platforms",
    "AI tool comparisons",
    "best AI tools",
    "AI SaaS tools",
    "AI product reviews",
    "Latest AI trends",
    "AI Review Insider",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title:
      "AI Review Insider – Honest Reviews of AI Tools, Software & Platforms",
    description:
      "Discover trustworthy reviews of AI tools and platforms to find the best solutions for your workflow.",
    url: SITE_URL,
    siteName: "AI Review Insider",
    type: "website",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "AI Review Insider – AI Tools Reviews",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "AI Review Insider – Honest Reviews of AI Tools, Software & Platforms",
    description:
      "Honest and in-depth reviews of AI tools, platforms, and software.",
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
export default async function Home() {
  const featuredTools = await fetchAPI("/tools/featured");
  const bestValueTools = await fetchAPI("/tools/bestvalue?limit=6");
  const featuredNews = await fetchAPI("/news");

  return (
    <div>
      {/* Organization + WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "AI Review Insider",
                url: SITE_URL,
                logo: LOGO_URL,
                description:
                  "AI Review Insider publishes honest, in-depth reviews of AI tools and platforms to help users make informed decisions.",
                sameAs: [
                  "https://x.com/aireviewinsider",
                  "https://www.linkedin.com/company/aireviewinsider/",
                  "https://www.instagram.com/aireviewinsider",
                  "https://www.reddit.com/r/AiReviewInsiderHQ/",
                ],
              },
              {
                "@type": "WebSite",
                name: "AI Review Insider",
                url: SITE_URL,
                publisher: {
                  "@type": "Organization",
                  name: "AI Review Insider",
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
                  },
                  "query-input": "required name=search_term_string",
                },
              },
            ],
          }),
        }}
      />

      <MainPage />

<div className="px-4 sm:px-6 md:px-10">
        <LatestAITools tools={featuredTools} />
        <FeaturedNews news={featuredNews} />
        <CouponCode tools={bestValueTools} />
        <Testimonials />
        <NewsletterSection />
      </div>
    </div>
  );
}
