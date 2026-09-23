"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";

export default function CtaBanner() {
  return (
    <section className="w-full px-4 pt-7 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-lg bg-[#c8102e]">
        {/* Thin corporate donut pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {/* Large donut */}
          <div className="absolute -right-24 -top-32 h-[430px] w-[430px] rounded-full border border-white/20" />
          <div className="absolute -right-8 -top-16 h-[300px] w-[300px] rounded-full border border-white/14" />

          {/* Medium donut */}
          <div className="absolute right-[17%] -bottom-[150px] h-[360px] w-[360px] rounded-full border border-white/15" />
          <div className="absolute right-[21%] -bottom-[105px] h-[270px] w-[270px] rounded-full border border-white/10" />

          {/* Left donut */}
          <div className="absolute -left-[150px] -bottom-[190px] h-[420px] w-[420px] rounded-full border border-white/15" />
          <div className="absolute -left-[100px] -bottom-[140px] h-[320px] w-[320px] rounded-full border border-white/10" />

          {/* Small precision circles */}
          <div className="absolute left-[44%] top-[18%] h-16 w-16 rounded-full border border-white/10" />
          <div className="absolute left-[46%] top-[24%] h-5 w-5 rounded-full border border-white/15" />

          {/* Fine horizontal technical lines */}
          <div className="absolute right-[8%] top-[42%] h-px w-32 bg-white/15" />
          <div className="absolute right-[10%] top-[58%] h-px w-20 bg-white/10" />
          <div className="absolute left-[8%] bottom-[25%] h-px w-28 bg-white/10" />
        </div>

        {/* Subtle animated line */}
        <motion.div
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute left-0 top-0 h-px w-full origin-left bg-white/25"
        />

        <div className="relative flex min-h-[180px] flex-col justify-center px-5 py-8 sm:px-8 sm:py-9 lg:min-h-[175px] lg:flex-row lg:items-center lg:justify-between lg:px-10">
          {/* Content */}
          <div className="max-w-[780px] lg:flex-1">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 48, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="mb-4 h-[2px] bg-white/80"
            />

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="max-w-[700px] text-[25px] font-medium leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px] lg:text-[34px]"
            >
              Get Started Today With Only 190,000 TZS
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="mt-3 max-w-[680px] text-[14px] leading-[1.6] text-white/80 sm:text-[15px]"
            >
              Professional marketing support designed for growing businesses.
            </motion.p>
          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="mt-6 shrink-0 lg:ml-12 lg:mt-0"
          >
            <Button
              type="button"
              variant="solid"
              tone="light"
              className="group rounded-sm px-6 py-2.5 text-[13px] font-semibold shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-none sm:px-7 sm:py-3"
            >
              <span className="flex items-center gap-2">
                Get Package

                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}