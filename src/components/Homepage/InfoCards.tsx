"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, FileText, Ticket } from "lucide-react"

export default function InfoCards() {
  const cards = [
    {
      title: "Top AI Tools",
      description: "Discover cutting-edge AI tools that are revolutionizing industries worldwide.",
      link: "/tools",
      linkText: "Explore Tools →",
      icon: <Wrench className="h-6 w-6 text-white" />,
    },
    {
      title: "Latest AI News",
      description: "Stay updated with the latest breakthroughs and exciting trends in artificial intelligence.",
      link: "/news",
      linkText: "Read News →",
      icon: <FileText className="h-6 w-6 text-white" />,
    },
    {
      title: "Exclusive Coupons",
      description: "Save money on premium AI tools with our exclusive discount codes and special deals.",
      link: "/deals",
      linkText: "Get Deals →",
      icon: <Ticket className="h-6 w-6 text-white" />,
    },
  ]

  return (
<section className="w-full py-16">
  <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
    {cards.map((card, idx) => (
   <Card
  key={idx}
  className={`
    relative rounded-3xl overflow-hidden cursor-pointer
    transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.03]

    /* Light theme gradient + shadow */
    bg-gradient-to-tr from-[#e6f7f0] to-[#e0f0ff] border border-gray-100 shadow-lg hover:shadow-2xl

    /* Dark theme gradient + glassy effect */
    dark:bg-gradient-to-tr dark:from-black/0 dark:to-[#0f2a3d]/90
    dark:border-[#1da27e]/80
    dark:shadow-md dark:hover:shadow-[0_0_20px_8px_rgba(29,162,126,0.5)]
    dark:backdrop-blur-md
  `}
>

        <CardContent className="p-6 flex flex-col gap-4 relative z-10">
          {/* Icon with gradient and hover pulse */}
          <div className="
            w-12 h-12 flex items-center justify-center rounded-xl
            bg-gradient-to-br from-[#1da27e] to-blue-600
            shadow-lg dark:shadow-[0_0_10px_rgba(29,162,126,0.5)]
            text-white text-2xl
            transition-transform duration-500
            hover:scale-110 hover:animate-[pulse_1.5s_ease-in-out_infinite]
          ">
            {card.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {card.title}
          </h3>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {card.description}
          </p>

          {/* Link with gradient hover and subtle glow */}
          <Link
            href={card.link}
            className="
              font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#1da27e] to-blue-500
              transition-all duration-300
              hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(29,162,126,0.6)]
            "
          >
            {card.linkText}
          </Link>
        </CardContent>

        {/* Optional subtle background glow on card hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1da27e]/10 to-blue-500/10 opacity-0 hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
      </Card>
    ))}
  </div>
</section>

  )
}
