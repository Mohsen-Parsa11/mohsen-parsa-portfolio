"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-30 bg-[#171717]">
      <div className="container">
        <div
          className="min-h-75 rounded-[20px] flex flex-col items-center justify-center text-center relative"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=85")
          `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="font-light tracking-tighter text-[36px]">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-[#bbb] text-[17px] font-semibold mt-2.5 whitespace-pre-line">
            Let&apos;s bring your ideas to life with thoughtful design and code
          </p>
          <Button
            href="mailto:hello@snilloc.dev"
            size="default"
            className="mt-6"
            rollText="Send email"
          >
            Contact Me <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
