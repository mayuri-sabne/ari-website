"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function LatestArticles({
  categories,
  articles,
  selectedCategory,
  onSelectCategory,
  selectedCategoryName,
}: {
  categories: any[];
  articles: any[];
  selectedCategory: string;
  onSelectCategory: (value: string) => void;
  selectedCategoryName?: string;
}) {
  const isFiltered = selectedCategoryName && selectedCategoryName !== "all";

  return (
    <section className={cn("w-full", "py-10")}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}

        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {isFiltered
              ? `Latest ${selectedCategoryName} Articles`
              : "Latest Articles"}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            {isFiltered
              ? `Discover insights specifically in ${selectedCategoryName}.`
              : "Discover insights about AI, technology, and innovation"}
          </p>
        </div>

        {/*  Category */}

        <div className="text-center">
          <div
            className="
      flex flex-wrap sm:flex-nowrap
      justify-center 
      gap-2 sm:gap-3
      sm:overflow-x-auto scrollbar-hide
      pb-6 sm:pb-10 px-1
    "
          >
            {/* ALL */}
            <button
              onClick={() => onSelectCategory("all")}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-full border font-medium transition-all duration-200",
                "px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm",

                selectedCategory === "all"
                  ? `
            bg-blue-600 text-white border-blue-600
            dark:bg-[#252D45] dark:text-[#E9ECF4] dark:border-white
          `
                  : `
            bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100
            dark:bg-[#1E2538] dark:text-[#E9ECF4] dark:border-[#333C59]
            dark:hover:border-white dark:hover:bg-[#252D45]
          `
              )}
            >
              All
            </button>

            {categories.map((cat) => {
              const value = cat._id;
              const active = selectedCategory === value;

              return (
                <button
                  key={value}
                  onClick={() => onSelectCategory(value)}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-full border font-medium transition-all duration-200",
                    "px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm",

                    active
                      ? `
                bg-blue-600 text-white border-blue-600
                dark:bg-[#252D45] dark:text-[#E9ECF4] dark:border-white
              `
                      : `
                bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100
                dark:bg-[#1E2538] dark:text-[#E9ECF4] dark:border-[#333C59]
                dark:hover:border-white dark:hover:bg-[#252D45]
              `
                  )}
                >
                  <span className="whitespace-nowrap">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>


        {/* EMPTY STATE */}
        {articles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
              No articles found
            </p>
          </div>
        ) : (
          /* Articles Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article: any) => (
              <Link href={`/articles/${article.slug}`} key={article._id}>
                <Card
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border",
                    "flex flex-col h-full pt-0",

                    /* ---------- LIGHT MODE ---------- */
                    "bg-white border-gray-200 shadow-sm",
                    "transition-all duration-500",
                    "hover:shadow-[0_20px_45px_rgba(59,130,246,0.18)]",
                    "hover:border-blue-300",
                    "hover:bg-gradient-to-br hover:from-white hover:via-blue-50/60 hover:to-indigo-50/40",

                    /* ---------- DARK MODE (UNCHANGED) ---------- */
                    "dark:border-gray-700",
                    "dark:bg-[#121826]",
                    "dark:hover:shadow-2xl",
                    "dark:hover:from-[#102a43] dark:hover:via-[#184a6a] dark:hover:to-[#1a6f8f]"
                  )}
                >

                  {/* Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}${article.thumbnail || ""}`}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <CardContent className="px-5 py-0 flex flex-col flex-1">
                    <span
                      className="
    inline-flex items-center
    text-xs font-semibold
    px-2.5 py-1 rounded-full
    text-white

    bg-gradient-to-r
    from-blue-600
    via-sky-600
    to-cyan-600

    shadow-[0_4px_12px_rgba(37,99,235,0.35)]
  "
                    >
                      {article.category?.name || "General"}
                    </span>

                    <h3 className="font-semibold pt-2 text-lg text-gray-900 dark:text-white line-clamp-2 mt-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mt-1 flex-grow">
                      {article.metaDescription}
                    </p>

                    {/* Footer pinned bottom */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-2 mt-4">
                      <span>{article.author?.name || "AI Review Team"}</span>
                      <span>
                        {new Date(article.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
