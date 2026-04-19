"use client";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex items-center justify-center h-full w-full leading-[1.8em]">
      <main>{children}</main>
    </div>
  );
}
