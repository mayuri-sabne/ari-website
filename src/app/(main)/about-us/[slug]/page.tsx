import AuthorProfile from "@/components/about-us/AuthorProfile";
import { fetchAPI } from "@/lib/api";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getAuthor(slug: string) {
  return await fetchAPI(`/authors/slug/${slug}`);
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params; // ✅ FIXED

  const res = await getAuthor(params.slug);

  return {
    title: `${res.name} – AI Hub Author Profile`,
    description:
      res.description ||
      `${res.name} is a verified contributor at AI Hub specializing in AI research and tool evaluation.`,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us/${params.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params; // ✅ FIX for Page component too
  const res = await getAuthor(slug);
console.log(res,'iiiiiiiiiiiiiiiiiiiiiiiiii');

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: res.name,
    description: res.description,
    image: `${process.env.NEXT_PUBLIC_UPLOADS_URL}${res.profileImage}`,
    jobTitle: res.roleAtARI || "AI Research & Evaluation Specialist",
    knowsAbout: res.areaOfExpertise || "Artificial Intelligence, AI Tools",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us/${res.slug}`,
    sameAs: res.linkedin ? [res.linkedin] : [],
    worksFor: {
      "@type": "Organization",
      name: "AI Hub",
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <AuthorProfile
        name={res.name}
        description={res.description}
        profileImage={`${process.env.NEXT_PUBLIC_UPLOADS_URL}${res.profileImage}`}
        areaOfExpertise={res.areaOfExpertise}
        roleAtARI={res.roleAtARI}
        linkedin={res.linkedin}
      />
    </>
  );
}
