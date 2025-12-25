// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import InfoCards from "./InfoCards"
// import LogoMarquee from "./LogoMarquee"

// export default function MainPage() {
//   return (
//     <>
//       <section
//         className="relative w-full bg-cover bg-center overflow-hidden bg-no-repeat   px-20"
//         // style={{ backgroundImage: "url('/homepage.png')" }}
//       >

// <main className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">

//           <div className="relative z-10 max-w-5xl">

//             <h1 className="text-5xl md:text-5xl font-extrabold 
//       text-gray-900 dark:text-white leading-tight mb-6 
//       tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
//               Discover the Best AI Tools
//             </h1>

//             <p className="text-md md:text-xl text-gray-600 dark:text-gray-300 mb-12 
//       max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
//               Explore guides, tools, and the latest trends powering the future of AI.
//             </p>

//             <div className="w-full max-w-lg mb-10 mx-auto">
//               <Input
//                 type="text"
//                 placeholder="Search AI tools, guides or news..."
//                 className="
//           w-full px-5 py-6 text-lg rounded-2xl shadow-md

//           bg-white/80 dark:bg-white/10
//           border border-gray-200 dark:border-gray-700
//           backdrop-blur-md

//           text-gray-900 dark:text-white

//           focus:outline-none focus:ring-2 focus:ring-blue-400
//           hover:shadow-[0_0_18px_rgba(59,130,246,0.25)]
//           transition-all duration-300
//         "
//               />
//             </div>

//             {/* Button Row */}
//             <div className="flex flex-col sm:flex-row gap-6 justify-center">

//               <Button
//                 asChild
//                 className="
//       relative rounded-xl px-10 py-6 text-lg font-semibold
//       text-white bg-[#0d111a]/80
//       backdrop-blur-xl

//       border border-transparent border-b-gray-600
//       shadow-[0_10px_25px_rgba(0,0,0,0.3)]

//       transition-all duration-300
//       hover:border hover:border-white
//       hover:bg-[#131a27]
//       hover:shadow-[0_12px_30px_rgba(255,255,255,0.15)]
//       hover:-translate-y-1 hover:scale-105

//       active:scale-95
//     "
//               >
//                 <Link href="/tools">Explore AI Tools</Link>
//               </Button>


//               <Button
//                 asChild
//                 className="
//       relative rounded-xl px-10 py-6 text-lg font-semibold

//       border border-white text-white
//       bg-transparent backdrop-blur-xl

//       shadow-[0_8px_18px_rgba(255,255,255,0.1)]
//       transition-all duration-300

//       hover:bg-white hover:text-black hover:border-transparent
//       hover:shadow-[0_12px_30px_rgba(255,255,255,0.3)]
//       hover:-translate-y-1 hover:scale-105

//       active:scale-95
//     "
//               >
//                 <Link href="/deals">Get Latest Deals</Link>
//               </Button>
//             </div>
//           </div>
//           <div className="flex justify-center overflow-hidden items-center">
//   <LogoMarquee />
// </div>

//         </main>
//         <InfoCards />
//       </section>
//     </>
//   )
// }



