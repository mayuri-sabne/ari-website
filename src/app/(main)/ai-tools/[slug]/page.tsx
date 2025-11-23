import { fetchAPI } from "@/lib/api";
import OfferCard from "@/components/ai-tools/OfferCard";
import ComparisonLayout from "@/components/ai-tools/Comparison";

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export default async function SingleToolPage({ params }: ToolPageProps) {
  // FIX: Await params before using its properties
  const { slug } = await params;

  const tool = await fetchAPI(`/tools/slug/${slug}`);

  if (!tool) {
    return (
      <div className="text-center text-red-500 py-20">
        Tool not found
      </div>
    );
  }

  return (
    <div className="px-4 md:px-20 py-10">
      <OfferCard tool={tool} />
      <ComparisonLayout tool={tool} />
    </div>
  );
}
