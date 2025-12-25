"use client";

import Image from "next/image";
import { Linkedin,Twitter } from "lucide-react";

interface AuthorProps {
  name: string;
  description?: string;
  profileImage?: string;
  areaOfExpertise?: string;
  roleAtARI?: string;
  linkedin?: string;
  x?: string;
}

export default function AuthorProfile({
  name,
  description,
  profileImage,
  areaOfExpertise,
  roleAtARI,
  linkedin,
  x,
}: AuthorProps) {
  
  return (
   <section className="relative max-w-5xl mx-auto px-6 py-20">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div
      className="
        absolute top-20 left-1/2 -translate-x-1/2 
        w-[85%] h-[70%]

        /* LIGHT MODE */
        bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)]

        /* DARK MODE */
        dark:bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.2),transparent_60%),
                radial-gradient(circle_at_bottom,rgba(245,208,97,0.15),transparent_70%)]

        blur-[120px] opacity-90
      "
    />
  </div>

<div
  className="
    rounded-3xl relative
    px-7 md:px-10 py-10
    backdrop-blur-2xl
    border

    /* LIGHT MODE */
    bg-white/80
    border-blue-200
    text-slate-900
    shadow-[0_20px_55px_rgba(59,130,246,0.18)]

    /* DARK MODE */
    dark:bg-transparent
    dark:bg-gradient-to-br
    dark:from-black/85
    dark:via-gray-900/70
    dark:to-black/90
    dark:border-gray-700/60
    dark:shadow-[0_0_45px_rgba(0,0,0,0.65)]
    dark:text-[#E9ECF4]
  "
>

    {/* Shine Layer */}
    <div
      className="
        absolute inset-0 pointer-events-none rounded-3xl
        bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_40%)]
        dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_40%)]
      "
    />

    <div className="relative flex flex-col lg:flex-row gap-10 items-center lg:items-start z-10">

      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <div
          className="
            absolute -inset-4 rounded-full
            bg-[radial-gradient(circle_at_30%_0%,rgba(59,130,246,0.25),transparent_55%)]
            dark:bg-[radial-gradient(circle_at_30%_0%,rgba(59,130,246,0.35),transparent_55%),
                     radial-gradient(circle_at_80%_80%,rgba(245,208,97,0.35),transparent_55%)]
            blur-2xl opacity-90
          "
        />

        <div
          className="
            relative h-40 w-40 md:h-48 md:w-48
            rounded-full overflow-hidden
            border
            shadow-[0_10px_35px_rgba(0,0,0,0.25)]

            /* LIGHT */
            bg-white border-blue-200

            /* DARK */
            dark:bg-black/40 dark:border-gray-600
            dark:shadow-[0_10px_35px_rgba(0,0,0,0.7)]
          "
        >
          <Image
            src={profileImage || "/default-author.png"}
            alt={name}
            fill
            className="object-cover"
            sizes="200px"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-5 text-center lg:text-left">

        {/* Tag */}
        <div className="flex justify-center lg:justify-start">
          <div
            className="
              inline-flex items-center gap-2 px-4 py-1.5
              rounded-full text-xs font-medium tracking-wide
              border backdrop-blur-md

              /* LIGHT */
              bg-blue-50 border-blue-200 text-blue-700

              /* DARK */
              dark:bg-black/40 dark:border-gray-600 dark:text-white
            "
          >
            <span className="h-2 w-2 rounded-full bg-blue-500 dark:bg-[#F5D061]" />
            Author • AI Review Insider
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {name}
        </h1>

        {/* Social */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              className="
                inline-flex items-center gap-2 px-5 py-2.5
                rounded-full text-sm font-medium transition

                /* LIGHT */
                bg-blue-600 text-white hover:bg-blue-700

                /* DARK */
                dark:bg-blue-100 dark:text-blue-900
              "
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          )}

          {x && (
            <a
              href={x}
              target="_blank"
              className="
                inline-flex items-center gap-2 px-5 py-2.5
                rounded-full text-sm font-medium transition

                /* LIGHT */
                bg-slate-900 text-white hover:bg-black

                /* DARK */
                dark:bg-yellow-100 dark:text-yellow-900
              "
            >
              <Twitter className="w-4 h-4" />
              X
            </a>
          )}
        </div>

        {/* Bio */}
        <p className="text-[15px] leading-relaxed text-slate-600 dark:text-gray-300">
          {description || "This author has not added a bio yet."}
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Expertise */}
          <div
            className="
              rounded-2xl p-5 border backdrop-blur-lg

              /* LIGHT */
              bg-white border-blue-200 shadow-[0_10px_30px_rgba(59,130,246,0.15)]

              /* DARK */
              dark:bg-black/40 dark:border-gray-700
              dark:shadow-[0_10px_30px_rgba(0,0,0,0.45)]
            "
          >
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500 dark:bg-[#F5D061]" />
              Areas of Expertise
            </h2>
            <p className="text-sm text-slate-600 dark:text-gray-300">
              {areaOfExpertise ||
                `${name} specializes in AI analysis, research, and tool intelligence.`}
            </p>
          </div>

          {/* Role */}
          <div
            className="
              rounded-2xl p-5 border backdrop-blur-lg

              /* LIGHT */
              bg-white border-blue-200 shadow-[0_10px_30px_rgba(59,130,246,0.15)]

              /* DARK */
              dark:bg-black/40 dark:border-gray-700
              dark:shadow-[0_10px_30px_rgba(0,0,0,0.45)]
            "
          >
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500 dark:bg-[#F5D061]" />
              Role at ARI
            </h2>
            <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
              {roleAtARI || (
                <>
                  {name} works on{" "}
                  <span className="font-semibold text-blue-600 dark:text-[#F5D061]">
                    content quality, AI evaluation, and editorial standards
                  </span>
                  , ensuring trusted research output.
                </>
              )}
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

  );
}
