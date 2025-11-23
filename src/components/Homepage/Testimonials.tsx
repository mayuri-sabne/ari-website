"use client";

// import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

// ----------------------
// Types (optional but clean)
// ----------------------
interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "AI Hub has been a game-changer for our marketing team. The curated tools and exclusive deals have saved us both time and money while significantly improving our campaign performance.",
  },
  {
    name: "Michael Rodriguez",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "The latest AI news and tool reviews on AI Hub keep me ahead of the curve in my development work. I've discovered several tools that have revolutionized my coding workflow.",
  },
  {
    name: "Emily Watson",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "As a creative professional, AI Hub's curated selection of AI design tools has opened up new possibilities for my projects. The exclusive discounts are an added bonus!",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 relative">
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            What Our Users Say
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-3 text-lg">
            Join thousands of professionals who trust AI Hub for their AI needs
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              className="
                rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl
                border border-transparent
                bg-gradient-to-br
                from-blue-300/40
                via-blue-500/25
                to-blue-700/30
                shadow-[0_0_20px_rgba(96,165,250,0.25),0_0_28px_rgba(59,130,246,0.20)]
                hover:shadow-[0_0_30px_rgba(147,197,253,0.45),0_0_40px_rgba(59,130,246,0.35)]
                transition duration-500
              "
            >
              <CardContent className="p-8 flex flex-col gap-6 relative">
                {/* Faint watermark quote */}
                <Quote className="absolute text-blue-300/20 dark:text-blue-400/15 w-24 h-24 -top-6 -left-4" />

                {/* User Info */}
                <div
                  className="
                    flex items-center gap-4 pb-4 border-b
                    border-white/40 dark:border-white/10 relative z-10
                  "
                >
                  <div className="relative w-12 h-12">
                    {/* <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="
                        rounded-full object-cover
                        ring-2 ring-blue-300/80 dark:ring-blue-400/70
                      "
                    /> */}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {t.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed relative z-10">
                  “{t.text}”
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
