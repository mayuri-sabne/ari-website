// import { fetchAPI } from "@/lib/api";
// import type { MetadataRoute } from "next";

// const SITE_URL =
//   process.env.NEXT_PUBLIC_SITE_URL || "https://aireviewinsider.com";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const [tools, articles, authors, news] = await Promise.all([
//     fetchAPI("/tools"),
//     fetchAPI("/articles"),
//     fetchAPI("/authors"),
//     fetchAPI("/news"),
//   ]);

//   /* -----------------------------
//      Static pages
//   ----------------------------- */
//   const staticRoutes: MetadataRoute.Sitemap = [
//     "",
//     "/about-us",
//     "/articles",
//     "/ai-tools",
//     "/news",
//     "/reviews",
//     "/submit-tool",
//     "/our-protocol",
//   ].map((route) => ({
//     url: `${SITE_URL}${route}`,
//     lastModified: new Date(),
//     changeFrequency: "weekly",
//     priority: route === "" ? 1.0 : 0.8,
//   }));

//   /* -----------------------------
//      Dynamic routes
//   ----------------------------- */
//   const toolRoutes = tools.map((tool: any) => ({
//     url: `${SITE_URL}/ai-tools/${tool.slug}`,
//     lastModified: tool.updatedAt || new Date(),
//     changeFrequency: "weekly",
//     priority: 0.9,
//   }));

//   const articleRoutes = articles.map((article: any) => ({
//     url: `${SITE_URL}/articles/${article.slug}`,
//     lastModified: article.updatedAt || new Date(),
//     changeFrequency: "weekly",
//     priority: 0.8,
//   }));

//   const newsRoutes = news.map((item: any) => ({
//     url: `${SITE_URL}/news/${item.slug}`,
//     lastModified: item.updatedAt || new Date(),
//     changeFrequency: "daily",
//     priority: 0.7,
//   }));

//   const authorRoutes = authors.map((author: any) => ({
//     url: `${SITE_URL}/about-us/${author.slug}`,
//     lastModified: author.updatedAt || new Date(),
//     changeFrequency: "monthly",
//     priority: 0.6,
//   }));

//   return [
//     ...staticRoutes,
//     ...toolRoutes,
//     ...articleRoutes,
//     ...newsRoutes,
//     ...authorRoutes,
//   ];
// }

import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://aireviewinsider.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let tools: any[] = [];
  let articles: any[] = [];
  let news: any[] = [];
  let authors: any[] = [];

  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (API_URL) {
      const [t, a, n, au] = await Promise.all([
        fetch(`${API_URL}/tools`).then((r) => r.json()),
        fetch(`${API_URL}/articles`).then((r) => r.json()),
        fetch(`${API_URL}/news`).then((r) => r.json()),
        fetch(`${API_URL}/authors`).then((r) => r.json()),
      ]);

      tools = t ?? [];
      articles = a ?? [];
      news = n ?? [];
      authors = au ?? [];
    }
  } catch (error) {
    console.warn("⚠️ Sitemap API fetch failed, using static routes only");
  }

  /* ---------- Static routes ---------- */
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about-us",
    "/articles",
    "/ai-tools",
    "/news",
    "/reviews",
    "/submit-tool",
    "/our-protocol",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  /* ---------- Dynamic routes ---------- */
  const toolRoutes = tools.map((tool: any) => ({
    url: `${SITE_URL}/ai-tools/${tool.slug}`,
    lastModified: tool.updatedAt || new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const articleRoutes = articles.map((article: any) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    lastModified: article.updatedAt || new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const newsRoutes = news.map((item: any) => ({
    url: `${SITE_URL}/news/${item.slug}`,
    lastModified: item.updatedAt || new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  const authorRoutes = authors.map((author: any) => ({
    url: `${SITE_URL}/about-us/${author.slug}`,
    lastModified: author.updatedAt || new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...toolRoutes,
    ...articleRoutes,
    ...newsRoutes,
    ...authorRoutes,
  ];
}
