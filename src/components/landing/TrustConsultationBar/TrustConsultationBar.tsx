import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/button";
import { trustConsultationContent } from "./TrustConsultationBar.config";

type TrustConsultationBarProps = {
  onConsultationClick?: () => void;
};

export default function TrustConsultationBar({
  onConsultationClick,
}: TrustConsultationBarProps) {
  const content = trustConsultationContent;

  return (
    <section
      aria-label="Consultation invitation"
      style={{ colorScheme: "only light" }}
      className="
        relative mx-auto mt-0 mb-12
        w-[calc(100%_-_2.5rem)] max-w-[1240px]
        sm:mt-0 sm:mb-14 sm:w-[calc(100%_-_5rem)]
        lg:mt-1 lg:mb-16 lg:w-[calc(100%_-_8rem)]
      "
    >
      <div
        className="
          grid overflow-hidden
          rounded-md
          border border-[#e3e3e3]
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
            <h2
              className="
                max-w-[500px]
                text-[23px]
                font-semibold
                leading-[1.15]
                tracking-[-0.02em]
                text-[#262626]
                sm:text-[24px]
              "
            >
              {content.titlePrefix}
            </h2>

            <p
              className="
                mt-3
                max-w-[680px]
                text-[15px]
                leading-[1.55]
                text-[#737373]
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
            border-t border-[#e3e3e3]
            bg-[#fafafa]
            px-7 py-6
            sm:px-10 sm:py-7
            lg:border-l lg:border-t-0
            lg:px-8
          "
        >
          <Button
            tone="brand"
            variant="solid"
            onClick={onConsultationClick}
            className="
              w-full gap-2
              lg:border
              lg:border-[#c8102e]
              lg:bg-transparent
              lg:text-[#c8102e]
              lg:hover:bg-[#c8102e]
              lg:hover:text-white
            "
          >
            {content.buttonText}
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}