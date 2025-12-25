"use client";

import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";

type SingleArticleProps = {
  article: any;
};

export default function SingleArticle({ article }: SingleArticleProps) {
  const fullImage = article.thumbnail
    ? `${process.env.NEXT_PUBLIC_UPLOADS_URL}${article.thumbnail}`
    : "/default-article.jpg";

      const profile = article.author.profileImage
    ? `${process.env.NEXT_PUBLIC_UPLOADS_URL}${article.author.profileImage}`
    : "/default-article.jpg";

  const authorName = article.author?.name || "AI Review Editor";
  const categoryName = article.category?.name || "General";
  const publishedDate = article.createdAt
    ? new Date(article.createdAt).toLocaleDateString()
    : "";

  const authorInitials = authorName
    .split(" ")
    .map((p: string) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
<article className="max-w-4xl mx-auto py-8 space-y-8
  text-slate-900 dark:text-slate-100">
      {/* Top meta: category, title, author, date */}
      <header className="space-y-4">
      <div
  className="
    inline-flex items-center rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md
    border border-emerald-300/40
    bg-emerald-50 text-emerald-700

    dark:border-white/10
    dark:bg-white/5
    dark:text-slate-100
  "
>
  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2 dark:bg-emerald-400" />
  {categoryName}
</div>

<h1 className="text-3xl md:text-5xl font-bold leading-tight
  text-slate-900 dark:text-slate-50">
  {article.title}
</h1>


<div className="flex flex-wrap items-center gap-4 text-sm
  text-slate-600 dark:text-slate-300">

  {/* Author */}
  <Link
    href={`/about-us/${article.author?.slug}`}
    className="flex items-center gap-3 group"
  >
    {/* Avatar */}
    <Avatar
      className="
        h-9 w-9 overflow-hidden
        border border-slate-300
        bg-white

        dark:border-white/15
        dark:bg-white/5
        dark:backdrop-blur-md

        transition
        group-hover:ring-2 group-hover:ring-blue-500/40
      "
    >
      {article.author?.profileImage ? (
        <img
          src={profile}
          alt={authorName}
          className="h-full w-full object-cover"
        />
      ) : (
        <AvatarFallback
          className="
            text-xs font-semibold
            text-slate-700 bg-slate-200
            dark:text-slate-100 dark:bg-slate-700
          "
        >
          {authorInitials}
        </AvatarFallback>
      )}
    </Avatar>

    {/* Name + Role */}
    <div className="flex flex-col">
      <span
        className="
          font-medium
          text-slate-900
          dark:text-slate-100
          group-hover:text-blue-600 dark:group-hover:text-sky-400
          transition
        "
      >
        {authorName}
      </span>

      {article.author?.role && (
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {article.author.role}
        </span>
      )}
    </div>
  </Link>

  {/* Dot + date */}
  {publishedDate && (
    <>
      <span className="h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-500" />
      <span className="text-sm text-slate-500 dark:text-slate-300">
        {publishedDate}
      </span>
    </>
  )}
</div>

      </header>

      {/* Banner image with glass frame */}
<div
  className="
    relative w-full overflow-hidden rounded-3xl border
    bg-white shadow-[0_18px_45px_rgba(15,23,42,0.15)]

    dark:border-white/10
    dark:bg-slate-900/60
    dark:backdrop-blur-xl
    dark:shadow-[0_18px_45px_rgba(15,23,42,0.7)]
  "
>
        <div className="relative h-72 md:h-96 w-full">
          <Image
            src={fullImage}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content – single glassy container */}
<section
  className="
    rounded-3xl border p-5 md:p-8

    /* LIGHT MODE */
    bg-white
    border-slate-200
    shadow-[0_18px_45px_rgba(15,23,42,0.12)]

    /* DARK MODE */
    dark:border-white/10
    dark:bg-slate-900/70
    dark:backdrop-blur-xl
    dark:shadow-[0_18px_45px_rgba(15,23,42,0.65)]
  "
>
    <div
  className={cn(
    "prose max-w-none",

    /* LIGHT MODE */
    "prose-headings:text-slate-900",
    "prose-p:text-slate-700",
    "prose-a:text-blue-600 hover:prose-a:text-blue-700",
    "prose-strong:text-slate-900",
    "prose-code:bg-slate-100 prose-code:text-slate-800",
    "prose-img:rounded-2xl prose-img:shadow-lg",

    /* DARK MODE */
    "dark:prose-invert",
    "dark:prose-headings:text-slate-50",
    "dark:prose-p:text-slate-200",
    "dark:prose-a:text-sky-400",
    "dark:prose-strong:text-slate-50"
  )}
  dangerouslySetInnerHTML={{ __html: article.content }}
/>

      </section>
    </article>
  );
}
