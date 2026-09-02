import { motion } from "framer-motion";

export function SectionHeading({
  tag,
  title,
  children,
  id,
}: {
  tag: string;
  title: string;
  children: string;
  id: string;
}) {
  return (
    <div id={id} className="max-w-107.5 mx-auto mb-12.5 text-center">
      <motion.span
        className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141414] text-[#b5b5b5] uppercase tracking-wider text-[10px] font-bold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {tag}
      </motion.span>
      <h2 className="font-light tracking-tighter mt-4.5 mb-3 text-[32px]">
        {title.split("").map((char, i) => (
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
        {children}
      </motion.p>
    </div>
  );
}
