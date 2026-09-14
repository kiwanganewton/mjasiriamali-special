"use client";

import { useEffect, useRef, useState } from "react";
import { newsletterTabContent } from "./newsletter-tab.config";

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
          -translate-y-1/2
          rounded-l-md
          border-y
          border-l
          border-white/20
          bg-[#c8102e]
          px-2.5
          py-3
          text-[11px]
          font-semibold
          tracking-[0.08em]
          text-white
          shadow-md
          transition-[transform,opacity]
          duration-500
          ease-out
          hover:bg-[#a70d26]
          hover:px-3
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#c8102e]
          focus-visible:ring-offset-2
          motion-reduce:transition-none

          sm:px-3
          sm:py-4
          sm:text-xs

          lg:top-[60%]
          lg:px-3
          lg:py-5
          lg:text-[13px]
          lg:tracking-wide
          lg:hover:px-4

          ${
            isTabVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }
        `}
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        {newsletterTabContent.label}
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
            <p className="mt-3 text-base leading-[1.7] text-neutral-500">
              {newsletterTabContent.description}
            </p>

            {/* FORM */}
            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => event.preventDefault()}
            >
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
                  focus:ring-2
                  focus:ring-[#c8102e]/15
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
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#c8102e]
                  focus-visible:ring-offset-2
                "
              >
                {newsletterTabContent.buttonText}
              </button>
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