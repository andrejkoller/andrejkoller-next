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
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Menu"
          onClick={() => setIsSidebarOpen(true)}
        >
          <span className="block w-4.5 h-0.5 rounded-full bg-(--color-text-muted) transition-all duration-200"></span>
          <span className="block w-4.5 h-0.5 rounded-full bg-(--color-text-muted) transition-all duration-200"></span>
        </button>

        {/* Center - hidden on mobile/tablet */}
        <ul className="hidden w-full lg:flex lg:justify-center gap-6">
          {headerLinksConfig.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  link.key === "official-website"
                    ? "bg-transparent text-(--color-text-primary) font-medium uppercase cursor-pointer scale-95 rounded border-0 inline-block tracking-wider"
                    : "bg-transparent text-(--color-text-muted) font-medium uppercase cursor-pointer hover:text-(--color-text-primary) transition-all duration-200 scale-95 rounded border-0 inline-block tracking-wider"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </header>

      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};
