import { fetchAPI } from "@/lib/api";

export default async function RelatedNews({
  newsId,
  category,
}: {
  newsId: string;
  category: string;
}) {
  const related = await fetchAPI(
    `/news/related?category=${category}&exclude=${newsId}`
  );

  if (!related.length) return null;

  return (
 <div className="mt-20">
  {/* Title */}
  <h3
    className="
      text-center text-3xl font-bold mb-10 tracking-wide

      /* DARK */
      dark:text-white
      dark:drop-shadow-[0_2px_6px_rgba(0,150,255,0.35)]

      /* LIGHT */
      text-slate-900
    "
  >
    Related News
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {related.map((item: any) => {
      const preview =
        item.metaDescription ||
        item.content.replace(/<[^>]*>/g, "").slice(0, 160);

      const thumbUrl = item.thumbnail
        ? `${process.env.NEXT_PUBLIC_API_URL}${item.thumbnail}`
        : "/placeholder-news.jpg";

      return (
        <a
          key={item._id}
          href={`/news/${item.slug}`}
          className="
            group relative rounded-2xl overflow-hidden
            flex flex-col backdrop-blur-xl
            transition-all duration-300

            /* ================= DARK MODE (UNCHANGED) ================= */
            dark:bg-gradient-to-br dark:from-black/80 dark:via-gray-900/60 dark:to-black/90
            dark:border dark:border-gray-700/60
            dark:hover:border-blue-400/50
            dark:shadow-[0_0_25px_rgba(0,0,0,0.6)]
            dark:hover:shadow-[0_0_35px_rgba(0,150,255,0.35)]

            /* ================= LIGHT MODE (DESIGNED) ================= */
            bg-gradient-to-br from-[#eef2ff] via-[#e9eeff] to-[#dde4ff]
            border border-blue-200/70
            shadow-[0_18px_45px_rgba(79,70,229,0.18)]
            hover:shadow-[0_25px_60px_rgba(79,70,229,0.25)]
          "
        >
          {/* Subtle light glow */}
          <div
            className="
              absolute inset-0 pointer-events-none rounded-2xl
              bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_60%)]
              dark:hidden
            "
          />

          {/* Thumbnail */}
          <div className="relative h-40 sm:h-48 w-full overflow-hidden">
            <img
              src={thumbUrl}
              alt={item.title}
              className="
                w-full h-full object-cover
                group-hover:scale-[1.05]
                transition-transform duration-500
              "
            />
</div>

          {/* Content */}
          <div className="flex flex-col p-5 sm:p-6 flex-grow relative z-10">
            <h4
              className="
                text-lg md:text-xl font-bold mb-3 transition-colors

                /* DARK */
                dark:text-white
                dark:group-hover:text-blue-300

                /* LIGHT */
                text-slate-900
                group-hover:text-blue-600
              "
            >
              {item.title}
            </h4>

            <p className="text-sm line-clamp-3 flex-grow
              text-slate-600 dark:text-gray-300">
              {preview}
            </p>

            {/* Read More */}
            <span
              className="
                font-semibold text-sm mt-4 inline-block transition-colors

                /* DARK */
                dark:text-blue-400 dark:group-hover:text-blue-300

                /* LIGHT */
                text-blue-600 group-hover:text-blue-700
              "
            >
              Read More →
            </span>
          </div>
        </a>
      );
    })}
  </div>
</div>

  );
}
