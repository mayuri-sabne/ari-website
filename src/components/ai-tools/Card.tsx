"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Sparkles } from "lucide-react";

// Define the interface for a Tool
interface Tool {
  _id: string;
  name: string;
  banner: string;
  shortDesc?: string;
  affiliateLink?: string;
  reviewCount?: number;
  ratings?: {
    average: number;
  };
  couponCodes?: string[];
}

const UPLOADS_BASE = process.env.NEXT_PUBLIC_UPLOADS_URL ?? "";

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
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {tools.map((tool) => (
            <CarouselItem key={tool._id}>
              <Card
                className="
                  relative rounded-3xl overflow-hidden m-3
                  transition-all duration-500 ease-in-out
                  shadow-lg hover:shadow-xl
                  bg-gradient-to-tr from-[#e6f7f0] to-[#e0f0ff]
                  dark:bg-gradient-to-tr dark:from-black/50 dark:to-[#0d1f2c]/70
                  dark:backdrop-blur-md
                  hover:bg-white/20 hover:backdrop-blur-xl
                "
              >
                <CardContent className="flex flex-col md:flex-row gap-8 items-center p-6 h-full my-8 mx-6">
                  
                  {/* LEFT SIDE */}
                  <div className="flex-1 flex flex-col justify-center space-y-5">
                    
                    {/* Tool Header */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md">
                        <Sparkles size={22} />
                      </div>

                      <div>
                        <CardTitle className="text-2xl font-bold">
                          {tool.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="px-2 py-0.5 text-sm font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                            ⭐ {tool.ratings?.average?.toFixed(1) || "0.0"}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {tool.reviewCount || 0} reviews
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground line-clamp-3">
                      {tool.shortDesc}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3 flex-wrap">
                      {tool.affiliateLink ? (
                        <a
                          href={tool.affiliateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-gradient-to-r from-[#1da27e] to-blue-600 text-white shadow-lg hover:scale-105 transition">
                            Start Free Trial
                          </Button>
                        </a>
                      ) : (
                        <Button
                          disabled
                          className="bg-gradient-to-r from-gray-400 to-gray-500 text-white"
                        >
                          No Link
                        </Button>
                      )}

                      <Button variant="outline">View Pricing</Button>

                      {tool.couponCodes?.length ? (
                        <Button variant="ghost">
                          Coupon: {tool.couponCodes[0]}
                        </Button>
                      ) : null}
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex-shrink-0 h-full flex items-center">
                    <Image
                      src={`${UPLOADS_BASE}${tool.banner}`}
                      alt={tool.name}
                      width={400}
                      height={250}
                      className="rounded-xl shadow-md object-cover h-full w-auto max-h-[300px] md:max-h-[400px] ml-4"
                    />
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
