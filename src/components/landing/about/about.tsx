import { aboutContent } from "./about.config";

export default function About() {
  return (
    <section className="bg-white pb-16 pt-0 sm:pb-20 sm:pt-6 lg:py-28">
      <div className="mx-auto mb-12 hidden h-px w-150 bg-neutral-200 lg:block" />

      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-10 px-8 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-10">
        {/* Text content */}
        <div className="max-w-[540px]">
          <p className="mb-5 text-xs font-bold tracking-[0.16em] text-[#c8102e]">
            {aboutContent.eyebrow}
          </p>

          {/* <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.025em] text-[#3f3f46] sm:text-4xl lg:text-[42px]">
            {aboutContent.title}
          </h2> */}

          <p className="mt-7 text-base leading-[1.7] text-neutral-500 sm:text-lg lg:text-xl">
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