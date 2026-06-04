"use client";

import { useTheme } from "@/components/theme/use-theme";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  const switchTheme = (selectedTheme: string) => {
    if (selectedTheme !== theme) {
      toggleTheme();
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center h-(--footer-height)">
      <button
        onClick={() => switchTheme("light")}
        className={`bg-transparent font-medium uppercase cursor-pointer transition-all duration-200 scale-95 rounded border-0 inline-block select-none tracking-wider ${
          theme === "light"
            ? "text-(--color-text-primary)"
            : "text-(--color-text-muted) hover:text-(--color-text-primary)"
        }`}
      >
        Light
      </button>
      <span className="text-[10px] select-none text-(--color-text-muted) font-medium uppercase tracking-wider mx-2">
        |
      </span>
      <button
        onClick={() => switchTheme("dark")}
        className={`bg-transparent font-medium uppercase cursor-pointer transition-all duration-200 scale-95 rounded border-0 inline-block select-none tracking-wider ${
          theme === "dark"
            ? "text-(--color-text-primary)"
            : "text-(--color-text-muted) hover:text-(--color-text-primary)"
        }`}
      >
        Dark
      </button>
    </div>
  );
};
