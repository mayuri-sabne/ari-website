
export default function MainLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <main className="relative py-20 overflow-hidden">

  {/* FIXED Gradient Behind Everything */}
  <div
    className="fixed inset-0 -z-10 pointer-events-none flex items-center justify-center"
  >
{/* Light Mode */}
<div
  className="
    dark:hidden
    w-[220vw] h-[120vh]
    bg-gradient-to-br
    from-cyan-300/80
    via-blue-200/100
    to-white
    blur-[120px]
    rounded-full
  "
/>


{/* Dark Mode */}
 <div
      className="
        w-[145vw] h-[120vh]
        bg-gradient-to-br
        from-blue-500/50
        via-sky-300/55
        via-cyan-300/50
        to-indigo-400/55
        blur-[140px]
        opacity-100
        rounded-full
      "
    />
  </div>

  {/* Frosted Content Container */}
  <div
    className="
      rounded-3xl
       mx-auto py-12
    "
  >
    {children}
  </div>
</main>


  )
}

