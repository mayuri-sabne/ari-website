"use client";

import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Github, MessageCircle, Icon as LucideIcon } from "lucide-react";

export default function Footer() {
  return (
  <footer className="relative py-16">
      {/* Gradient Glowing Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-transparent to-blue-500/20 blur-3xl" />
      </div>

      {/* Frosted / Glassy container */}
      <div className="max-w-7xl mx-auto px-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12">
          
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                AI Hub
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              Your trusted source for AI tools, news, and exclusive deals.  
              Empowering professionals with the latest in artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-green-500 transition" href="/tools">AI Tools Directory</Link></li>
              <li><Link className="hover:text-green-500 transition" href="/news">Latest News</Link></li>
              <li><Link className="hover:text-green-500 transition" href="/deals">Exclusive Deals</Link></li>
              <li><Link className="hover:text-green-500 transition" href="/reviews">Reviews & Guides</Link></li>
              <li><Link className="hover:text-green-500 transition" href="/submit-tool">Submit a Tool</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-green-500 transition" href="/categories/content-creation">Content Creation</Link></li>
              <li><Link className="hover:text-green-500 transition" href="/categories/code-dev">Code & Development</Link></li>
              <li><Link className="hover:text-green-500 transition" href="/categories/design">Design & Art</Link></li>
              <li><Link className="hover:text-green-500 transition" href="/categories/business">Business & Productivity</Link></li>
              <li><Link className="hover:text-green-500 transition" href="/categories/data">Data & Analytics</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              <Link href="https://twitter.com" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition"><Twitter className="w-5 h-5" /></Link>
              <Link href="https://linkedin.com" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition"><Linkedin className="w-5 h-5" /></Link>
              <Link href="https://github.com" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition"><Github className="w-5 h-5" /></Link>
              <Link href="https://discord.com" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-green-500 transition"><MessageCircle className="w-5 h-5" /></Link>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Follow us for daily AI updates and exclusive content.
            </p>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-8 border-t border-white/20 dark:border-gray-700 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} AI Hub. All rights reserved. |{" "}
          <Link href="/privacy" className="hover:text-green-500">Privacy Policy</Link> |{" "}
          <Link href="/terms" className="hover:text-green-500">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
