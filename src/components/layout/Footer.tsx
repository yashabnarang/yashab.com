import { profile } from "@/content/profile";

const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-sand-200">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-baseline justify-between gap-3.5 px-5 pb-10 pt-7 md:gap-6 md:px-12 md:pb-14 md:pt-10">
        <p className="text-sm text-sand-600">{YEAR} &copy; {profile.name}</p>
        <span className="flex flex-wrap gap-3.5 text-sm md:gap-5">
          <a href={profile.social.github} target="_blank" rel="noreferrer noopener">GitHub</a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <a href={profile.social.email}>Email</a>
          <a href={profile.resume} target="_blank" rel="noreferrer noopener">Resume</a>
        </span>
      </div>
    </footer>
  );
}
