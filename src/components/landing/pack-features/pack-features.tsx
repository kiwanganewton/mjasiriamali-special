import PackFeatureCard from "./pack-feature-card";
import { packFeatures } from "./pack-features.config";

export default function PackFeatures() {
  return (
    <section
      className="
        w-full
        bg-[#f7f7f7]
        pt-10
        pb-16
        sm:pt-12
        sm:pb-20
        lg:pt-14
        lg:pb-24
      "
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        {/* Section introduction */}
        <div className="max-w-[720px] px-2 sm:px-0">
          <h2
            className="
              max-w-[680px]
              text-[28px]
              font-semibold
              leading-[1.2]
              tracking-[-0.025em]
              text-neutral-700
              sm:text-[28px]
              lg:text-[30px]
            "
          >
            Your Entry To Result Driven Marketing
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
            A package built to help your business stay
            visible, communicate clearly, and grow without the cost of
            building a full in-house team.
          </p>
        </div>

        {/* Feature cards */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:mt-12
            sm:grid-cols-2
            sm:gap-6
            lg:mt-14
          "
        >
          {packFeatures.map((feature) => (
            <PackFeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}