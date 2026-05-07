import type { Metadata } from "next";
import "./styles/globals.css";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "Andrej Koller",
  description: "work in progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
