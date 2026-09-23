"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";

export default function CtaBanner() {
  return (
    <section className="w-full px-4 pt-7 sm:px-6 lg:px-8">
      <motion.div
        animate={{
          x: [0, -2, 2, -2, 2, 0],
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 5,
        }}
        className="relative mx-auto max-w-[1200px] overflow-hidden rounded-lg bg-[#b80f2b]"
      >
        {/* Corporate donut pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {/* Large donut */}
          <div className="absolute -right-24 -top-32 h-[430px] w-[430px] rounded-full border-[3px] border-white/25" />
          <div className="absolute -right-8 -top-16 h-[300px] w-[300px] rounded-full border-[3px] border-white/20" />

          {/* Medium donut */}
          <div className="absolute -bottom-[150px] right-[17%] h-[360px] w-[360px] rounded-full border-[3px] border-white/22" />
          <div className="absolute -bottom-[105px] right-[21%] h-[270px] w-[270px] rounded-full border-[2px] border-white/18" />

          {/* Left donut */}
          <div className="absolute -bottom-[190px] -left-[150px] h-[420px] w-[420px] rounded-full border-[3px] border-white/22" />
          <div className="absolute -bottom-[140px] -left-[100px] h-[320px] w-[320px] rounded-full border-[2px] border-white/17" />

          {/* Small precision circles */}
          <div className="absolute left-[44%] top-[18%] h-16 w-16 rounded-full border-[2px] border-white/20" />
          <div className="absolute left-[46%] top-[24%] h-5 w-5 rounded-full border-[2px] border-white/25" />

          {/* Technical lines */}
          <div className="absolute right-[8%] top-[42%] h-[2px] w-32 bg-white/22" />
          <div className="absolute right-[10%] top-[58%] h-[2px] w-20 bg-white/18" />
          <div className="absolute bottom-[25%] left-[8%] h-[2px] w-28 bg-white/18" />
        </div>

        <div className="relative flex min-h-[180px] flex-col justify-center px-5 py-8 sm:px-8 sm:py-9 lg:min-h-[175px] lg:flex-row lg:items-center lg:justify-between lg:px-10">
          {/* Content */}
          <div className="max-w-[780px] lg:flex-1">
            <h2 className="max-w-[700px] text-[25px] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px] lg:text-[34px]">
              4 In One. Only TZS 190,000/Month.
            </h2>

            <p className="mt-3 max-w-[680px] text-[14px] leading-[1.6] text-white/85 sm:text-[15px]">
              Professional marketing support designed for growing businesses.
            </p>
          </div>

          {/* Button */}
          <div className="mt-6 shrink-0 lg:ml-12 lg:mt-0">
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}