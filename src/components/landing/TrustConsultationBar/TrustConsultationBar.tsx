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
          border border-[#c8102e]
          bg-[#c8102e]
          sm:border-[#e3e3e3]
          sm:bg-white
          lg:grid-cols-[minmax(0,1fr)_300px]
        "
      >
        {/* Content */}
        <div
          className="
            flex items-center
            bg-[#c8102e]
            px-7 py-7
            sm:bg-white
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
                text-white
                sm:text-[24px]
                sm:text-[#262626]
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
                text-white/90
                sm:text-[16px]
                sm:text-[#737373]
              "
            >
              {content.description}
            </p>
          </div>
        </div>

        {/* Button */}
        <div
          className="
            flex items-center
            border-t border-white/25
            bg-[#c8102e]
            px-7 py-6
            sm:border-t-0
            sm:bg-[#fafafa]
            sm:px-10 sm:py-7
            lg:border-l lg:border-t-0
            lg:border-[#e3e3e3]
            lg:px-8
          "
        >
          <Button
            tone="brand"
            variant="outline"
            onClick={onConsultationClick}
            className="
              w-full gap-2
              border-white
              bg-white
              text-[#c8102e]
              hover:bg-white
              hover:text-[#c8102e]

              sm:border-[#c8102e]
              sm:bg-transparent
              sm:text-[#c8102e]
              sm:hover:bg-[#c8102e]
              sm:hover:text-white

              lg:border
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