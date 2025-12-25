"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, FileText, Sparkles } from "lucide-react"

export default function InfoCards() {
  const cards = [
    {
      title: "Top AI Tools",
      description:
        "Discover the best AI tools carefully curated to help you work smarter and faster.",
      link: "/ai-tools",
      linkText: "Explore Tools →",
      icon: <Wrench className="h-6 w-6 text-white" />,
    },
    {
      title: "Latest AI News",
      description:
        "Stay updated with the latest breakthroughs, innovations, and trends in AI.",
      link: "/news",
      linkText: "Read News →",
      icon: <FileText className="h-6 w-6 text-white" />,
    },
    {
      title: "AI Tool Reviews",
      description:
        "Honest, balanced, and transparent reviews to help you pick the right AI tools.",
      link: "/reviews",
      linkText: "Read Reviews →",
      icon: <Sparkles className="h-6 w-6 text-white" />,
    },
  ]

  return (
 <section className="w-full py-12 sm:py-14 md:py-16 px-4 sm:px-6">
  <div
    className="
      max-w-6xl mx-auto
      grid gap-6 sm:gap-8
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      place-items-center
    "
  >
    {cards.map((card, idx) => (
     <Card
  key={idx}
  className="
    relative rounded-3xl overflow-hidden cursor-pointer
    transition-all duration-500
    hover:-translate-y-2

    /* ---------- LIGHT MODE ---------- */
    bg-gradient-to-br
    from-white
    via-blue-50
    to-cyan-50
    border border-blue-200/70
    shadow-[0_12px_35px_rgba(59,130,246,0.18)]
    hover:shadow-[0_25px_60px_rgba(59,130,246,0.30)]

    /* ---------- DARK MODE ---------- */
    dark:bg-gradient-to-br
    dark:from-black/80
    dark:via-gray-900/70
    dark:to-black/85
    dark:border dark:border-gray-700/60
    dark:shadow-[0_18px_25px_rgba(0,0,0,0.9)]
    dark:hover:shadow-[0_25px_80px_rgba(0,0,0,1)]
  "
>

       
        <CardContent
          className="
            relative z-10
            p-6 sm:p-7
            flex flex-col gap-4 sm:gap-5
          "
        >
          {/* ICON */}
          <div
            className="
              w-12 h-12
              flex items-center justify-center rounded-xl
              bg-gradient-to-br
              from-blue-700 to-cyan-600
              text-white
              shadow-[0_8px_20px_rgba(59,130,246,0.45)]
              transition-transform duration-500
              group-hover:scale-110
            "
          >
            {card.icon}
          </div>

          {/* TITLE */}
          <h3
            className="
              text-lg sm:text-xl
              font-semibold
              text-slate-900 dark:text-white
            "
          >
            {card.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              text-sm
              text-slate-700 dark:text-gray-300
              leading-relaxed
            "
          >
            {card.description}
          </p>

          {/* LINK */}
          <Link
            href={card.link}
            className="
              inline-block mt-auto
              font-semibold text-sm
              text-blue-700 dark:text-cyan-300
              hover:underline underline-offset-4
              transition-all duration-300
              hover:translate-x-1
            "
          >
            {card.linkText}
          </Link>
        </CardContent>

        {/* Hover Glow */}
        <div
          className="
            absolute inset-0 rounded-3xl
            bg-gradient-to-br
            from-blue-400/10 to-cyan-400/10
            opacity-0 hover:opacity-100
            transition-opacity duration-500
            pointer-events-none
          "
        />
      </Card>
    ))}
  </div>
</section>


  )
}
