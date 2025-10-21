"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Star, CheckCircle2, XCircle } from "lucide-react";

const pastelColors = [
    "bg-pink-600/40", "bg-purple-600/40", "bg-blue-600/40",
    "bg-green-600/40", "bg-indigo-600/40", "bg-yellow-600/40",
    "bg-red-600/40", "bg-teal-600/40"
];

function getRandomColor() {
    return pastelColors[Math.floor(Math.random() * pastelColors.length)];
}

export default function AiToolReviews() {
    const reviews = [
        {
            id: 1,
            name: "ChatGPT Pro",
            icon: "/chatgpt.png",
            rating: 4.8,
            reviewsCount: 120,
            date: "Dec 15, 2024",
            pros: [
                "Advanced reasoning capabilities",
                "Priority access and faster responses",
                "Multimodal understanding",
            ],
            cons: [
                "Premium pricing",
                "Usage limits on free tier",
                "Occasional server overload",
            ],
            tags: ["Conversational AI", "Content Creation", "Business"],
            description:
                "ChatGPT Pro has revolutionized our content creation workflow. The enhanced reasoning capabilities and priority access make it indispensable.",
            link: "https://chatgpt.com/",
        },
        {
            id: 2,
            name: "Claude AI",
            icon: "/chatgpt.png",
            rating: 4.6,
            reviewsCount: 95,
            date: "Jan 20, 2025",
            pros: [
                "Exceptional contextual memory",
                "Great for summarization and analysis",
                "Safe and ethical alignment",
            ],
            cons: [
                "Limited multimodal features",
                "Slightly slower responses",
                "Restricted availability in some regions",
            ],
            tags: ["Research", "Summarization", "Analysis"],
            description:
                "Claude AI excels at deep reading and summarization tasks. Its strong ethical alignment makes it a trusted choice for businesses.",
            link: "https://claude.ai/",
        },
        {
            id: 3,
            name: "Gemini Advanced",
            icon: "/chatgpt.png",
            rating: 4.7,
            reviewsCount: 110,
            date: "Feb 05, 2025",
            pros: [
                "Seamless Google ecosystem integration",
                "Powerful code generation",
                "Up-to-date knowledge base",
            ],
            cons: [
                "Requires Google account login",
                "Some features behind paywall",
                "Less customizable than competitors",
            ],
            tags: ["Productivity", "Coding", "Knowledge"],
            description:
                "Gemini Advanced integrates flawlessly with Google services. It's especially strong for coding tasks and real-time information retrieval.",
            link: "https://gemini.google.com/",
        }

    ]

    return (
        <section className="w-full py-12 px-4 md:px-3">
            {/* Page Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
                    AI Tool Reviews
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Expert analysis and user feedback on the best AI tools
                </p>
            </div>

            {/* Search + Sort */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                <Input
                    placeholder="Search reviews..."
                    className="max-w-md border-gray-300 dark:border-gray-700 dark:bg-black/30"
                />
                <select className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-black/30 text-sm">
                    <option>Most Popular</option>
                    <option>Highest Rated</option>
                    <option>Newest</option>
                </select>
            </div>

            {/* Reviews */}
            <div className="space-y-8">
                {reviews.map((tool) => (
                    <Card
                        key={tool.id}
                        className="
    rounded-2xl border border-gray-200/60 dark:border-gray-800/60
    bg-white/70 dark:bg-neutral-900/40 
    backdrop-blur-xl 
    transition-all duration-700 ease-in-out
    hover:bg-gradient-to-r 
    hover:from-blue-500/20 hover:to-green-500/20
    dark:hover:from-blue-400/10 dark:hover:to-green-400/10
    group
  "
                    >


                        <CardContent className="p-6">
                            {/* Top Section */}
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-4">
                                    {/* Icon with gradient border */}
                                    <div className="p-[2px] rounded-lg bg-gradient-to-r from-blue-500 to-green-500">
                                        <Image
                                            src={tool.icon}
                                            alt={tool.name}
                                            width={48}
                                            height={48}
                                            className="rounded-lg object-cover h-12 w-12 bg-white dark:bg-black"
                                        />
                                    </div>

                                    {/* Name + Rating */}
                                    <div className="flex flex-col justify-center">
                                        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                            {tool.name}
                                        </h2>
                                        <div className="flex items-center gap-2 mt-1">
                                            {/* Stars */}
                                            <div className="flex text-yellow-500">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        fill={i < Math.floor(tool.rating) ? "currentColor" : "none"}
                                                        className="mr-0.5"
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {tool.rating}/5 ({tool.reviewsCount} reviews)
                                            </span>
                                        </div>
                                    </div>
                                </div>


                                {/* Date on the right */}
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {tool.date}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                                {tool.description}
                            </p>

                            {/* Pros & Cons */}
                            <div className="grid md:grid-cols-2 gap-4 mt-6">
                                <div>
                                    <h3 className="flex items-center gap-1 font-medium text-green-600 dark:text-green-400 mb-2">
                                        <CheckCircle2 size={16} /> Pros
                                    </h3>
                                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                        {tool.pros.map((pro, i) => (
                                            <li key={i}>• {pro}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="flex items-center gap-1 font-medium text-red-500 dark:text-red-400 mb-2">
                                        <XCircle size={16} /> Cons
                                    </h3>
                                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                        {tool.cons.map((con, i) => (
                                            <li key={i}>• {con}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Tags + CTA */}
                            <div className="flex justify-between items-center mt-6">
                                <div className="flex flex-wrap gap-2">
                                    {tool.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 text-xs rounded-full text-gray-100 ${getRandomColor()}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href={`/ai-tools/slug`}
                                    className="group inline-flex items-center gap-1 text-md font-medium 
             text-blue-600 dark:text-blue-400 
             hover:text-blue-700 dark:hover:text-blue-300 
             transition-colors"
                                >
                                    Read Full Review
                                    <span
                                        className="inline-block transition-transform duration-200 group-hover:translate-x-0.5"
                                    >
                                        →
                                    </span>
                                </Link>

                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
