"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function MainPage() {
  return (
    <main className="relative w-full flex flex-col items-center justify-center text-center px-6">
      {/* Content */}
      <div className="relative z-10 max-w-5xl py-40">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6 drop-shadow-lg">
          Discover the Best AI Tools
        </h1>

        {/* Subheading (new style) */}
        <p className="text-md md:text-xl text-gray-700 dark:text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light italic tracking-wide">
          Explore guides, tools, and news to stay ahead in the AI revolution
        </p>

        {/* Search Box */}
        <div className="w-full max-w-lg mb-10 mx-auto">
          <Input
            type="text"
            placeholder="Search AI tools, guides or news..."
            className="
              w-full px-5 py-6 text-lg rounded-2xl shadow-lg 
              bg-white/70 dark:bg-black/40
              border border-gray-300 dark:border-gray-600
              text-gray-900 dark:text-white
              backdrop-blur-md
              focus:outline-none focus:ring-2 focus:ring-[#1da27e]/60
              transition-all duration-300
              hover:shadow-[0_0_15px_rgba(29,162,126,0.25)]
            "
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* Gradient Button with Animated Glow */}
          <Button
            asChild
            className="relative rounded-xl px-8 py-6 text-lg shadow-lg 
                       bg-gradient-to-br from-green-400 to-blue-600 text-white
                       hover:scale-105 transition-transform overflow-hidden
                       animate-pulse-slow"
          >
            <Link href="/tools" className="relative z-10 font-semibold">
              Explore AI Tools
            </Link>
          </Button>

          {/* Outline Button with Glow on Hover */}
          <Button
            asChild
            className="rounded-xl px-8 py-6 text-lg shadow-md 
                       border border-[#1da27e] text-[#1da27e] 
                       bg-white hover:bg-[#f9fdfb] 
                       dark:bg-black/40 dark:text-[#1da27e] dark:hover:bg-black/60
                       hover:scale-105 transition-all duration-300
                       hover:shadow-[0_0_15px_rgba(29,162,126,0.4)]"
          >
            <Link href="/deals">Get Latest Deals</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}


