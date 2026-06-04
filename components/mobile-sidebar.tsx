"use client";

import { headerLinksConfig } from "@/config/header-links-config";
import Link from "next/link";

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
          className="fixed inset-0 bg-(--color-overlay) z-40 min-[1080px]:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[75vw] border-r border-(--color-border) bg-(--color-background) z-50 transform transition-transform duration-200 ease-in-out flex flex-col min-[1080px]:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="relative h-(--header-height) flex items-center justify-start px-6">
          <button
            onClick={onClose}
            className="pointer-events-auto flex min-[1080px]:hidden flex-col justify-center items-start gap-1.25 w-8 h-5 cursor-pointer bg-transparent border-0 z-50"
            aria-label="Toggle menu"
          >
            <span className="block w-4.5 h-0.5 rounded-full bg-(--color-text-muted) transition-all duration-200 translate-y-[3.25px] rotate-45" />
            <span className="block w-4.5 h-0.5 rounded-full bg-(--color-text-muted) transition-all duration-200 translate-y-[-3.25px] -rotate-45" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 pt-3 px-6">
          <ul className="flex flex-col gap-4">
            {headerLinksConfig.map((link) => (
              <li key={link.key} className="pointer-events-auto w-full">
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    link.key === "official-website"
                      ? "bg-transparent text-(--color-text-primary) font-medium uppercase cursor-pointer scale-95 inline-block tracking-wider"
                      : "bg-transparent text-(--color-text-muted) font-medium uppercase cursor-pointer hover:text-(--color-text-primary) transition-colors duration-200 scale-95 inline-block tracking-wider"
                  }
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};
