"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ThemeToggle";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [ready, setReady] = useState(false); // ← prevents hydration mismatch
  const [showHeader, setShowHeader] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setReady(true); // now client and server render same initial HTML

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 90) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!ready) return null; // prevents mismatched SSR/CSR

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } bg-black/80 backdrop-blur-xl border-b border-white/10`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-8">

          {/* Logo */}
          <div className="flex items-center">
            <span className="font-extrabold text-white text-2xl tracking-tight">
              ARI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-9 text-gray-300 font-medium">

            <Link href="/" className="hover:text-blue-400 transition">Home</Link>

            <Link href="/ai-tools" className="hover:text-blue-400 transition">
              AI Tools
            </Link>

            {/* FIXED – Coming Soon (No shifting) */}
            <div className="relative">
              <Link href="/news" className="hover:text-blue-400 transition block">
                AI News
              </Link>
              <span className="absolute left-0 top-6 text-[9px] opacity-50">
                Coming Soon
              </span>
            </div>

            <Link href="/coupons" className="hover:text-blue-400 transition">
              Coupons
            </Link>

            <Link href="/reviews" className="hover:text-blue-400 transition">
              Reviews
            </Link>

            {/* FIXED – Coming Soon */}
            <div className="relative">
              <Link href="/articles" className="hover:text-blue-400 transition block">
                Articles‎ ‎
              </Link>
              <span className="absolute left-0 top-6 text-[9px] opacity-50">
                Coming Soon
              </span>
            </div>

            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </nav>

          {/* Buttons + Toggle */}
          <div className="flex items-center space-x-4">

            <ThemeToggle />

            {/* FIXED LOGIN BUTTON — No movement, correct shades */}
            <Button
              asChild
              className="
                rounded-full px-6 py-2
                bg-[#0d111a] text-gray-200
                backdrop-blur-md
                border border-transparent border-b-gray-600
                transition-all duration-300
                hover:border hover:border-white hover:bg-[#131a27]
                active:scale-95
              "
            >
              <Link href="/login">Login</Link>
            </Button>

            {/* FIXED JOIN BUTTON – starts with white border, hover removes it */}
            <Button
              asChild
              className="
                rounded-full px-6 py-2 
                border border-white text-white 
                bg-transparent
                transition-all duration-300
                hover:bg-white hover:text-black hover:border-transparent
                active:scale-95
              "
            >
              <Link href="/signup">Join Free</Link>
            </Button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>
        </div>

        { /* MOBILE MENU SAME AS BEFORE */ }
        {mobileOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-4">
            {[
              { href: "/", label: "Home" },
              { href: "/ai-tools", label: "AI Tools" },
              { href: "/news", label: "AI News • Coming Soon" },
              { href: "/coupons", label: "Coupons" },
              { href: "/reviews", label: "Reviews" },
              { href: "/articles", label: "Articles • Coming Soon" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-300 text-lg py-1 hover:text-blue-400"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}

      </header>
    </>
  )
}
