"use client";

import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";
import ModalShell from "@/components/ui/ModalShell";
import type { AddonService } from "./addon-services.config";
import { addonServiceDetails } from "./addon-services.details";

type AddonServiceModalProps = {
  service: AddonService | null;
  onClose: () => void;
  onAskAboutService: () => void;
};

export default function AddonServiceModal({
  service,
  onClose,
  onAskAboutService,
}: AddonServiceModalProps) {
  const detail = service ? addonServiceDetails[service.number] : null;

  return (
    <ModalShell
      isOpen={Boolean(service)}
      onClose={onClose}
      ariaLabel="Add-on service details and pricing"
      closeButtonLabel="Close service details"
    >
      {service && detail && (
        <article className="mx-auto w-full max-w-3xl px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <header>
            <h2 className="heading-section mt-2 text-neutral-700">
              {service.title}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-neutral-600 sm:text-base [hyphens:auto] [overflow-wrap:break-word]">
              {detail.introduction}
            </p>
          </header>

          <section className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50/70 p-4 sm:p-5">
            <div className="mb-4">
              <h3 className="heading-subsection text-neutral-700">Pricing</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500 [hyphens:auto] [overflow-wrap:break-word]">
                Mjasiriamali Special members receive 25% off eligible add-on services.
              </p>
            </div>

            {detail.pricing.length > 0 ? (
              <div className="space-y-3">
                {detail.pricing.map((price) => (
                  <div
                    key={price.item}
                    className="rounded-md border border-neutral-200 bg-white p-4"
                  >
                    <h4 className="text-sm font-semibold text-neutral-800 sm:text-base">
                      {price.item}
                    </h4>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="min-w-0 rounded-md bg-neutral-50 p-3">
                        <p className="text-[11px] leading-tight text-neutral-500 sm:text-xs [hyphens:auto] [overflow-wrap:break-word]">
                          Regular client
                        </p>
                        <p className="mt-1 break-words text-sm font-semibold text-neutral-800 sm:text-base [hyphens:auto] [overflow-wrap:break-word]">
                          TSh {price.regular}
                        </p>
                      </div>
                      <div className="min-w-0 rounded-md bg-[#c8102e] p-3 text-white">
                        <p className="text-[11px] leading-tight text-white/85 sm:text-xs [hyphens:auto] [overflow-wrap:break-word]">
                          Mjasiriamali Special member
                        </p>
                        <p className="mt-1 break-words text-sm font-bold text-white sm:text-base [hyphens:auto] [overflow-wrap:break-word]">
                          TSh {price.member}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-md border border-[#c8102e]/20 bg-[#c8102e]/5 p-4">
                <p className="text-[15px] font-medium leading-[1.7] text-neutral-700 sm:text-base [hyphens:auto] [overflow-wrap:break-word]">
                  {detail.quoteOffer}
                </p>
              </div>
            )}
          </section>

          <section className="mt-6 border-t border-neutral-200 pt-5">
            <h3 className="heading-subsection text-neutral-700">
              How this service helps
            </h3>
            <p className="mt-2 text-[15px] leading-[1.7] text-neutral-500 sm:text-base [hyphens:auto] [overflow-wrap:break-word]">
              {detail.solution}
            </p>
          </section>

          <section className="mt-5 border-t border-neutral-200 pt-5">
            <h3 className="heading-subsection text-neutral-700">
              Agreeing on the scope
            </h3>
            <p className="mt-2 text-[15px] leading-[1.7] text-neutral-500 sm:text-base [hyphens:auto] [overflow-wrap:break-word]">
              {detail.scope}
            </p>
          </section>

          <div className="mt-6 flex flex-col gap-3 border-t border-neutral-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-neutral-500 [hyphens:auto] [overflow-wrap:break-word]">
              Need this for your business? Let’s discuss the right scope.
            </p>
            <Button
              type="button"
              onClick={onAskAboutService}
              className="group w-full gap-2 rounded-sm px-5 py-2.5 text-[13px] font-semibold shadow-none sm:w-auto"
            >
              Ask about this service
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