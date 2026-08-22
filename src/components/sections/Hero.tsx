/* eslint-disable @next/next/no-img-element */
import { profile } from "@/content/profile";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Hero() {
  return (
    <header id="top" className="relative">
      {/* Decorative circles. The big one bleeds behind the About section. */}
      <div className="absolute bottom-[-170px] left-[-120px] z-0 h-[300px] w-[300px] rounded-full bg-accent-100 md:bottom-[-300px] md:left-auto md:right-[-90px] md:h-[460px] md:w-[460px]" />
      <div className="absolute right-[260px] top-20 z-0 hidden h-[120px] w-[120px] rounded-full bg-accent-200 opacity-55 md:block" />

      <div className="relative mx-auto flex max-w-[1080px] flex-col-reverse items-start gap-[30px] px-5 pb-16 pt-13 md:flex-row md:items-center md:gap-14 md:px-12 md:pb-28 md:pt-26">
        <div className="max-w-[600px]">
          <h1 className="font-heading text-[38px] font-normal leading-none sm:text-[46px] md:text-[76px]">
            {profile.name}
          </h1>
          <p className="mt-4 text-[18px] leading-[1.4] text-sand-700 md:mt-5.5 md:text-[23px]">
            {profile.tagline}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <CopyEmailButton />
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-secondary"
            >
              Resume
            </a>
          </div>
          <p className="mt-7 text-[15px] text-accent-700">{profile.availability}</p>
        </div>

        <div className="washed h-[132px] w-[132px] shrink-0 overflow-hidden rounded-full md:h-[230px] md:w-[230px]">
          <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1080px] px-5 pb-7 md:px-12 md:pb-10">
        <p className="text-sm font-semibold tracking-[0.04em] text-accent-700">
          Scroll &darr;&nbsp; About, experience, projects
        </p>
      </div>
    </header>
  );
}
