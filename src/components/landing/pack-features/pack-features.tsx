"use client";

import { useState } from "react";
import AssessmentModal from "@/components/assessment/AssessmentModal";
import PackFeatureCard from "./pack-feature-card";
import FeatureDetailModal from "./FeatureDetailModal";
import { packFeatures, type PackFeature } from "./pack-features.config";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PackFeatures() {
  const [activeFeature, setActiveFeature] = useState<PackFeature | null>(null);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  return (
    <>
      <section
        id="pack-features"
        className="
        scroll-mt-6
        w-full
        bg-surface-muted
        pt-4
        pb-16
        sm:pt-6
        md:pt-12
        sm:pb-20
        lg:pt-14
        lg:pb-24
      "
      >
        <div className="mx-auto w-full max-w-content px-5 sm:px-8 lg:px-10">
        {/* Section introduction */}
        <ScrollReveal className="max-w-[720px] px-2 sm:px-0">
          <h2
            className="hidden heading-section max-w-[680px] text-neutral-700 md:block"
          >
          Everything You Need under One Special Pack
          </h2>

          <p
            className="
              mt-0
              md:mt-4
              max-w-[660px]
              text-body
              text-muted
              sm:text-lg
            "
          >
        Don't let limited resources hold back your marketing. Get four essential services under one affordable Mjasiriamali Special Pack.
          </p>
        </ScrollReveal>

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
            {packFeatures.map((feature, index) => (
              <ScrollReveal key={feature.id} delay={index * 0.07}>
                <PackFeatureCard
                  feature={feature}
                  onReadMore={setActiveFeature}
                />
              </ScrollReveal>
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
