import type { Metadata } from "next";
import SubmitToolSection from "@/components/submit-tool/SubmitToolSection";

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
  title: "Submit an AI Tool | AI Review Insider",

  description:
    "Know an amazing AI tool that should be featured on AI Review Insider? Submit it here. We welcome recommendations from founders and AI enthusiasts.",

  keywords: [
    "submit AI tool",
    "AI tool submission",
    "recommend AI software",
    "AI tools directory",
    "AI software review submission",
    "AI Review Insider",
  ],

  alternates: {
    canonical: `${SITE_URL}/submit-tool`,
  },

  openGraph: {
    title: "Submit an AI Tool | AI Review Insider",
    description:
      "Suggest an AI tool to be reviewed and listed on AI Review Insider.",
    url: `${SITE_URL}/submit-tool`,
    siteName: "AI Review Insider",
    type: "website",
    images: [
      {
        url: LOGO_URL,
        width: 1200,
        height: 630,
        alt: "Submit an AI Tool – AI Review Insider",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Submit an AI Tool | AI Review Insider",
    description:
      "Submit an AI tool to be reviewed and featured on AI Review Insider.",
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
export default function SubmitToolPage() {
  return (
    <div className="px-6 md:px-20 py-10 max-w-5xl mx-auto">
      {/* ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Submit an AI Tool",
            description:
              "Submit an AI tool for review and listing on AI Review Insider.",
            url: `${SITE_URL}/submit-tool`,
            isPartOf: {
              "@type": "WebSite",
              name: "AI Review Insider",
              url: SITE_URL,
            },
            potentialAction: {
              "@type": "CommunicateAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: `${SITE_URL}/submit-tool`,
              },
              description: "Submit an AI tool recommendation.",
            },
          }),
        }}
      />

      <SubmitToolSection />
    </div>
  );
}
