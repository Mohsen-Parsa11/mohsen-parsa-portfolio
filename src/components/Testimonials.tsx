"use client";

import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { testimonials } from "@/data/data";
import QuoteIcon from "./Icons";

const row1 = [...testimonials, ...testimonials, ...testimonials];
const row2 = [...testimonials, ...testimonials, ...testimonials].reverse();

export function Testimonials() {
  const swiper1Ref = useRef<SwiperType>(null);
  const swiper2Ref = useRef<SwiperType>(null);

  return (
    <section id="testimonials" className="py-30 overflow-hidden">
      <div className="container">
        <SectionHeading
          id="testimonials-heading"
          tag="Testimonials"
          title="Don't just take my words for it"
        >
          Words from people who&apos;ve worked with me and experienced my
          process and results firsthand
        </SectionHeading>

        <div className="flex flex-col gap-5">
          {/* Row 1 - scrolls left */}
          <div
            className="relative"
            onMouseEnter={() => {
              const s = swiper1Ref.current;
              s?.autoplay?.stop();
              if (s) s.wrapperEl.style.transition = "0s";
            }}
            onMouseLeave={() => {
              const s = swiper1Ref.current;
              if (s) s.wrapperEl.style.removeProperty("transition");
              s?.autoplay?.start();
            }}
          >
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 lg:w-28 z-10 bg-linear-to-r from-[#111] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 lg:w-28 z-10 bg-linear-to-l from-[#111] to-transparent" />
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop
              freeMode={{ enabled: true, momentum: false }}
              speed={12000}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              slidesPerView="auto"
              spaceBetween={18}
              allowTouchMove={false}
              onSwiper={(swiper) => {
                swiper1Ref.current = swiper;
                swiper.wrapperEl.style.transitionTimingFunction = "linear";
              }}
            >
              {row1.map(([name, role, text], i) => (
                <SwiperSlide key={`r1-${name}-${i}`} className="w-auto!">
                  <article className="bg-[#151515] w-100 lg:w-120 rounded-[15px] p-6.5 min-h-60 shrink-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="size-12 rounded-full grid place-items-center bg-linear-to-bl from-[#9d7042] to-[#2c2925] text-white font-bold text-[14px]">
                          {name[0]}
                        </span>
                        <div>
                          <strong>{name}</strong>
                          <small className="block text-[#777] mt-0.75 font-semibold text-sm">
                            {role}
                          </small>
                        </div>
                      </div>
                      <QuoteIcon className="size-10" />
                    </div>
                    <p className="text-[#858585] text-[16px] font-semibold leading-[1.55] mt-8.5">
                      {text}
                    </p>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Row 2 - scrolls right */}
          <div
            className="relative"
            onMouseEnter={() => {
              const s = swiper2Ref.current;
              s?.autoplay?.stop();
              if (s) s.wrapperEl.style.transition = "0s";
            }}
            onMouseLeave={() => {
              const s = swiper2Ref.current;
              if (s) s.wrapperEl.style.removeProperty("transition");
              s?.autoplay?.start();
            }}
          >
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 lg:w-28 z-10 bg-linear-to-r from-[#111] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 lg:w-28 z-10 bg-linear-to-l from-[#111] to-transparent" />
            <Swiper
              modules={[Autoplay, FreeMode]}
              loop
              freeMode={{ enabled: true, momentum: false }}
              speed={12000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              slidesPerView="auto"
              spaceBetween={18}
              allowTouchMove={false}
              onSwiper={(swiper) => {
                swiper2Ref.current = swiper;
                swiper.wrapperEl.style.transitionTimingFunction = "linear";
              }}
            >
              {row2.map(([name, role, text], i) => (
                <SwiperSlide key={`r2-${name}-${i}`} className="w-auto!">
                  <article className="bg-[#151515] w-100 lg:w-120 rounded-[15px] p-6.5 min-h-60 shrink-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="size-12 rounded-full grid place-items-center bg-linear-to-bl from-[#9d7042] to-[#2c2925] text-white font-bold text-[14px]">
                          {name[0]}
                        </span>
                        <div>
                          <strong>{name}</strong>
                          <small className="block text-[#777] mt-0.75 font-semibold text-sm">
                            {role}
                          </small>
                        </div>
                      </div>
                      <QuoteIcon className="size-10" />
                    </div>
                    <p className="text-[#858585] text-[16px] font-semibold leading-[1.55] mt-8.5">
                      {text}
                    </p>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}