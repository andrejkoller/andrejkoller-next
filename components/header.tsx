"use client";

import { headerLinksConfig } from "@/config/header-links-config";
import Link from "next/link";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { useState } from "react";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center h-(--header-height) px-6">
        {/* Hamburger Menu - visible only on mobile/tablet */}
        <button
          className="flex flex-col gap-1.5 min-[1024px]:hidden"
          aria-label="Menu"
          onClick={() => setIsSidebarOpen(true)}
        >
          <span className="block w-4.5 h-0.5 rounded-full bg-(--color-muted) transition-all duration-200"></span>
          <span className="block w-4.5 h-0.5 rounded-full bg-(--color-muted) transition-all duration-200"></span>
        </button>
        {/* Center - hidden on mobile/tablet */}
        <ul className="hidden w-full min-[1024px]:flex min-[1024px]:justify-start gap-6">
          {headerLinksConfig.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  link.key === "official-website"
                    ? "bg-transparent text-(--color-primary) font-medium uppercase cursor-pointer scale-95 inline-block tracking-wider"
                    : "bg-transparent text-(--color-muted) font-medium uppercase cursor-pointer hover:text-(--color-primary) transition-colors duration-200 scale-95 inline-block tracking-wider"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <Link
            href={"mailto:andrejkoller@outlook.com"}
            className="bg-transparent text-(--color-muted) font-medium uppercase cursor-pointer hover:text-(--color-primary) transition-colors duration-200 scale-95 inline-block tracking-wider"
          >
            Contact
          </Link>
        </div>
      </header>

      {/* Mobile Sidebar - visible only on mobile/tablet */}
      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};
