"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";

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
  name: string;
  longDesc?: string;
  pros?: string[];
  tags?: string[];
  usageExamples?: UsageExample[];
  prices?: PricePlan[];
  ratings?: { average: number };
  reviewCount?: number;
  performanceMetrics?: Record<string, number>;
  quickStats?: Record<string, string | number | string[]>;
}

// ----------------------
// COMPONENT
// ----------------------

export default function ComparisonLayout({ tool }: { tool: Tool }) {
  const perf = tool.performanceMetrics || {};
  const quick = tool.quickStats || {};

  return (
    <main className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="flex flex-wrap gap-2 bg-transparent mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="compare">Compare</TabsTrigger>
            </TabsList>

            {/* OVERVIEW TAB */}
            <TabsContent value="overview">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold">{tool.name} — Overview</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {tool.longDesc}
                  </p>

                  <h3 className="text-lg font-semibold">Key Strengths</h3>
                  <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                    {tool.pros?.map((p, i) => (
                      <li key={i}>✅ {p}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* PERFORMANCE METRICS */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Performance Metrics
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(perf).map(([key, value]) => (
                      <div key={key}>
                        <p className="flex justify-between text-sm capitalize">
                          <span>{key}</span> <span>{value}%</span>
                        </p>
                        <Progress value={value} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* USAGE EXAMPLES */}
              <Card className="mt-6">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-lg font-semibold">Usage Examples</h3>

                  {tool.usageExamples?.map(
                    (ex: UsageExample, i: number) => (
                      <div className="flex gap-3" key={i}>
                        <div className="w-1 bg-blue-500 rounded"></div>
                        <div>
                          <p className="font-semibold">{ex.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {ex.desc}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* FEATURES */}
            <TabsContent value="features">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold">Features</h2>
                  <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-1">
                    {tool.tags?.map((t: string, i: number) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* PRICING */}
            <TabsContent value="pricing">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold">Pricing Plans</h2>
                  <div className="grid md:grid-cols-3 gap-6 mt-5">
                    {tool.prices?.map((plan: PricePlan, i: number) => (
                      <div
                        key={i}
                        className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800"
                      >
                        <h3 className="font-bold text-lg">{plan.label}</h3>
                        <p className="text-gray-500">{plan.period}</p>
                        <p className="text-3xl font-bold mt-2">
                          {plan.price === 0 ? "Free" : `$${plan.price}`}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* REVIEWS */}
            <TabsContent value="reviews">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold">User Reviews</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    This tool has {tool.reviewCount} reviews.
                  </p>
                </CardContent>
              </Card>
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
          </div>
        </div>
      </div>
    </main>
  );
}
