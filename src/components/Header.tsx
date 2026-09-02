"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-5 z-50 bg-[#111111]/80 backdrop-blur-md border border-[#232323] h-18 rounded-full container flex items-center justify-between mx-4">
      <Link
        href="#top"
        className="flex items-center gap-3 text-[18px] font-medium"
      >
        <span className="w-9.5 h-9.5 rounded-full flex items-center justify-center bg-linear-to-br from-[#9d7042] to-[#2c2925] text-white font-bold text-[15px]">
          M
        </span>
        <span>Mohsen Parsa</span>
      </Link>

      <nav className="hidden md:flex items-center gap-7 text-[16px] font-medium">
        <Link
          href="#skills"
          className="group relative block h-6 overflow-hidden"
        >
          <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
            Skills
          </span>
          <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
            Skills
          </span>
        </Link>
        <Link
          href="#projects"
          className="group relative block h-6 overflow-hidden"
        >
          <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
            Projects
          </span>
          <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
            Projects
          </span>
        </Link>
        <Link
          href="#experience"
          className="group relative block h-6 overflow-hidden"
        >
          <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
            Experience
          </span>
          <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
            Experience
          </span>
        </Link>
        <Link
          href="#testimonials"
          className="group relative block h-6 overflow-hidden"
        >
          <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
            Testimonials
          </span>
          <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
            Testimonials
          </span>
        </Link>
        <Button
          size="default"
          variant="default"
          rollText="Contact Me"
          className="flex!"
          href="#contact"
        >
          <span>Contact Me</span>
          <ArrowRight className="size-5" />
        </Button>
      </nav>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex items-center justify-center size-10 rounded-full border border-[#232323] bg-[#171717] text-white"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-5 rounded-2xl bg-[#171717] border border-[#232323] backdrop-blur-md flex flex-col gap-4 z-50">
          <Link
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="text-[16px] font-medium hover:text-[#9d7042] transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-[16px] font-medium hover:text-[#9d7042] transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            onClick={() => setMenuOpen(false)}
            className="text-[16px] font-medium hover:text-[#9d7042] transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#testimonials"
            onClick={() => setMenuOpen(false)}
            className="text-[16px] font-medium hover:text-[#9d7042] transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 h-10 px-4 rounded-full bg-[#f5f5f5] text-[#111111]! text-[13px] font-bold hover:bg-[#e5e5e5] transition-colors"
          >
            Contact Me
            <ArrowRight className="size-5" />
          </Link>
        </div>
      )}
    </header>
  );
}
