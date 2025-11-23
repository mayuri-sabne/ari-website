"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import { cn } from "@/lib/utils"

const commentsData = [
  {
    id: 1,
    name: "Michael Chen",
    time: "2 hours ago",
    comment:
      "Excellent article! The insights on AI's impact across different industries are spot-on. I've seen similar transformations in my field of work.",
    likes: 12,
    avatar: "/avatars/michael.png",
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    time: "5 hours ago",
    comment:
      "Great overview of AI's current state and future potential. Would love to see more specific examples of successful AI implementations in different industries.",
    likes: 8,
    avatar: "/avatars/emily.png",
  },
];

export default function SingleArticle() {
  const [comment, setComment] = useState("")

  const article = {
    category: "AI Technology",
    read: "8 min read",
    title: "The Evolution of Machine Learning: 2025 Trends",
    desc: "Explore the latest developments in machine learning and how they're shaping the future of technology and business.",
    author: "David Kumar",
    date: "Aug 10, 2025",
    image: "/news.png",
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 flex flex-col gap-8">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
        {article.title}
      </h1>

      {/* Cover Image */}
      <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 100vw,
                 100vw"
        />

        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/80 dark:bg-black/60 text-gray-900 dark:text-gray-100 text-xs shadow">
          {article.category}
        </div>
      </div>

      {/* Content */}
      <Card className="bg-white dark:bg-[#121826] shadow-lg">
        <CardContent className="flex flex-col space-y-6 p-6">
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>{article.read}</span>
            <span>{article.date}</span>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            By {article.author}
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {article.desc}
          </p>

          <div className="space-y-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Machine learning in 2025 is evolving beyond simple predictive models.
              Organizations are now leveraging hybrid AI systems that integrate symbolic reasoning
              with deep learning to achieve explainability and accuracy at scale.
            </p>
            <p>
              Industries such as healthcare, supply chain, and fintech are adopting AI-driven
              automation to improve efficiency and personalization. At the same time, regulatory
              frameworks are being introduced to ensure ethical and responsible use of AI.
            </p>
            <p>
              Looking forward, quantum machine learning and edge AI are poised to push the
              boundaries of what’s possible, making 2025 a landmark year in the evolution of AI.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Comments */}
      <section className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Comments ({commentsData.length})
        </h2>

        <div className="space-y-6 mb-8">
          {commentsData.map((c) => (
            <div key={c.id} className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage src={c.avatar} />
                <AvatarFallback>{c.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900 dark:text-white">{c.name}</p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{c.time}</span>
                </div>
                <p className="mt-1 text-gray-700 dark:text-gray-300">{c.comment}</p>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <button className="hover:underline">👍 {c.likes}</button>
                  <button className="hover:underline">Reply</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Add a Comment
          </h3>
          <Textarea
            placeholder="Share your thoughts..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mb-4 min-h-[100px]"
          />
          <Button
            className={cn(
              "text-white px-6 py-2 rounded-md transition-colors",
              "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
            )}
          >
            Post Comment
          </Button>
        </div>
      </section>
    </div>
  );
}
