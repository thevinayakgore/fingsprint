import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-10 px-5 py-4 border-t bg-primary text-primary-foreground w-full">
      <span className="text-sm font-medium">
        &copy; {new Date().getFullYear()} FingSprint. All rights reserved.
      </span>
      <div className="flex gap-3">
        <Link
          target="_blank"
          aria-label="GitHub"
          rel="noopener noreferrer"
          href="https://github.com/thevinayakgore/FingSprint"
        >
          <Button
            size="icon"
            variant="outline"
            className="bg-white! text-black! border-primary! ring-2 ring-white"
          >
            <FiGithub className="w-5 h-5 hover:text-primary transition-colors" />
          </Button>
        </Link>
        <Link
          aria-label="X"
          target="_blank"
          rel="noopener noreferrer"
          href="https://x.com/thevinayakgore"
        >
          <Button
            size="icon"
            variant="outline"
            className="bg-white! text-black! border-primary! ring-2 ring-white"
          >
            <FaXTwitter className="w-5 h-5 hover:text-primary transition-colors" />
          </Button>
        </Link>
        <Link
          target="_blank"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/thevinayakgore"
        >
          <Button
            size="icon"
            variant="outline"
            className="bg-white! text-black! border-primary! ring-2 ring-white"
          >
            <FiLinkedin className="w-5 h-5 hover:text-primary transition-colors" />
          </Button>
        </Link>
      </div>
    </footer>
  );
}
