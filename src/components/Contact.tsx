"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/toast";

type FormData = {
  name: string;
  email: string;
  message: string;
};
export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = async (data: FormData) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return result;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await onSubmit(formData);
      toast("Message sent successfully!", "success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast(
        error instanceof Error ? error.message : "Something went wrong.",
        "error"
      );
    }
  };

  return (
    <section id="contact" className="py-30 bg-[#171717]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-start">
          <div>
            <h2 className="font-light tracking-tighter mt-4.5 mb-3 text-[32px]">
              {"Let's Build Something Great".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -10, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.15,
                    delay: 0.3 + i * 0.03,
                    ease: "easeOut",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>
            <motion.p
              className="text-[#858585] text-[17px] font-semibold leading-[1.55]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Let&apos;s bring your ideas to life with thoughtful design and
              code
            </motion.p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="bg-[#151515] rounded-xl px-5 py-3.5 text-white text-[15px] font-semibold outline-none border border-[#282828] focus:border-[#555] transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="bg-[#151515] rounded-xl px-5 py-3.5 text-white text-[15px] font-semibold outline-none border border-[#282828] focus:border-[#555] transition-colors"
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={5}
              className="bg-[#151515] rounded-xl px-5 py-3.5 text-white text-[15px] font-semibold outline-none border border-[#282828] focus:border-[#555] transition-colors resize-none"
            />
            <Button
              type="submit"
              rollText="Send Message"
              className="mt-1 mr-auto cursor-pointer"
            >
              Send Message <ArrowRight size={18} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
