"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cookieConsentContent } from "./cookie-consent.config";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => window.clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed
            inset-x-0
            bottom-0
            z-[90]
            border-t
            border-neutral-200
            bg-white/96
            shadow-[0_-8px_30px_rgba(0,0,0,0.08)]
          "
        >
          <div
            className="
              mx-auto
              flex
              w-full
              max-w-[1240px]
              flex-col
              px-6
              py-5

              sm:px-6
              sm:py-6

              lg:px-8
              lg:py-6
            "
          >
            {/* TEXT */}
            <div className="w-full">
              <h2
                className="
                  text-lg
                  font-semibold
                  tracking-tight
                  text-neutral-900
                  sm:text-xl
                "
              >
                {cookieConsentContent.title}
              </h2>

           <p
  className="
    mt-2
    w-full
    max-w-none
    text-justify
    text-sm
    leading-[1.7]
    text-neutral-500
    sm:text-[15px]
    [hyphens:auto]
    [overflow-wrap:break-word]
  "
>
  {cookieConsentContent.description}
</p>
            </div>

            {/* ACTIONS */}
            <div
              className="
                mt-5
                flex
                w-full
                flex-wrap
                items-center
                justify-end
                gap-3
              "
            >
              <a
                href={cookieConsentContent.policyHref}
                className="
                  mr-2
                  text-sm
                  font-medium
                  text-neutral-600
                  underline
                  underline-offset-4
                  transition-colors
                  duration-200
                  hover:text-[#c8102e]
                "
              >
                {cookieConsentContent.policyText}
              </a>

              <button
                type="button"
                onClick={handleClose}
                className="
                  rounded-md
                  border
                  border-neutral-300
                  bg-white
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-neutral-700
                  transition-all
                  duration-200
                  hover:border-neutral-400
                  hover:bg-neutral-50
                "
              >
                {cookieConsentContent.declineText}
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="
                  rounded-md
                  bg-[#c8102e]
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#a70d26]
                "
              >
                {cookieConsentContent.acceptText}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}