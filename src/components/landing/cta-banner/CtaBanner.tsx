"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/button";

const services = [
  "Mjasiriamali Special Pack",
  "Website Design",
  "Company Profile",
  "Professional Emails",
  "Branding",
  "Social Media Management",
  "Other",
];

export default function CtaBanner() {
  const [service, setService] = useState("");

  return (
    <section className="w-full px-4 pt-7 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 lg:flex-row lg:items-center lg:gap-8">

        {/* CTA BANNER */}
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
          className="relative order-1 w-full overflow-hidden rounded-lg bg-[#c8102e] lg:w-[42%]"
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

          {/* CTA Content */}
          <div className="relative flex min-h-[225px] flex-col justify-between px-6 py-7 sm:min-h-[240px] sm:px-7 sm:py-8 lg:min-h-[300px] lg:px-8 lg:py-8">
            <div>
              <h2 className="max-w-[390px] text-[25px] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-[28px] lg:text-[30px]">
                Check if Mjasiriamali Pack is right for you
              </h2>

              <p className="mt-3 max-w-[390px] text-[14px] leading-[1.6] text-white/85 sm:text-[15px]">
                Professional marketing support designed for growing
                businesses.
              </p>
            </div>

            <div className="mt-6">
              <Button
                type="button"
                variant="solid"
                tone="light"
                className="group rounded-sm px-5 py-2.5 text-[13px] font-semibold shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-none"
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

        {/* CONTACT FORM */}
        <div className="order-2 w-full rounded-lg border border-neutral-200 bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.06)] sm:p-8 lg:w-[58%] lg:p-8">
          <div className="mb-6">
            <h2 className="text-[24px] font-semibold leading-[1.15] tracking-[-0.02em] text-neutral-600 sm:text-[28px]">
              Start Today With Only TZS 190,000/Month.
            </h2>
          </div>

          <form className="space-y-4">

            {/* Full Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="h-[52px] w-full rounded-md border border-neutral-200 bg-white px-4 text-[16px] text-neutral-800 outline-none transition-colors placeholder:text-neutral-500 focus:border-[#c8102e]"
            />

            {/* Email + Phone */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="h-[52px] w-full rounded-md border border-neutral-200 bg-white px-4 text-[16px] text-neutral-800 outline-none transition-colors placeholder:text-neutral-500 focus:border-[#c8102e]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="h-[52px] w-full rounded-md border border-neutral-200 bg-white px-4 text-[16px] text-neutral-800 outline-none transition-colors placeholder:text-neutral-500 focus:border-[#c8102e]"
              />
            </div>

            {/* Optional Message */}
            <textarea
              name="message"
              placeholder="Optional Message"
              rows={4}
              className="min-h-[115px] w-full resize-none rounded-md border border-neutral-200 bg-white px-4 py-3 text-[16px] leading-6 text-neutral-800 outline-none transition-colors placeholder:text-neutral-500 focus:border-[#c8102e]"
            />

            {/* Submit */}
            <button
              type="submit"
              className="h-[52px] w-full rounded-md bg-[#c8102e] px-6 text-[16px] font-semibold text-white transition-colors duration-300 hover:bg-[#a70d26]"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}