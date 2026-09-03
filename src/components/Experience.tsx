"use client";

import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { jobs } from "@/data/data";

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-30 bg-[#171717]">
      <div className="container flex flex-col items-center">
        <SectionHeading
          id="experience-heading"
          tag="Experience"
          title="Where I've Worked"
        >
          A summary of my professional journey and the impact I&apos;ve made
        </SectionHeading>
        <div className="grid gap-2.5 mt-12.5 w-full">
          {jobs.map((job, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={job.company}
                className={`rounded-2xl transition-colors duration-300 ${
                  isOpen ? "bg-[#1e1e1e]" : "bg-[#151515]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full cursor-pointer p-[23px_24px_0] grid grid-cols-[1fr_auto] gap-4.5 items-center text-left"
                >
                  <span className="text-[20px] text-white">
                    {job.role} — {job.company}
                  </span>
                  <b className="text-[#777] text-[16px]">{job.date}</b>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden px-5">
                    {job.bullets.length > 0 && (
                      <ul className="text-[#999] pl-5.75 pt-6 font-semibold space-y-2.5 list-disc">
                        {job.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="px-5.75 pb-5.75">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={`grid mt-5 p-0.5 cursor-pointer rotate-90 place-items-center rounded-full border-2 border-white transition-transform duration-300 ${
                      isOpen ? "rotate-270" : ""
                    }`}
                  >
                    <Image
                      src="/arrow.svg"
                      alt="toggle"
                      width={18}
                      height={18}
                      className="brightness-0 invert"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Button
          href="mailto:hello@snilloc.dev"
          rollText="Download My CV"
          className="mt-12.5 mx-auto"
        >
          Download My CV <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  );
}
