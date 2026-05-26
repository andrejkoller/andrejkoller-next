"use client";

import { headerLinksConfig } from "@/config/header-links-config";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  return (
    <>
      {/* Backdrop/Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-(--color-overlay) z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[75vw] border-r border-(--color-border) bg-(--color-background) shadow-lg z-50 transform transition-transform duration-200 ease-in-out flex flex-col lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="relative h-(--header-height) flex items-center justify-start px-6">
          <button
            onClick={onClose}
            className="pointer-events-auto flex md:hidden flex-col justify-center items-start gap-1.25 w-8 h-5 cursor-pointer bg-transparent border-0 z-50"
            aria-label="Toggle menu"
          >
            <span
              className="block w-4.5 h-[1.5px] rounded-full transition-all duration-200"
              style={{
                backgroundColor: "var(--color-text-muted)",
                transform: "translateY(3.25px) rotate(45deg)",
              }}
            />
            <span
              className="block w-4.5 h-[1.5px] rounded-full transition-all duration-200"
              style={{
                backgroundColor: "var(--color-text-muted)",
                transform: "translateY(-3.25px) rotate(-45deg)",
              }}
            />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 pt-3 px-6">
          <ul className="flex flex-col">
            {headerLinksConfig.map((link) => (
              <li key={link.key} className="pointer-events-auto w-full">
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    link.key === "official-website"
                      ? "inline-block w-full px-2 py-1.75 tracking-wider cursor-pointer bg-(--color-bg-primary) transition-colors duration-200 rounded-md text-(--color-text-primary) uppercase"
                      : "inline-block w-full px-2 py-1.75 tracking-wider cursor-pointer bg-transparent transition-colors duration-200 rounded-md text-(--color-text-muted) hover:text-(--color-text-primary) uppercase"
                  }
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme Switcher at bottom */}
        <div className="px-6 py-6">
          <ThemeSwitcher />
        </div>
      </aside>
    </>
  );
};
