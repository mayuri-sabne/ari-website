"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

export default function LatestArticles() {
  const articles = [
    {
      category: "AI Technology",
      read: "8 min read",
      title: "The Evolution of Machine Learning: 2025 Trends",
      desc: "Explore the latest developments in machine learning and how they're shaping the future of technology and business.",
      author: "David Kumar",
      date: "Aug 10, 2025",
      image: "/news.png"
    },
    {
      category: "Healthcare AI",
      read: "6 min read",
      title: "How Artificial Intelligence is Transforming Healthcare",
      desc: "From diagnostics to patient care, AI is revolutionizing the healthcare industry at an unprecedented pace.",
      author: "Anjali Verma",
      date: "Aug 12, 2025",
      image: "/news.png"
    },
    {
      category: "Finance",
      read: "7 min read",
      title: "AI in Fintech: Smarter Investment Strategies",
      desc: "Discover how AI is helping financial institutions make data-driven decisions and deliver personalized customer experiences.",
      author: "Rohan Sharma",
      date: "Aug 14, 2025",
      image: "/news.png"
    },
    {
      category: "Education",
      read: "5 min read",
      title: "Personalized Learning with AI Tutors",
      desc: "AI-powered platforms are making education more engaging, adaptive, and tailored to individual learning needs.",
      author: "Meera Kapoor",
      date: "Aug 15, 2025",
      image: "/news.png"
    },
    {
      category: "Business",
      read: "9 min read",
      title: "The Role of AI in Shaping Future Startups",
      desc: "Startups are leveraging artificial intelligence to innovate, disrupt industries, and scale faster than ever before.",
      author: "Siddharth Mehta",
      date: "Aug 17, 2025",
      image: "/news.png"
    },
    {
      category: "Robotics",
      read: "6 min read",
      title: "Next-Gen Robotics: The Human-AI Collaboration",
      desc: "Robots are no longer just machines; they’re becoming collaborative partners in factories, homes, and beyond.",
      author: "Priya Nair",
      date: "Aug 18, 2025",
      image: "/news.png"
    },
    {
      category: "Sustainability",
      read: "7 min read",
      title: "AI for Climate Change: Smart Solutions for a Greener Planet",
      desc: "AI-driven innovations are helping combat climate change by optimizing energy, predicting disasters, and reducing waste.",
      author: "Arjun Desai",
      date: "Aug 20, 2025",
      image: "/news.png"
    },
    {
      category: "Cybersecurity",
      read: "8 min read",
      title: "AI vs Cybercrime: Who Will Win?",
      desc: "Artificial intelligence is being used both to protect against and carry out cyberattacks — a double-edged sword for the digital age.",
      author: "Neha Joshi",
      date: "Aug 21, 2025",
      image: "/news.png"
    },
    {
      category: "Future of Work",
      read: "5 min read",
      title: "AI and the Future of Remote Work",
      desc: "From virtual assistants to smart scheduling, AI is shaping how and where we work in a digital-first world.",
      author: "Karan Malhotra",
      date: "Aug 23, 2025",
      image: "/news.png"
    }
  ];

  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Latest Articles
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Discover insights about AI, technology, and innovation
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <Link href={`/articles/slug`} key={idx}>
              <Card
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700",
                  "bg-white dark:bg-[#121826] shadow-sm transition-all duration-500",
                  "hover:scale-105 hover:shadow-2xl",
                  "hover:bg-gradient-to-br hover:from-[#d6fff2] hover:via-[#e0f2ff] hover:to-[#d6f5ff]",
                  "dark:hover:from-[#102a43] dark:hover:via-[#184a6a] dark:hover:to-[#1a6f8f] pt-0",
                  "flex flex-col"
                )}
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <CardContent className="p-5 flex flex-col space-y-3 py-0 flex-1">
                  <span className="inline-block text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {article.category}
                  </span>

                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                    {article.desc}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-2 mt-auto">
                    <span>{article.author}</span>
                    <span>{article.date}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
}
