"use client";

import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import {
  addonServicesContent,
  AddonService,
} from "./addon-services.config";

export default function AddonServices() {
  const desktopSectionRef = useRef<HTMLElement>(null);
  const desktopViewportRef = useRef<HTMLDivElement>(null);
  const desktopTrackRef = useRef<HTMLDivElement>(null);

  const [horizontalDistance, setHorizontalDistance] = useState(0);

  useEffect(() => {
    const calculateDistance = () => {
      if (!desktopViewportRef.current || !desktopTrackRef.current) {
        return;
      }

      const viewportWidth = desktopViewportRef.current.clientWidth;
      const trackWidth = desktopTrackRef.current.scrollWidth;

      setHorizontalDistance(
        Math.max(trackWidth - viewportWidth, 0)
      );
    };

    calculateDistance();

    const observer = new ResizeObserver(calculateDistance);

    if (desktopViewportRef.current) {
      observer.observe(desktopViewportRef.current);
    }

    if (desktopTrackRef.current) {
      observer.observe(desktopTrackRef.current);
    }

    window.addEventListener("resize", calculateDistance);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: desktopSectionRef,
    offset: ["start start", "end end"],
  });

  const horizontalX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -horizontalDistance]
  );

  const headingY = useTransform(
    scrollYProgress,
    [0, 0.18],
    [20, 0]
  );

  return (
    <>
      {/* DESKTOP + TABLET */}
      <section
        ref={desktopSectionRef}
        className="relative hidden bg-white md:block"
        style={{
          height: `calc(100vh + ${horizontalDistance}px)`,
        }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="w-full pt-8 lg:pt-10">

            {/* Section heading */}
            <motion.div
              style={{ y: headingY }}
              className="mx-auto w-full max-w-[1240px] px-6 lg:px-8"
            >
              <div className="max-w-[720px]">
                <h2
                  className="
                    max-w-[680px]
                    text-[30px]
                    font-semibold
                    leading-[1.2]
                    tracking-[-0.025em]
                    text-[#262626]
                    sm:text-[28px]
                    lg:text-[30px]
                  "
                >
                  {addonServicesContent.title}
                </h2>

                <p
                  className="
                    mt-4
                    max-w-[660px]
                    text-base
                    leading-[1.7]
                    text-[#737373]
                    sm:text-lg
                  "
                >
                  {addonServicesContent.description}
                </p>
              </div>
            </motion.div>

            {/* Horizontal cards */}
            <div
              ref={desktopViewportRef}
              className="mt-9 w-full overflow-visible lg:mt-12"
            >
              <motion.div
                ref={desktopTrackRef}
                style={{ x: horizontalX }}
                className="
                  flex
                  w-max
                  gap-5
                  pl-6
                  pr-6
                  lg:gap-6
                  lg:pl-[max(24px,calc((100vw-1240px)/2+32px))]
                  lg:pr-[max(24px,calc((100vw-1240px)/2+32px))]
                "
              >
                {addonServicesContent.services.map(
                  (service, index) => (
                    <DesktopCard
                      key={service.number}
                      service={service}
                      index={index}
                      progress={scrollYProgress}
                    />
                  )
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <MobileServices />
    </>
  );
}

/* =========================================================
   DESKTOP CARD
========================================================= */

function DesktopCard({
  service,
  index,
  progress,
}: {
  service: AddonService;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = Math.min(index * 0.08, 0.7);

  const scale = useTransform(
    progress,
    [
      start,
      start + 0.12,
      Math.min(start + 0.35, 1),
    ],
    [0.96, 1, 0.98]
  );

  const opacity = useTransform(
    progress,
    [
      start,
      start + 0.1,
      Math.min(start + 0.35, 1),
    ],
    [0.7, 1, 0.94]
  );

  return (
    <motion.article
      style={{
        scale,
        opacity,
      }}
      className="
        group
        w-[300px]
        shrink-0
        overflow-hidden
        rounded-[16px]
        border
        border-neutral-200
        bg-white
        sm:w-[330px]
        lg:w-[360px]
      "
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.035]
          "
        />

        <div
          className="
            absolute
            left-5
            top-5
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white
            text-sm
            font-semibold
            text-neutral-900
            shadow-sm
          "
        >
          {service.number}
        </div>
      </div>

      <div className="p-6 lg:p-7">
        <h3
          className="
            text-xl
            font-semibold
            leading-[1.25]
            tracking-[-0.02em]
            text-[#262626]
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-3
            text-[15px]
            leading-[1.7]
            text-[#737373]
            sm:text-base
          "
        >
          {service.description}
        </p>

       
      </div>
    </motion.article>
  );
}

/* =========================================================
   MOBILE
========================================================= */

function MobileServices() {
  return (
    <section className="bg-white py-16 sm:py-20 md:hidden">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
         className="px-2 text-left sm:px-3"
        >
          <h2
            className="
              text-[28px]
              font-semibold
              leading-[1.2]
              tracking-[-0.025em]
              text-[#262626]
              sm:text-[24px]
            "
          >
            {addonServicesContent.title}
          </h2>

          <p
            className="
              mt-4
              text-base
              leading-[1.7]
              text-[#737373]
              sm:text-lg
            "
          >
            {addonServicesContent.description}
          </p>
        </motion.div>

        <div className="mt-10 space-y-5">
          {addonServicesContent.services.map(
            (service, index) => (
              <MobileCard
                key={service.number}
                service={service}
                index={index}
              />
            )
          )}

          <div className="h-[30vh]" />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MOBILE CARD
========================================================= */

function MobileCard({
  service,
  index,
}: {
  service: AddonService;
  index: number;
}) {
  return (
    <div
      className="sticky"
      style={{
        top: `${82 + index * 12}px`,
        zIndex: index + 1,
      }}
    >
      <motion.article
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.08,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          overflow-hidden
          rounded-[16px]
          border
          border-neutral-200
          bg-white
          shadow-[0_-4px_20px_rgba(0,0,0,0.035)]
        "
      >
        <div className="relative aspect-[1.35/1] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
            "
          />

          <div
            className="
              absolute
              left-4
              top-4
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-white
              text-xs
              font-semibold
              text-neutral-900
              shadow-sm
            "
          >
            {service.number}
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <h3
            className="
              text-xl
              font-semibold
              leading-[1.25]
              tracking-[-0.02em]
              text-[#262626]
            "
          >
            {service.title}
          </h3>

          <p
            className="
              mt-3
              text-[15px]
              leading-[1.7]
              text-[#737373]
            "
          >
            {service.description}
          </p>

          
        </div>
      </motion.article>
    </div>
  );
}