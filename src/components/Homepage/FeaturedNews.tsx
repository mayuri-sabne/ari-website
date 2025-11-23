"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
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

const newsData = [
  {
    date: "December 15, 2024",
    title: "OpenAI Announces GPT-5 with Revolutionary Capabilities",
    description:
      "The latest iteration promises unprecedented reasoning abilities and multimodal understanding that could reshape AI applications across industries.",
    image: "/news.png",
  },
  {
    date: "December 12, 2024",
    title: "AI Transforms Manufacturing with 40% Efficiency Gains",
    description:
      "Major manufacturers report significant productivity improvements after implementing AI-driven automation and predictive maintenance systems.",
    image: "/news.png",
  },
  {
    date: "December 10, 2024",
    title: "AI Diagnostic Tool Achieves 95% Accuracy in Cancer Detection",
    description:
      "Breakthrough medical AI system demonstrates superior performance in early-stage cancer identification, potentially saving thousands of lives.",
    image: "/news.png",
  },
  {
    date: "December 8, 2024",
    title: "AI Tutoring System Shows Significant Improvement in Student Performance",
    description:
      "Educational institutions worldwide adopt personalized AI learning platforms that adapt to individual student needs and learning styles.",
    image: "/news.png",
  },
  {
    date: "December 10, 2024",
    title: "AI Diagnostic Tool Achieves 95% Accuracy in Cancer Detection",
    description:
      "Breakthrough medical AI system demonstrates superior performance in early-stage cancer identification, potentially saving thousands of lives.",
    image: "/news.png",
  },
  {
    date: "December 8, 2024",
    title: "AI Tutoring System Shows Significant Improvement in Student Performance",
    description:
      "Educational institutions worldwide adopt personalized AI learning platforms that adapt to individual student needs and learning styles.",
    image: "/news.png",
  },
];

export default function FeaturedNews() {
  return (
    <section className="w-full py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Featured AI News
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Stay informed with the latest developments in artificial intelligence
        </p>
      </div>

      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full max-w-6xl mx-auto px-4"
      >
        <CarouselContent className="mx-[-1] mr-2">
          {newsData.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 my-6"
            >
              <Card
                className="flex flex-col h-full overflow-hidden rounded-2xl 
                  bg-white dark:bg-[#111827] shadow-md
                  transition-all duration-500 ease-out
                  hover:scale-[1.02] 
                  hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] 
                  hover:ring-1 hover:ring-white/20 pt-0"
              >
                {/* Image - converted to Next.js Image */}
                <div className="relative w-full h-40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           25vw"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <CardHeader className="p-4 -mt-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.date}
                    </p>
                    <CardTitle className="text-lg text-gray-900 dark:text-gray-100">
                      {item.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-4 pt-0 flex-1 flex flex-col justify-between">
                    <CardDescription className="text-sm text-gray-600 dark:text-gray-300 flex-1">
                      {item.description}
                    </CardDescription>

                    <a
                      href="#"
                      className="mt-3 inline-block relative text-sm font-medium text-gray-900 dark:text-gray-100
                        transition-all duration-300 
                        after:content-[''] after:absolute after:left-0 after:bottom-0
                        after:w-0 after:h-[1px] after:bg-current
                        after:transition-all after:duration-300 
                        hover:after:w-full"
                    >
                      Read More →
                    </a>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}
