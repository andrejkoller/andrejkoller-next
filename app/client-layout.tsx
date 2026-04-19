"use client";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex items-center justify-center min-h-screen h-full w-full leading-[1.8em]">
      {children}
    </main>
  );
}
