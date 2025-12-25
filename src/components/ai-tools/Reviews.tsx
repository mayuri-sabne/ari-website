"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Star, CheckCircle2, XCircle } from "lucide-react";
import { useMemo, useState } from "react";

const UPLOADS_BASE = process.env.NEXT_PUBLIC_UPLOADS_URL ?? "";

// Tool interface
interface Tool {
  _id: string;
  name: string;
  logo: string;
  shortDesc: string;
  createdAt: string;
  slug: string;

  ratings?: {
    average: number;
  };

  reviewCount?: number;

  tags?: string[];
  pros?: string[];
  cons?: string[];
  category?: any; // flexible
  categories?: any; // sometimes plural
}

const pastelColors = [
  "bg-pink-600/40",
  "bg-purple-600/40",
  "bg-blue-600/40",
  "bg-green-600/40",
  "bg-indigo-600/40",
  "bg-yellow-600/40",
  "bg-red-600/40",
  "bg-teal-600/40",
];

function stableColorFromString(str: string) {
  const hash = Array.from(str).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return pastelColors[hash % pastelColors.length];
}

export default function AiToolReviews({
  tools = [],
  categories = [],
}: {
  tools?: Tool[];
  categories?: any[];
}) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("popular");
  const [selectedCategory, setSelectedCategory] = useState("all");

  function extractCategoryIds(tool: Tool) {
    const ids: string[] = [];

    const push = (c: any) => {
      if (!c && c !== 0) return;
      if (typeof c === "string" || typeof c === "number") ids.push(String(c));
      else if (c._id) ids.push(String(c._id));
      else if (c.id) ids.push(String(c.id));
    };

    if (tool.category) {
      if (Array.isArray(tool.category)) tool.category.forEach(push);
      else push(tool.category);
    }

    if (tool.categories) {
      if (Array.isArray(tool.categories)) tool.categories.forEach(push);
      else push(tool.categories);
    }

    return Array.from(new Set(ids)).filter(Boolean);
  }


  const filteredTools = useMemo(() => {
    const cat = String(selectedCategory);

    return (tools || [])
      .filter((tool) => {
        // search
        const matchesSearch = tool.name?.toLowerCase().includes(search.toLowerCase());

        // category match
        const ids = extractCategoryIds(tool);
        const matchesCategory = cat === "all" || ids.length === 0 ? cat === "all" : ids.includes(cat);

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sort === "highest") return (b.ratings?.average ?? 0) - (a.ratings?.average ?? 0);
        if (sort === "newest") return (new Date(b.createdAt).getTime() ?? 0) - (new Date(a.createdAt).getTime() ?? 0);
        // popular = keep original order (or by reviewCount)
        return (b.reviewCount ?? 0) - (a.reviewCount ?? 0);
      });
  }, [tools, search, selectedCategory, sort]);

  return (
    <section className="w-full py-12 px-4 md:px-6">
      {/* Header */}
 <div className="text-center mb-10">
  <h1
    className="
      text-4xl md:text-4xl font-extrabold tracking-tight
      text-slate-900 dark:text-white
    "
  >
    AI Tool Reviews
  </h1>

  <p
    className="
      mt-3 text-lg max-w-2xl mx-auto
      text-slate-600 dark:text-gray-300
    "
  >
    Explore detailed reviews, ratings, and insights for the best AI tools.
  </p>
</div>

{/* Controls: Search + Category + Sort */}
<div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
  {/* Search */}
  <div className="flex items-center w-full lg:w-1/2 relative">
    <Input
      placeholder="Search AI tools..."
      className="
        max-w-md
        bg-white
        border border-slate-300
        text-slate-900
        shadow-sm
        focus:ring-2 focus:ring-blue-500

        dark:bg-black/30
        dark:border-gray-700
        dark:text-gray-100
      "
      value={search}
      onChange={(e: any) => setSearch(e.target.value)}
    />
  </div>

  <div className="flex gap-3 w-full lg:w-1/2">
    {/* Category select */}
    <div className="flex-1 relative">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="
          w-full pl-3 pr-3 py-2 rounded-lg
          bg-white
          border border-slate-300
          text-slate-900 text-sm
          shadow-sm
          focus:ring-2 focus:ring-blue-500
          transition appearance-none

          dark:bg-black/30
          dark:border-gray-700
          dark:text-gray-100
        "
      >
        <option value="all">All Categories</option>

        {categories?.map((cat: any) => (
          <option
            key={cat._id ?? cat.id ?? cat}
            value={String(cat._id ?? cat.id ?? cat)}
          >
            {cat.name ?? cat.label ?? String(cat)}
          </option>
        ))}
      </select>
    </div>

    {/* Sort */}
    <div className="w-40">
      <select
        className="
          w-full px-3 py-2 rounded-lg
          bg-white
          border border-slate-300
          text-slate-900 text-sm
          shadow-sm
          focus:ring-2 focus:ring-blue-500
          transition

          dark:bg-black/30
          dark:border-gray-700
          dark:text-gray-100
        "
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="popular">Most Popular</option>
        <option value="highest">Highest Rated</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  </div>
</div>


      {/* No tools */}
      {filteredTools.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No tools found.
        </p>
      ) : (
        <div className="space-y-8">
          {filteredTools.map((tool) => {
            const logoSrc = tool.logo ? `${UPLOADS_BASE}${tool.logo}` : "/logosmall.png";
            const rating = tool.ratings?.average ?? 0;
            const reviews = tool.reviewCount ?? 0;
            return (
              <Card
                key={tool._id}
                className="
    relative rounded-2xl p-5
    transition-all duration-500

    /* ---------- LIGHT MODE ---------- */
    bg-white
    border border-blue-200
    shadow-[0_18px_45px_rgba(59,130,246,0.15)]

    /* ---------- DARK MODE (HARD OVERRIDE) ---------- */
    dark:bg-transparent
    dark:[background-image:linear-gradient(135deg,rgba(0,0,0,0.8),rgba(17,24,39,0.7),rgba(0,0,0,0.85))]
    dark:border-gray-700/60
    dark:backdrop-blur-xl
    dark:hover:shadow-[0_0_60px_rgba(0,0,0,0.85)]
    dark:hover:-translate-y-1
  "
              >



                <CardContent className="p-3 sm:p-6">

                  {/* Top Section */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="p-[2px] rounded-lg bg-gradient-to-r from-blue-500 to-green-500">
                        <Image
                          src={`${UPLOADS_BASE}${tool.logo}`}
                          alt={tool.name}
                          width={48}
                          height={48}
                          className=" rounded-lg object-cover
    h-10 w-10 sm:h-12 sm:w-12
    bg-white dark:bg-black"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h2 className="text-base sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                          {tool.name}
                        </h2>


                        {/* Ratings */}
                        <div className="flex items-center gap-2">
                          <div className="flex text-yellow-500">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                fill={
                                  i < Math.round(tool.ratings?.average ?? 0)
                                    ? "currentColor"
                                    : "none"
                                }
                                className="mr-0.5 sm:size-[16px]"
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {tool.ratings?.average?.toFixed(1) ?? "0"}/5
                          </span>
                        </div>
                        <span className="block text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                          {tool.reviewCount ?? 0} reviews
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {new Date(tool.createdAt).toLocaleDateString()}
                    </p>

                  </div>

                  {/* Description */}
                  <p className="mt-3 sm:mt-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {tool.shortDesc}
                  </p>


                  {/* Pros & Cons */}
                  <div className="hidden sm:grid md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <h3 className="flex items-center gap-1 font-medium text-green-600 dark:text-green-400 mb-2">
                        <CheckCircle2 size={16} /> Pros
                      </h3>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {tool.pros?.slice(0, 3).map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-1 font-medium text-red-500 dark:text-red-400 mb-2">
                        <XCircle size={16} /> Cons
                      </h3>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {tool.cons?.slice(0, 3).map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tags + CTA */}
               {/* Tags + CTA */}
<div
  className="
    mt-6
    flex flex-col gap-3
    sm:flex-row sm:items-center sm:justify-between
  "
>
  {/* Tags */}
  <div className="flex flex-wrap gap-2">
    {tool.tags?.map((tag, i) => (
      <span
        key={i}
        className={`
          px-2 sm:px-3
          py-0.5 sm:py-1
          text-[10px] sm:text-xs
          rounded-full
          text-gray-100
          ${stableColorFromString(tag)}
        `}
      >
        {tag}
      </span>
    ))}
  </div>

  {/* CTA */}
  <div className="w-full sm:w-[20%]">
    {/* Desktop link */}
   <Link
  href={`/ai-tools/${tool.slug}`}
  className="
    hidden sm:inline-flex
    relative items-center gap-2
    px-5 py-2.5
    rounded-full
    text-sm font-semibold

    /* TEXT */
    text-white

    /* GLASS */
    bg-transparent
    backdrop-blur-sm

    /* GRADIENT BORDER */
    border border-transparent
    before:absolute before:inset-0 before:rounded-full
    before:p-[1px]
    before:bg-gradient-to-r
    before:from-blue-600 before:via-cyan-500 before:to-blue-700
    before:content-['']
    before:-z-10

    /* SOFT GLOW */
    shadow-[0_0_18px_rgba(59,130,246,0.25)]
    dark:shadow-[0_0_22px_rgba(56,189,248,0.35)]

    transition-all duration-300 ease-out

    /* HOVER */
 dark:hover:text-white
    hover:translate-y-[-3px]
    dark:hover:shadow-[0_0_45px_rgba(56,189,248,0.6)]

    active:scale-95
  "
>
  Read Full Review →
</Link>


    {/* Mobile button */}
    <Link
      href={`/ai-tools/${tool.slug}`}
      className="sm:hidden block w-full"
    >
      <button
        className="
          w-full py-2 mt-2 rounded-full text-sm font-semibold text-white

         bg-transparent
    backdrop-blur-sm

    /* GRADIENT BORDER */
    border border-transparent bo
    before:absolute before:inset-0 before:rounded-full
    before:p-[1px]
    before:bg-gradient-to-r
    before:from-blue-600 before:via-cyan-500 before:to-blue-700
    before:content-['']
    before:-z-10

    /* SOFT GLOW */
    shadow-[0_0_18px_rgba(59,130,246,0.25)]
    dark:shadow-[0_0_22px_rgba(56,189,248,0.35)]

    transition-all duration-300 ease-out

    /* HOVER */
 dark:hover:text-white
    hover:translate-y-[-3px]
    dark:hover:shadow-[0_0_45px_rgba(56,189,248,0.6)]

    active:scale-95
        "
      >
        Read Full Review
      </button>
    </Link>
  </div>
</div>

                </CardContent>
              </Card>
            )
          }
          )}
        </div>
      )}
    </section>
  );
}
