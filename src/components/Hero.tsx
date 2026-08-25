"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top">
      <div className="min-h-183 items-center container grid grid-cols-1 lg:grid-cols-2 gap-15">
        <motion.div
          className="max-w-132.5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#171717] text-[#9b9b9b] uppercase tracking-wider text-[10px] font-bold">
            <i className="w-2 h-2 rounded-full bg-[#15c779] shadow-[0_0_0_4px_#15c77922]" />
            Available for work
          </span>
          <h1 className="font-light tracking-tighter mt-6.5 mb-5 text-[clamp(46px,5vw,68px)] leading-[1.05]">
            Frontend Engineer.
          </h1>
          <p className="text-[#858585] text-[17px] font-semibold leading-[1.55]">
            Hi, I&apos;m Snilloc Hemingson, a frontend engineer in the United
            States building fast, accessible web experiences. I focus on modern
            JavaScript frameworks and clean, scalable interfaces.
          </p>
          <div className="flex items-center gap-4 mt-5.5">
            <Button variant="outline" href="#projects" rollText="View projects">
              See my works
            </Button>
            <Button href="mailto:hello@snilloc.dev" rollText="Let's talk">
              Contact Me <ArrowRight size={18} />
            </Button>
          </div>
          <div className="flex gap-4.5 mt-18.5">
            {["N", "JS", "R", "R", "≋"].map((x, i) => (
              <span
                key={i}
                className="grid place-items-center w-21 h-21 rounded-xl bg-[#151515] text-[28px] font-extrabold"
                style={{
                  color: ["#f6e21c", "#20cfff", "#aa7aff", "#23a8cb", "#fff"][
                    i
                  ],
                }}
              >
                {x}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="relative h-125 rounded-[20px] bg-[#181818] overflow-hidden flex items-end justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Image
            width={400}
            height={400}
            src="/mohsen.jpg"
            alt="Portrait of Snilloc Hemingson"
            className="w-full h-full object-cover object-center saturate-80"
          />
        </motion.div>
      </div>
    </section>
  );
}
