"use client";

import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";
import ModalShell from "@/components/ui/ModalShell";
import type { PackFeature } from "./pack-features.config";

type FeatureDetailModalProps = {
  feature: PackFeature | null;
  onClose: () => void;
  onExploreFit: () => void;
};

export default function FeatureDetailModal({
  feature,
  onClose,
  onExploreFit,
}: FeatureDetailModalProps) {
  return (
    <ModalShell
      isOpen={Boolean(feature)}
      onClose={onClose}
      ariaLabel={feature ? `${feature.title} details` : "Package feature details"}
      closeButtonLabel="Close feature details"
    >
      {feature && (
        <article
          data-feature-id={feature.interestKey}
          data-interest-signals={feature.detail.interestSignals.join(" ")}
          className="mx-auto w-full max-w-3xl px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10"
        >
          <header>
            <h2 className="heading-section text-neutral-700">
              {feature.title}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-neutral-500 sm:text-base">
              {feature.detail.introduction}
            </p>
          </header>

          {feature.detail.comparison && (
            <section
              className="mt-6"
              aria-labelledby={`${feature.interestKey}-comparison-title`}
            >
              <h3
                id={`${feature.interestKey}-comparison-title`}
                className="heading-subsection mb-3 text-neutral-700"
              >
                {feature.detail.comparison.title}
              </h3>
              <div className="overflow-hidden rounded-lg border border-neutral-200">
                <table className="w-full table-fixed border-collapse text-left text-[12px] leading-[1.55] sm:text-sm">
                  <caption className="sr-only">
                    Comparison for {feature.title}
                  </caption>
                  <thead className="bg-neutral-50 text-neutral-700">
                    <tr>
                      <th scope="col" className="w-[23%] px-2.5 py-3 font-semibold sm:px-4">
                        Area
                      </th>
                      <th scope="col" className="w-[38.5%] px-2.5 py-3 font-semibold sm:px-4">
                        {feature.detail.comparison.firstColumn}
                      </th>
                      <th scope="col" className="w-[38.5%] px-2.5 py-3 font-semibold sm:px-4">
                        {feature.detail.comparison.secondColumn}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {feature.detail.comparison.rows.map((row) => (
                      <tr key={row.topic} className="border-t border-neutral-200 align-top">
                        <th scope="row" className="break-words px-2.5 py-3 font-medium text-neutral-700 sm:px-4 sm:py-3.5">
                          {row.topic}
                        </th>
                        <td className="break-words px-2.5 py-3 text-neutral-500 sm:px-4 sm:py-3.5">
                          {row.first}
                        </td>
                        <td className="break-words px-2.5 py-3 text-neutral-700 sm:px-4 sm:py-3.5">
                          {row.second}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          <div className="mt-7 border-t border-neutral-200">
            {feature.detail.sections.map((section) => (
              <section
                key={section.id}
                data-content-section={section.id}
                className="border-b border-neutral-200 py-5 sm:py-6"
              >
                <h3 className="heading-subsection text-neutral-700">
                  {section.heading}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-neutral-500 sm:text-base">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm leading-[1.6] text-neutral-500">
              {/* Want to see how the package could fit your business? */}
            </p>
            <Button
              type="button"
              onClick={onExploreFit}
              data-action="open-package-assessment"
              data-feature-interest={feature.interestKey}
              className="group w-full gap-2 rounded-sm px-5 py-2.5 text-[13px] font-semibold shadow-none sm:w-auto"
            >
              Check your fit
              <ArrowRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
          </div>
        </article>
      )}
    </ModalShell>
  );
}
