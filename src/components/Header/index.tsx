"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ThemeToggle";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

// Clerk
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export function Header() {
  const [ready, setReady] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setReady(true);

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

  if (!ready) return null;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"
          }
    /* DARK MODE */
    dark:bg-black/80 dark:border-b dark:border-white/10 dark:backdrop-blur-xl

    /* LIGHT MODE — clean glass white + gold border */
    bg-white/70 backdrop-blur-xl  shadow-[0_2px_20px_rgba(0,0,0,0.05)]
  `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-8">

          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="h-10 flex items-center overflow-visible"
              aria-label="AI Review Insider home"
            >
              {/* Light mode logo */}
              <Image
                src="/logo-light.svg"
                alt="AI Review Insider"
                width={160}
                height={48}
                className="h-18 ml-[-10] w-auto object-contain block dark:hidden"
                priority
              />

              {/* Dark mode logo */}
              <Image
                src="/logo-dark.svg"
                alt="AI Review Insider"
                width={160}
                height={48}
                className="h-20 w-auto object-contain hidden dark:block"
                priority
              />
            </Link>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-9 font-medium">
            {/* Light Mode Text + Hover Golden */}
            <Link href="/" className="
  relative text-slate-700 font-medium
  transition-colors duration-300
  hover:text-blue-700

  dark:text-gray-300 dark:hover:text-blue-400
"
            >Home</Link>

            <Link href="/ai-tools" className="
  relative text-slate-700 font-medium
  transition-colors duration-300
  hover:text-blue-700

  dark:text-gray-300 dark:hover:text-blue-400
"
            >AI Tools</Link>

            <Link href="/news" className="
  relative text-slate-700 font-medium
  transition-colors duration-300
  hover:text-blue-700

  dark:text-gray-300 dark:hover:text-blue-400
"
            >
              AI News
            </Link>

            <Link href="/reviews" className="
  relative text-slate-700 font-medium
  transition-colors duration-300
  hover:text-blue-700

  dark:text-gray-300 dark:hover:text-blue-400
"
            >Reviews</Link>

            <Link href="/articles" className="
  relative text-slate-700 font-medium
  transition-colors duration-300
  hover:text-blue-700

  dark:text-gray-300 dark:hover:text-blue-400
"
            >
              Articles
            </Link>

            <Link href="/about-us" className="
  relative text-slate-700 font-medium
  transition-colors duration-300
  hover:text-blue-700

  dark:text-gray-300 dark:hover:text-blue-400
"
            >About Us</Link>
          </nav>

          {/* Buttons + Theme Toggle */}
          <div className="flex items-center space-x-4">

            <ThemeToggle />

            {/* AUTH SECTION — LOGGED OUT */}
            <SignedOut>

              {/* Login Button */}
              <Button
                asChild
                className="
  rounded-full px-6 py-2 font-semibold
  text-white
  bg-gradient-to-r from-blue-600 to-cyan-600
  shadow-[0_6px_20px_rgba(59,130,246,0.35)]
  transition-all duration-300
  hover:from-blue-700 hover:to-cyan-700
  hover:shadow-[0_10px_30px_rgba(59,130,246,0.45)]
  active:scale-95

  dark:bg-[#0d111a] dark:text-white dark:shadow-none
"
              >
                <SignInButton mode="modal" />
              </Button>

              {/* Signup Button */}
              <Button
                asChild
                className="
  rounded-full px-6 py-2 font-medium
  text-blue-700
  border border-blue-300
  bg-white
  transition-all duration-300
  hover:bg-white
  hover:text-black hover:border-transparent
  hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)]
  active:scale-95

  dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black
"
              >
                <SignUpButton mode="modal" />
              </Button>
            </SignedOut>

            {/* User Avatar — Logged In */}
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10",
                  },
                }}
              />
            </SignedIn>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-gray-900 dark:text-white p-2"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="
        lg:hidden

        /* DARK MODE */
        dark:bg-black/95 dark:border-t dark:border-white/10

        /* LIGHT MODE */
        bg-white/95 backdrop-blur-xl border-t border-yellow-300/40
        text-gray-900
        px-6 py-4 space-y-4
      "
          >
            {[
              { href: "/", label: "Home" },
              { href: "/ai-tools", label: "AI Tools" },
              { href: "/news", label: "AI News" },
              { href: "/reviews", label: "Reviews" },
              { href: "/articles", label: "Articles" },
              { href: "/about-us", label: "About Us" },
              { href: "/submit-tool", label: "Submit a Tool" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-lg py-1 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-blue-400 transition"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Auth Buttons */}
            <SignedOut>
              <SignInButton mode="modal">
                <div className="
  rounded-full px-6 py-2 font-semibold
  text-white
  bg-gradient-to-r from-blue-600 to-cyan-600
  shadow-[0_6px_20px_rgba(59,130,246,0.35)]
  transition-all duration-300
  hover:from-blue-700 hover:to-cyan-600
  hover:shadow-[0_10px_30px_rgba(59,130,246,0.45)]
  active:scale-95

  dark:bg-[#0d111a] dark:text-white dark:shadow-none
"
                >
                  Login
                </div>
              </SignInButton>

              <SignUpButton mode="modal">
                <div className="
  rounded-full px-6 py-2 font-medium
  text-blue-700
  border border-blue-300
  bg-white
  transition-all duration-300
  hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600
  hover:text-white hover:border-transparent
  hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)]
  active:scale-95

  dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black
"
                >
                  Join Free
                </div>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="pt-4">
                <UserButton />
              </div>
            </SignedIn>
          </div>
        )}
      </header>

    </>
  );
}
