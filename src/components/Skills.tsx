"use client";

import { iconColors, skills } from "@/data/data";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section className="bg-[#171717] py-30">
      <div className="container">
        <SectionHeading id="skills" tag="Tech stack" title="Tools I Build With">
          A curated set of technologies I rely on to build modern web
          experiences
        </SectionHeading>
        <div className="flex flex-wrap justify-center gap-2.5 max-w-197.5 mx-auto">
          {skills.map((skill, i) => (
            <span
              key={skill}
              className="flex items-center gap-2.5 px-5 py-3 border border-[#282828] rounded-full text-[16px] font-bold"
            >
              <b
                className={`grid place-items-center w-5 h-5 text-[9px] rounded-[5px] ${
                  iconColors[i % 5]
                }`}
              >
                {skill.slice(0, 2)}
              </b>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
