import Image from "next/image";
import type { HeroSlideData } from "./hero.config";
import Button from "../../ui/button";

type HeroSlideProps = {
  slide: HeroSlideData;
};

export default function HeroSlide({ slide }: HeroSlideProps) {
  const desktop = slide.position.desktop;
  const mobile = slide.position.mobile;

  return (
    <article
      className="
        group
        relative
        h-[520px]
        w-full
        shrink-0
        overflow-hidden
        rounded-[24px]
        bg-neutral-100
        transition-all
        duration-500
        ease-out
        hover:-translate-y-[2px]
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]

        sm:h-[560px]

        md:h-[500px]

        lg:h-[560px]
      "
    >
      {/* IMAGE */}
      <Image
        src={slide.image}
        alt=""
        fill
        priority={slide.id === 1}
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.025]
        "
      />

      {/* SUBTLE FULL OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-black/[0.12]
          transition-opacity
          duration-500
          group-hover:bg-black/[0.08]
        "
      />

      {/* DESKTOP / TABLET CONTENT */}
      <div
        className="
          absolute
          z-10
          hidden
          -translate-y-1/2
          flex-col
          md:flex
        "
        style={{
          left: desktop.x,
          top: desktop.y,
          width: desktop.width,
        }}
      >
        <h2
          className="
            text-[24px]
            font-semibold
            leading-[1.15]
            tracking-[-0.018em]
            md:text-[28px]
            lg:text-[30px]
            xl:text-[34px]
          "
          style={{
            color: slide.colors.heading,
          }}
        >
          {slide.title}
        </h2>

        <p
          className="
            mt-5
            max-w-[420px]
            text-[15px]
            font-normal
            leading-[1.6]
            lg:text-[16px]
          "
          style={{
            color: slide.colors.paragraph,
          }}
        >
          {slide.description}
        </p>
      </div>

      {/* MOBILE CONTENT */}
      <div
        className="
          absolute
          z-10
          flex
          -translate-y-1/2
          flex-col
          md:hidden
        "
        style={{
          left: mobile.x,
          top: mobile.y,
          width: mobile.width,
        }}
      >
        <h2
          className="
            text-[32px]
            font-bold
            leading-[1.12]
            tracking-[-0.018em]

            max-[380px]:text-[28px]
          "
          style={{
            color: slide.colors.heading,
          }}
        >
          {slide.title}
        </h2>

        <p
          className="
            mt-4
            text-[15px]
            font-normal
            leading-[1.55]

            max-[380px]:text-[14px]
          "
          style={{
            color: slide.colors.paragraph,
          }}
        >
          {slide.description}
        </p>
      </div>

      {/* TABLET + DESKTOP BUTTON */}
      {slide.cta && (
        <div
          className="
            absolute
            bottom-7
            left-1/2
            z-20
            hidden
            -translate-x-1/2
            md:flex
            lg:translate-y-2
            lg:opacity-0
            lg:transition-all
            lg:duration-300
            lg:group-hover:translate-y-0
            lg:group-hover:opacity-100
          "
        >
          <Button
            variant={slide.cta.variant}
            tone={slide.cta.tone}
          >
            {slide.cta.label}
          </Button>
        </div>
      )}

      {/* MOBILE BUTTON */}
      {slide.cta && (
        <div
          className="
            absolute
            bottom-6
            left-1/2
            z-20
            flex
            -translate-x-1/2
            md:hidden
          "
        >
          <Button
            variant={slide.cta.variant}
            tone={slide.cta.tone}
          >
            {slide.cta.label}
          </Button>
        </div>
      )}

      {/* SUBTLE HOVER BORDER */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[24px]
          border
          border-white/0
          transition-colors
          duration-500
          group-hover:border-white/20
        "
      />
    </article>
  );
}