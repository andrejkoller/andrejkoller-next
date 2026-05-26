"use client";

import { headerLinksConfig } from "@/config/header-links-config";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
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
          <span
            className="block w-4.5 h-[1.5px] rounded-full transition-all duration-200"
            style={{
              backgroundColor: "var(--color-text-muted)",
              transform: "none",
            }}
          ></span>
          <span
            className="block w-4.5 h-[1.5px] rounded-full transition-all duration-200"
            style={{
              backgroundColor: "var(--color-text-muted)",
              transform: "none",
            }}
          ></span>
        </button>

        {/* Left side - hidden on mobile/tablet */}
        <div className="hidden lg:flex items-center">
          <ThemeSwitcher />
        </div>

        {/* Center - hidden on mobile/tablet */}
        <ul className="hidden lg:flex gap-6">
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

        {/* Right side */}
        <div className="flex items-center">
          <Link
            href={"mailto:andrejkoller@outlook.com"}
            className="bg-transparent text-(--color-text-muted) font-medium uppercase cursor-pointer hover:text-(--color-text-primary) transition-all duration-200 scale-95 rounded border-0 inline-block tracking-wider"
          >
            Contact
          </Link>
        </div>
      </header>

      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
};
