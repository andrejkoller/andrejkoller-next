"use client";

import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
}
