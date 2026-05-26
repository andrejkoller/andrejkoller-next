"use client";

import { useTheme } from "@/components/theme/use-theme";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  const isLight = theme === "light";
  const isDark = theme === "dark";

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="bg-transparent text-(--text-muted) font-medium uppercase cursor-pointer hover:text-(--text-primary) transition-all duration-200 scale-95 rounded border-0 inline-block select-none tracking-wider"
    >
      {isDark && <span>Dark</span>}
      {isLight && <span>Light</span>}
    </button>
  );
};
