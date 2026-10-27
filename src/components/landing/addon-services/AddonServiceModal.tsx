"use client";

import { ArrowRight } from "lucide-react";
import ModalShell from "@/components/ui/ModalShell";
import type { AddonService } from "./addon-services.config";
import { addonServiceDetails } from "./addon-services.details";

type AddonServiceModalProps = {
  service: AddonService | null;
  onClose: () => void;
};

export default function AddonServiceModal({
  service,
  onClose,
}: AddonServiceModalProps) {
  const detail = service ? addonServiceDetails[service.number] : null;
  const serviceTitle = service?.title ?? "the selected service";
  const emailSubject = encodeURIComponent(`Question about ${serviceTitle}`);
  const emailBody = encodeURIComponent(
    `Hello Dilipoint,\n\nI would like to learn more about ${serviceTitle} for my business.\n\nPlease contact me with the next steps.\n\nName:\nBusiness name:\nPhone:`,
  );
  const emailHref = `mailto:msp@dilipoint.com?subject=${emailSubject}&body=${emailBody}`;

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
              <p className="text-[15px] leading-[1.7] text-neutral-600 sm:text-base [hyphens:auto] [overflow-wrap:break-word]">
                {detail.quoteOffer}
              </p>
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
            <a
              href={emailHref}
              onClick={onClose}
              className="group hidden w-full items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-brand bg-brand px-5 py-2.5 text-[13px] font-semibold text-white shadow-none transition-[transform,background-color,border-color,color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-strong hover:shadow-[0_8px_18px_rgba(0,0,0,0.14)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 md:inline-flex sm:w-auto"
            >
              Ask about this service
              <ArrowRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="tel:+255756121995"
              onClick={onClose}
              aria-label="Call about this service at +255 756 121 995"
              className="group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-brand bg-brand px-5 py-2.5 text-[13px] font-semibold text-white shadow-none transition-[transform,background-color,border-color,color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-strong hover:shadow-[0_8px_18px_rgba(0,0,0,0.14)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 md:hidden"
            >
              Call about this service
              <ArrowRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </article>
      )}
    </ModalShell>
  );
}