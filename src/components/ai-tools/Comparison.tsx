"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Star } from "lucide-react"

export default function ComparisonLayout() {
  return (
    // <main className="px-6 md:px-20 py-12">
    <main className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="flex flex-wrap gap-2 bg-transparent justify-start mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="compare">Compare</TabsTrigger>
            </TabsList>

            {/* Overview */}
            <TabsContent value="overview">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold">Comprehensive Analysis</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    ChatGPT Pro represents the pinnacle of conversational AI technology, offering
                    unprecedented capabilities for professionals, businesses, and power users...
                  </p>

                  <h3 className="text-lg font-semibold">Key Strengths</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>✅ Advanced reasoning capabilities</li>
                    <li>✅ Multimodal understanding</li>
                    <li>✅ Priority access with 99.9% uptime</li>
                    <li>✅ Enhanced creativity</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="flex justify-between text-sm">
                        <span>Response Accuracy</span> <span>94%</span>
                      </p>
                      <Progress value={94} />
                    </div>
                    <div>
                      <p className="flex justify-between text-sm">
                        <span>Creativity</span> <span>96%</span>
                      </p>
                      <Progress value={96} />
                    </div>
                    <div>
                      <p className="flex justify-between text-sm">
                        <span>Speed</span> <span>89%</span>
                      </p>
                      <Progress value={89} />
                    </div>
                    <div>
                      <p className="flex justify-between text-sm">
                        <span>Reliability</span> <span>98%</span>
                      </p>
                      <Progress value={98} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-lg font-semibold">Usage Examples</h3>

                  <div className="flex gap-3">
                    <div className="w-1 bg-blue-500 rounded"></div>
                    <div>
                      <p className="font-semibold">Business Analysis</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Analyzed quarterly financial reports and provided strategic recommendations with 95% accuracy compared to human analysts.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-1 bg-purple-500 rounded"></div>
                    <div>
                      <p className="font-semibold">Content Creation</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Generated marketing copy that increased engagement rates by 34% across multiple campaigns.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-1 bg-green-500 rounded"></div>
                    <div>
                      <p className="font-semibold">Code Development</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Produced production-ready code with 87% fewer bugs than industry average for similar complexity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Features */}
            <TabsContent value="features">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold">Features</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Here you can highlight all the unique AI features.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Pricing */}
            <TabsContent value="pricing">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold">Pricing Plans</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Show details about free, pro, and enterprise plans.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reviews */}
            <TabsContent value="reviews">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold">User Reviews</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Showcase testimonials and ratings from real users.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Compare */}
            <TabsContent value="compare">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold">Comparison</h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Compare this AI with other tools in the market.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-6">
            {/* Overall Rating */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Overall Rating</h3>
                <p className="text-4xl font-bold text-blue-600 flex items-center gap-2">
                  4.8 <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </p>
                <p className="text-sm text-gray-500">Based on 2,847 reviews</p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardContent className="p-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-lg font-bold text-blue-600">2.8M+</p>
                  <p className="text-sm text-gray-500">Active Users</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-green-600">99.9%</p>
                  <p className="text-sm text-gray-500">Uptime</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-emerald-600">24/7</p>
                  <p className="text-sm text-gray-500">Support</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-purple-600">150+</p>
                  <p className="text-sm text-gray-500">Languages</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </main>
  )
}
