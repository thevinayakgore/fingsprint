"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useeffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="w-full flex items-center justify-between px-5 py-3 border-b bg-primary text-primary-foreground sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="logo"
          width={500}
          height={500}
          priority
          unoptimized
          className="size-10 object-cover"
        />
        <span className="text-3xl font-semibold">FingSprint</span>
      </div>
      <Button
        size="icon"
        variant="outline"
        className="bg-white! text-black! border-primary! ring-2 ring-white"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <FiSun /> : <FiMoon />}
      </Button>
    </nav>
  );
}
