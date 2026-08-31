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
    <div className="flex items-center justify-center w-fit mx-auto fixed bottom-8 left-0 right-0">
      <button
        onClick={() => switchTheme("light")}
        className={`bg-transparent font-medium uppercase cursor-pointer transition-all duration-200 scale-95 rounded border-0 inline-block select-none tracking-wider ${
          theme === "light"
            ? "text-(--color-primary)"
            : "text-(--color-muted) hover:text-(--color-primary)"
        }`}
      >
        Light
      </button>
      <span className="text-[10px] select-none text-(--color-muted) font-medium uppercase tracking-wider mx-2">
        |
      </span>
      <button
        onClick={() => switchTheme("dark")}
        className={`bg-transparent font-medium uppercase cursor-pointer transition-all duration-200 scale-95 rounded border-0 inline-block select-none tracking-wider ${
          theme === "dark"
            ? "text-(--color-primary)"
            : "text-(--color-muted) hover:text-(--color-primary)"
        }`}
      >
        Dark
      </button>
    </div>
  );
};
