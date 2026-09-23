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
          {/* Large focused donut */}
          <div className="absolute -right-28 -top-36 h-[460px] w-[460px] rounded-full border-[4px] border-white/25" />
          <div className="absolute -right-4 -top-12 h-[330px] w-[330px] rounded-full border-[3px] border-white/20" />

          {/* Lower-right donut */}
          <div className="absolute -bottom-[190px] right-[18%] h-[410px] w-[410px] rounded-full border-[4px] border-white/22" />
          <div className="absolute -bottom-[130px] right-[22%] h-[290px] w-[290px] rounded-full border-[3px] border-white/17" />

          {/* Lower-left donut */}
          <div className="absolute -bottom-[220px] -left-[170px] h-[450px] w-[450px] rounded-full border-[4px] border-white/20" />
          <div className="absolute -bottom-[150px] -left-[100px] h-[310px] w-[310px] rounded-full border-[3px] border-white/15" />
        </div>

        <div className="relative flex min-h-[180px] flex-col justify-center px-5 py-8 sm:min-h-[190px] sm:px-8 sm:py-9 lg:min-h-[175px] lg:flex-row lg:items-center lg:justify-between lg:px-10">
          {/* Content */}
          <div className="max-w-[780px] lg:flex-1">
            <h2 className="max-w-[700px] text-[25px] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px] lg:text-[34px]">
              Start Today With Only TZS 190,000/Month.
            </h2>

            {/* Mobile */}
            <p className="mt-3 max-w-[680px] text-[14px] leading-[1.6] text-white/85 sm:hidden">
              Professional marketing support designed for growing businesses.
            </p>

            {/* Tablet + Desktop */}
            <p className="mt-3 hidden max-w-[720px] text-[15px] leading-[1.6] text-white/85 sm:block lg:text-[16px]">
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