import Image from "next/image";
import Button from "@/components/ui/button";

export default function CtaBanner() {
  return (
    <section className="w-full px-4 pt-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto h-[200px] max-w-[1200px] overflow-hidden rounded-xl bg-neutral-900 sm:h-[210px] lg:h-[205px]">
        {/* Image */}
        <Image
  src="/images/cta/cta-banner13.webp"
  alt="Customer support representative"
  fill
  priority
  className="scale-[1.4] object-cover object-[72%_center] sm:scale-100 sm:object-[60%_center]"
  sizes="(max-width: 768px) 100vw, 1200px"
/>
        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="w-[64%] px-6 sm:w-[55%] sm:px-8 lg:w-[48%] lg:px-10">
            <h2 className="max-w-[430px] text-[25px] font-medium leading-[1.12] tracking-[-0.02em] text-white sm:text-[30px] lg:text-[34px]">
              Get Started Today With Only 190,000 TZS
            </h2>

            <Button
              type="button"
              variant="solid"
              tone="brand"
              className="mt-4 rounded-sm px-6 py-2.5 text-[13px] font-semibold shadow-none hover:-translate-y-0 hover:shadow-none sm:mt-5 sm:px-7 sm:py-3"
            >
              Secure Spot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}