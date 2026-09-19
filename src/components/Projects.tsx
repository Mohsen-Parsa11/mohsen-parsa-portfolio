"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/data";

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 lg:py-30">
      <div className="container">
        <SectionHeading
          id="projects-heading"
          tag="Projects"
          title="Projects I've Shipped"
        >
          A range of projects demonstrating how I turn ideas into functional
          experiences
        </SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12.5">
          {projects.map((project) => (
            <motion.article
              className="bg-[#181818] border border-[#1f1f1f] rounded-xl p-2 overflow-hidden flex flex-col"
              key={project.title}
            >
              <motion.div
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="overflow-hidden rounded-xl"
              >
                <Image
                  width={500}
                  height={500}
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="w-full h-75 object-cover scale-105 rounded-xl brightness-80"
                />
              </motion.div>
              <div className="p-4 md:p-7.5 bg-[#141414] rounded-xl mt-3 flex-1 flex flex-col">
                <h3 className="font-light tracking-tighter text-xl md:text-[27px]">
                  {project.title}
                </h3>
                <p className="text-[#858585] text-[14px] md:text-[16px] font-semibold md:leading-[1.55] mt-2.5">
                  {project.text}
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4 mt-auto pt-6">
                  <Button
                    variant="outline"
                    href={project.githubLink}
                    size="default"
                    rollText="View code"
                    target="_blank"
                    className="w-full md:w-auto"
                  >
                    Source Code
                  </Button>
                  <Button
                    href={project.liveLink}
                    size="default"
                    rollText="Open site"
                    target="_blank"
                    className="w-full md:w-auto"
                  >
                    Live Website <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
