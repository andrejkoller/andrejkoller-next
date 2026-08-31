"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      {/* Main content */}
      <main className="flex flex-col min-h-screen">{children}</main>
    </ThemeProvider>
  );
}
