"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/data";

export function Projects() {
  return (
    <section id="projects" className="py-37.5 max-w-300 mx-auto px-6">
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
            className="bg-[#151515] border border-[#1f1f1f] rounded-2xl overflow-hidden"
            key={project.title}
            whileHover={{ y: -5 }}
          >
            <Image
              width={500}
              height={500}
              src={project.image}
              alt={`${project.title} project preview`}
              loading="lazy"
              className="w-full h-75 object-cover brightness-80"
            />
            <div className="p-7.5">
              <h3 className="font-light tracking-tighter text-[27px]">
                {project.title}
              </h3>
              <p className="text-[#858585] text-[16px] font-semibold leading-[1.55] min-h-18.5 mt-2.5">
                {project.text}
              </p>
              <div className="flex items-center gap-4 mt-6">
                <Button variant="outline" href="#contact" size="default">
                  Source Code
                </Button>
                <Button href="#contact" size="default">
                  Live Website <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}