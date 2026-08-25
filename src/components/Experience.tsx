"use client";

import { SectionHeading } from "./SectionHeading";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jobs } from "@/data/data";

export function Experience() {
  return (
    <section id="experience" className="py-37.5 max-w-210 mx-auto px-6">
      <SectionHeading
        id="experience-heading"
        tag="Experience"
        title="Where I've Worked"
      >
        A summary of my professional journey and the impact I&apos;ve made
      </SectionHeading>
      <div className="grid gap-2.5 mt-12.5">
        {jobs.map((job, i) => (
          <details
            key={job.company}
            open={i < 2}
            className="bg-[#151515] rounded-2xl p-[23px_24px]"
          >
            <summary className="cursor-pointer list-none grid grid-cols-[1fr_auto_24px] gap-4.5 items-center text-[20px]">
              <span>
                {job.role} — {job.company}
              </span>
              <b className="text-[#777] text-[16px]">{job.date}</b>
              <ChevronDown size={20} className="transition-transform" />
            </summary>
            {job.bullets.length > 0 && (
              <ul className="text-[#999] pl-5.75 mt-6 font-semibold space-y-2.5">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
          </details>
        ))}
      </div>
      <Button
        href="#contact"
        size="default"
        className="mx-auto mt-8.75 block max-w-fit"
      >
        Download My CV <ArrowRight size={18} />
      </Button>
    </section>
  );
}
