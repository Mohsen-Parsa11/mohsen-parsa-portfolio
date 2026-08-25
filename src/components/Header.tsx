"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between h-22 border-b border-[#232323] max-w-300 mx-auto px-6">
      <Link
        href="#top"
        className="flex items-center gap-3.5 text-[18px] font-medium"
      >
        <span className="w-9.5 h-9.5 rounded-full flex items-center justify-center bg-linear-to-br from-[#9d7042] to-[#2c2925] text-white font-bold text-[15px]">
          S
        </span>
        <span>Snilloc Hemingson</span>
      </Link>
      <nav className="flex items-center gap-7 text-[15px]">
        <Link href="#skills" className="transition-colors hover:text-white">
          Skills
        </Link>
        <Link href="#projects" className="transition-colors hover:text-white">
          Projects
        </Link>
        <Link href="#experience" className="transition-colors hover:text-white">
          Experience
        </Link>
        <Link
          href="#testimonials"
          className="transition-colors hover:text-white"
        >
          Testimonials
        </Link>
        <Button
          href="mailto:hello@snilloc.dev"
          size="default"
          variant="default"
        >
          Contact Me <ArrowRight size={18} />
        </Button>
      </nav>
    </header>
  );
}
