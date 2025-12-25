"use client";

import { useMemo, useState } from "react";
import LatestArticles from "@/components/Articles/LatestArticles";

export default function ArticlesClient({
  categories,
  articles,
}: {
  categories: any[];
  articles: any[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredArticles = useMemo(() => {
    if (selectedCategory === "all") return articles;

    return articles.filter((article: any) => {
      return article.category?._id === selectedCategory;
    });
  }, [articles, selectedCategory]);

  const selectedCategoryName = useMemo(() => {
    if (selectedCategory === "all") return "all";
    const found = categories.find((c: any) => c._id === selectedCategory);
    return found?.name || "all";
  }, [categories, selectedCategory]);

  return (
    <LatestArticles
      categories={categories}
      articles={filteredArticles}
      selectedCategory={selectedCategory}
      onSelectCategory={setSelectedCategory}
      selectedCategoryName={selectedCategoryName}
    />
  );
}
