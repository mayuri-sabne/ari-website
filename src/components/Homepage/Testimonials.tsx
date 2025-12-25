"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "AI Hub has completely transformed our workflow. The curated tools help us automate repetitive tasks and save hours every week.",
  },
  {
    name: "Michael Rodriguez",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "I discovered multiple AI tools that boosted my development productivity. The insights are always reliable and well-explained.",
  },
  {
    name: "Emily Watson",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "A perfect platform for exploring AI. Clean UI, trustworthy reviews, and well-categorized tool breakdowns.",
  },
];

export default function Testimonials() {
  return (
  <section className="w-full py-20 relative">
  <div className="max-w-5xl mx-auto px-4">
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2
        className="
          text-4xl font-bold tracking-tight
          text-slate-900
          dark:text-white
        "
      >
        What Our Users Say
      </h2>
      <p
        className="
          mt-3 text-lg
          text-slate-600
          dark:text-gray-300
        "
      >
        Trusted by thousands of professionals across industries
      </p>
    </div>

    {/* GRID */}
    <div className="grid gap-10 md:grid-cols-3">
      {testimonials.map((t, idx) => (
        <Card
          key={idx}
          className="
            rounded-3xl overflow-hidden
            backdrop-blur-xl

            /* ---------- LIGHT MODE ---------- */
            bg-white
            border border-slate-200
            shadow-[0_12px_30px_rgba(15,23,42,0.08)]
            hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]

            /* ---------- DARK MODE (UNCHANGED) ---------- */
            dark:bg-white/5
            dark:border-white/20
            dark:shadow-[0_8px_25px_rgba(0,0,0,0.25)]
            dark:hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)]

            transition-all duration-500
            hover:-translate-y-1
          "
        >
          <CardContent className="p-8 flex flex-col gap-6 relative">
            
            {/* Subtle Quote Watermark */}
            <Quote
              className="
                absolute w-20 h-20 -top-4 -left-3
                text-slate-200
                dark:text-white/10
              "
            />

            {/* User Section */}
            <div
              className="
                flex items-center gap-4 pb-4
                border-b border-slate-200
                dark:border-white/20
                relative z-10
              "
            >
              <div
                className="
                  w-12 h-12 rounded-full overflow-hidden
                  border border-slate-300
                  dark:border-white/30
                  shadow-sm
                "
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <h4 className="font-semibold text-slate-900 dark:text-white">
                {t.name}
              </h4>
            </div>

            {/* Testimonial Text */}
            <p
              className="
                text-sm leading-relaxed relative z-10
                text-slate-700
                dark:text-gray-200
              "
            >
              {t.text}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

  );
}
