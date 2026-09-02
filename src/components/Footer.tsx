"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-30">
      <div className="container">
        <div className="grid grid-cols-[1fr_auto] gap-8.75">
          <div>
            <Link className="flex items-center gap-3.5" href="#top">
              <span className="w-9.5 h-9.5 rounded-full flex items-center justify-center bg-linear-to-bl from-[#9d7042] to-[#2c2925] text-white font-bold text-[15px]">
                M
              </span>
              <span className="text-[18px] font-medium">Mohsen Parsa</span>
            </Link>
            <p className="text-[#858585] text-[17px] font-semibold leading-[1.55] mt-5.5 whitespace-pre-line max-w-90">
              I build fast, polished, and user- friendly products that deliver
              real value
            </p>
            <div className="flex gap-2.5 mt-5.5">
              <Link
                href="#contact"
                aria-label="Github"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-[#f5f5f5] text-[#111] text-[14px] font-medium"
              >
                <Image
                  src="/github.svg"
                  alt="github"
                  width={50}
                  height={50}
                  className="size-5 object-cover"
                />
              </Link>
              <Link
                href="#contact"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-[#f5f5f5] text-[#111] text-[14px] font-medium"
              >
                <Image
                  src="/twitter.svg"
                  alt="github"
                  width={50}
                  height={50}
                  className="size-5 object-cover"
                />
              </Link>
              <Link
                href="#contact"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-[#f5f5f5] text-[#111] text-[14px] font-medium"
              >
                <Image
                  src="/linkedin.svg"
                  alt="linkedin"
                  width={50}
                  height={50}
                  className="size-5 object-cover"
                />
              </Link>
            </div>
          </div>
          <nav className="flex flex-col gap-4.5 items-end">
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
          </nav>
        </div>
        <div className="border-t border-[#242424] pt-6.25 text-center text-[#777] text-[16px] mt-8 grid-col-span-2">
          © 2026 — Copyright. All Rights reserved
        </div>
      </div>
    </footer>
  );
}
