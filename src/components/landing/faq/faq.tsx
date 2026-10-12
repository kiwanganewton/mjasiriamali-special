import { ChevronDown } from "lucide-react";
import { faqContent } from "./faq.config";

export default function Faq() {
  const leftColumnItems = faqContent.items.slice(0, 2);
  const rightColumnItems = faqContent.items.slice(2);

  return (
    <section className="bg-surface-muted pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8 lg:px-10">
        <div className="max-w-[720px]">
          <h2 className="text-[24px] font-semibold leading-[1.2] tracking-heading text-neutral-700 sm:text-[28px] lg:text-section-heading">
            {faqContent.title}
          </h2>

          <p className="mt-4 text-body text-muted sm:text-lg">
            {faqContent.description}
          </p>
        </div>

        <div className="mt-8 grid min-w-0 grid-cols-1 gap-x-10 sm:mt-10 lg:grid-cols-2 lg:gap-x-12">
          <div className="min-w-0 border-t border-border">
            {leftColumnItems.map((item, index) => (
              <details
                key={item.question}
                name="mjasiriamali-faq-left"
                open={index === 0}
                className="group min-w-0 border-b border-border"
              >
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-medium leading-[1.45] text-neutral-700 outline-none transition-colors hover:text-brand focus-visible:text-brand [&::-webkit-details-marker]:hidden sm:py-6 sm:text-lg">
                  <span className="min-w-0">{item.question}</span>

                  <ChevronDown
                    aria-hidden="true"
                    size={20}
                    className="shrink-0 text-brand transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>

                <p className="pb-6 text-[15px] leading-[1.7] text-muted sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="min-w-0 border-t border-border">
            {rightColumnItems.map((item) => (
              <details
                key={item.question}
                name="mjasiriamali-faq-right"
                className="group min-w-0 border-b border-border"
              >
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-medium leading-[1.45] text-neutral-700 outline-none transition-colors hover:text-brand focus-visible:text-brand [&::-webkit-details-marker]:hidden sm:py-6 sm:text-lg">
                  <span className="min-w-0">{item.question}</span>

                  <ChevronDown
                    aria-hidden="true"
                    size={20}
                    className="shrink-0 text-brand transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>

                <p className="pb-6 text-[15px] leading-[1.7] text-muted sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}