"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import InfoCards from "./InfoCards"
import { searchAll } from "@/lib/api";
import { Search, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react"

interface Tool {
  _id: string;
  name: string;
  slug: string;
}

interface Article {
  _id: string;
  title: string;
  slug: string;
}

interface News {
  _id: string;
  title: string;
  slug: string;
}

interface SearchResults {
  tools: Tool[];
  articles: Article[];
  news: News[];
}

export default function MainPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResults>({ tools: [], articles: [], news: [] });
  const [show, setShow] = useState(false);

  // Debounced Search
  useEffect(() => {
    if (query.length < 2) {
      setShow(false);
      return;
    }

    const timeout = setTimeout(async () => {
      const res = await searchAll(query);
      setResults(res);
      setShow(true);
    }, 250);

    return () => clearTimeout(timeout);
  }, [query]);
return (
  <>
   <section
  className="
    relative w-full overflow-hidden
    -mt-20
    pt-40 md:pt-32
    pb-16 md:pb-20
    px-4 md:px-20
  "
>
  {/* LIGHT MODE BACKGROUND GLOW */}
  <div className="pointer-events-none absolute inset-0 dark:hidden -z-0">
   
  </div>

  <main className="relative z-10 w-full flex justify-center">
    {/* HERO CONTAINER */}
    <div
      className="
        w-full max-w-6xl
        mx-auto
        py-24 sm:py-28 md:py-32
        space-y-10 sm:space-y-12
        text-center
      "
    >
      {/* TITLE */}
      <h1
        className="
          text-4xl
          sm:text-5xl
          md:text-7xl
          font-extrabold
          leading-[1.05]
          tracking-tight
          text-slate-9800
          dark:text-white
        "
      >
        Discover the Future of
        <br className="block sm:hidden" />
      <span
  className="
    ml-2 sm:ml-3

    /* LIGHT MODE */
    bg-gradient-to-r
    from-blue-700
    via-blue-600
    to-cyan-600
    bg-clip-text text-transparent

    /* DARK MODE — lighter & glowing */
    dark:from-blue-400
   dark:via-blue-300
    dark:to-cyan-400
  "
>
  AI Tools
</span>

      </h1>

      {/* SUBTITLE */}
      <p
        className="
          text-base sm:text-lg md:text-xl
          max-w-2xl mx-auto
          text-gray-700 dark:text-gray-300
           leading-relaxed
        "
      >
        Explore tools, reviews, and the latest AI trends shaping tomorrow’s
        technology.
      </p>

      {/* SEARCH BAR */}
      <div className="relative w-full max-w-xl mx-auto">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-gray-400"
            size={20}
          />
          <Input
            type="text"
            placeholder="Search AI tools, reviews or news..."
            className="
              w-full
              px-12
              py-6 sm:py-6
              text-lg md:text-lg
              rounded-2xl
              shadow-xl
              bg-white/90 dark:bg-black/20
              border border-gray-200 dark:border-gray-700
              text-gray-700 dark:text-white
              backdrop-blur-md
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
              transition-all
            "
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* DROPDOWN */}
        {show && (
          <div
            className="
              absolute w-full mt-3 p-4 rounded-2xl z-50
              bg-black
              border border-white/10
              shadow-2xl space-y-4
            "
          >
            {results.tools.length > 0 && (
              <div>
                <h4 className="text-xs text-gray-400 mb-1">TOOLS</h4>
                {results.tools.map((t) => (
                  <Link
                    key={t._id}
                    href={`/ai-tools/${t.slug}`}
                    className="
                      block px-3 py-2 rounded-lg
                      text-white hover:bg-white/10 transition
                    "
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            )}

            {results.articles.length > 0 && (
              <div>
                <h4 className="text-xs text-gray-400 mb-1">ARTICLES</h4>
                {results.articles.map((a) => (
                  <Link
                    key={a._id}
                    href={`/articles/${a.slug}`}
                    className="
                      block px-3 py-2 rounded-lg
                      text-white hover:bg-white/10 transition
                    "
                  >
                    {a.title}
                  </Link>
                ))}
              </div>
            )}

            {results.news.length > 0 && (
              <div>
                <h4 className="text-xs text-gray-400 mb-1">NEWS</h4>
                {results.news.map((n) => (
                  <Link
                    key={n._id}
                    href={`/news/${n.slug}`}
                    className="
                      block px-3 py-2 rounded-lg
                      text-white hover:bg-white/10 transition
                    "
                  >
                    {n.title}
                  </Link>
                ))}
              </div>
            )}

            {results.tools.length === 0 &&
              results.articles.length === 0 &&
              results.news.length === 0 && (
                <p className="text-gray-400 text-sm text-center py-2">
                  No results found.
                </p>
              )}
          </div>
        )}
      </div>

      {/* BUTTONS */}
      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center pt-6">
<Button
  asChild
  className="
    relative
    rounded-xl
    px-6 sm:px-10
    py-6 sm:py-6
    text-base sm:text-lg font-semibold

    /* ---------- LIGHT MODE ---------- */
    text-white
    bg-gradient-to-br
    from-blue-700
    via-blue-600
    to-cyan-600

    shadow-[0_12px_30px_rgba(37,99,235,0.35)]

    /* ---------- DARK MODE ---------- */
    dark:bg-black
    dark:bg-none
    dark:text-white
    dark:hover:bg-white/70
    dark:hover:text-black

    transition-all duration-300

    /* ---------- HOVER (SUBTLE) ---------- */
    hover:shadow-[0_16px_40px_rgba(37,99,235,0.45)]
    hover:from-blue-600
    hover:via-blue-500
    hover:to-cyan-500

    active:scale-[0.98]
  "
>
  <Link href="/ai-tools">Explore AI Tools</Link>
</Button>
<Button
  asChild
  className="
    relative
    rounded-xl
    px-6 sm:px-10
    py-6 sm:py-6
    text-base sm:text-lg font-semibold

    /* ---------- LIGHT MODE ---------- */
    text-blue-700
    bg-white/90
    backdrop-blur-md
    border border-blue-200
    shadow-[0_6px_14px_rgba(59,130,246,0.15)]

    /* ---------- DARK MODE ---------- */
    dark:text-white
    dark:border-white
    dark:bg-transparent

    transition-all duration-300

    /* ---------- HOVER (REFINED) ---------- */
    hover:border-blue-400
    hover:bg-blue-50
    hover:shadow-[0_10px_22px_rgba(59,130,246,0.25)]

    dark:hover:border-cyan-400
    dark:hover:bg-white/5

    active:scale-[0.98]
  "
>
  <Link href="/reviews">Read Reviews</Link>
</Button>


      </div>
    </div>
  </main>

  {/* INFO CARDS */}
  <InfoCards />
</section>

  </>
);

}
