"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#111111]/80 backdrop-blur-md border-b border-[#232323]">
      <div className="container flex items-center justify-between h-22 rounded-full bg-[#111111] shadow-lg">
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
          <Link href="#skills" className="group relative block h-6 overflow-hidden">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
              Skills
            </span>
            <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
              Skills
            </span>
          </Link>
          <Link href="#projects" className="group relative block h-6 overflow-hidden">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
              Projects
            </span>
            <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
              Projects
            </span>
          </Link>
          <Link href="#experience" className="group relative block h-6 overflow-hidden">
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
            href="mailto:hello@snilloc.dev"
            size="default"
            variant="default"
            rollText="Get in touch"
          >
            Contact Me <ArrowRight size={18} />
          </Button>
        </nav>
      </div>
    </header>
  );
}