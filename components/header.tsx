import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-center w-full py-4">
      <Link
        href={"https://www.athanasa.com/"}
        className="hover:text-(--text-hover) transition-colors duration-200"
      >
        Athanasa
        {/* Placeholder for Athanasa brand icon */}
      </Link>
    </header>
  );
};
