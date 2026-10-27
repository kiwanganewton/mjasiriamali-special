
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";
import { trustConsultationContent } from "./TrustConsultationBar.config";

export default function TrustConsultationBar() {
  const content = trustConsultationContent;

  return (
    <section
      aria-label="Consultation invitation"
      style={{ colorScheme: "only light" }}
      className="
        relative mx-auto mt-0 mb-5
        w-[calc(100%_-_2.5rem)] max-w-[1240px]
        sm:mt-0 sm:mb-6 sm:w-[calc(100%_-_5rem)]
        lg:mt-1 lg:mb-8 lg:w-[calc(100%_-_8rem)]
      "
    >
      <div
        className="
          grid overflow-hidden
          rounded-md
          border border-border
          bg-white
          lg:grid-cols-[minmax(0,1fr)_300px]
        "
      >
        <div
          className="
            flex items-center
            bg-white
            px-7 py-7
            sm:px-10 sm:py-8
            lg:px-11 lg:py-9
          "
        >
          <div>
            <h2 className="heading-section max-w-[500px] text-neutral-700">
              {content.titlePrefix}
            </h2>

            <p
              className="
                mt-3
                max-w-[680px]
                text-[15px]
                leading-[1.55]
                text-muted
                sm:text-[16px]
              "
            >
              {content.description}
            </p>
          </div>
        </div>

        <div
          className="
            flex items-center
            border-t border-border
            bg-[#fafafa]
            px-7 py-6
            sm:px-10 sm:py-7
            lg:border-l lg:border-t-0
            lg:px-8
          "
        >
          <a
            href="https://dilipoint.com"
            className="
              inline-flex w-full items-center justify-center gap-2
              rounded-md
              border border-[#c8102e]
              bg-[#c8102e] px-4 py-3
              text-center text-white
              transition-colors
              hover:bg-[#a50d25]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#c8102e]
              focus-visible:ring-offset-2
              lg:bg-transparent
              lg:text-[#c8102e]
              lg:hover:bg-[#c8102e]
              lg:hover:text-white
            "
          >
            {content.buttonText}
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
