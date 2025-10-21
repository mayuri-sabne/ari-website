"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface Coupon {
    title: string;
    description: string;
    discount: string;
    tag: string;
    couponCode: string;
    buttonText: string;
    img: string;
}

const coupons: Coupon[] = [
    {
        title: "ChatGPT Plus",
        description: "Get premium access to GPT-4 with priority access and faster response times.",
        discount: "50% OFF",
        tag: "Limited Time",
        couponCode: "AIHUB50",
        buttonText: "Activate Offer",
        img: "/logosmall.png",
    },
    {
        title: "Midjourney Pro",
        description: "Professional AI image generation with unlimited creations and commercial usage rights.",
        discount: "30% OFF",
        tag: "This Week",
        couponCode: "CREATE30",
        buttonText: "Activate Offer",
        img: "/logosmall.png",
    },
    {
        title: "GitHub Copilot",
        description: "AI-powered coding assistant that helps you write code faster with intelligent suggestions.",
        discount: "25% OFF",
        tag: "New Users",
        couponCode: "CODE25",
        buttonText: "Activate Offer",
        img: "/logosmall.png",
    },
      {
        title: "Midjourney Pro",
        description: "Professional AI image generation with unlimited creations and commercial usage rights.",
        discount: "30% OFF",
        tag: "This Week",
        couponCode: "CREATE30",
        buttonText: "Activate Offer",
        img: "/logosmall.png",
    },
    {
        title: "GitHub Copilot",
        description: "AI-powered coding assistant that helps you write code faster with intelligent suggestions.",
        discount: "25% OFF",
        tag: "New Users",
        couponCode: "CODE25",
        buttonText: "Activate Offer",
        img: "/logosmall.png",
    },
    {
        title: "ChatGPT Plus",
        description: "Get premium access to GPT-4 with priority access and faster response times.",
        discount: "50% OFF",
        tag: "Limited Time",
        couponCode: "AIHUB50",
        buttonText: "Activate Offer",
        img: "/logosmall.png",
    },
];

export default function CouponCardGrid() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const handleCopy = async (code: string) => {
        await navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-2 dark:text-white">
    Save Big on the Best AI Tools
  </h2>
  <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
    Exclusive discount codes and limited-time offers on premium AI software
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {coupons.map((coupon, idx) => (
      <Card
        key={idx}
        className="relative rounded-2xl shadow-md 
                   hover:shadow-[0_0_18px_rgba(0,255,180,0.4)] 
                   transition-all duration-500 group p-[2px] 
                   bg-white dark:bg-gray-900"
      >
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-2xl 
                        bg-gradient-to-r from-green-400 via-blue-500 to-green-400 
                        bg-[length:200%_200%] animate-gradient-x 
                        opacity-0 group-hover:opacity-100 
                        transition-opacity duration-500 pointer-events-none"></div>

        <CardContent className="relative z-10 p-5 flex flex-col h-full rounded-2xl bg-white dark:bg-gray-900">
          {/* Top section with icon + discount */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Image
                src={coupon.img}
                alt={coupon.title}
                width={32}
                height={32}
                className="rounded-md"
              />
              <h3 className="font-semibold text-lg dark:text-gray-100">{coupon.title}</h3>
            </div>
            <div className="text-right">
              <p
                className="font-bold text-lg text-green-600 
                           group-hover:text-transparent bg-clip-text 
                           group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-500 
                           transition-all duration-500"
              >
                {coupon.discount}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{coupon.tag}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
            {coupon.description}
          </p>

          {/* Coupon Code */}
          <div
            className="flex items-center justify-between border rounded-lg 
                       px-3 py-2 mb-3 cursor-pointer 
                       hover:bg-gray-50 dark:hover:bg-gray-800 
                       transition-colors"
            onClick={() => handleCopy(coupon.couponCode)}
          >
            <span className="font-mono font-medium dark:text-white">
              {coupon.couponCode}
            </span>
            <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>

          {copiedCode === coupon.couponCode && (
            <p className="text-green-600 text-xs mb-2">✅ Copied!</p>
          )}

          {/* Button */}
          <Button
            className="w-full mt-auto text-white 
                       bg-gradient-to-r from-green-500 to-blue-500 
                       bg-[length:200%_200%] group-hover:animate-gradient-x
                       shadow-md hover:shadow-[0_0_15px_rgba(0,255,180,0.6)] 
                       transition-all duration-500"
          >
            {coupon.buttonText}
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
</section>

    );
}
