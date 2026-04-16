import Link from "next/link";
import { RiGithubFill, RiGlobalLine, RiLinkedinBoxFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="flex justify-center gap-4 w-full py-4 fixed bottom-0">
      <Link
        href={"https://dev.andrejkoller.com/"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:text-(--text-hover) transition-colors duration-200"
      >
        <RiGlobalLine className="h-4.5 w-4.5" />
      </Link>
      <Link
        href={"https://github.com/andrejkoller"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:text-(--text-hover) transition-colors duration-200"
      >
        <RiGithubFill className="h-4.5 w-4.5" />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/andrejkoller"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:text-(--text-hover) transition-colors duration-200"
      >
        <RiLinkedinBoxFill className="h-4.5 w-4.5" />
      </Link>
    </footer>
  );
};
