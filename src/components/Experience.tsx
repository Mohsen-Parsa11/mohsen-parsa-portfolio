"use client";

import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
              <motion.div
                key={job.company}
                animate={{
                  backgroundColor: isOpen ? "#1e1e1e" : "#151515",
                }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl"
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
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0, filter: "blur(8px)" }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        filter: "blur(0px)",
                      }}
                      exit={{ height: 0, opacity: 0, filter: "blur(8px)" }}
                      transition={{
                        height: { duration: 0.5, ease: "easeInOut" },
                        opacity: { duration: 0.5, ease: "easeInOut" },
                        filter: { duration: 0.5, ease: "easeInOut" },
                      }}
                      className="overflow-hidden px-5"
                    >
                      {job.bullets.length > 0 && (
                        <ul className="text-[#999] pl-5.75 px-5 pt-6 pb-2 font-semibold space-y-2.5 list-disc">
                          {job.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="px-5.75 pb-5.75">
                  <motion.button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    animate={{ rotate: isOpen ? 270 : 90 }}
                    transition={{ duration: 0.3 }}
                    className="grid mt-5 p-0.5 cursor-pointer place-items-center rounded-full border-2 border-white"
                  >
                    <Image
                      src="/arrow.svg"
                      alt="toggle"
                      width={16}
                      height={16}
                      className="brightness-0 invert"
                    />
                  </motion.button>
                </div>
              </motion.div>
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
