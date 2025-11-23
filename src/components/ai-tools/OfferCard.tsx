"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Tool {
  name: string;
  logo?: string;
  shortDesc?: string;
  longDesc?: string;
  affiliateLink?: string;
  reviewCount?: number;
  ratings?: { average: number };
  prices?: { price: number; period: string }[];
  couponCodes?: string[];
  author?: {
    _id: string;
    name: string;
    slug: string;
    profileImage?: string;
  };

  updatedAt?: string;
}

export default function OfferCard({ tool }: { tool: Tool }) {
  const [timeLeft, setTimeLeft] = useState("2d 14h 32m");
  const [activeTooltip, setActiveTooltip] = useState<"changed" | "fact" | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft("2d 14h 31m"), 60000);
    return () => clearInterval(timer);
  }, []);

  const price = tool.prices?.[0]?.price || "Free";
  const period = tool.prices?.[0]?.period || "";
  const promoCode = tool.couponCodes?.[0] || "INSIDER";

  useEffect(() => {
    function handleClickOutside() {
      setActiveTooltip(null);
    }
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  function toggleTooltip(name: "changed" | "fact") {
    setActiveTooltip(prev => (prev === name ? null : name));
  }
  return (
    <Card className="rounded-2xl shadow-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-visible">
      <CardContent className="p-6 flex flex-col md:flex-row justify-between items-stretch gap-6 relative">

        {/* LEFT */}
        <div className="flex-1 flex flex-col justify-between">

          {/* TOP SECTION */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${tool.logo || ""}`}
                alt={tool.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {tool.shortDesc}
                </p>
              </div>
            </div>

            {/* LONG DESCRIPTION (smaller width) */}
            <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 max-w-[85%]">
              {tool.longDesc}
            </p>

            {/* RATINGS */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {tool.ratings?.average?.toFixed(1) || "0.0"}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                ({tool.reviewCount || 0} reviews)
              </span>
            </div>
          </div>

          {/* BOTTOM SECTION — ALWAYS AT BOTTOM */}
          <div className="mt-3 text-xs space-y-2">

            {/* AUTHOR */}
            {tool.author && (
              <div className="flex items-center gap-2">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${tool.author.profileImage || ""}`}
                  alt={tool.author.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover"
                />

                <div>
                  <p className="text-white text-[10px] leading-tight">WRITTEN BY</p>
                  <Link
                    href={`/about-us/${tool.author.slug}`}
                    className="font-semibold text-blue-300 underline hover:text-blue-200"
                  >
                    {tool.author.name}
                  </Link>
                </div>
              </div>
            )}

            {/* UPDATED + LINKS */}
            <div className="flex items-center flex-wrap gap-4 text-gray-200 dark:text-gray-300">

              {/* DATE */}
              <p className="text-xs">
                Updated: {tool.updatedAt ? new Date(tool.updatedAt).toLocaleDateString("en-GB") : "N/A"}
              </p>

              {/* WHAT CHANGED */}
              <div className="relative">
                <button
                  className="text-blue-300 underline hover:text-blue-200 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTooltip("changed");
                  }}
                >
                  What Changed?
                </button>

                {activeTooltip === "changed" && (
                  <div className="absolute top-6 mb-2 left-0 w-68 bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 p-4 rounded-lg z-50">
                    <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                      We regularly adjust our content based on AI tool changes including
                      pricing updates, feature changes, and usage requirements.
                    </p>
                  </div>
                )}
              </div>

              {/* FACT CHECKED */}
              <div className="relative flex items-center gap-1">

                {/* CHECK CIRCLE ICON */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-green-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" stroke="currentColor" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                </svg>

                <button
                  className="text-green-300 underline hover:text-green-200 text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTooltip("fact");
                  }}
                >
                  Fact Checked
                </button>

                {activeTooltip === "fact" && (
                  <div className="absolute top-6 mb-2 left-0 w-78 bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 p-4 rounded-lg z-50">
                    <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                      <strong>Fact Checked by:</strong>{" "}
                      <Link
                        href="/about-us/mayuri-sabne"
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        Mayuri Sabne
                      </Link>

                      <br />
                      Reviewed using the <strong>ARI Fact-Check Protocol</strong>.
                      <br />
                      All details confirmed and updated regularly.{" "}
                      <Link
                        href="/protocol"
                        className="text-blue-600 hover:underline"
                      >
                        View our protocol.
                      </Link>

                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>


        {/* RIGHT */}
        <div className="w-full md:w-64 rounded-2xl p-6 flex flex-col justify-between bg-gradient-to-br from-blue-500 to-green-500 text-white relative">

          <div className="absolute top-0 left-0 right-0 px-3 py-1 bg-gradient-to-r from-red-500 to-orange-400 text-xs font-medium text-white flex justify-center items-center rounded-t-2xl">
            <Clock className="w-3 h-3 mr-1" /> Limited Time: {timeLeft}
          </div>

          <div className="mt-6">
            <p className="text-3xl font-bold">${price}</p>
            <p className="text-sm opacity-80">{period}</p>
          </div>

          <div className="mt-4 mb-6 p-3 rounded-lg bg-white/20 backdrop-blur-sm text-center">
            <p className="text-sm">Promo Code</p>
            <p className="text-lg font-bold tracking-widest">{promoCode}</p>
          </div>

          <Button
            onClick={() => window.open(tool.affiliateLink, "_blank")}
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
          >
            Activate Offer
          </Button>
        </div>

      </CardContent>
    </Card>
  );
}
