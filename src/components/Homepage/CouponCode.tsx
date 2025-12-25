"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import RatingStars from "./RatingStars";
import { motion } from "framer-motion";

const UPLOADS_URL =
  process.env.NEXT_PUBLIC_UPLOADS_URL || "https://aireviewinsider.com";

export default function BestValueToolsSection({ tools }: any) {
  // const topTools = useMemo(() => {
  //   return [...tools]
  //     .sort((a, b) => (b.ratings?.average || 0) - (a.ratings?.average || 0))
  //     .slice(0, 6);
  // }, [tools]);

  if (!tools.length) return null;

  return (
    <section className="py-10 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Title + subtitle */}
       <div className="text-center mb-16">
  <p
    className="
      inline-flex items-center rounded-full
      border border-sky-500/30
      bg-sky-500/10
      px-4 py-1
      text-xs font-semibold uppercase tracking-[0.2em]
      text-sky-600
      dark:bg-sky-500/5
      dark:text-sky-500
    "
  >
    Curated Picks
  </p>

  <motion.h2
    initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
    whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="
      text-4xl md:text-4xl
      font-extrabold tracking-tight
      my-3
      text-slate-900
      dark:text-white
    "
  >
    Best Value AI Tools Right Now
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
    whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="
      mb-12 text-lg
      text-slate-600
      dark:text-gray-300
    "
  >
    Just real tools with strong ratings, practical features,
    and transparent pricing that actually makes sense.
  </motion.p>
</div>


        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tools.map((tool: any) => {
            const logoSrc = tool.logo
              ? `${UPLOADS_URL}${tool.logo}`
              : "/logosmall.png";

            const rating = tool.ratings?.average || 0;

            const primaryTag =
              tool.tags?.[0] ||
              tool.categories?.[0]?.name ||
              "AI Tool";

            const priceLabel =
              tool.prices?.length
                ? tool.prices[0].price === 0
                  ? "Free Plan Available"
                  : `From $${tool.prices[0].price}/${tool.prices[0].period}`
                : "Pricing varies";

            return (
              <Card
                key={tool._id}
               className="
    relative overflow-hidden
    transition-all duration-500
    hover:-translate-y-1

    /* ---------- LIGHT MODE (ALL SCREENS) ---------- */
    bg-white
    border border-blue-200/70
    shadow-[0_10px_25px_rgba(59,130,246,0.18)]

    /* ---------- DARK MODE (ALL SCREENS) ---------- */
     dark:bg-transparent
    dark:border dark:border-gray-700/60
    dark:backdrop-blur-xl
    dark:shadow-[0_18px_25px_rgba(0,0,0,0.9)]
    dark:hover:shadow-[0_0_30px_rgba(0,0,0,0.6)]

    /* ---------- LAYOUT ---------- */
    p-4 sm:p-6
    rounded-xl sm:rounded-2xl
    flex flex-col h-full
  "
              >
                {/* DARK MODE GRADIENT SHINE */}
<div
  className="
    pointer-events-none
    absolute inset-0
    opacity-0 dark:opacity-100
    bg-gradient-to-br
    from-black/80
    via-gray-900/70
    to-black/85
  "
/>
<div className="relative z-10">

                <CardContent className="flex flex-col h-full p-0 gap-3 sm:gap-5">
                  {/* LOGO + NAME + TAG + RATING */}
                <div className="flex items-start gap-3 sm:gap-4">
  {/* LOGO */}
  <Image
    src={logoSrc}
    alt={tool.name}
    width={36}
    height={36}
    className="
      rounded-lg
      h-9 w-9
      sm:h-20 sm:w-20
      border border-blue-200 dark:border-gray-600
      shadow-sm
    "
  />

  {/* NAME + TAG + RATING + BUTTONS */}
  <div className="flex flex-col gap-1 flex-1">
    <h3 className="text-sm sm:text-lg font-semibold text-slate-900 dark:text-white leading-tight">
      {tool.name}
    </h3>

    <p className="text-xs font-medium text-blue-600 dark:text-blue-300">
      {primaryTag}
    </p>

    <div className="flex items-center gap-2">
      <RatingStars rating={rating} size={14} />

      {/* MOBILE BUTTONS INLINE */}
      <div className="flex gap-2 ml-auto sm:hidden">
        <Link href={`/ai-tools/${tool.slug}`}>
          <Button
  size="sm"
  className="
    px-3 py-1.5 text-xs font-semibold
    rounded-md

    /* LIGHT MODE */
    text-white
    bg-gradient-to-r from-blue-600 to-cyan-600
    shadow-[0_4px_12px_rgba(59,130,246,0.35)]

    /* DARK MODE */
    dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500
    dark:shadow-[0_4px_14px_rgba(59,130,246,0.45)]

    transition-all duration-300
    hover:scale-[1.05]
    active:scale-95
  "
>
  Review
</Button>

        </Link>

        {tool.affiliateLink && (
          <a href={tool.affiliateLink} target="_blank" rel="noopener noreferrer">
           <Button
  size="sm"
  variant="outline"
  className="
    px-3 py-1.5 text-xs font-semibold
    rounded-md

    /* LIGHT MODE */
    text-blue-700
    border border-blue-300
    bg-white
    hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600
    hover:text-white hover:border-transparent
    shadow-[0_2px_8px_rgba(59,130,246,0.2)]

    /* DARK MODE */
    dark:text-blue-400
    dark:border-blue-500/50
    dark:bg-transparent
    dark:hover:bg-gradient-to-r dark:hover:from-blue-500 dark:hover:to-cyan-500
    dark:hover:text-white

    transition-all duration-300
    hover:scale-[1.05]
    active:scale-95
  "
>
  Visit
</Button>

          </a>
        )}
      </div>
    </div>
  </div>
</div>



                  {/* DESCRIPTION */}
              <p className="text-sm text-slate-700 dark:text-white leading-relaxed sm:line-clamp-3">
  {tool.shortDesc}
</p>


                  {/* PRICE LABEL — NOW FIXED AT BOTTOM ABOVE BUTTONS */}
                 <div
  className="
    mt-auto
    text-xs font-semibold
    text-emerald-700 dark:text-emerald-300
    bg-emerald-500/10
    border border-emerald-500/30
    px-2 py-1 rounded-full w-max
  "
>
  {priceLabel}
</div>


                  {/* BUTTONS */}
<div className="hidden sm:flex gap-3">
                    <Link href={`/ai-tools/${tool.slug}`} className="w-full">
                       <Button
  className="
    w-full px-3 py-1.5 text-xs font-semibold
    rounded-md

    /* LIGHT MODE */
    text-white
    bg-gradient-to-r from-blue-600 to-cyan-600
    shadow-[0_4px_12px_rgba(59,130,246,0.35)]

    /* DARK MODE */
    dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-500
    dark:shadow-[0_4px_14px_rgba(59,130,246,0.45)]

    transition-all duration-300
    hover:scale-[1.05]
    active:scale-95
  "
>
  View Full Review
</Button>

                    </Link>

                    {tool.affiliateLink && (
                      <a
                        href={tool.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                   <Button
  variant="outline"
  className="
  w-full
    px-3 py-1.5 text-xs font-semibold
    rounded-md

    /* LIGHT MODE */
    text-blue-700
    border border-blue-300
    bg-white
    hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600
    hover:text-white hover:border-transparent
    shadow-[0_2px_8px_rgba(59,130,246,0.2)]

    /* DARK MODE */
    dark:text-blue-400
    dark:border-blue-500/50
    dark:bg-transparent
    dark:hover:bg-gradient-to-r dark:hover:from-blue-500 dark:hover:to-cyan-500
    dark:hover:text-white

    transition-all duration-300
    hover:scale-[1.05]
    active:scale-95
  "
>
  Visit Tool
</Button>

                      </a>
                    )}
                  </div>

                </CardContent></div>



              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
