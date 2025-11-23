import { Card, CardContent } from "@/components/ui/card";
import {
  Bot,
  HeartPulse,
  BriefcaseBusiness,
  ShieldCheck,
  Car,
  Palette,
} from "lucide-react";

const categories = [
  { name: "AI Technology", count: 48, icon: Bot },
  { name: "Healthcare", count: 36, icon: HeartPulse },
  { name: "Business", count: 42, icon: BriefcaseBusiness },
  { name: "Security", count: 29, icon: ShieldCheck },
  { name: "Automotive", count: 24, icon: Car },
  { name: "Creative AI", count: 31, icon: Palette },
];

export default function CategorySection() {
  return (
    <div className="py-16 px-6 max-w-6xl mx-auto text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
        Popular Categories
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-10">
        Explore articles by your interests
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <Card
              key={idx}
              className="group relative rounded-2xl border border-gray-200 dark:border-gray-700
             bg-white dark:bg-[#121826] shadow-sm transition-all duration-500 
             hover:scale-105 hover:shadow-xl
             hover:bg-gradient-to-br hover:from-[#d6fff2] hover:via-[#e0f2ff] hover:to-[#d6f5ff]
             dark:hover:from-[#102a43] dark:hover:via-[#184a6a] dark:hover:to-[#1a6f8f]"
            >
              <CardContent className="p-6 flex flex-col items-center space-y-3">
                {/* Icon (keeps simple neutral bg) */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl
                    bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200
                    transition-colors duration-500 group-hover:bg-white/70 group-hover:dark:bg-black/40">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Text */}
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cat.count} Articles
                </p>
              </CardContent>
            </Card>

          );
        })}
      </div>
    </div>
  );
}
