"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Search, Filter } from "lucide-react";
import { useState, useMemo } from "react";

interface Tool {
  _id: string;
  name: string;
  slug: string;
  logo?: string;
  ratings?: { average?: number };
  reviewCount?: number;
  // category can be: { _id, name } OR string id OR array of such objects/ids
  category?: any;
  categories?: any;
}

const UPLOADS_URL =
  process.env.NEXT_PUBLIC_UPLOADS_URL || "https://aireviewinsider.com";

function extractCategoryIds(tool: Tool) {
  const ids: string[] = [];

  // case: tool.category is an object with _id
  if (tool.category) {
    if (Array.isArray(tool.category)) {
      tool.category.forEach((c) => {
        if (!c) return;
        ids.push(c._id ? String(c._id) : String(c));
      });
    } else {
      ids.push(tool.category._id ? String(tool.category._id) : String(tool.category));
    }
  }

  // case: tool.categories (plural)
  if (tool.categories) {
    if (Array.isArray(tool.categories)) {
      tool.categories.forEach((c) => {
        if (!c) return;
        ids.push(c._id ? String(c._id) : String(c));
      });
    } else {
      ids.push(tool.categories._id ? String(tool.categories._id) : String(tool.categories));
    }
  }

  // dedupe and return
  return Array.from(new Set(ids)).filter(Boolean);
}

