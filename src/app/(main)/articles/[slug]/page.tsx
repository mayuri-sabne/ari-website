import type { Metadata } from "next";
import { fetchAPI } from "@/lib/api";
import SingleArticle from "@/components/Articles/SingleArticle";
import RelatedArticles from "@/components/Articles/RelatedArticles";

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
interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

/* ---------------------------------------------------
   Data Fetcher
--------------------------------------------------- */
async function getArticle(slug: string) {
  return await fetchAPI(`/articles/slug/${slug}`);
}

/* ---------------------------------------------------
   SEO Metadata
--------------------------------------------------- */
export async function generateMetadata(
  { params }: ArticlePageProps
): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found | AI Review Insider",
      robots: { index: false, follow: false },
    };
  }

  // Strip HTML for safe fallback descriptions
  const plainContent = article.content
    ? article.content.replace(/<[^>]+>/g, "")
    : "";

  const title =
    (article.metaTitle && article.metaTitle.trim().length > 7
      ? article.metaTitle
      : article.title) || "AI Article | AI Review Insider";

  const description =
    (article.metaDescription &&
      article.metaDescription.trim().length > 40 &&
      article.metaDescription) ||
    plainContent.slice(0, 160) ||
    "Read the latest AI insights and guides on AI Review Insider.";

  const canonicalUrl = `${SITE_URL}/articles/${article.slug}`;

  const ogTitle = article.ogTitle || title;
  const ogDescription = article.ogDescription || description;

  const ogImage = article.thumbnail
    ? `${UPLOADS_URL}${article.thumbnail}`
    : LOGO_URL;

  const keywords =
    article.keywords?.length
      ? article.keywords
      : [
          article.title,
          `${article.title} AI`,
          "AI articles",
          "AI insights",
          "AI guides",
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
          alt: article.title,
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
export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return (
      <div className="text-center text-red-500 py-20">
        Article not found
      </div>
    );
  }

  const imageUrl = article.thumbnail
    ? `${UPLOADS_URL}${article.thumbnail}`
    : LOGO_URL;

  return (
    <div className="px-6 md:px-20 py-12 max-w-5xl mx-auto">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description:
              article.metaDescription ||
              article.content
                ?.replace(/<[^>]+>/g, "")
                .slice(0, 160),
            image: imageUrl,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/articles/${article.slug}`,
            },
            author: article.author
              ? {
                  "@type": "Person",
                  name: article.author.name,
                  url: `${SITE_URL}/about-us/${article.author.slug}`,
                }
              : {
                  "@type": "Organization",
                  name: "AI Review Insider",
                },
            publisher: {
              "@type": "Organization",
              name: "AI Review Insider",
              logo: {
                "@type": "ImageObject",
                url: LOGO_URL,
              },
            },
            datePublished: article.createdAt,
            dateModified: article.updatedAt,
          }),
        }}
      />

      <SingleArticle article={article} />
      <RelatedArticles
        articleId={article._id}
        category={article.category}
      />
    </div>
  );
}
