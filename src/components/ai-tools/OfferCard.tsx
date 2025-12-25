"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Info } from "lucide-react";
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
  const [activeTooltip, setActiveTooltip] = useState<"changed" | "fact" | null>(
    null
  );

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft("2d 14h 31m"), 60000);
    return () => clearInterval(timer);
  }, []);

  const price = tool.prices?.[0]?.price ?? 0;
  const period = tool.prices?.[0]?.period ?? "";

  useEffect(() => {
    function closeTooltip() {
      setActiveTooltip(null);
    }
    window.addEventListener("click", closeTooltip);
    return () => window.removeEventListener("click", closeTooltip);
  }, []);

  function toggleTooltip(name: "changed" | "fact") {
    setActiveTooltip((prev) => (prev === name ? null : name));
  }

  return (
    <Card className="rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-visible">
      <CardContent className="p-6 flex flex-col md:flex-row justify-between items-stretch gap-6 relative">
        {/* LEFT SECTION */}
        <div className="flex-1 flex flex-col justify-between">
          {/* TOP LEFT */}
          <div>
            {/* Logo + Title */}
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${tool.logo || ""}`}
                alt={tool.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover shadow"
              />

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {tool.shortDesc}
                </p>
              </div>
            </div>

            {/* Long Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 max-w-[90%] leading-relaxed">
              {tool.longDesc}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 text-yellow-400 mb-4">
              <span className="text-lg">★★★★★</span>
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                {tool.ratings?.average?.toFixed(1) || "0.0"}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                ({tool.reviewCount || 0} reviews)
              </span>
            </div>
          </div>

          {/* BOTTOM LEFT */}
          <div className="mt-4 text-xs space-y-3">
            {/* AUTHOR */}
            {tool.author && (
              <div className="flex items-center gap-3">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${
                    tool.author.profileImage || ""
                  }`}
                  alt={tool.author.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover shadow"
                />

                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-[10px]">
                    WRITTEN BY
                  </p>
                  <Link
                    href={`/about-us/${tool.author.slug}`}
                    className="font-semibold text-sky-600 dark:text-sky-400 underline hover:text-sky-700"
                  >
                    {tool.author.name}
                  </Link>
                </div>
              </div>
            )}

            {/* META ROW */}
            <div className="flex items-center flex-wrap gap-4 text-gray-600 dark:text-gray-300 overflow-visible">
              {/* UPDATE DATE */}
              <p className="text-xs">
                Updated:{" "}
                {tool.updatedAt
                  ? new Date(tool.updatedAt).toLocaleDateString("en-GB")
                  : "N/A"}
              </p>

              {/* WHAT CHANGED */}
              <div className="relative">
                <button
                  className="text-sky-600 underline dark:text-sky-400 text-xs hover:text-sky-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTooltip("changed");
                  }}
                >
                  What Changed?
                </button>
                {activeTooltip === "changed" && (
                  <div
                    className="
      absolute z-50 animate-fadeIn

      /* Desktop */
      left-0 top-6 w-72

      /* Mobile: center screen */
      max-sm:fixed
      max-sm:left-1/2
      max-sm:top-auto
      max-sm:bottom-6
      max-sm:-translate-x-1/2
      max-sm:w-[90vw]

      p-4 rounded-xl shadow-xl
      bg-white border border-gray-200
      dark:bg-gray-800 dark:border-gray-700
    "
                  >
                    <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                      We regularly adjust our content based on AI tool changes
                      including pricing updates, feature changes, and usage
                      requirements.
                    </p>
                  </div>
                )}
              </div>

              {/* FACT CHECKED */}
              <div className="relative flex items-center gap-1">
                <Info className="w-4 h-4 text-green-400" />

                <button
                  className="text-green-400 underline text-xs hover:text-green-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleTooltip("fact");
                  }}
                >
                  Fact Checked
                </button>

                {activeTooltip === "fact" && (
                  <div
                    className="
      z-50 animate-fadeIn

      /* Desktop positioning */
      absolute left-0 top-6 w-80

      /* Mobile positioning */
      max-sm:fixed
      max-sm:left-1/2
      max-sm:top-auto
      max-sm:bottom-6
      max-sm:-translate-x-1/2
      max-sm:w-[90vw]

      p-4 rounded-xl shadow-xl
      bg-white border border-gray-200
      dark:bg-gray-800 dark:border-gray-700
    "
                  >
                    <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                      <strong>Fact Checked by:</strong>{" "}
                      <Link
                        href="/about-us/mayuri-sabne"
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        Mayuri Sabne
                      </Link>
                      <br />
                      Reviewed using the{" "}
                      <strong>ARI Fact-Check Protocol</strong>.
                      <br />
                      <Link
                        href="/our-protocol"
                        className="text-blue-600 hover:underline"
                      >
                        View our protocol
                      </Link>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT SECTION — TECH BLUE CARD */}
        <div className="w-full pt-5 sm:pt-0 md:w-[350px]">
          <div
            className="
      relative rounded-2xl
      px-6 pt-8 pb-5 flex flex-col gap-5 overflow-visible

      /* ---------- LIGHT MODE (TECH BLUE) ---------- */
      bg-gradient-to-br from-blue-100 via-cyan-100 to-indigo-200
      border border-blue-200/70
      text-slate-900
      shadow-[0_18px_38px_rgba(37,99,235,0.18)]

      /* ---------- DARK MODE (UNCHANGED) ---------- */
      dark:bg-gradient-to-br dark:from-[#1E2538] dark:via-[#242C44] dark:to-[#1E2538]
      dark:border-[#333C59]
      dark:text-[#E9ECF4]
      dark:shadow-[0_18px_38px_rgba(10,15,30,0.45)]
    "
          >
            {/* TOP BAR */}
            <div
              className="
    absolute inset-x-6 -top-3 flex items-center justify-between
    rounded-xl px-3.5 py-1.5 text-[11px] font-medium

    /* Light */
    bg-blue-100 border border-blue-200 text-blue-700

    /* Dark */
    dark:bg-[#2B3452] dark:border-[#3D4870] dark:text-[#F5F7FC]
  "
            >
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-yellow-600 dark:text-yellow-300" />
                Limited Time
              </span>
              <span className="font-semibold text-yellow-600  dark:text-yellow-200">{timeLeft}</span>
            </div>

            {/* PRICE SECTION */}
            <div className="flex items-start justify-between relative">
              <div className="relative">
                <p className="text-[38px] leading-none font-semibold tracking-tight text-slate-900 dark:text-white">
                  {price === 0 ? "Free" : `$${price}`}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">{period}</p>

                {/* SPARKLES */}
                <span className="absolute -top-2 -right-3 text-[14px] text-yellow-600 dark:text-yellow-300 animate-pulse">
                  ✦
                </span>
                <span className="absolute top-2 -right-6 text-[11px] text-yellow-600 dark:text-yellow-300">
                  ✦
                </span>
                <span className="absolute -bottom-1 -right-2 text-[10px] text-yellow-600 dark:text-yellow-300">
                  •
                </span>
              </div>

              <span
                className="
    text-[11px] uppercase tracking-wider px-3 py-1 rounded-lg

    bg-blue-200/70 text-blue-800 border border-blue-300
    dark:bg-[#313B5C] dark:text-yellow-200 dark:border-[#46507C]
  "
              >
                Best Deal
              </span>
            </div>

            {/* DIVIDER */}
            <div className="h-px w-full bg-[#394469]" />

            {/* DESCRIPTION */}
            <p className="text-sm text-slate-500 leading-relaxed dark:text-slate-300 ">
              This offer will be applied after redirecting to the official
              website.
            </p>

            {/* CTA — TECH BUTTON */}
            <Button
              onClick={() => window.open(tool.affiliateLink, "_blank")}
              className="
    relative mt-1 w-full py-3 rounded-xl font-semibold text-sm
    transition-all duration-200 ease-out
    active:scale-[0.98]
animate-pulse
    /* Light */
    bg-gradient-to-r from-blue-600 to-cyan-500
    text-white shadow-md
    hover:from-cyan-500 hover:to-blue-600
    hover:shadow-lg

    /* Dark (UNCHANGED) */
    dark:from-[#F5D061] dark:to-[#FFE58A]
    dark:text-[#1E2538]
  "
            >
              Activate Offer
            </Button>

            {/* FOOTNOTE */}
            <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center">
              Secure redirect • Official partner link
            </p>

            {/* SUBTLE BACKGROUND SPARKLE (DECORATIVE) */}
            <span className="absolute top-6 right-6 text-[10px] text-yellow-300/40">
              ✦
            </span>
            <span className="absolute bottom-8 left-8 text-[9px] text-white/30">
              •
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// {/* RIGHT SECTION — PREMIUM SKY/INDIGO MULTI-GRADIENT BOX */}
// <div className="
//   w-full md:w-64 rounded-2xl p-6 flex flex-col justify-between relative
//   overflow-hidden text-white shadow-2xl

//   /* LUX PREMIUM GRADIENT */
//   bg-gradient-to-br from-sky-300 via-blue-500 to-indigo-600
// ">

//   {/* GLOW ORB */}
//   <div className="
//     absolute -top-10 -left-10 w-32 h-32 rounded-full
//     bg-white/20 blur-3xl opacity-60 pointer-events-none
//   " />

//   {/* LIMITED TIME BAR */}
//   <div className="
//     absolute -top-3 left-1/2 -translate-x-1/2 w-[85%]
//     py-1.5 rounded-xl text-xs font-medium text-white text-center
//     bg-gradient-to-r from-orange-400 to-red-500 shadow-lg
//     z-20
//   ">
//     <Clock className="w-3 h-3 inline-block mr-1" />
//     Limited Time: {timeLeft}
//   </div>

//   {/* PRICE */}
//   <div className="mt-10 z-10">
//     <p className="text-4xl font-extrabold drop-shadow-xl tracking-tight">
//       {price === 0 ? "Free" : `$${price}`}
//     </p>
//     <p className="text-sm opacity-90">{period}</p>
//   </div>

//   {/* GLASS EFFECT INFO BOX */}
//   <div className="
//     mt-6 mb-8 p-4 rounded-xl
//     bg-white/10 backdrop-blur-md
//     border border-white/20
//     shadow-inner text-center
//     z-10
//   ">
//     <p className="text-xs opacity-90 leading-relaxed">
//       Exclusive deal available for a limited time only.
//     </p>
//   </div>

//   {/* CTA BUTTON — PREMIUM SKY GRADIENT */}
//   <Button
//     onClick={() => window.open(tool.affiliateLink, "_blank")}
//     className="
//       w-full py-3 rounded-xl font-semibold text-base
//       bg-gradient-to-r from-sky-200 via-sky-400 to-sky-600
//       hover:from-sky-300 hover:via-sky-500 hover:to-sky-700
//       text-white
//       shadow-lg hover:shadow-2xl
//       active:scale-[0.97]
//       transition-all duration-300 relative z-10
//     "
//   >
//     Activate Offer
//   </Button>
// </div>
