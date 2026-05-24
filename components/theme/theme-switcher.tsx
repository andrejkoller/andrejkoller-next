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
      className="text-secondary-foreground uppercase hover:text-foreground transition-colors duration-200 cursor-pointer select-none"
    >
      {isDark && <span>Dark</span>}
      {isLight && <span>Light</span>}
    </button>
  );
};
