"use client";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex flex-col items-start justify-center min-h-screen h-full w-fit px-4 mx-auto leading-[1.8em]">
      {children}
    </main>
  );
}
