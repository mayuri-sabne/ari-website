
export default function MainLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
<main
  className="
    relative
    py-20 max-sm:px-4 min-h-screen
    bg-[radial-gradient(circle_at_60%_30%,rgba(255,0,128,0.7)_0%,transparent_60%),radial-gradient(circle_at_90%_70%,rgba(128,0,255,0.6)_0%,transparent_70%),#000000]
    backdrop-blur-xl
    text-white
  "
>
  {/* Glass overlay */}
  <div className="absolute inset-0 bg-white/5 dark:bg-black/20 pointer-events-none" />

  <div className="relative mx-auto">
    {children}
  </div>
</main>

    )
}

