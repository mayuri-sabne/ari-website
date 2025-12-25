import type { Metadata } from "next";
import AboutUs from "@/components/about-us/AboutUs";

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
  title: "About AI Review Insider | Honest & In-Depth AI Tool Reviews",

  description:
    "AI Review Insider is an independent platform focused on honest, in-depth reviews of AI tools, software, and platforms to help users make informed decisions.",

  keywords: [
    "AI reviews",
    "AI tool reviews",
    "artificial intelligence tools",
    "AI software reviews",
    "best AI tools",
    "AI platforms",
    "AI products",
    "independent AI reviews",
    "honest AI reviews",
    "AI tool comparison",
    "AI Review Insider",
  ],

  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },

  openGraph: {
    title: "About AI Review Insider",
    description:
      "Learn about AI Review Insider — a platform dedicated to reviewing AI tools and platforms with transparency, clarity, and real insights.",
    url: `${SITE_URL}/about-us`,
    siteName: "AI Review Insider",
    type: "website",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "AI Review Insider Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About AI Review Insider",
    description:
      "Honest and independent reviews of AI tools, platforms, and software.",
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
export default function AboutUsPage() {
  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AI Review Insider",
            url: SITE_URL,
            logo: LOGO_URL,
            description:
              "AI Review Insider provides independent, transparent reviews of AI tools, platforms, and software to help users discover the best AI solutions.",
            knowsAbout: [
              "Artificial Intelligence",
              "AI Tools",
              "AI Software Reviews",
              "Machine Learning Platforms",
              "Automation Tools",
              "AI Industry Insights",
              "Review Transparency",
            ],
            sameAs: [
              "https://x.com/aireviewinsider",
              "https://www.linkedin.com/company/aireviewinsider/",
              "https://www.reddit.com/r/AiReviewInsiderHQ/",
              "https://www.instagram.com/aireviewinsider",
            ],
          }),
        }}
      />

      <AboutUs />
    </>
  );
}
