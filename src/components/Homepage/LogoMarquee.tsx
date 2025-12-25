"use client";

import Image from "next/image";

const logos = ["/ai1.png", "/ai2.png", "/ai3.png", "/ai4.png", "/ai5.png", "/ai6.png"];
const LOOP_LOGOS = [...logos, ...logos];

function VerticalRow({ speed }: { speed: number }) {
  return (
    <div className="h-120 w-full overflow-hidden">
      <div
        className="vertical-marquee flex flex-col items-center gap-6"
        style={{ animationDuration: `${speed}s` }}
      >
        {LOOP_LOGOS.map((logo, i) => (
          <Image
            key={i}
            src={logo}
            alt="logo"
            width={120}
            height={120}
            className="opacity-80 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div className="w-full flex flex-row gap-10 pr-6 py-10">
      <VerticalRow speed={18} />
      <VerticalRow speed={26} />
      <VerticalRow speed={34} />
    </div>
  );
}
