"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import HeroSlide from "./hero-slide";
import { heroSlides } from "./hero.config";

const AUTO_PLAY_DURATION = 5000;

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktopPaused, setIsDesktopPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % heroSlides.length);
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentIndex(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    );
  }, []);

  useEffect(() => {
    if (isDesktopPaused) return;

    const interval = window.setInterval(nextSlide, AUTO_PLAY_DURATION);

    return () => window.clearInterval(interval);
  }, [isDesktopPaused, nextSlide]);

  const getSlides = (numberOfSlides: number) =>
    Array.from(
      { length: numberOfSlides },
      (_, index) => heroSlides[(currentIndex + index) % heroSlides.length],
    );

  return (
    <section
      className="w-full overflow-hidden bg-white py-8 sm:py-10 lg:py-12"
      aria-roledescription="carousel"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="relative">
          {/* Desktop: 3 cards */}
          <div
            className="hidden grid-cols-3 gap-6 lg:grid"
            onMouseEnter={() => setIsDesktopPaused(true)}
            onMouseLeave={() => setIsDesktopPaused(false)}
          >
            <AnimatePresence initial={false} mode="popLayout">
              {getSlides(3).map((slide, index) => (
                <motion.div
                  key={`desktop-${slide.id}-${index}`}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <HeroSlide slide={slide} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Tablet: 2 cards */}
          <div className="hidden grid-cols-2 gap-5 md:grid lg:hidden">
            <AnimatePresence initial={false} mode="popLayout">
              {getSlides(2).map((slide, index) => (
                <motion.div
                  key={`tablet-${slide.id}-${index}`}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <HeroSlide slide={slide} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile: 1 card */}
          <div className="md:hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={heroSlides[currentIndex].id}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <HeroSlide slide={heroSlides[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Previous slide */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="
              absolute left-[-22px] top-1/2 z-30 hidden h-14 w-14
              -translate-y-1/2 items-center justify-center rounded-full
              border border-neutral-200 bg-white text-neutral-900
              shadow-[0_8px_30px_rgba(0,0,0,0.14)]
              transition-all duration-300 ease-out
              hover:scale-105 hover:text-[#c8102e]
              active:scale-95
              md:flex
            "
          >
            <ChevronLeft size={28} strokeWidth={1.8} />
          </button>

          {/* Next slide */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="
              absolute -right-2 top-1/2 z-30 flex h-12 w-12
              -translate-y-1/2 items-center justify-center rounded-full
              border border-neutral-200 bg-white text-[#c8102e]
              shadow-[0_8px_30px_rgba(0,0,0,0.14)]
              transition-all duration-300 ease-out
              hover:scale-105 hover:bg-neutral-50
              active:scale-95
              md:right-[-22px] md:h-14 md:w-14
            "
          >
            <ChevronRight size={28} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </section>
  );
}