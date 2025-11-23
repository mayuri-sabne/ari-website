import { fetchAPI } from "@/lib/api";
import ToolCardCarousel from "@/components/ai-tools/Card";
import AiToolReviews from "@/components/ai-tools/Reviews";

export const metadata = {
  title: "Top AI Tools 2025 – Reviews, Ratings & Insights | Aireview Insider",
  description:
    "Explore expert reviews and real user insights for the best AI tools of 2025. Compare features, ratings, and performance metrics before you choose.",
  keywords:
    "AI tools, AI reviews, best AI software, AI productivity, AI comparison",
  openGraph: {
    title: "Top AI Tools 2025 – Reviews, Ratings & Insights | Aireview Insider",
    description:
      "Detailed reviews of the latest AI tools for writers, designers, developers, and businesses.",
    locale: "en_US",
    images: [
      {
        url: "https://aireviewinsider.com/og/ai-tools.jpg",
        width: 1200,
        height: 630,
        alt: "AI Tools Reviews – Aireview Insider",
      },
    ],
    url: "https://www.aireviewinsider.com/ai-tools",
    site_name: "Aireview Insider",
  },
};

export default async function AiToolsPage() {
  const tools = await fetchAPI("/tools/published");
  const sliderTools = await fetchAPI("/tools/published?slider=true&limit=10");

  return (
    <div className="px-6 md:px-20 py-10">
      <ToolCardCarousel tools={sliderTools} />
      <AiToolReviews tools={tools} />
    </div>
  );
}
