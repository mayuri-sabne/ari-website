"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { ThemeToggle } from "../ThemeToggle"
import { useEffect, useRef, useState } from "react"

export function Header() {
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowHeader(false) // scrolling down
      } else {
        setShowHeader(true) // scrolling up
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
<header
  className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
    showHeader ? "translate-y-0" : "-translate-y-full"
  } backdrop-blur-md bg-white/70 dark:bg-black/40 border-b border-white/10`}
>
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
    
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <span className="font-extrabold text-gray-900 dark:text-white text-xl tracking-tight">
        Ai{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1da27e] to-blue-500">
          Hub
        </span>
      </span>
    </div>

    {/* Navigation */}
    <nav className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300 font-medium">
      {[
        { href: "/", label: "Home" },
        { href: "/ai-tools", label: "AI Tools" },
        { href: "/news", label: "AI News" },
        { href: "/coupons", label: "Coupons" },
        { href: "/reviews", label: "Reviews" },
        { href: "/articles", label: "Articles" },
        { href: "/contact", label: "Contact" },
      ].map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1da27e] hover:to-blue-500 hover:drop-shadow-[0_0_6px_rgba(29,162,126,0.6)]"
        >
          {item.label}
        </Link>
      ))}
    </nav>

    {/* CTA + Theme Toggle */}
    <div className="flex items-center space-x-4">
      <ThemeToggle />

      {/* Login Button (subtle style) */}
      <Button
        asChild
        variant="outline"
        className="rounded-full px-5 border border-[#1da27e]/60 text-[#1da27e] hover:border-blue-500 hover:text-blue-500 transition-colors backdrop-blur-sm"
      >
        <Link href="/login">Login</Link>
      </Button>

      {/* Join Free (highlighted) */}
      <Button
        asChild
        className="rounded-full px-6 bg-gradient-to-r from-[#1da27e] to-blue-600 text-white shadow-md hover:shadow-lg hover:scale-[1.05] transition-transform"
      >
        <Link href="/signup">Join Free</Link>
      </Button>
    </div>
  </div>
</header>


  )
}

// export function Header() {
//     return (
//         <header className="w-full border-b shadow-sm bg-white">
//             <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

//                 <div className="flex items-center space-x-2">
//                     <span className="font-bold text-gray-600 text-lg">Ai Hub</span>
//                 </div>

//                 <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
//                     <Link href="/">Home</Link>
//                     <Link href="/tools">AI Tools</Link>
//                     <Link href="/news">AI News</Link>
//                     <Link href="/coupons">Coupons</Link>
//                     <Link href="/reviews">Reviews</Link>
//                     <Link href="/articles">Articles</Link>
//                     <Link href="/contact">Contact</Link>
//                 </nav>

//                 <Button
//                     asChild
//                     className="bg-gradient-to-br from-blue-500 to-green-600 text-white hover:opacity-90"
//                 >
//                     <Link href="/signup">Join Free</Link>
//                 </Button>

//             </div>
//         </header>
//     )
// }
