import Image from "next/image";
import type { PackFeature } from "./pack-features.config";

type PackFeatureCardProps = {
  feature: PackFeature;
};

export default function PackFeatureCard({
  feature,
}: PackFeatureCardProps) {
  return (
    <article
      className="
        group
        relative
        flex
        min-h-[420px]
        flex-col
        overflow-hidden
        rounded-[20px]
        border
        border-neutral-200
        bg-white
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:border-neutral-300
        hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]
        sm:min-h-[440px]
        lg:min-h-[460px]
      "
    >
      {/* CONTENT */}
      <div className="relative z-10 px-7 pt-7 sm:px-8 sm:pt-8">
        <h3
          className="
            max-w-[420px]
            text-[23px]
            font-semibold
            leading-[1.12]
            tracking-[-0.025em]
            text-neutral-800
            sm:text-[25px]
          "
        >
          {feature.title}
        </h3>

        <p
          className="
            mt-4
            max-w-[430px]
            text-[15px]
            leading-[1.55]
            text-neutral-500
            sm:text-[16px]
          "
        >
          {feature.description}
        </p>

        {feature.showReadMore && (
          <button
            type="button"
            className="
              mt-5
              text-[15px]
              font-medium
              text-[#d90000]
              transition-colors
              duration-200
              hover:text-[#a80000]
            "
          >
            Read More...
          </button>
        )}
      </div>

      {/* IMAGE AREA */}
      <div
  className="
    relative
    mt-auto
    h-[280px]
    w-full
    overflow-hidden
    sm:h-[300px]
    lg:h-[320px]
  "
>
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          sizes="
            (max-width: 639px) 100vw,
            (max-width: 1023px) 50vw,
            50vw
          "
          className="
            object-contain
            object-bottom
            transition-transform
            duration-500
            ease-out
            group-hover:scale-[1.025]
          "
        />
      </div>
    </article>
  );
}