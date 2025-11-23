"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Star, CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";

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

export default function AiToolReviews({ tools = [] }: { tools: Tool[] }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("popular");

  const filteredTools = tools
    .filter((tool) =>
      tool.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "highest") return (b.ratings?.average ?? 0) - (a.ratings?.average ?? 0);
      if (sort === "newest")
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return 0;
    });

  return (
    <section className="w-full py-12 px-4 md:px-6">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          AI Tool Reviews
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Explore detailed reviews, ratings, and insights for the best AI tools.
        </p>
      </div>

      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <Input
          placeholder="Search AI tools..."
          className="max-w-md border-gray-300 dark:border-gray-700 dark:bg-black/30"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-black/30 text-sm"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="popular">Most Popular</option>
          <option value="highest">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* No tools */}
      {filteredTools.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          No tools found.
        </p>
      ) : (
        <div className="space-y-8">
          {filteredTools.map((tool) => (
            <Card
              key={tool._id}
              className="rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-neutral-900/40 backdrop-blur-xl transition-all duration-500 hover:shadow-lg"
            >
              <CardContent className="p-6">

                {/* Top Section */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="p-[2px] rounded-lg bg-gradient-to-r from-blue-500 to-green-500">
                      <Image
                        src={`${UPLOADS_BASE}${tool.logo}`}
                        alt={tool.name}
                        width={48}
                        height={48}
                        className="rounded-lg object-cover h-12 w-12 bg-white dark:bg-black"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {tool.name}
                      </h2>

                      {/* Ratings */}
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex text-yellow-500">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              fill={
                                i < Math.round(tool.ratings?.average ?? 0)
                                  ? "currentColor"
                                  : "none"
                              }
                              className="mr-0.5"
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {tool.ratings?.average?.toFixed(1) ?? "0"}/5 (
                          {tool.reviewCount ?? 0} reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(tool.createdAt).toLocaleDateString()}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {tool.shortDesc}
                </p>

                {/* Pros & Cons */}
                <div className="grid md:grid-cols-2 gap-4 mt-6">
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
                <div className="flex justify-between items-center mt-6">
                  <div className="flex flex-wrap gap-2">
                    {tool.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs rounded-full text-gray-100 ${stableColorFromString(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/ai-tools/${tool.slug}`}
                    className="group inline-flex items-center gap-1 text-md font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Read Full Review →
                  </Link>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
