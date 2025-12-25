import type { Metadata } from "next";
import { fetchAPI } from "@/lib/api";
import OfferCard from "@/components/ai-tools/OfferCard";
import ComparisonLayout from "@/components/ai-tools/Comparison";

/* ---------------------------------------------------
   Constants
--------------------------------------------------- */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://aireviewinsider.com";

const UPLOADS_URL =
  process.env.NEXT_PUBLIC_UPLOADS_URL || "https://aireviewinsider.com";

/* ---------------------------------------------------
   Types
--------------------------------------------------- */
interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

/* ---------------------------------------------------
   Data Fetcher
--------------------------------------------------- */
async function getTool(slug: string) {
  return await fetchAPI(`/tools/slug/${slug}`);
}

/* ---------------------------------------------------
   SEO Metadata
--------------------------------------------------- */
export async function generateMetadata(
  { params }: ToolPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const tool = await getTool(slug);

  if (!tool) {
    return {
      title: "Tool Not Found | AI Review Insider",
      robots: { index: false, follow: false },
    };
  }

  /* -----------------------------
     DB-first meta
  ----------------------------- */
  const hasUsefulMetaTitle =
    tool.metaTitle && tool.metaTitle.trim().length > 5;

  const title =
    (hasUsefulMetaTitle && tool.metaTitle) ||
    `${tool.name} Review | AI Review Insider`;

  const hasUsefulMetaDescription =
    tool.metaDescription && tool.metaDescription.trim().length > 40;

  const description =
    (hasUsefulMetaDescription && tool.metaDescription) ||
    tool.shortDesc ||
    tool.longDesc?.slice(0, 160) ||
    `${tool.name} AI tool review and analysis.`;

  const canonicalUrl = `${SITE_URL}/ai-tools/${tool.slug}`;

  const ogTitle = tool.ogTitle || title;
  const ogDescription = tool.ogDescription || description;

  const ogImage = tool.logo
    ? `${UPLOADS_URL}${tool.logo}`
    : tool.banner
    ? `${UPLOADS_URL}${tool.banner}`
    : `${SITE_URL}/logo.png`;

  /* -----------------------------
     Smart keyword merge
  ----------------------------- */
  const keywordSet = new Set<string>([
    tool.name,
    `${tool.name} review`,
    `${tool.name} AI tool`,
    `${tool.name} pricing`,
    `${tool.name} alternatives`,
    "AI Review Insider",
    "AI tools",
    "AI tool reviews",
    ...(tool.tags || []),
    ...(tool.categories?.map((c: any) => c.name) || []),
    ...(tool.keywords || []),
  ]);

  const keywords = Array.from(keywordSet);

  return {
    metadataBase: new URL(SITE_URL),

    title,
    description,
    keywords,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      siteName: "AI Review Insider",
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: tool.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  };
}

/* ---------------------------------------------------
   Page
--------------------------------------------------- */
export default async function SingleToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = await getTool(slug);

  if (!tool) {
    return (
      <div className="text-center text-red-500 py-20">
        Tool not found
      </div>
    );
  }

  const logoFullUrl = tool.logo
    ? `${UPLOADS_URL}${tool.logo}`
    : undefined;

  return (
    <div className="px-4 md:px-20 pt-10 max-w-7xl mx-auto">
      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: tool.name,
            description:
              tool.metaDescription ||
              tool.shortDesc ||
              tool.longDesc?.slice(0, 160),
            image: logoFullUrl,
            applicationCategory: tool.categories
              ?.map((c: any) => c.name)
              .join(", "),
            ...(tool.pricingModel && {
              offers: {
                "@type": "Offer",
                price: tool.pricingModel === "Free" ? "0" : undefined,
                priceCurrency: "USD",
              },
            }),
            ...(tool.ratings?.average &&
              tool.reviewCount && {
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: tool.ratings.average,
                  reviewCount: tool.reviewCount,
                },
              }),
          }),
        }}
      />

      <OfferCard tool={tool} />
      <ComparisonLayout tool={tool} />
    </div>
  );
}
