import PackFeatureCard from "./pack-feature-card";
import { packFeatures } from "./pack-features.config";

export default function PackFeatures() {
  return (
    <section className="w-full bg-[#f7f7f7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">

        {/* SECTION INTRO */}
        <div className="max-w-[950px]">
          <h2
            className="
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-[-0.035em]
              text-neutral-800
              sm:text-5xl
              lg:text-[40px]
            "
          >
            All Under One Pack For Only 190,000 TZS Per Month
          </h2>

          <p
            className="
              mt-6
              max-w-[900px]
              text-lg
              leading-[1.5]
              text-neutral-500
              sm:text-xl
              lg:text-[22px]
            "
          >
            A professional content management service built
            specifically for small and growing businesses.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            sm:mt-14
            sm:grid-cols-2
            sm:gap-6
            lg:mt-16
          "
        >
          {packFeatures.map((feature) => (
            <PackFeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}