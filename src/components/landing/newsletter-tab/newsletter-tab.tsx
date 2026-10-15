"use client";

import { useEffect, useRef, useState } from "react";
import { newsletterTabContent } from "./newsletter-tab.config";
import Button from "@/components/ui/button";

const MODAL_TRANSITION_DURATION = 280;

export default function NewsletterTab() {
  const [isTabVisible, setIsTabVisible] = useState(false);
  const [isModalMounted, setIsModalMounted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updateNewsletterTabVisibility = () => {
      const isDesktop = window.innerWidth >= 1024;
      const hasScrolledTwice = window.scrollY >= window.innerHeight * 2;

      setIsTabVisible(isDesktop || hasScrolledTwice);
    };

    updateNewsletterTabVisibility();

    window.addEventListener("scroll", updateNewsletterTabVisibility, {
      passive: true,
    });

    window.addEventListener("resize", updateNewsletterTabVisibility);

    return () => {
      window.removeEventListener("scroll", updateNewsletterTabVisibility);
      window.removeEventListener("resize", updateNewsletterTabVisibility);
    };
  }, []);

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
          top-1/2
          z-50
          flex
          h-[220px]
          w-11
          items-center
          justify-center
          overflow-hidden
          -translate-y-1/2
          rounded-l-md
          border-y
          border-l
          border-white/20
          bg-[#d70900]
          text-[11px]
          font-semibold
          tracking-[0.08em]
          text-white
          shadow-md
          transition-[transform,opacity]
          duration-500
          ease-out
          hover:bg-[#a70d26]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#c8102e]
          focus-visible:ring-offset-2
          motion-reduce:transition-none

          sm:h-[236px]
          sm:w-12
          sm:text-xs

          lg:top-[60%]
          lg:h-[256px]
          lg:w-14
          lg:text-[13px]
          lg:tracking-wide

          ${
            isTabVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }
        `}
      >
        <span
          className="inline-block whitespace-nowrap"
          style={{ transform: "rotate(90deg)" }}
        >
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
              className="heading-section text-neutral-900"
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