export default function ReviewToolsList({
  tools,
  categories,
}: {
  tools: Tool[];
  categories: any[];
}) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // ---------------------------------------
  // FILTERED TOOLS (robust)
  // ---------------------------------------
  const filteredTools = useMemo(() => {
    const cat = String(selectedCategory);

    return (tools || []).filter((tool) => {
      // Category match - robust to different shapes
      const ids = extractCategoryIds(tool);
      const matchesCategory =
        cat === "all" || ids.length === 0 ? cat === "all" : ids.some((id) => id === cat);

      // Search match (name)
      const matchesSearch = tool.name?.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [tools, search, selectedCategory]);


  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            AI Tools Reviews
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg max-w-2xl mx-auto">
            Explore authentic reviews written by real users. Discover which AI tools are worth your time.
          </p>
        </div>

        {/* ============================== */}
        {/* SEARCH + CATEGORY FILTER */}
        {/* ============================== */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-10">

          {/* Search */}
          <div className="flex items-center w-full md:w-1/2 relative">
            <Search className="absolute z-10 left-3 text-gray-600 dark:text-gray-300" size={18} />

            <input
              type="text"
              placeholder="Search AI tools..."
              className="
      w-full pl-10 pr-4 py-2 rounded-xl
      bg-white/40 dark:bg-black/30 
      backdrop-blur-xl
      border border-gray-300 dark:border-gray-700
      text-gray-900 dark:text-gray-100
      placeholder:text-gray-600 dark:placeholder:text-gray-400
      focus:ring-2 focus:ring-blue-500 focus:border-blue-500
      transition-all
      shadow-sm dark:shadow-inner
    "
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>


          {/* Category Dropdown */}
          <div className="flex items-center w-full md:w-1/3 relative">
            <Filter className="absolute left-3 z-10 text-gray-600 dark:text-gray-300" size={18} />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="
      w-full pl-10 pr-4 py-2 rounded-xl
      bg-white/40 dark:bg-black/40 
      backdrop-blur-xl
      border border-gray-300 dark:border-gray-700
      text-gray-900 dark:text-gray-100
      focus:ring-2 focus:ring-blue-500 focus:border-blue-500
      transition-all
      shadow-sm dark:shadow-inner
      appearance-none
    "
            >
              <option
                value="all"
                className="bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100"
              >
                All Categories
              </option>

              {categories?.map((cat) => (
                <option
                  key={cat._id ?? cat.id ?? cat}
                  value={String(cat._id ?? cat.id ?? cat)}
                  className="
          bg-white text-gray-900 
          dark:bg-gray-800 dark:text-gray-100
        "
                >
                  {cat.name ?? cat.label ?? String(cat)}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* ============================== */}
        {/* TOOLS GRID */}
        {/* ============================== */}
        {filteredTools.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg py-10">
            No tools found.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {filteredTools.map((tool) => {
              const logoSrc = tool.logo
                ? `${UPLOADS_URL}${tool.logo}`
                : "/logosmall.png";

              const rating = tool.ratings?.average || 0;
              const reviews = tool.reviewCount || 0;

              return (
              <div
  key={tool._id}
  className="
    p-5 sm:p-6 rounded-2xl backdrop-blur-xl
    transition-all duration-300

    /* LIGHT MODE */
    bg-gradient-to-br from-blue-50 to-cyan-50
    border border-blue-200
    text-slate-900
    shadow-[0_10px_25px_rgba(59,130,246,0.15)]
    hover:shadow-[0_18px_45px_rgba(59,130,246,0.22)]

    /* DARK MODE */
    dark:bg-gradient-to-br dark:from-black/80 dark:via-gray-900/70 dark:to-black/85
    dark:border-white/15
    dark:text-white
    dark:shadow-[0_0_30px_rgba(0,0,0,0.6)]
    dark:hover:shadow-[0_0_45px_rgba(0,150,255,0.35)]
  "
>
  {/* TOP ROW — LOGO + CONTENT + DESKTOP BUTTONS */}
  <div className="flex items-start justify-between gap-4">
    {/* LEFT: LOGO + CONTENT */}
    <div className="flex items-start gap-4 min-w-0">
      {/* LOGO */}
      <Image
        src={logoSrc}
        width={44}
        height={44}
        alt={tool.name}
        className="
          flex-shrink-0
          rounded-xl h-11 w-11 sm:h-16 sm:w-16
          border border-white/40 dark:border-white/20
          bg-white dark:bg-black/30
          object-cover shadow-sm
        "
      />

      {/* CONTENT */}
      <div className="min-w-0">
        <h3 className="text-sm sm:text-lg font-semibold leading-tight truncate">
          {tool.name}
        </h3>

        {/* STARS */}
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < Math.round(rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-400 dark:text-gray-700"
              }
            />
          ))}
          <span className="ml-1 text-xs font-medium">
            {rating.toFixed(1)}
          </span>
        </div>

        <p className="text-xs mt-0.5">
          Rated by {reviews} users
        </p>
      </div>
    </div>

    {/* RIGHT: DESKTOP BUTTONS */}
    <div className="hidden sm:flex flex-col gap-2 w-[180px]">
      <Link href={`/ai-tools/${tool.slug}?tab=reviews`}>
        <button
          className="
            w-full px-2 py-1.5 rounded-xl text-sm font-semibold
            bg-gradient-to-r from-blue-600 to-cyan-600
            text-white shadow-md
            hover:shadow-[0_0_20px_rgba(59,130,246,0.45)]
            active:scale-95
          "
        >
          View Review
        </button>
      </Link>

      <Link href={`/ai-tools/${tool.slug}?tab=reviews`}>
        <button
          className="
            w-full px-2 py-1.5 rounded-xl text-sm font-semibold
            bg-white/70 text-blue-700
            border border-blue-300
            hover:bg-blue-600 hover:text-white
            dark:bg-white/10 dark:text-white dark:border-white/25
            active:scale-95
          "
        >
          Add Review
        </button>
      </Link>
    </div>
  </div>

  {/* MOBILE BUTTONS — FULL WIDTH, NO LOGO INTERFERENCE */}
  <div className="flex w-full gap-2 mt-4 sm:hidden">
    <Link
      href={`/ai-tools/${tool.slug}?tab=reviews`}
      className="w-1/2"
    >
      <button
        className="
          w-full py-2.5 rounded-xl text-sm font-semibold
          bg-gradient-to-r from-blue-600 to-cyan-600
          text-white
          shadow-[0_6px_18px_rgba(59,130,246,0.35)]
          active:scale-95
        "
      >
        View Review
      </button>
    </Link>

    <Link
      href={`/ai-tools/${tool.slug}?tab=reviews`}
      className="w-1/2"
    >
      <button
        className="
          w-full py-2.5 rounded-xl text-sm font-semibold
          bg-white/80 text-blue-700
          border border-blue-300 backdrop-blur
          dark:bg-white/10 dark:text-white dark:border-white/25
          active:scale-95
        "
      >
        Add Review
      </button>
    </Link>
  </div>
</div>


              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
