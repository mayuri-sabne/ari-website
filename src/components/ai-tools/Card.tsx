"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

const data = [
  {
    title: "ChatGPT Pro",
    rating: "4.8",
    reviews: "2,847 reviews",
    description:
      "Advanced conversational AI platform powered by GPT-4 technology, offering enhanced reasoning capabilities, multimodal understanding, and priority access for professional use cases.",
    image: "/slider.jpg",
  },
  {
    title: "MidJourney",
    rating: "4.7",
    reviews: "1,932 reviews",
    description:
      "AI-powered image generation platform that lets you create stunning visuals, artwork, and designs from simple text prompts.",
    image: "/slider.jpg",
  },
  {
    title: "Claude AI",
    rating: "4.6",
    reviews: "1,245 reviews",
    description:
      "AI assistant designed for thoughtful conversation, long-form writing, and complex problem-solving with ethical safeguards.",
    image: "/slider.jpg",
  },
]

export default function ToolCardCarousel() {
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
  {data.map((tool, idx) => (
    <CarouselItem key={idx}>
    <Card
  className={`
    relative rounded-3xl overflow-hidden m-3
    transition-all duration-500 ease-in-out
    shadow-lg hover:shadow-xl
    bg-gradient-to-tr from-[#e6f7f0] to-[#e0f0ff]
    dark:bg-gradient-to-tr dark:from-black/50 dark:to-[#0d1f2c]/70
    dark:backdrop-blur-md
    hover:bg-white/20 hover:backdrop-blur-xl 
  `}
>
  <CardContent className="flex flex-col md:flex-row gap-8 items-center p-6 h-full my-8 mx-6">
    {/* Left Section (Icon + Title + Rating + Description + Buttons) */}
    <div className="flex-1 flex flex-col justify-center space-y-5">
      {/* Tool Header */}
      <div className="flex items-center gap-4">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-full 
                     bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md"
        >
          <Sparkles size={22} />
        </div>
        <div>
          <CardTitle className="text-2xl font-bold">{tool.title}</CardTitle>
          <div className="flex items-center gap-2 mt-1">
            <span
              className="px-2 py-0.5 text-sm font-medium rounded-full 
                         bg-green-100 text-green-800 
                         dark:bg-green-800 dark:text-green-100"
            >
              {tool.rating}
            </span>
            <span className="text-sm text-muted-foreground">{tool.reviews}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground">{tool.description}</p>

      {/* Buttons */}
      <div className="flex gap-3 flex-wrap">
        <Button className="bg-gradient-to-r from-[#1da27e] to-blue-600 text-white shadow-lg hover:scale-105 transition">
          Start Free Trial
        </Button>
        <Button variant="outline">View Pricing</Button>
        <Button variant="ghost">Save Tool</Button>
      </div>
    </div>

    {/* Right Section (Image) */}
    <div className="flex-shrink-0 h-full flex items-center">
      <Image
        src={tool.image}
        alt={tool.title}
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
  )
}
