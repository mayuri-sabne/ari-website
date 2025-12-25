"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
  logo: string;
  banner: string;
  shortDesc: string;
  ratings?: ToolRatings;
  prices?: ToolPricing[];
}

// ------------------------------

export default function LatestAITools({ tools }: { tools: ToolData[] }) {
  const uploadsBase = process.env.NEXT_PUBLIC_UPLOADS_URL ?? "";

  return (
  <section className="py-10 px-0 text-center">
  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
    whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="text-4xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
  >
    Latest AI Tools Showcase
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
    whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className=" text-slate-600 dark:text-gray-300 mb-12 text-lg"
  >
    Discover the most innovative AI tools transforming businesses today
  </motion.p>

{/* MOBILE SLIDER */}
<div
  className="
    md:hidden
    flex
    gap-3
    overflow-x-auto
    pb-4 px-4
    snap-x snap-mandatory
    scrollbar-hide
  "
>
  {tools.map((tool) => {
    const rating = Number(tool.ratings?.average) || 0;

    return (
      <div
        key={tool._id}
        className="
          snap-center
          flex-shrink-0
          w-[82%]
          mb-3
        "
      >
        {/* ✅ FULL CARD – STRUCTURE UNCHANGED */}
        <Card
          className="
            h-full
            flex flex-col rounded-2xl overflow-hidden
            transition-all duration-500
            pt-0

            /* ---------- LIGHT MODE ---------- */
            bg-white
            border border-blue-200
            shadow-[0_12px_35px_rgba(59,130,246,0.18)]

            /* ---------- DARK MODE (MATCH DESKTOP EXACTLY) ---------- */
            dark:bg-white/5
            dark:border-white/20
            dark:shadow-[0_8px_25px_rgba(0,0,0,0.5)]
            dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]
          "
        >
          {/* Banner */}
          <div className="relative w-full h-40">
            <Image
              src={`${uploadsBase}${tool.banner ?? ""}`}
              alt={tool.name}
              fill
              className="object-cover"
            />
          </div>

          {/* CARD BODY */}
          <div className="flex flex-col flex-grow justify-between p-5 pt-0">
            {/* Header */}
            <CardHeader className="p-0 mb-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-black/40 dark:border-white/20">
                  <Image
                    src={`${uploadsBase}${tool.logo ?? ""}`}
                    alt={tool.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>

                <div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-gray-100">
                    {tool.name}
                  </CardTitle>

                  <div className="mt-1 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.round(rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-400"
                        }
                      />
                    ))}
                    <span className="ml-1 text-xs text-slate-600 dark:text-gray-300">
                      {rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            {/* Description */}
            <CardContent className="p-0 text-left">
              <p className="text-slate-600 dark:text-gray-300 text-sm line-clamp-3">
                {tool.shortDesc}
              </p>
            </CardContent>

            {/* Button */}
            <Link href={`/ai-tools/${tool.slug}`} className="mt-5">
              <div className="group relative w-full rounded-xl p-[1px] bg-gradient-to-r from-blue-600 to-cyan-700">
                <Button
                  className="
                    w-full rounded-xl bg-gray-900 dark:bg-gray-800
                    text-white
                    transition-all duration-700
                    group-hover:scale-105
                    group-hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)]
                    active:scale-95
                  "
                >
                  View Details
                </Button>
              </div>
            </Link>
          </div>
        </Card>
      </div>
    );
  })}
</div>

{/* DESKTOP GRID – YOUR ORIGINAL CODE */}
<div
  className="
    hidden md:grid
    w-full max-w-5xl mx-auto
    px-4 sm:px-0
    gap-6 sm:gap-10
    grid-cols-2 md:grid-cols-3
  "
>
    {tools.map((tool) => {
      const rating = Number(tool.ratings?.average) || 0;

      return (
        <Card
          key={tool._id}
          className="
            flex flex-col rounded-2xl overflow-hidden
                    /* LIGHT MODE */
              bg-white
              border border-blue-200
              shadow-[0_12px_35px_rgba(59,130,246,0.18)]

              /* DARK MODE */
              dark:bg-white/5
              dark:border-white/20
              dark:shadow-[0_8px_25px_rgba(0,0,0,0.5)]
              dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]


              transition-all duration-500
              hover:-translate-y-2
            pt-0
          "
        >
          {/* Banner Image (padding intentionally 0) */}
          <div className="relative w-full h-28 sm:h-32 md:h-40">
            <Image
              src={`${uploadsBase}${tool.banner ?? ""}`}
              alt={tool.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col flex-grow justify-between p-5 pt-0 pb-0">
            {/* LOGO + NAME + RATING */}
            <CardHeader className="p-0 mb-3 text-left">
              <div className="flex items-center gap-3">
                {/* Logo */}
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-black/40 shadow-sm">
                  <Image
                    src={`${uploadsBase}${tool.logo ?? ""}`}
                    alt={tool.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-gray-100 leading-tight">
                    {tool.name}
                  </CardTitle>

                  {/* Rating */}
                  <div className="mt-1 inline-flex items-center gap-1 py-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.round(rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-400"
                        }
                      />
                    ))}
                    <span className="ml-1 text-xs text-slate-600 dark:text-gray-300">
                      {rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            {/* Description */}
            <CardContent className="p-0 text-left">
              <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                {tool.shortDesc}
              </p>
            </CardContent>

            {/* BUTTON (ANIMATION UNCHANGED) */}
            <Link href={`/ai-tools/${tool.slug}`} className="mt-5 block w-full">
              <div className="group relative inline-block w-full rounded-xl p-[1px] bg-gradient-to-r from-blue-600 to-cyan-600">
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
