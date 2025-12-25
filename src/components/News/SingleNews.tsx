interface NewsItem {
  thumbnail?: string;
  content: string;
  metaDescription?: string;
  title: string;
  category?: { name: string };
  createdAt: string;
}

export default function SingleNews({ news }: { news: NewsItem }) {
  const plainContent = news.content?.replace(/<[^>]*>/g, "") || "";

  const formattedDate = news.createdAt
    ? new Date(news.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
   <article
  className="
    relative mx-auto max-w-4xl 
    rounded-3xl p-6 sm:p-10
    backdrop-blur-xl
    transition-all duration-300

    /* ================= DARK MODE (UNCHANGED) ================= */
    dark:bg-gradient-to-br dark:from-black/85 dark:via-gray-900/70 dark:to-black/90
    dark:border dark:border-gray-700/60
    dark:shadow-[0_0_40px_rgba(0,0,0,0.7)]
    dark:text-white

    /* ================= LIGHT MODE (DESIGNED) ================= */
    bg-gradient-to-br from-[#f5f7ff] via-[#eef2ff] to-[#e8edff]
    border border-indigo-200/70
    shadow-[0_20px_55px_rgba(79,70,229,0.18)]
    text-slate-900
  "
>


  {/* Title */}
  <h1
    className="
      relative z-10 text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-6

      /* DARK */
      dark:text-white
      dark:drop-shadow-[0_2px_8px_rgba(0,150,255,0.3)]

      /* LIGHT */
      text-slate-900
    "
  >
    {news.title}
  </h1>

  {/* Subheading */}
  {news.metaDescription && (
    <p
      className="
        relative z-10 text-center text-base sm:text-lg mb-8 max-w-2xl mx-auto

        /* DARK */
        dark:text-gray-300

        /* LIGHT */
        text-slate-600
      "
    >
      {news.metaDescription}
    </p>
  )}

  {/* Thumbnail */}
  {news.thumbnail && (
    <div className="relative w-full h-48 sm:h-72 overflow-hidden rounded-2xl mb-10">
      <img
        src={`${process.env.NEXT_PUBLIC_API_URL}${news.thumbnail}`}
        alt={news.title}
        className="
          w-full h-full object-cover rounded-2xl
          transition-transform duration-500
          hover:scale-[1.04]
        "
      />
    </div>
  )}

  {/* Article Content */}
  <div
    className="
      relative z-10 prose max-w-none

      /* DARK */
      dark:prose-invert
      dark:prose-headings:text-white
      dark:prose-p:text-gray-300
      dark:prose-strong:text-blue-300
      dark:prose-a:text-blue-400

      /* LIGHT */
      prose-headings:text-slate-900
      prose-p:text-slate-700
      prose-strong:text-indigo-600
      prose-a:text-indigo-600
      prose-img:rounded-2xl prose-img:shadow-lg
    "
    dangerouslySetInnerHTML={{ __html: news.content }}
  />

  {/* Published Date */}
  <div
    className="
      mt-10 pt-6 text-center text-sm

      /* DARK */
      dark:border-t dark:border-gray-700/60
      dark:text-gray-400

      /* LIGHT */
      border-t border-indigo-200
      text-slate-500
    "
  >
    Published on{" "}
    <span className="font-medium text-slate-700 dark:text-gray-300">
      {formattedDate}
    </span>
  </div>
</article>

  );
}
