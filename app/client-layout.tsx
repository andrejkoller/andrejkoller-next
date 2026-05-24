"use client";

import { Header } from "@/components/header";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
}
