"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

// ------------------------------
// Types
// ------------------------------
interface ToolPricing {
  label: string;
  price: number;
  period: string;
}

interface ToolRatings {
  average: number;
}

interface ToolData {
  _id: string;
  name: string;
  slug: string;
  banner: string;
  shortDesc: string;
  ratings?: ToolRatings;
  prices?: ToolPricing[];
}

// ------------------------------

export default function LatestAITools({ tools }: { tools: ToolData[] }) {
  const uploadsBase = process.env.NEXT_PUBLIC_UPLOADS_URL ?? "";

  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-2">Latest AI Tools Showcase</h2>
      <p className="text-gray-500 mb-12">
        Discover the most innovative AI tools transforming businesses today
      </p>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {tools.map((tool) => {
          const rating = Number(tool.ratings?.average) || 0;

          return (
            <Card
              key={tool._id}
              className="flex flex-col rounded-2xl overflow-hidden shadow-md transition-all duration-500 transform hover:scale-[1.03] pt-0
              bg-gradient-to-br from-[#e0f2ff] via-white to-[#eff6ff]
              dark:from-[#0a1a33] dark:via-[#112a45] dark:to-[#1e3a5f]"
            >
              {/* Banner Image */}
              <div className="relative w-full h-48">
                <Image
                  src={`${uploadsBase}${tool.banner ?? ""}`}
                  alt={tool.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col flex-grow justify-between p-5 pb-0">
                <div>
                  <CardHeader className="p-0 mb-3 text-left">
                    <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      {tool.name}
                    </CardTitle>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < Math.round(rating)
                              ? "text-blue-400 fill-blue-400"
                              : "text-gray-300 dark:text-gray-600"
                          }
                        />
                      ))}
                      <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                        {rating.toFixed(1)}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 text-left">
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                      {tool.shortDesc}
                    </p>
                  </CardContent>
                </div>

                <Link href={`/ai-tools/${tool.slug}`} className="mt-5 block w-full">
                  <div className="group relative inline-block w-full rounded-xl p-[1px] bg-gradient-to-r from-blue-500 to-blue-700">
                    <Button
                      className="w-full rounded-xl px-4 py-2 text-white font-medium
                      bg-gray-900 dark:bg-gray-800 transition-all duration-700 ease-in-out
                      group-hover:scale-105 group-hover:-translate-y-1 
                      group-hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)]
                      active:scale-95"
                    >
                      View Details
                    </Button>
                  </div>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
