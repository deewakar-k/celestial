import Link from "next/link";
import { Github, Twitter } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="flex items-center justify-between w-full max-w-2xl p-4 rounded-lg bg-background/80 backdrop-blur-sm border dark:border-white/10 border-black/10">
        <Link href="/" className="text-xl font-medium">
          celestial
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/deewakar-k/celestial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="size-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://x.com/deewakar01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="size-4" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
