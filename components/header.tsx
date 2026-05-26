import { headerLinksConfig } from "@/config/header-links-config";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-(--header-height) px-6">
      <div className="flex items-center">
        <ThemeSwitcher />
      </div>
      <ul className="flex gap-6">
        {headerLinksConfig.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                link.key === "official-website"
                  ? "bg-transparent text-(--text-primary) font-medium uppercase cursor-pointer scale-95 rounded border-0 inline-block tracking-wider"
                  : "bg-transparent text-(--text-muted) font-medium uppercase cursor-pointer hover:text-(--text-primary) transition-all duration-200 scale-95 rounded border-0 inline-block tracking-wider"
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
          className="bg-transparent text-(--text-muted) font-medium uppercase cursor-pointer hover:text-(--text-primary) transition-all duration-200 scale-95 rounded border-0 inline-block tracking-wider"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};
