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
        {/*
          Restore this section introduction later if needed.
          When restored, add:
          mt-12 sm:mt-14 lg:mt-16
          back to the feature grid below.
        */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            sm:gap-6
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