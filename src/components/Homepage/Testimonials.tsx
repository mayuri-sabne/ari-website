import { Card, CardContent } from "@/components/ui/card";
import { Quote, QuoteIcon } from "lucide-react";

const testimonials = [
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
  {/* Gradient spotlight background */}
  {/* <div className="absolute inset-0 bg-gradient-to-b from-green-100/60 via-blue-100/50 to-transparent 
                  dark:from-green-900/20 dark:via-blue-900/20 dark:to-transparent pointer-events-none"></div> */}

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
          className="rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl 
                     border border-transparent 
                     bg-gradient-to-br from-green-400/30 via-transparent to-blue-400/30 
                     shadow-[0_0_20px_rgba(34,197,94,0.15),0_0_25px_rgba(59,130,246,0.15)] 
                     hover:shadow-[0_0_25px_rgba(34,197,94,0.25),0_0_35px_rgba(59,130,246,0.25)] 
                     transition duration-500"
        >
          <CardContent className="p-8 flex flex-col gap-6 relative">
            {/* Faint background quote watermark */}
            <Quote className="absolute text-green-400/10 dark:text-blue-400/10 w-24 h-24 -top-6 -left-4" />

            {/* User Info */}
            <div className="flex items-center gap-4 pb-4 border-b border-white/40 dark:border-white/10 relative z-10">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-green-400/60 dark:ring-blue-400/60"
              />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{t.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="italic text-gray-800 dark:text-gray-200 text-sm leading-relaxed relative z-10">
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
