"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link, Sparkles } from "lucide-react";

interface Tool {
  _id: string;
  slug: string;
  name: string;
  banner: string;
  shortDesc?: string;
  affiliateLink?: string;
  reviewCount?: number;
  ratings?: { average: number };
}

export default function ToolCardCarousel({ tools = [] }: { tools: Tool[] }) {
  if (!tools.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        No tools found. Please add some in your dashboard.
      </div>
    );
  }

  return (
    <div className="w-full">
  <Carousel
    plugins={[Autoplay({ delay: 4000 })]}
    opts={{ align: "start", loop: true }}
    className="w-full"
  >
    <CarouselContent>
      {tools.map((tool) => (
        <CarouselItem key={tool._id}>
          <Card
            className="
              relative rounded-3xl overflow-hidden m-4 p-0
              transition-all duration-500 hover:-translate-y-2

              /* DARK THEME */
              dark:bg-gradient-to-br dark:from-black/80 dark:via-gray-900/70 dark:to-black/85
              dark:border dark:border-gray-700/60 dark:backdrop-blur-xl

              /* LIGHT THEME */
        bg-gradient-to-br from-blue-50/90 via-cyan-50/80 to-white
border border-blue-200/60
            "
          >
            {/* Gloss / Shine Layer */}
            <div
              className="
                absolute inset-0 pointer-events-none
                bg-gradient-to-br 
                dark:from-white/10 dark:via-transparent dark:to-white/5
                from-white/50 via-transparent to-white/20
                opacity-50
              "
            />

            <CardContent
              className="
                flex flex-col md:flex-row gap-8 items-center 
                p-8 relative z-10

                /* Height adjusts on mobile */
                h-auto md:h-[380px]
              "
            >
              {/* LEFT SIDE */}
              <div className="flex-1 flex flex-col justify-center space-y-5 text-center md:text-left">

                {/* Header */}
                <div className="flex items-center md:items-start gap-4 flex-col md:flex-row">
                  <div
                    className="
                      flex items-center justify-center w-12 h-12 rounded-full
                      bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg
                    "
                  >
                    <Sparkles size={22} />
                  </div>

                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      {tool.name}
                    </CardTitle>

                    <div className="flex items-center gap-2 mt-1 justify-center md:justify-start">
                      <span
                        className="
                          px-2 py-0.5 text-sm font-medium rounded-full
                          bg-blue-100 text-blue-700 border border-blue-300
                          dark:bg-blue-900/60 dark:text-blue-200 dark:border-blue-500/40
                        "
                      >
                        ⭐ {tool.ratings?.average?.toFixed(1) || "0.0"}
                      </span>

                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {tool.reviewCount || 0} reviews
                      </span>
                    </div>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                  {tool.shortDesc}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                  {tool.affiliateLink ? (
                    <a
                      href={tool.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                 <Button
  className="
    bg-gradient-to-r
    from-blue-600 to-cyan-600
    text-white
    shadow-lg
    hover:shadow-[0_10px_30px_rgba(59,130,246,0.45)]
    transition

    dark:from-cyan-500 dark:to-blue-600
    dark:text-white
    hover:scale-105
  "
>
  Start Free Trial
</Button>

                    </a>
                  ) : (
                    <Button disabled className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300">
                      No Link
                    </Button>
                  )}
<a href={`/ai-tools/${tool.slug}?tab=pricing`}>
  <Button
    variant="outline"
    className="
      w-full 
      border-gray-400 text-gray-700 hover:bg-blue-200/40
      dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-200/40 dark:hover:text-white
     darlk:hover:border-white"
  >
    View Pricing
  </Button>
</a>

                </div>
              </div>

              {/* RIGHT SIDE IMAGE SECTION */}
              <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto">
                <div className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-xl overflow-hidden flex items-center justify-center">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}${tool.banner}`}
                    alt={tool.name}
                    width={400}
                    height={300}
                    className="
                      rounded-xl object-contain
                      transition-transform duration-500 hover:scale-105
                      max-h-[200px] md:max-h-[300px]
                    "
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
</div>

  );
}
