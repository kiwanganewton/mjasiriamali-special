import Image from "next/image";
import Button from "@/components/ui/button";

export default function CtaBanner() {
  return (
   <section className="w-full px-4 pt-6 sm:px-6 lg:px-8">
  <div className="relative mx-auto min-h-[260px] max-w-[1200px] overflow-hidden rounded-xl bg-neutral-100">
        {/* Background Image */}
        <Image
          src="/images/cta/cta-banner04.webp"
          alt="Customer support representative"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 1200px"
        />

        {/* Subtle readability overlay */}
       {/*  <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-white/5" /> */}

        {/* Content */}
        <div className="relative z-10 flex min-h-[260px] items-center">
          <div className="max-w-[560px] px-7 py-10 sm:px-10 lg:px-12">
           <h2 className="max-w-[470px] text-[28px] font-medium leading-[1.12] tracking-[-0.025em] text-white sm:text-[32px] lg:text-[36px]">
  Get Started Today With
  <br />
  Only 190,000 TZS
</h2>

            <Button
              type="button"
              variant="solid"
              tone="brand"
              className="mt-6 rounded-sm px-7 py-3 text-sm font-medium shadow-none hover:-translate-y-0 hover:shadow-none sm:px-8 sm:py-3.5"
            >
              Secure Spot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}