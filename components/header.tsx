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
          <li
            key={link.key}
            className="text-secondary-foreground font-medium uppercase"
          >
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <Link
          href={"mailto:andrejkoller@outlook.com"}
          className="text-secondary-foreground font-medium uppercase hover:text-foreground transition-colors duration-200"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};
