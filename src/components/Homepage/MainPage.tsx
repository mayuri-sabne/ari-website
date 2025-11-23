"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import InfoCards from "./InfoCards"

export default function MainPage() {
  return (
    <>
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat -mt-20 pt-20 px-20"
        style={{ backgroundImage: "url('/homepage.png')" }}
      >

        <main className="relative w-full flex flex-col items-center justify-center text-center px-6">

          <div className="relative z-10 max-w-5xl py-40">

            <h1 className="text-5xl md:text-6xl font-extrabold 
      text-gray-900 dark:text-white leading-tight mb-6 
      tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
              Discover the Best AI Tools
            </h1>

            <p className="text-md md:text-xl text-gray-600 dark:text-gray-300 mb-12 
      max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
              Explore guides, tools, and the latest trends powering the future of AI.
            </p>

            <div className="w-full max-w-lg mb-10 mx-auto">
              <Input
                type="text"
                placeholder="Search AI tools, guides or news..."
                className="
          w-full px-5 py-6 text-lg rounded-2xl shadow-md
          
          bg-white/80 dark:bg-white/10
          border border-gray-200 dark:border-gray-700
          backdrop-blur-md
          
          text-gray-900 dark:text-white
          
          focus:outline-none focus:ring-2 focus:ring-blue-400
          hover:shadow-[0_0_18px_rgba(59,130,246,0.25)]
          transition-all duration-300
        "
              />
            </div>

            {/* Button Row */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">

              <Button
                asChild
                className="
      relative rounded-xl px-10 py-6 text-lg font-semibold
      text-white bg-[#0d111a]/80
      backdrop-blur-xl

      border border-transparent border-b-gray-600
      shadow-[0_10px_25px_rgba(0,0,0,0.3)]

      transition-all duration-300
      hover:border hover:border-white
      hover:bg-[#131a27]
      hover:shadow-[0_12px_30px_rgba(255,255,255,0.15)]
      hover:-translate-y-1 hover:scale-105

      active:scale-95
    "
              >
                <Link href="/tools">Explore AI Tools</Link>
              </Button>


              <Button
                asChild
                className="
      relative rounded-xl px-10 py-6 text-lg font-semibold

      border border-white text-white
      bg-transparent backdrop-blur-xl

      shadow-[0_8px_18px_rgba(255,255,255,0.1)]
      transition-all duration-300

      hover:bg-white hover:text-black hover:border-transparent
      hover:shadow-[0_12px_30px_rgba(255,255,255,0.3)]
      hover:-translate-y-1 hover:scale-105

      active:scale-95
    "
              >
                <Link href="/deals">Get Latest Deals</Link>
              </Button>
            </div>
          </div>
        </main>
        <InfoCards />
      </section>
    </>
  )
}
