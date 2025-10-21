"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    title: "ChatGPT Pro",
    rating: 4.8,
    description:
      "Advanced jhvjhb hvghvghv hhgvgvg yuyvgy vugbyu vvgyconversational AI for professional use cases with enhanced capabilities.",
    image: "/chatgpt.png",
  },
  {
    title: "DALL-E 3",
    rating: 4.9,
    description:
      "Revolutionary AI image generator that creates stunning visuals from text descriptions.",
    image: "/dall.png",
  },
  {
    title: "GitHub Copilot",
    rating: 4.7,
    description:
      "AI-powered code completion tool that helps developers write code faster and more efficiently.",
    image: "/github.png",
  },
];

export default function LatestAITools() {
  return (
 <section className="py-16 text-center">
  <h2 className="text-3xl font-bold mb-2">Latest AI Tools Showcase</h2>
  <p className="text-gray-500 mb-12">
    Discover the most innovative AI tools transforming businesses today
  </p>

<div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
  {tools.map((tool, idx) => (
<Card
  key={idx}
  className="flex flex-col rounded-2xl overflow-hidden shadow-md
             transition-all duration-500 ease-in-out transform
             hover:scale-[1.03]
             pt-0
             bg-gradient-to-br from-[#e6f9f5] via-white to-[#e6f0ff]
             dark:from-[#0f2027] dark:via-[#203a43] dark:to-[#2c5364]"
>
      {/* Top Image */}
      <Image
        src={tool.image}
        alt={tool.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />

      {/* Content + Button stacked */}
      <div className="flex flex-col flex-grow justify-between p-5 pb-0">
        <div>
          <CardHeader className="p-0 mb-3 text-left">
            <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {tool.title}
            </CardTitle>
            <div className="flex items-center gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < Math.floor(tool.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                {tool.rating}
              </span>
            </div>
          </CardHeader>

          <CardContent className="p-0 text-left">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {tool.description}
            </p>
          </CardContent>
        </div>

   <div className="relative group mt-5 inline-block w-full rounded-xl p-[1px] bg-gradient-to-r from-[#1da27e] to-blue-500">
  <Button
    className="w-full rounded-xl px-4 py-2 text-white font-medium
               bg-gray-900 dark:bg-gray-800
               transition-all duration-700 ease-in-out
               group-hover:scale-105 group-hover:-translate-y-1
               group-hover:shadow-[0_4px_20px_rgba(29,162,126,0.5)]
               active:scale-95"
  >
    View Details
  </Button>
</div>

      </div>
    </Card>
  ))}
</div>

</section>

  );
}
