type NewsItem = {
  _id: string;
  slug: string;
  title: string;
  metaDescription?: string;
  content: string;
  thumbnail?: string;
};

interface NewsListClientProps {
  news: NewsItem[];
}

export default function NewsListClient({ news }: NewsListClientProps) {
  return (
<div className="max-w-7xl mx-auto px-4 py-10 space-y-10">

  {/* Page Title + Subheading */}
  <div className="text-center space-y-2 px-2 sm:px-0">
    <h2
      className="
        text-3xl sm:text-4xl font-extrabold tracking-tight
        text-slate-900
        dark:text-white
        dark:drop-shadow-[0_0_1px_rgba(0,150,255,0.35)]
      "
    >
      Latest AI News
    </h2>

    <p className="text-slate-600 dark:text-gray-300 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
      Stay updated with trending AI announcements, breakthroughs, and industry shifts.
    </p>
  </div>

  {/* News Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
    {news.map((item) => {
      const preview =
        item.metaDescription ||
        item.content.replace(/<[^>]*>/g, "").slice(0, 180);

      const imageUrl = item.thumbnail
        ? `${process.env.NEXT_PUBLIC_API_URL}${item.thumbnail}`
        : "/placeholder-news.jpg";

      return (
        <a
          key={item._id}
          href={`/news/${item.slug}`}
          className="
            group relative flex flex-col h-full overflow-hidden
            rounded-2xl border
            transition-all duration-500 ease-out

            /* ================= DARK MODE (UNCHANGED) ================= */
            dark:border-gray-700/60
            dark:bg-gradient-to-br dark:from-black/85 dark:via-gray-900/70 dark:to-black/90
            dark:shadow-[0_0_35px_rgba(0,0,0,0.6)]
            dark:hover:shadow-[0_0_45px_rgba(0,150,255,0.25)]

            /* ================= LIGHT MODE (DESIGNED) ================= */
            border-slate-300/70
            bg-[linear-gradient(180deg,#f8fafc,#eef2ff)]
            shadow-[0_12px_30px_rgba(30,64,175,0.18)]
            hover:shadow-[0_26px_60px_rgba(30,64,175,0.30)]

            backdrop-blur-xl
          "
        >
          {/* Soft inner glow (light mode only) */}
          <div
            className="
              absolute inset-0 pointer-events-none
              bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_60%)]
              dark:bg-none
            "
          />

          {/* Glass sheen on hover (light mode only) */}
          <div
            className="
              absolute inset-0 pointer-events-none
              bg-[linear-gradient(135deg,rgba(255,255,255,0.65),transparent_45%)]
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
              dark:hidden
            "
          />

          {/* Thumbnail (smaller on mobile) */}
          <div className="w-full h-36 sm:h-36 md:h-56 overflow-hidden relative">
            <img
              src={imageUrl}
              alt={item.title}
              className="
                w-full h-full object-cover
                transition-transform duration-700
                group-hover:scale-110
              "
            />

        
          </div>

          {/* Content */}
          <div className="relative p-4 sm:p-6 flex flex-col flex-grow z-10">
            <h3
              className="
                text-base sm:text-lg font-bold leading-snug mb-2
                transition-colors

                text-slate-900 group-hover:text-blue-700
                dark:text-white dark:group-hover:text-blue-300
              "
            >
              {item.title}
            </h3>

            <p className="text-sm text-slate-700 dark:text-gray-300 line-clamp-3 flex-grow">
              {preview}
            </p>

            {/* Read More */}
            <div className="mt-4 pt-3 border-t border-slate-300 dark:border-gray-700/70">
              <span
                className="
                  relative inline-block text-sm font-semibold
                  text-blue-700 dark:text-blue-400
                  transition-colors

                  after:absolute after:-bottom-0.5 after:left-0
                  after:h-[2px] after:w-0
                  after:bg-blue-500
                  after:transition-all after:duration-300
                  group-hover:after:w-full

                  dark:after:bg-blue-400
                "
              >
                Read More →
              </span>
            </div>
          </div>
        </a>
      );
    })}
  </div>
</div>

  );
}
