"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#242424] py-10.5 pb-7.5">
      <div className="container">
      <div className="grid grid-cols-[1fr_auto] gap-8.75">
        <div>
          <Link className="flex items-center gap-3.5" href="#top">
            <span className="w-9.5 h-9.5 rounded-full flex items-center justify-center bg-linear-to-br from-[#9d7042] to-[#2c2925] text-white font-bold text-[15px]">
              S
            </span>
            <span className="text-[18px] font-medium">Snilloc Hemingson</span>
          </Link>
          <p className="text-[#858585] text-[17px] font-semibold leading-[1.55] mt-5.5 whitespace-pre-line">
            I build fast, polished, and user-
            friendly products that deliver real value
          </p>
          <div className="flex gap-2.5 mt-5.5">
            <Link href="#contact" aria-label="Github" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#f5f5f5] text-[#111] text-[14px] font-medium">
              GH
            </Link>
            <Link href="#contact" aria-label="Twitter" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#f5f5f5] text-[#111] text-[14px] font-medium">
              TW
            </Link>
            <Link href="#contact" aria-label="LinkedIn" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#f5f5f5] text-[#111] text-[14px] font-medium">
              in
            </Link>
          </div>
        </div>
        <nav className="flex flex-col gap-4.5 font-semibold">
          <Link href="#skills" className="transition-colors hover:text-white">Skills</Link>
          <Link href="#projects" className="transition-colors hover:text-white">Projects</Link>
          <Link href="#experience" className="transition-colors hover:text-white">Experience</Link>
          <Link href="#testimonials" className="transition-colors hover:text-white">Testimonials</Link>
        </nav>
      </div>
      <div className="border-t border-[#242424] pt-6.25 text-center text-[#777] text-[16px] mt-8 grid-col-span-2">
        © 2026 — Copyright. All Rights reserved
      </div>
      </div>
    </footer>
  );
}