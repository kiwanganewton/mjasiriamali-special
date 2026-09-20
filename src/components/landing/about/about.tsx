import { aboutContent } from "./about.config";

export default function About() {
  return (
    <section className="bg-white pb-6 pt-0 sm:pb-12 lg:pb-24">
      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-6 px-6 sm:gap-10 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-10">

        {/* Text content */}
        <div className="max-w-[540px] text-left">
          <p className="mt-0 text-left text-[16px] leading-[1.55] text-[#737373] [text-align:justify] [hyphens:auto]">
            {aboutContent.description}
          </p>
        </div>

        {/* YouTube video */}
        <div className="overflow-hidden rounded-lg border border-neutral-200 bg-black shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/ldFFYFE-BKk?si=7ZojH-FaT-ldWgs0"
              title="YouTube video player"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </section>
  );
}