import type { Metadata } from "next";
import AuthorProfile from "@/components/about-us/AuthorProfile";
import { fetchAPI } from "@/lib/api";

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
interface PageProps {
  params: Promise<{ slug: string }>;
}

/* ---------------------------------------------------
   Data Fetcher
--------------------------------------------------- */
async function getAuthor(slug: string) {
  return await fetchAPI(`/authors/slug/${slug}`);
}

/* ---------------------------------------------------
   SEO Metadata (DB First → Fallback)
--------------------------------------------------- */
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;
  const author = await getAuthor(slug);

  /* -----------------------------
     Meta fallbacks
  ----------------------------- */
  const title =
    author.metaTitle ||
    `${author.name} | AI Review Insider`;

  const description =
    author.metaDescription ||
    author.description?.slice(0, 160) ||
    `Learn more about ${author.name}, contributor at AI Review Insider.`;

  const canonicalUrl = `${SITE_URL}/about-us/${author.slug}`;

  const ogTitle = author.ogTitle || title;
  const ogDescription = author.ogDescription || description;

  const ogImage = author.profileImage
    ? `${UPLOADS_URL}${author.profileImage}`
    : `${SITE_URL}/logo.png`;

  const keywords = author.keywords?.length
    ? author.keywords
    : [
        author.name,
        `${author.name} AI`,
        `${author.name} AI expert`,
        `${author.name} AI reviews`,
        author.areaOfExpertise,
        "AI Review Insider",
        "AI reviews",
        "AI tools",
        "Artificial Intelligence",
      ].filter(Boolean);

  return {
    metadataBase: new URL(SITE_URL),

    title,
    description,
    keywords,

    alternates: {
      canonical: canonicalUrl,
    },

    authors: [
      {
        name: author.name,
        url: canonicalUrl,
      },
    ],

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
      type: "profile",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: author.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
      creator: author.x || "@aireviewinsider",
    },
  };
}

/* ---------------------------------------------------
   Page Component
--------------------------------------------------- */
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const res = await getAuthor(slug);

  const fullImage = res.profileImage
    ? `${UPLOADS_URL}${res.profileImage}`
    : `${SITE_URL}/logo.png`;

  return (
    <>
      {/* JSON-LD Person Schema (Google uses THIS) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": res.schemaType || "Person",
            name: res.name,
            description: res.description,
            image: fullImage,
            jobTitle: res.roleAtARI,
            url: `${SITE_URL}/about-us/${res.slug}`,
            sameAs: [
              res.linkedin,
              res.x,
            ].filter(Boolean),
            worksFor: {
              "@type": "Organization",
              name: "AI Review Insider",
              url: SITE_URL,
            },
            ...(res.areaOfExpertise && {
              knowsAbout: [res.areaOfExpertise],
            }),
            dateCreated: res.createdAt,
            dateModified: res.updatedAt,
          }),
        }}
      />

      <AuthorProfile
        name={res.name}
        description={res.description}
        profileImage={fullImage}
        areaOfExpertise={res.areaOfExpertise}
        roleAtARI={res.roleAtARI}
        linkedin={res.linkedin}
        x={res.x}
      />
    </>
  );
}
