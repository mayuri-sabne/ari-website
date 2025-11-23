
export default function MainLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="py-20">
      <div className="relative">
        {children}
      </div>
    </main>

  )
}

