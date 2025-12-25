"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useSearchParams } from "next/navigation";
import { Check, X, Tag, Star, Info, Sparkles, CheckCircle, BarChart3, ChevronRight, Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fetchAPI } from "@/lib/api";
import ReviewForm from "./ReviewForm";

// ----------------------
// TYPES
// ----------------------

interface UsageExample {
  name: string;
  desc: string;
}

interface PricePlan {
  label: string;
  period: string;
  price: number;
}

interface Tool {
  _id: unknown;
  name: string;
  longDesc?: string;
  pros?: string[];
  cons?: string[];
  tags?: string[];
  affiliateLink?: string;
  usageExamples?: UsageExample[];
  prices?: PricePlan[];
  ratings?: { average: number };
  reviewCount?: number;
  performanceMetrics?: Record<string, number>;
  quickStats?: Record<string, string | number | string[]>;
}

export default function ComparisonLayout({ tool }: { tool: Tool }) {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState("overview");

  const reviewsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  interface Review {
    _id: string;
    userName: string;
    rating: number;
    reviewText: string;
    // Add other fields if needed
  }
  const [reviewsPreview, setReviewsPreview] = useState<Review[]>([]);
  const [fullReviews, setFullReviews] = useState<Review[]>([]);

  const perf = tool.performanceMetrics || {};
  const quick = tool.quickStats || {};

  useEffect(() => {
    fetchAPI(`/reviews?toolId=${tool._id}&limit=5`)
      .then((res) => setReviewsPreview(res.reviews))
      .catch((e) => console.error(e));
  }, []);

  // Auto-select and scroll
  useEffect(() => {
    if (!tabParam) return;

    if (tabParam === "reviews") {
      setActiveTab("reviews");

      setTimeout(() => {
        reviewsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }

    if (tabParam === "pricing") {
      setActiveTab("pricing");

      setTimeout(() => {
        pricingRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, [tabParam]);

  // Fetch reviews when tab is active
  useEffect(() => {
    if (activeTab === "reviews") {
      fetchAPI(`/reviews?toolId=${tool._id}`)
        .then((res) => setFullReviews(res.reviews))
        .catch((e) => console.error(e));
    }
  }, [activeTab, tool._id]);

  return (
    <main className="pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="flex flex-wrap gap-2 bg-transparent mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="compare">Compare</TabsTrigger>
            </TabsList>

            {/* OVERVIEW TAB */}
            <TabsContent value="overview">
              {/* OVERVIEW CARD */}
              <Card>
                <CardContent className="p-6 space-y-8">

                  {/* TITLE & DESCRIPTION */}
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold flex items-center gap-2 pb-2">
                      {tool.name} — Overview
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {tool.longDesc}
                    </p>
                  </div>

                  {/* KEY STRENGTHS */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                      Key Strengths
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {tool.pros?.map((p: string, i: number) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 dark:bg-green-950/20 
                         border border-green-200 dark:border-green-900 text-green-700 dark:text-green-300"
                        >
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </CardContent>
              </Card>

              {/* PERFORMANCE METRICS */}
              <Card className="mt-6">
                <CardContent className="p-6 space-y-6">

                  <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                    <BarChart3 className="w-5 h-5 text-purple-500" />
                    Performance Metrics
                  </h3>

                  <div className="space-y-5">
                    {Object.entries(perf).map(([key, value]) => (
                      <div key={key} className="space-y-1.5">
                        <div className="flex justify-between text-sm font-medium capitalize">
                          <span>{key.replace(/([A-Z])/g, " $1")}</span>
                          <span>{value}%</span>
                        </div>
                        <Progress value={value} />
                      </div>
                    ))}
                  </div>

                </CardContent>
              </Card>

              {/* USAGE EXAMPLES */}
              <Card className="mt-6">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    Usage Examples
                  </h3>

                  <div className="space-y-5">
                    {tool.usageExamples?.map((ex: UsageExample, i: number) => (
                      <div
                        key={i}
                        className="
            group relative overflow-hidden rounded-xl border 
            border-gray-200 dark:border-gray-800 
            bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 
            hover:shadow-lg hover:border-blue-500/60
            transition-all duration-300 cursor-pointer
          "
                      >

                        {/* GRADIENT ACCENT BAR */}
                        <div
                          className="
              absolute left-0 top-0 h-full w-2 
              bg-gradient-to-b from-sky-950  to-sky-800
              group-hover:w-3 transition-all duration-300
            "
                        ></div>

                        {/* CONTENT */}
                        <div className="p-5 pl-6 space-y-1">
                          <p className="font-semibold text-gray-900 dark:text-gray-100 text-lg flex items-center gap-2">
                            {ex.name}
                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          </p>

                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            {ex.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                </CardContent>
              </Card>

            </TabsContent>


            {/* FEATURES */}

            <TabsContent value="features">
              <Card>
                <CardContent className="p-6 space-y-8">
                  {/* SECTION TITLE */}
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Features Overview</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      A complete breakdown of features, pros, and cons for this tool.
                    </p>
                  </div>

                  {/* TAGS */}
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                    <div className="flex flex-wrap gap-3">
                      {tool.tags?.map((t: string, i: number) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                        >
                          <Tag className="w-4 h-4 opacity-70" />
                          <span className="text-sm">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* PROS & CONS SECTION */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Pros & Cons</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Here is a complete analysis of what this tool excels at — and where it may fall short.
                    </p>

                    {/* GRID LAYOUT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {/* PROS */}
                      <div className="p-5 rounded-xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30">
                        <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3 text-lg flex items-center gap-2">
                          <Check className="w-5 h-5" /> Pros
                        </h4>

                        <ul className="space-y-2">
                          {tool.pros?.map((p: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-1" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CONS */}
                      <div className="p-5 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30">
                        <h4 className="font-semibold text-red-700 dark:text-red-400 mb-3 text-lg flex items-center gap-2">
                          <X className="w-5 h-5" /> Cons
                        </h4>

                        <ul className="space-y-2">
                          {tool.cons?.map((c: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <X className="w-4 h-4 text-red-600 dark:text-red-400 mt-1" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                </CardContent>
              </Card>
            </TabsContent>


            {/* PRICING */}
            <TabsContent value="pricing">
              <div ref={pricingRef} className="scroll-mt-28">
                <Card>
                  <CardContent className="p-6 space-y-6">

                    {/* TITLE */}
                    <div className="space-y-2 text-center">
                      <h2 className="text-3xl font-bold">Pricing Plans</h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        Select a plan that gives you the most value.
                      </p>
                    </div>

                    {/* PRICING GRID */}
                    <div className="grid md:grid-cols-3 gap-6 mt-4">
                      {tool.prices?.map((plan: PricePlan, i: number) => {

                        return (
                          <div
                            key={i}
                            className={`
                relative rounded-2xl p-6 border 
                bg-gradient-to-br from-white via-gray-50 to-gray-100
                dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                
                hover:shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                hover:-translate-y-1
                transition-all duration-300
             
              `}
                          >

                            {/* FEATURED BADGE
                            {highlighted && (
                              <div className="absolute -top-3 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                                <Star className="w-3 h-3" />
                                Popular
                              </div>
                            )} */}

                            {/* PLAN TITLE */}
                            <h3 className="text-xl font-bold">{plan.label}</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                              {plan.period}
                            </p>

                            {/* PRICE */}
                            <p className="mt-4 text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                              {plan.price === 0 ? "Free" : `$${plan.price}`}
                            </p>

                            {/* FEATURES */}
                            {/* {plan.features && (
                              <ul className="mt-5 space-y-2 text-sm">
                                {plan.features.map((f: string, idx: number) => (
                                  <li
                                    key={idx}
                                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                                  >
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    {f}
                                  </li>
                                ))}
                              </ul>
                            )} */}

                            {/* BUY NOW BUTTON — GRADIENT CTA */}
                            <a
                              href={tool.affiliateLink || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
    mt-6 block w-full text-center py-2.5 rounded-lg 
    bg-sky-500/80 backdrop-blur-md
    hover:bg-sky-500/90
    active:scale-95
    shadow-[0_4px_15px_rgba(56,189,248,0.35)]
    text-white font-semibold
    transition-all duration-300
  "
                            >
                              Buy Now
                            </a>


                          </div>
                        );
                      })}
                    </div>

                  </CardContent>
                </Card>
              </div>
            </TabsContent>


            {/* REVIEWS */}
            <TabsContent value="reviews">
              <div ref={reviewsRef} className="scroll-mt-28">

                <Card
                  id="full-reviews-section"
                  className="
    /* ---------- DARK MODE BASE (UNCHANGED) ---------- */
    bg-black/20
    border border-white/10
    backdrop-blur

    /* ---------- LIGHT MODE OVERRIDES ---------- */
    dark:bg-black/20
    dark:border-white/10

    bg-white
    border-blue-200
    shadow-[0_18px_45px_rgba(59,130,246,0.12)]
  "
                >
                  <CardContent className="p-6 space-y-8">
                    <h2 className="text-2xl font-bold">User Reviews for {tool.name}</h2>

                    {/* REVIEW FORM */}
                    <ReviewForm
                      toolId={String(tool._id)}
                      onSuccess={() => {
                        // refetch full and preview reviews
                        fetchAPI(`/reviews?toolId=${tool._id}`)
                          .then((res) => setFullReviews(res.reviews));

                        fetchAPI(`/reviews?toolId=${tool._id}&limit=5`)
                          .then((res) => setReviewsPreview(res.reviews));
                      }}
                    />

                    <div className="space-y-6">
                      {fullReviews.map((rv) => (
                        <div
                          key={rv._id}
                          className="
    p-5 rounded-xl

    /* ---------- DARK MODE (ORIGINAL) ---------- */
    bg-black/20
    border border-white/10
    backdrop-blur

    /* ---------- LIGHT MODE ---------- */
    bg-gradient-to-br from-blue-50 to-cyan-50
    border-blue-200
    text-slate-900
    shadow-sm
  "
                        >

                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-slate-900 dark:text-white">{rv.userName}</h3>
                            <span className="text-yellow-400 flex">
                              {Array(rv.rating)
                                .fill(0)
                                .map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                                ))}
                            </span>
                          </div>

                          <p className="text-slate-700 dark:text-gray-300">
                            {rv.reviewText}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>


            {/* COMPARE */}
            <TabsContent value="compare">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold">Compare</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Comparison tool coming soon.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-6">
            {/* RATING */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Overall Rating</h3>
                <p className="text-4xl font-bold text-blue-600 flex items-center gap-2">
                  {tool.ratings?.average?.toFixed(1) ?? 0}
                  <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </p>
                <p className="text-sm text-gray-500">
                  Based on {tool.reviewCount} reviews
                </p>
              </CardContent>
            </Card>

            {/* QUICK STATS */}
            <Card>
              <CardContent className="p-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-lg font-bold text-blue-600">
                    {quick.activeUsers ?? "—"}
                  </p>
                  <p className="text-sm text-gray-500">Active Users</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-green-600">
                    {quick.uptime ?? "—"}
                  </p>
                  <p className="text-sm text-gray-500">Uptime</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-emerald-600">
                    {quick.support ?? "—"}
                  </p>
                  <p className="text-sm text-gray-500">Support</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-purple-600">
                    {Array.isArray(quick.languages)
                      ? quick.languages.join(", ")
                      : quick.languages || "—"}
                  </p>
                  <p className="text-sm text-gray-500">Languages</p>
                </div>
              </CardContent>
            </Card>

            {/* REVIEWS PREVIEW (Only show if NOT on Reviews tab) */}
         {activeTab !== "reviews" && (
<Card
  className="
    /* ---------- LIGHT MODE (DEFAULT) ---------- */
    bg-white
    border border-blue-200
    shadow-[0_14px_35px_rgba(59,130,246,0.12)]

    /* ---------- DARK MODE ---------- */
    dark:bg-black
    dark:border-white/10
    dark:backdrop-blur
  "
>

    <CardContent className="p-6 space-y-4">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          User Reviews
        </h3>

        {/* Button → switch to Reviews Tab */}
        <button
          className="
            text-sm font-medium transition
            text-blue-600 hover:text-blue-700 hover:underline
            dark:text-blue-400 dark:hover:text-blue-300
          "
          onClick={() => setActiveTab("reviews")}
        >
          Add Review
        </button>
      </div>

      {/* REVIEW LIST PREVIEW */}
      <div className="space-y-4">
        {reviewsPreview.length === 0 && (
          <p className="text-slate-500 dark:text-gray-500 text-sm">
            No reviews yet.
          </p>
        )}

        {reviewsPreview.map((rv) => (
          <div
            key={rv._id}
            className="
              rounded-xl p-4 border

              /* Light */
              bg-gradient-to-br from-blue-50 to-cyan-50
              border-blue-200
              text-slate-900

              /* Dark */
              dark:bg-black/20
              dark:border-white/10
            "
          >
            <div className="flex items-center gap-2 mb-1">
              <p className="font-semibold text-slate-900 dark:text-white">
                {rv.userName}
              </p>

              {/* Stars */}
              <p className="text-yellow-400 text-sm flex">
                {Array(rv.rating).fill(0).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400" />
                ))}
              </p>
            </div>

            <p className="text-slate-600 dark:text-gray-400 text-sm line-clamp-2">
              {rv.reviewText}
            </p>
          </div>
        ))}
      </div>

      {/* SHOW ALL REVIEWS */}
      {typeof tool.reviewCount === "number" && tool.reviewCount > 5 && (
        <button
          className="
            text-sm font-medium flex items-center gap-1 transition
            text-blue-600 hover:text-blue-700 hover:underline
            dark:text-blue-400 dark:hover:text-blue-300
          "
          onClick={() => {
            setActiveTab("reviews");
            document
              .getElementById("full-reviews-section")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Show all reviews <ChevronRight className="w-4 h-4" />
        </button>
      )}

    </CardContent>
  </Card>
)}

          </div>
        </div>
      </div>
    </main>
  );
}
