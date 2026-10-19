"use client";

import { useEffect, useRef, useState } from "react";
import { newsletterTabContent } from "./newsletter-tab.config";
import Button from "@/components/ui/button";
import { useAfterHero } from "@/components/landing/use-after-hero";

const MODAL_TRANSITION_DURATION = 280;

export default function NewsletterTab() {
  const isTabVisible = useAfterHero();
  const [isModalMounted, setIsModalMounted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  const openModal = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setIsModalMounted(true);

    requestAnimationFrame(() => {
      setIsModalVisible(true);
    });
  };

  const closeModal = () => {
    setIsModalVisible(false);

    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      setIsModalMounted(false);
    }, MODAL_TRANSITION_DURATION);
  };

  return (
    <>
      {/* FIXED NEWSLETTER TAB */}
      <button
        type="button"
        onClick={openModal}
        aria-label={newsletterTabContent.label}
        aria-hidden={!isTabVisible}
        tabIndex={isTabVisible ? 0 : -1}
        className={`
          fixed
          right-0
          top-auto
          bottom-[calc(env(safe-area-inset-bottom)_+_152px)]
          z-50
          flex
          h-[200px]
          w-12
          items-center
          justify-center
          rounded-l-md
          border-y
          border-l
          border-white/20
          bg-[#d70900]
          whitespace-nowrap
          text-[11px]
          font-semibold
          tracking-[0.08em]
          text-white
          shadow-md
          transition-[translate]
          duration-1000
          ease-in-out
          hover:bg-[#a70d26]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#c8102e]
          focus-visible:ring-offset-2
          motion-reduce:transition-none

          max-[360px]:right-2
          max-[360px]:h-[184px]
          max-[360px]:text-[10px]

          lg:right-0
          lg:top-[60%]
          lg:bottom-auto
          lg:-translate-y-1/2
          lg:overflow-hidden
          lg:gap-0
          lg:rounded-l-md
          lg:rounded-r-none
          lg:border-y
          lg:border-l
          lg:border-r-0
          lg:text-[11px]
          lg:h-[256px]
          lg:w-14
          lg:text-[13px]
          lg:tracking-wide
          lg:top-[60%]

          ${
            isTabVisible
              ? "translate-x-0"
              : "translate-x-full pointer-events-none"
          }
        `}
      >
        <span className="inline-block whitespace-nowrap" style={{ transform: "rotate(90deg)" }}>
          {newsletterTabContent.label}
        </span>
      </button>

      {/* NEWSLETTER MODAL */}
      {isModalMounted && (
        <div
          className={`
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/30
            px-4
            py-6
            transition-opacity
            duration-[280ms]
            ease-out
            motion-reduce:transition-none

            ${
              isModalVisible
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }
          `}
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-title"
            className={`
              max-h-full
              w-full
              max-w-[460px]
              overflow-y-auto
              rounded-md
              bg-white
              p-6
              shadow-2xl
              transition-[opacity,transform]
              duration-[280ms]
              ease-out
              motion-reduce:transition-none
              sm:p-8

              ${
                isModalVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-4 scale-[0.98] opacity-0"
              }
            `}
            onClick={(event) => event.stopPropagation()}
          >
            {/* HEADING */}
            <h2
              id="newsletter-title"
              className="heading-section text-neutral-600"
            >
              {newsletterTabContent.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-3 text-base leading-[1.7] text-neutral-500">
              {newsletterTabContent.description}
            </p>

            {/* FORM */}
            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="block min-w-0">
                <span className="sr-only">Email address</span>
                <input
                type="email"
                required
                placeholder={newsletterTabContent.emailPlaceholder}
                autoComplete="email"
                className="
                  w-full
                  min-w-0
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
                  focus:ring-2
                  focus:ring-[#c8102e]/15
                "
                />
              </label>

              <Button
                type="submit"
                className="w-full whitespace-normal rounded-md px-5 py-3 text-sm"
              >
                {newsletterTabContent.buttonText}
              </Button>
            </form>

            {/* CLOSE */}
            <button
              type="button"
              onClick={closeModal}
              className="
                mt-4
                text-sm
                text-neutral-500
                transition
                hover:text-neutral-900
                focus-visible:outline-none
                focus-visible:underline
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
