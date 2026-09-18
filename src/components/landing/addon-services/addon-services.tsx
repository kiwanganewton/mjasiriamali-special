"use client";

import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Service = {
  number: string;
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Website Design",
    description:
      "Professional, responsive websites that give your business a credible digital presence and make it easier for customers to find you.",
    image: "/images/addon-services/website-design.webp",
  },
  {
    number: "02",
    title: "Company Profiles",
    description:
      "Professionally designed company profiles that clearly present your business, services, capabilities, and experience.",
    image: "/images/addon-services/company-profile.webp",
  },
  {
    number: "03",
    title: "Professional Emails",
    description:
      "Business email addresses using your own domain to give your communication a more professional and trusted appearance.",
    image: "/images/addon-services/professional-emails.webp",
  },
  {
    number: "04",
    title: "Branding Items",
    description:
      "From logos and business cards to letterheads and other branded materials, keep your business identity consistent.",
    image: "/images/addon-services/branding-items.webp",
  },
  {
    number: "05",
    title: "Social Media Management",
    description:
      "Keep your social channels active with planned content, creative designs, publishing support, and ongoing management.",
    image: "/images/addon-services/social-media.webp",
  },
];

export default function AddonServices() {
  const desktopSectionRef = useRef<HTMLElement>(null);
  const desktopViewportRef = useRef<HTMLDivElement>(null);
  const desktopTrackRef = useRef<HTMLDivElement>(null);

  const [horizontalDistance, setHorizontalDistance] = useState(0);

  /*
   * Calculate the exact horizontal distance
   * required for the card track.
   */
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

  /*
   * Desktop / tablet scroll progress.
   */
  const { scrollYProgress } = useScroll({
    target: desktopSectionRef,
    offset: ["start start", "end end"],
  });

  /*
   * Horizontal card movement.
   */
  const horizontalX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -horizontalDistance]
  );

  /*
   * Subtle heading movement only.
   *
   * No opacity animation here.
   * This keeps the heading colour visually
   * identical to the mobile version.
   */
  const headingY = useTransform(
    scrollYProgress,
    [0, 0.18],
    [20, 0]
  );

  return (
    <>
      {/* =====================================================
          DESKTOP + TABLET
      ====================================================== */}

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
              style={{
                y: headingY,
              }}
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
                    sm:text-[32px]
                    lg:text-[34px]
                  "
                >
                  Build more with the right digital support.
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
                  Extend your Mjasiriamali package with professional
                  services designed to strengthen your brand, improve
                  your digital presence, and support your day-to-day
                  business needs.
                </p>
              </div>
            </motion.div>

            {/* Horizontal card viewport */}
            <div
              ref={desktopViewportRef}
              className="mt-9 w-full overflow-visible lg:mt-12"
            >
              <motion.div
                ref={desktopTrackRef}
                style={{
                  x: horizontalX,
                }}
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
                {services.map((service, index) => (
                  <DesktopCard
                    key={service.number}
                    service={service}
                    index={index}
                    progress={scrollYProgress}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MOBILE
      ====================================================== */}

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
  service: Service;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = Math.min(index * 0.08, 0.7);

  const scale = useTransform(
    progress,
    [start, start + 0.12, Math.min(start + 0.35, 1)],
    [0.96, 1, 0.98]
  );

  const opacity = useTransform(
    progress,
    [start, start + 0.1, Math.min(start + 0.35, 1)],
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
      {/* Image */}
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

        {/* Number */}
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

      {/* Content */}
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

        <div className="mt-6 h-px w-full bg-[#e3e3e3]" />

        <div className="mt-4 text-sm font-medium text-[#c8102e]">
          Available as an add-on
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MOBILE SECTION
========================================================= */

function MobileServices() {
  return (
    <section className="bg-white py-16 sm:py-20 md:hidden">
     <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        {/* Section heading */}
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
          className="px-2 sm:px-3"
        >
          <h2
            className="
              text-[30px]
              font-semibold
              leading-[1.2]
              tracking-[-0.025em]
              text-[#262626]
              sm:text-[32px]
            "
          >
            Build more with the right digital support.
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
            Extend your Mjasiriamali package with professional
            services designed to strengthen your brand, improve
            your digital presence, and support your day-to-day
            business needs.
          </p>
        </motion.div>

        {/* Sticky cards */}
        <div className="mt-10 space-y-5">
          {services.map((service, index) => (
            <MobileCard
              key={service.number}
              service={service}
              index={index}
            />
          ))}

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
  service: Service;
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
        {/* Image */}
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

          {/* Number */}
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

        {/* Content */}
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

          <div className="mt-5 text-sm font-medium text-[#c8102e]">
            Available as an add-on
          </div>
        </div>
      </motion.article>
    </div>
  );
}