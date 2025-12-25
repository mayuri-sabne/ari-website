"use client";

export default function NewsletterSection() {
  return (
   <section className="w-full py-20 relative overflow-visible">
  {/* Blue gradient glow */}
  <div
    className="
      absolute bottom-0 left-1/2 -translate-x-1/2
      w-full h-full
      bg-gradient-to-t
      from-blue-500/30 via-blue-400/20 to-transparent
      blur-3xl
    "
  />

  <div className="max-w-2xl mx-auto text-center px-4 relative z-10">
    
    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
      Stay Ahead in AI
    </h2>

    {/* Subtext */}
    <p className="mt-3 text-slate-600 dark:text-gray-300">
      Get the latest AI tools, news, and exclusive deals delivered to your inbox every week
    </p>

    {/* INPUT + BUTTON (INLINE EVEN ON MOBILE) */}
    <form
      className="
        mt-6
        flex items-stretch gap-2
        max-w-xl mx-auto
      "
    >
      <input
        type="email"
        placeholder="Enter your email address"
        className="
          flex-1
          px-4 py-3
          rounded-xl
          border border-blue-200
          bg-white/90
          text-slate-900
          backdrop-blur
          focus:outline-none
          focus:ring-2 focus:ring-blue-500

          dark:border-gray-600
          dark:bg-gray-900/60
          dark:text-white
        "
      />

      {/* SUBSCRIBE BUTTON — OUTSIDE INPUT */}
      <button
        type="submit"
        className="
          whitespace-nowrap
          px-5 sm:px-6
          rounded-xl
          font-semibold
          text-white

          /* LIGHT MODE */
          bg-gradient-to-r from-blue-600 to-cyan-600
          shadow-[0_6px_18px_rgba(59,130,246,0.35)]

          /* DARK MODE */
          dark:bg-black
          dark:bg-none
          dark:hover:bg-white
          dark:hover:text-black

          transition-all duration-300
          hover:shadow-[0_10px_30px_rgba(59,130,246,0.45)]
          active:scale-95
        "
      >
        Subscribe
      </button>
    </form>

    {/* Disclaimer */}
    <p className="mt-3 text-sm text-slate-500 dark:text-gray-400">
      Join 50,000+ AI enthusiasts. Unsubscribe anytime.
    </p>
  </div>
</section>

  );
}
