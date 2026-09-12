import { aboutContent } from "./about.config";

export default function About() {
  return (
    <section className="bg-white pb-8 pt-0 sm:pb-10 lg:pb-12">
      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-10 px-8 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-10">
        {/* Text content */}
        <div className="max-w-[540px] text-center lg:text-left">
          <p className="mt-0 max-w-[680px] text-[15px] leading-[1.55] text-[#737373] sm:text-[16px]">
            {aboutContent.description}
          </p>
        </div>

        {/* YouTube video */}
        <div className="overflow-hidden rounded-lg border border-neutral-200 bg-black shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${aboutContent.videoId}?rel=0`}
              title={aboutContent.videoTitle}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}