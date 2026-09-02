"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logos } from "@/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const duplicatedLogos = [...logos, ...logos, ...logos];

export function Hero() {
  const swiperRef = useRef<SwiperType>(null);

  return (
    <section id="top" className="py-30 ">
      <div className="items-center container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15">
        <div className="max-w-full lg:max-w-132.5">
          <motion.span
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#171717] text-[#9b9b9b] tracking-wider text-sm font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.i
              className="size-1.5 rounded-full bg-[#15c779]"
              animate={{
                scale: [1, 1.4, 1],
                boxShadow: ["0 0 0 0px #15c77922", "0 0 0 8px #15c77900"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
            Available for work
          </motion.span>

          <h1 className="mt-6.5 mb-5 text-3xl sm:text-4xl md:text-5xl font-light flex">
            {"Frontend Engineer.".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -10, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.15,
                  delay: 0.3 + i * 0.03,
                  ease: "easeOut",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="text-[#858585] text-[14px] sm:text-[16px] font-semibold leading-[1.55]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Hi, I&apos;m Mohsen Parsa, a frontend web developer in the
            Afghanistan. I specialize in building fast, accessible web
            experiences. I focus on modern JavaScript frameworks and clean,
            scalable interfaces.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 mt-5.5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Button variant="outline" href="#projects" rollText="View projects">
              See my works
            </Button>
            <Button href="#contact" rollText="Let's talk">
              Contact Me <ArrowRight size={18} />
            </Button>
          </motion.div>

          <motion.div
            className="mt-10 lg:mt-18.5 overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 lg:w-28 z-10 bg-gradient-to-r from-[#111] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 lg:w-28 z-10 bg-gradient-to-l from-[#111] to-transparent" />
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop
              freeMode={{
                enabled: true,
                momentum: false,
              }}
              speed={2500}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              slidesPerView="auto"
              spaceBetween={14}
              allowTouchMove={false}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                const wrapper = swiper.wrapperEl;
                wrapper.style.transitionTimingFunction = "linear";
              }}
            >
              {duplicatedLogos.map((icon, i) => (
                <SwiperSlide
                  key={`${icon.id}-${i}`}
                  className="!w-auto"
                >
                  <span className="grid place-items-center size-16 lg:size-20 shrink-0 rounded-xl bg-[#151515] text-[28px] font-extrabold">
                    <Image
                      src={icon.src}
                      alt={icon.title}
                      title={icon.title}
                      width={200}
                      height={200}
                      className="size-10 lg:size-12 object-contain"
                    />
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        <motion.div
          className="relative h-64 sm:h-80 mb-10 lg:mb-0 lg:h-125 rounded-[20px] bg-[#181818] overflow-hidden flex items-end justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <Image
            width={400}
            height={400}
            src="/mohsen.png"
            alt="Portrait of Mohsen Parsa"
            className="w-full h-full object-contain object-center saturate-80"
          />
        </motion.div>
      </div>
    </section>
  );
}
