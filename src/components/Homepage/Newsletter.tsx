"use client";

export default function NewsletterSection() {
  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Blue gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-full 
                  bg-gradient-to-t from-blue-500/30 via-blue-400/20 to-transparent blur-3xl">
      </div>

      <div className="max-w-2xl mx-auto text-center px-4 relative z-10">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Stay Ahead in AI
        </h2>

        {/* Subtext */}
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Get the latest AI tools, news, and exclusive deals delivered to your inbox every week
        </p>

        {/* Input + Button */}
        <form className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                   focus:ring-2 focus:ring-blue-400 focus:outline-none 
                   bg-white/80 dark:bg-gray-900/60 backdrop-blur"
          />

          {/* NEW BUTTON STYLE */}
          <button
            type="submit"
            className="px-6 py-3 rounded-lg font-medium border border-white text-white 
                     bg-black transition-all duration-300
                     hover:bg-white hover:text-black hover:border-black"
          >
            Subscribe
          </button>
        </form>

        {/* Disclaimer */}
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Join 50,000+ AI enthusiasts. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
