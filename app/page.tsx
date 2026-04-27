import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col mb-4">
        <span>Andrej Koller</span>
        <span>
          Founding Engineer at{" "}
          <Link
            href="https://athanasa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="brand"
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
            className="brand"
          >
            Fading Hell
          </Link>
          <span className="mx-1">•</span>
          <Link
            href={"https://prettyswing.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="brand"
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
          className="uppercase text-[0.8em]!"
        >
          LinkedIn
        </Link>
        <span className="mx-1">•</span>
        <Link
          href={"https://github.com/andrejkoller"}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase text-[0.8em]!"
        >
          GitHub
        </Link>
      </div>
    </>
  );
}
