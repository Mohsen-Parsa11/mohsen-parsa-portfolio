"use client";

import { logos } from "@/data/data";
import { SectionHeading } from "./SectionHeading";
import Image from "next/image";

export function Skills() {
  return (
    <section className="bg-[#171717] py-30">
      <div className="container">
        <SectionHeading id="skills" tag="Tech stack" title="Tools I Build With">
          A curated set of technologies I rely on to build modern web
          experiences
        </SectionHeading>
        <div className="flex flex-wrap justify-center gap-2.5 max-w-197.5 mx-auto">
          {logos.map((skill) => (
            <span
              key={skill.id}
              className="flex items-center gap-2.5 px-5 py-3 border border-[#282828] rounded-full text-[16px] font-bold"
            >
              <Image
                src={skill.src}
                alt={skill.title}
                width={200}
                height={200}
                className="size-7"
              />
              <p className="">{skill.title}</p>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
