"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pb-10 overflow-hidden">
      <div className="px-6">
        <div
          className="
        rounded-3xl
        p-10 md:p-14
        backdrop-blur-xl

        /* ---------- LIGHT MODE ---------- */
        bg-white/80
        border border-blue-200/60
        shadow-[0_20px_50px_rgba(15,23,42,0.08)]

        /* ---------- DARK MODE (UNCHANGED) ---------- */
        dark:bg-black/70
        dark:border-white/10
      "
        >
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Logo + Description */}
            <div>
              <Link href="/" className="inline-block mb-4" aria-label="ai review insider home">
                {/* Light mode logo */}
                <Image
                  src="/logo-light.svg"
                  alt="ai review insider"
                  width={160}
                  height={48}
                  className="block dark:hidden object-contain"
                />

                {/* Dark mode logo */}
                <Image
                  src="/logo-dark.svg"
                  alt="ai review insider"
                  width={160}
                  height={48}
                  className="hidden dark:block object-contain"
                />
              </Link>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                Your trusted source for AI tools, news, and exclusive insights.
                Stay ahead with insights and guidance in the AI revolution.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/ai-tools", label: "AI Tools Directory" },
                  { href: "/news", label: "Latest News" },
                  { href: "/articles", label: "Articles" },
                  { href: "/reviews", label: "Reviews & Guides" },
                  { href: "/submit-tool", label: "Submit a Tool" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="
                    text-slate-600 dark:text-gray-300
                    hover:text-blue-600 dark:hover:text-white
                    transition
                  "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                Categories
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  ["content-creation", "Content Creation"],
                  ["technical", "Code & Development"],
                  ["design-art", "Design & Art"],
                  ["business", "Business & Productivity"],
                  ["data-analytics", "Data & Analytics"],
                ].map(([slug, label]) => (
                  <li key={slug}>
                    <Link
                      href={`/ai-tools?category=${slug}`}
                      className="
                    text-slate-600 dark:text-gray-300
                    hover:text-blue-600 dark:hover:text-white
                    transition
                  "
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
           <div>
  <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
    Connect With Us
  </h3>

  <div className="flex gap-4 mb-5">
    {/* X (Twitter) */}
    <Link
      href="https://x.com/aireviewinsider"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="X / Twitter - AI Review Insider"
      className="
        p-2 rounded-full
        flex items-center justify-center
        transition

        /* LIGHT MODE */
        bg-blue-50
        border border-blue-200
        text-blue-600
        hover:bg-blue-600 hover:text-white

        /* DARK MODE */
        dark:bg-white/10
        dark:hover:bg-white/20
        dark:border-white/10
        dark:text-white
        dark:backdrop-blur-xl
      "
    >
      <Twitter className="w-5 h-5" />
    </Link>

    {/* LinkedIn */}
    <Link
      href="https://www.linkedin.com/company/aireviewinsider/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn - AI Review Insider"
      className="
        p-2 rounded-full
        flex items-center justify-center
        transition

        /* LIGHT MODE */
        bg-blue-50
        border border-blue-200
        text-blue-600
        hover:bg-blue-600 hover:text-white

        /* DARK MODE */
        dark:bg-white/10
        dark:hover:bg-white/20
        dark:border-white/10
        dark:text-white
        dark:backdrop-blur-xl
      "
    >
      <Linkedin className="w-5 h-5" />
    </Link>

    {/* Reddit */}
    <Link
      href="https://www.reddit.com/r/AiReviewInsiderHQ/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reddit - AI Review Insider"
      className="
        p-2 rounded-full
        flex items-center justify-center
        transition

        /* LIGHT MODE */
        bg-blue-50
        border border-blue-200
        text-blue-600
        hover:bg-blue-600 hover:text-white

        /* DARK MODE */
        dark:bg-white/10
        dark:hover:bg-white/20
        dark:border-white/10
        dark:text-white
        dark:backdrop-blur-xl
      "
    >
     <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M22 12.18c0-4.35-3.53-7.88-7.88-7.88-1.09 0-2.12.22-3.05.62L9.5 3.5 8 8.03C6.88 8.34 5.87 8.9 5 9.66 3.08 11.41 2 13.6 2 16c0 1.88.72 3.6 2 4.9 1.3 1.3 3.02 2 4.9 2h8.3c4.35 0 7.88-3.52 7.88-7.88 0-1.74-.53-3.35-1.69-4.62C22 12.21 22 12.2 22 12.18zM8.5 14.1c.83 0 1.5.67 1.5 1.5S9.33 17.1 8.5 17.1 7 16.43 7 15.6 7.67 14.1 8.5 14.1zm7 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S14 16.43 14 15.6s.67-1.5 1.5-1.5zM19 9.5c-.83 0-1.5-.67-1.5-1.5S18.17 6.5 19 6.5 20.5 7.17 20.5 8 19.83 9.5 19 9.5z" />
                  </svg>
    </Link>

    {/* Instagram */}
    <Link
      href="https://www.instagram.com/aireviewinsider"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram - AI Review Insider"
      className="
        p-2 rounded-full
        flex items-center justify-center
        transition

        /* LIGHT MODE */
        bg-blue-50
        border border-blue-200
        text-blue-600
        hover:bg-blue-600 hover:text-white

        /* DARK MODE */
        dark:bg-white/10
        dark:hover:bg-white/20
        dark:border-white/10
        dark:text-white
        dark:backdrop-blur-xl
      "
    >
      <Instagram className="w-5 h-5" />
    </Link>
  </div>

  <p className="text-sm text-slate-600 dark:text-gray-300">
    Follow us for daily AI insights and updates.
  </p>
</div>

          </div>

          {/* Divider */}
          <div className="mt-10 border-t border-blue-200/60 dark:border-white/10"></div>

          {/* Copyright */}
          <div className="pt-6 text-center text-sm text-slate-600 dark:text-gray-300">
            © {new Date().getFullYear()} AI Review Insider. All rights reserved. |{" "}
            <Link href="/privacy-policy" className="hover:text-blue-600 dark:hover:text-white">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/terms" className="hover:text-blue-600 dark:hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>

  );
}
