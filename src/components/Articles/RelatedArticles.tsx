"use client"

import Link from "next/link"

export default function RelatedArticles() {

  const relatedArticles = [
    {
      slug: "ml-2025-trends",
      title: "Top ML Trends in 2025",
      read: "6 min read",
      image: "/news.png",
    },
    {
      slug: "ai-ethics-2025",
      title: "AI Ethics and Regulation in 2025",
      read: "5 min read",
      image: "/news.png",
    },
    {
      slug: "edge-ai",
      title: "Edge AI: The Next Frontier",
      read: "7 min read",
      image: "/news.png",
    },
  ]

  return (

<section className="mt-12">
  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
    Related Articles
  </h3>
  <div className="grid md:grid-cols-3 gap-6">
    {relatedArticles.map((rel, idx) => (
      <Link
        href={`/${rel.slug}`}
        key={idx}
        className="group relative block overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm
                   bg-white/10 dark:bg-white/5 backdrop-blur-md
                   hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 cursor-pointer"
      >
        {/* Image */}
        <div className="relative h-40 w-full">
          <img
            src={rel.image}
            alt={rel.title}
            className="w-full h-full object-cover"
          />
          {/* Optional overlay to enhance glass effect */}
          <div className="absolute inset-0 bg-white/5 dark:bg-black/20 group-hover:bg-white/10 dark:group-hover:bg-black/30 transition-all duration-300 pointer-events-none rounded-xl" />
        </div>

        {/* Content */}
        <div className="p-4 relative z-10">
          <h4 className="text-lg font-medium text-gray-900 dark:text-white
                         group-hover:text-blue-500 dark:group-hover:text-green-400
                         transition-colors duration-300 line-clamp-2">
            {rel.title}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {rel.read}
          </p>
        </div>
      </Link>
    ))}
  </div>
</section>

  )
}
