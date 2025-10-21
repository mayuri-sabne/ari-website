"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Flame } from "lucide-react"

export default function OfferCard() {
  // Countdown example (2 days 14h 32m)
  const [timeLeft, setTimeLeft] = useState("2d 14h 32m")

  useEffect(() => {
    // Example static countdown logic, replace with dynamic if needed
    const timer = setInterval(() => {
      setTimeLeft("2d 14h 31m")
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="rounded-2xl shadow-md overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
      <CardContent className="p-6 flex flex-col md:flex-row justify-between items-stretch gap-6 relative">
        {/* Left side */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/icons/chatgpt.png"
              alt="ChatGPT"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                ChatGPT Pro
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Advanced AI Assistant for Professionals
              </p>
            </div>
          </div>

          {/* Discount badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center gap-1 px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r from-green-500 to-blue-600">
              <Flame className="w-4 h-4" /> 50% OFF
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              First 3 Months
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Get exclusive access to ChatGPT Pro with advanced reasoning,
            priority access, and multimodal capabilities. Perfect for
            professionals and businesses.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              4.8
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              (2,847 reviews)
            </span>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-64 rounded-2xl p-6 flex flex-col justify-between bg-gradient-to-br from-blue-500 to-green-500 text-white relative">
          {/* Timer */}
          <div className="absolute top-0 left-0 right-0 px-3 py-1 bg-gradient-to-r from-red-500 to-orange-400 text-white text-xs font-medium flex items-center justify-center gap-1 rounded-tr-2xl rounded-tl-2xl">
            <Clock className="w-3 h-3" /> Limited Time: {timeLeft}
          </div>

          <div className="mt-6">
            <p className="text-3xl font-bold">$10</p>
            <p className="line-through opacity-80 text-sm">$20/month</p>
            <p className="text-sm mt-1">
              First 3 months, then $20/month
            </p>
          </div>

          {/* Promo code */}
          <div className="mt-4 mb-6 p-3 rounded-lg bg-white/20 backdrop-blur-sm text-center">
            <p className="text-sm">Promo Code</p>
            <p className="text-lg font-bold tracking-widest">AIHUB50</p>
          </div>

          {/* Button */}
          <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold shadow-md rounded-lg">
            Activate Offer
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
