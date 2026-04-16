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
        <RiGlobalLine className="size-6" />
      </Link>
      <Link
        href={"https://github.com/andrejkoller"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:text-(--text-hover) transition-colors duration-200"
      >
        <RiGithubFill className="size-6" />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/andrejkoller"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:text-(--text-hover) transition-colors duration-200"
      >
        <RiLinkedinBoxFill className="size-6" />
      </Link>
    </footer>
  );
};
