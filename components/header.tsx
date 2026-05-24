import { headerLinksConfig } from "@/config/header-links-config";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between items-center h-(--header-height) px-6">
      <div></div>
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
      <Link
        href={"mailto:andrejkoller@outlook.com"}
        className="text-secondary-foreground font-medium uppercase hover:text-foreground transition-colors duration-200"
      >
        Contact
      </Link>
    </header>
  );
};
