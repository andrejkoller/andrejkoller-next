import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4">
      <div className="flex flex-col mb-4">
        <span>Andrej Koller</span>
        <span>
          Founding Engineer at{" "}
          <Link
            href="https://athanasa.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Athanasa
          </Link>
        </span>
        <span>
          Latest Projects/Clients:{" "}
          <Link
            href={"https://fadinghell.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fading Hell
          </Link>{" "}
          •{" "}
          <Link
            href={"https://prettyswing.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pretty Swing
          </Link>
        </span>
      </div>
      <div className="inline">
        <Link
          href={"https://www.linkedin.com/in/andrejkoller"}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase text-[0.8em]! text-[#333]!"
        >
          LinkedIn
        </Link>
        <span className="mx-1">•</span>
        <Link
          href={"https://github.com/andrejkoller"}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase text-[0.8em]! text-[#333]!"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}
