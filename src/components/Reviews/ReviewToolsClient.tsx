"use client";
import ReviewToolsList from "./ReviewToolsList";

export default function ReviewToolsClient({
  tools,
  categories,
}: {
  tools: any[];
  categories: any[];
}) {
  return (
    <div>
      <ReviewToolsList tools={tools}  categories={categories} />
    </div>
  );
}
