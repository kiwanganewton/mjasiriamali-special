"use client";

import { useState } from "react";
import AssessmentModal from "@/components/assessment/AssessmentModal";
import PackFeatureCard from "./pack-feature-card";
import FeatureDetailModal from "./FeatureDetailModal";
import { packFeatures, type PackFeature } from "./pack-features.config";

export default function PackFeatures() {
  const [activeFeature, setActiveFeature] = useState<PackFeature | null>(null);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  return (
    <>
      <section
        className="
        w-full
        bg-surface-muted
        pt-10
        pb-16
        sm:pt-12
        sm:pb-20
        lg:pt-14
        lg:pb-24
      "
      >
        <div className="mx-auto w-full max-w-content px-5 sm:px-8 lg:px-10">
        {/* Section introduction */}
        <div className="max-w-[720px] px-2 sm:px-0">
          <h2
            className="heading-section max-w-[680px] text-neutral-700"
          >
          Everything You Need under One Special Pack
          </h2>

          <p
            className="
              mt-4
              max-w-[660px]
              text-body
              text-muted
              sm:text-lg
            "
          >
            A package built to help your business stay visible, communicate
            clearly, and grow without the cost of building a full in-house
            team.
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
              <PackFeatureCard
                key={feature.id}
                feature={feature}
                onReadMore={setActiveFeature}
              />
            ))}
          </div>
        </div>
      </section>

      <FeatureDetailModal
        feature={activeFeature}
        onClose={() => setActiveFeature(null)}
        onExploreFit={() => {
          setActiveFeature(null);
          setIsAssessmentOpen(true);
        }}
      />

      <AssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
      />
    </>
  );
}
