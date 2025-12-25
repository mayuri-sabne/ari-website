// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function RelatedArticles() {
//   const relatedArticles = [
//     {
//       slug: "ml-2025-trends",
//       title: "Top ML Trends in 2025",
//       read: "6 min read",
//       image: "/news.png",
//     },
//     {
//       slug: "ai-ethics-2025",
//       title: "AI Ethics and Regulation in 2025",
//       read: "5 min read",
//       image: "/news.png",
//     },
//     {
//       slug: "edge-ai",
//       title: "Edge AI: The Next Frontier",
//       read: "7 min read",
//       image: "/news.png",
//     },
//   ];

//   return (
//     <section className="mt-12">
//       <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
//         Related Articles
//       </h3>

//       <div className="grid md:grid-cols-3 gap-6">
//         {relatedArticles.map((rel, idx) => (
//           <Link
//             href={`/articles/${rel.slug}`}
//             key={idx}
//             className="
//               group relative block overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm
//               bg-white/10 dark:bg-white/5 backdrop-blur-md
//               hover:bg-white/20 dark:hover:bg-white/10
//               transition-all duration-300 cursor-pointer
//             "
//           >
//             {/* Image */}
//             <div className="relative h-40 w-full rounded-t-xl overflow-hidden">
//               <Image
//                 src={rel.image}
//                 alt={rel.title}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 sizes="(max-width: 768px) 100vw,  
//                        (max-width: 1200px) 50vw,
//                        33vw"
//               />

//               {/* Overlay */}
//               <div
//                 className="
//                   absolute inset-0 bg-white/5 dark:bg-black/20 
//                   group-hover:bg-white/10 dark:group-hover:bg-black/30 
//                   transition-all duration-300 
//                   pointer-events-none rounded-t-xl
//                 "
//               />
//             </div>

//             {/* Content */}
//             <div className="p-4">
//               <h4
//                 className="
//                   text-lg font-medium text-gray-900 dark:text-white 
//                   group-hover:text-blue-500 dark:group-hover:text-green-400 
//                   transition-colors duration-300 line-clamp-2
//                 "
//               >
//                 {rel.title}
//               </h4>
//               <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
//                 {rel.read}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }
import Link from "next/link";
import Image from "next/image";

export default async function RelatedArticles({
  articleId,
  category,
}: {
  articleId: any;
  category: any;
}) {
  if (!category) return null;

  // Support both string id or object
  const categoryId =
    typeof category === "string" ? category : category._id || category.id;

  if (!categoryId) return null;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/articles/related/${categoryId}/${articleId}`,
    { cache: "no-store" }
  );

  const related = await res.json();

  if (!related?.length) return null;

  return (
<section className="max-w-4xl mx-auto mt-12 space-y-4">
  <div className="flex items-center justify-between">
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-50">
        Related Articles
      </h2>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
        More content you might enjoy.
      </p>
    </div>
  </div>

  <div className="grid gap-6 md:grid-cols-2">
    {related.map((a: any) => {
      const img = a.thumbnail
        ? `${process.env.NEXT_PUBLIC_UPLOADS_URL}${a.thumbnail}`
        : "/default-article.jpg";

      return (
        <Link key={a._id} href={`/articles/${a.slug}`} className="group">
          <article
            className="
              overflow-hidden rounded-2xl border transition-all duration-200

              /* ---------- LIGHT MODE ---------- */
              bg-white
              border-slate-200
              shadow-[0_14px_35px_rgba(15,23,42,0.08)]
              hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)]

              /* ---------- DARK MODE (UNCHANGED) ---------- */
              dark:border-white/10
              dark:bg-slate-900/70
              dark:backdrop-blur-xl
              dark:shadow-[0_14px_35px_rgba(15,23,42,0.6)]
              dark:hover:shadow-[0_18px_55px_rgba(15,23,42,0.85)]

              hover:-translate-y-0.5
            "
          >
            {/* Image */}
            <div className="relative h-36 w-full overflow-hidden">
              <Image
                src={img}
                alt={a.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <span
                className="
                  inline-block text-[11px] px-2 py-1 rounded-full

                  /* Light */
                  bg-slate-100 text-slate-700

                  /* Dark */
                  dark:bg-white/10 dark:text-slate-100
                "
              >
                {a.category?.name || "General"}
              </span>

              <h3
                className="
                  text-base font-semibold line-clamp-2 transition-colors

                  text-slate-900
                  group-hover:text-blue-600

                  dark:text-slate-50
                  dark:group-hover:text-sky-400
                "
              >
                {a.title}
              </h3>

              {a.metaDescription && (
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                  {a.metaDescription}
                </p>
              )}
            </div>
          </article>
        </Link>
      );
    })}
  </div>
</section>

  );
}
