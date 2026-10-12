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
      className="w-full overflow-hidden bg-white pt-3 pb-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-12"
      aria-roledescription="carousel"
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8 lg:px-10">
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

          {/* Keep both controls vertically centered, with their centers on the
              left and right edges of the hero at every viewport width. */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 z-30 flex -translate-y-1/2 justify-between">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="pointer-events-auto flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.14)] transition-transform duration-300 hover:scale-105 hover:text-brand active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand max-[360px]:h-10 max-[360px]:w-10 md:h-14 md:w-14"
            >
              <ChevronLeft className="max-[360px]:h-5 max-[360px]:w-5" size={28} strokeWidth={1.8} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="pointer-events-auto flex h-12 w-12 translate-x-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.14)] transition-transform duration-300 hover:scale-105 hover:text-brand active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand max-[360px]:h-10 max-[360px]:w-10 md:h-14 md:w-14"
            >
              <ChevronRight className="max-[360px]:h-5 max-[360px]:w-5" size={28} strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
} 
