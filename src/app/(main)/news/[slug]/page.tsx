import type { Metadata } from "next";
import { fetchAPI } from "@/lib/api";
import SingleNews from "@/components/News/SingleNews";
import RelatedNews from "@/components/News/RelatedNews";

/* ---------------------------------------------------
   Constants
--------------------------------------------------- */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://aireviewinsider.com";

const UPLOADS_URL =
  process.env.NEXT_PUBLIC_UPLOADS_URL || "https://aireviewinsider.com";

const LOGO_URL = `${SITE_URL}/logo.png`;

/* ---------------------------------------------------
   Types
--------------------------------------------------- */
interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

/* ---------------------------------------------------
   Data Fetcher
--------------------------------------------------- */
async function getNews(slug: string) {
  return await fetchAPI(`/news/slug/${slug}`);
}

/* ---------------------------------------------------
   SEO Metadata
--------------------------------------------------- */
export async function generateMetadata(
  { params }: NewsPageProps
): Promise<Metadata> {
  const { slug } = await params;
  const news = await getNews(slug);

  if (!news) {
    return {
      title: "News Not Found | AI Review Insider",
      robots: { index: false, follow: false },
    };
  }

  const plainContent = news.content
    ? news.content.replace(/<[^>]*>/g, "")
    : "";

  const title =
    news.metaTitle?.trim()?.length > 5
      ? news.metaTitle
      : news.title;

  const description =
    news.metaDescription?.trim()?.length > 40
      ? news.metaDescription
      : plainContent.slice(0, 160) ||
        "Latest AI industry news and updates from AI Review Insider.";

  const canonicalUrl = `${SITE_URL}/news/${news.slug}`;

  const ogTitle = news.ogTitle || title;
  const ogDescription = news.ogDescription || description;

  const ogImage = news.thumbnail
    ? `${UPLOADS_URL}${news.thumbnail}`
    : LOGO_URL;

  const keywords = news.keywords?.length
    ? news.keywords
    : [
        news.title,
        "AI news",
        "AI industry updates",
        "Artificial Intelligence news",
        "AI Review Insider",
      ];

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
          alt: news.title,
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
export default async function NewsPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const news = await getNews(slug);

  if (!news) {
    return (
      <div className="text-center text-red-500 py-20">
        News not found
      </div>
    );
  }

  const plainContent = news.content
    ? news.content.replace(/<[^>]*>/g, "")
    : "";

  const imageUrl = news.thumbnail
    ? `${UPLOADS_URL}${news.thumbnail}`
    : LOGO_URL;

  return (
    <div className="px-6 md:px-20 pt-12 max-w-5xl mx-auto pb-0">
      {/* NewsArticle Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: news.title,
            description:
              news.metaDescription ||
              plainContent.slice(0, 160),
            image: imageUrl,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/news/${news.slug}`,
            },
            datePublished: news.createdAt,
            dateModified: news.updatedAt,
            publisher: {
              "@type": "Organization",
              name: "AI Review Insider",
              logo: {
                "@type": "ImageObject",
                url: LOGO_URL,
              },
            },
          }),
        }}
      />

      <SingleNews news={news} />

      {/* Related News */}
      <RelatedNews
        newsId={news._id}
        category={news.category?._id}
      />
    </div>
  );
}
