"use client";

import { SectionHeading } from "./SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/data";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#171717] py-30 overflow-hidden"
    >
      <div className="max-w-300 mx-auto px-6">
        <SectionHeading
          id="testimonials-heading"
          tag="Testimonials"
          title="Don't just take my words for it"
        >
          Words from people who&apos;ve worked with me and experienced my process and
          results firsthand
        </SectionHeading>
        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={18}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          className="max-w-300 mx-auto"
        >
          {testimonials.map(([name, role, text]) => (
            <SwiperSlide key={name}>
              <article className="bg-[#151515] rounded-[15px] p-6.5 min-h-52.5">
                <div className="flex items-center gap-3">
                  <span className="w-9.5 h-9.5 rounded-full grid place-items-center bg-linear-to-br from-[#9d7042] to-[#2c2925] text-white font-bold text-[14px]">
                    {name[0]}
                  </span>
                  <div>
                    <strong>{name}</strong>
                    <small className="block text-[#777] mt-0.75 text-[13px]">
                      {role}
                    </small>
                  </div>
                  <Quote className="text-[#777] ml-auto size-7.5" />
                </div>
                <p className="text-[#858585] text-[16px] font-semibold leading-[1.55] mt-8.5">
                  {text}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
