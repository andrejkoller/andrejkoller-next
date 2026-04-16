"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col items-center gap-4 min-h-screen w-full p-8">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
