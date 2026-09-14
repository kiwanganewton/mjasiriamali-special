"use client";

import { useState } from "react";
import { newsletterTabContent } from "./newsletter-tab.config";

export default function NewsletterTab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NEWSLETTER TAB */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={newsletterTabContent.label}
        className="
          fixed
          right-0
          top-[58%]
          z-[50]
          -translate-y-1/2
          rounded-l-md
          bg-[#c8102e]
          px-3
          py-5
          text-[13px]
          font-semibold
          tracking-wide
          text-white
          shadow-md
          transition-all
          duration-300
          hover:bg-[#a70d26]
          hover:px-4

          md:top-[62%]

          lg:top-[58%]
          lg:-translate-y-1/2
          lg:rounded-l-md
          lg:px-3
          lg:py-5
        "
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        {newsletterTabContent.label}
      </button>

      {/* NEWSLETTER MODAL */}
      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/30
            px-4
          "
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-title"
            className="
              w-full
              max-w-[460px]
              rounded-md
              bg-white
              p-7
              shadow-2xl
              sm:p-8
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* HEADING */}
            <h2
              id="newsletter-title"
              className="
                text-2xl
                font-semibold
                tracking-tight
                text-neutral-900
              "
            >
              {newsletterTabContent.title}
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-3
                text-base
                leading-[1.7]
                text-neutral-500
              "
            >
              {newsletterTabContent.description}
            </p>

            {/* FORM */}
            <form className="mt-6 space-y-4">
              <input
                type="email"
                required
                placeholder={newsletterTabContent.emailPlaceholder}
                aria-label="Email address"
                className="
                  w-full
                  rounded-md
                  border
                  border-neutral-300
                  bg-white
                  px-4
                  py-3
                  text-sm
                  text-neutral-900
                  outline-none
                  transition
                  placeholder:text-neutral-400
                  focus:border-[#c8102e]
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  rounded-md
                  bg-[#c8102e]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  duration-200
                  hover:bg-[#a70d26]
                "
              >
                {newsletterTabContent.buttonText}
              </button>
            </form>

            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="
                mt-4
                text-sm
                text-neutral-500
                transition
                hover:text-neutral-900
              "
            >
              {newsletterTabContent.closeText}
            </button>
          </div>
        </div>
      )}
    </>
  );
}