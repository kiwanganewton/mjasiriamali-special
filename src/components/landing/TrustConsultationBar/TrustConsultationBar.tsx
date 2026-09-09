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
      className="
        relative mx-auto mt-6 mb-12
        w-[calc(100%_-_2.5rem)]
        max-w-[1240px]
        sm:mt-8 sm:mb-14
        sm:w-[calc(100%_-_5rem)]
        lg:mt-10 lg:mb-16
        lg:w-[calc(100%_-_8rem)]
      "
      aria-label="Consultation invitation"
    >
      <div
        className="
          grid overflow-hidden rounded-lg border border-neutral-200
          bg-white shadow-[0_16px_38px_rgba(15,23,42,0.10)]
          lg:grid-cols-[minmax(0,1fr)_330px]
        "
      >
        <div className="flex items-center px-7 py-8 sm:px-10 sm:py-9 lg:px-12 lg:py-10">
          <div>
            <h2
              className="
                max-w-[420px] text-[23px] font-semibold leading-[1.12]
                tracking-[-0.025em] text-neutral-800 sm:text-[25px]
              "
            >
              {content.titlePrefix}
            </h2>

            <p
              className="
                mt-4 max-w-[680px] text-[15px] leading-[1.55]
                text-neutral-500 sm:text-[16px]
              "
            >
              {content.description}
            </p>
          </div>
        </div>

        <div
          className="
            flex items-center border-t border-neutral-200 bg-neutral-50
            px-7 py-6 sm:px-10 sm:py-7
            lg:border-t-0 lg:border-l lg:px-8
          "
        >
          <Button
            tone="brand"
            variant="solid"
            onClick={onConsultationClick}
            className="w-full gap-2"
          >
            {content.buttonText}
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}