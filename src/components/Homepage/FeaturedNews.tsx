"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface NewsItem {
  _id: string;
  slug: string;
  title: string;
  metaDescription?: string;
  content?: string;
  createdAt: string;
  thumbnail?: string;
}

export default function FeaturedNews({ news = [] }: { news: NewsItem[] }) {
  if (!news.length) return null;

  return (
<section className="w-full py-10">
  <div className="text-center mb-10">
    <motion.h2
      initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="
        text-4xl md:text-4xl font-extrabold tracking-tight mb-4
        text-slate-900 dark:text-white
      "
    >
      Featured AI News
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="
        text-lg mb-12
        text-slate-600 dark:text-gray-300
      "
    >
      Stay informed with the latest developments in artificial intelligence
    </motion.p>
  </div>

  <Carousel
    opts={{ align: "start", loop: true }}
    plugins={[Autoplay({ delay: 3000 })]}
  className="
    w-full max-w-6xl mx-auto
    px-8 sm:px-4
  "  >
    <CarouselContent className="mx-[-1] mr-2">
      {news.map((item) => {
        const plainDescription =
          item.metaDescription ||
          item.content?.replace(/<[^>]*>/g, "").slice(0, 120) + "..." ||
          "";

        const imageUrl = item.thumbnail
          ? `${process.env.NEXT_PUBLIC_API_URL}${item.thumbnail}`
          : "/news.png";

        return (
          <CarouselItem
            key={item._id}
            className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 my-6"
          >
            <Card
              className="
                flex flex-col h-full overflow-hidden rounded-2xl pt-0
                transition-all duration-500 ease-out

                /* ---------- LIGHT MODE ---------- */
                bg-white
                border border-blue-200/70
                hover:shadow-[0_10px_25px_rgba(59,130,246,0.35)]
                hover:-translate-y-1

                /* ---------- DARK MODE ---------- */
                dark:bg-[#111827]
                dark:shadow-md
                dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                dark:hover:ring-1 dark:hover:ring-white/20
              "
            >
              {/* IMAGE */}
              <div className="relative w-full h-40">
                <Image
                  src={imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        25vw"
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col flex-1">
                <CardHeader className="p-4 -mt-2">
                  <p className="text-xs text-slate-500 dark:text-gray-400">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </p>
                  <CardTitle className="text-lg text-slate-900 dark:text-gray-100">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-4 pt-0 flex-1 flex flex-col justify-between">
                  <CardDescription className="text-sm text-slate-600 dark:text-gray-300 flex-1">
                    {plainDescription}
                  </CardDescription>

                  <a
                    href={`/news/${item.slug}`}
                    className="
                      mt-3 inline-block relative text-sm font-medium
                      text-blue-700 dark:text-gray-100
                      transition-all duration-300
                      after:content-[''] after:absolute after:left-0 after:bottom-0
                      after:w-0 after:h-[1px] after:bg-current
                      after:transition-all after:duration-300
                      hover:after:w-full
                    "
                  >
                    Read More →
                  </a>
                </CardContent>
              </div>
            </Card>
          </CarouselItem>
        );
      })}
    </CarouselContent>

  <CarouselPrevious className="flex ml-[48px] sm:ml-0" />
<CarouselNext className="flex mr-[44px] sm:mr-0" />

  </Carousel>
</section>

  );
}
