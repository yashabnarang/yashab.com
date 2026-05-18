"use client";

import Link from "next/link";
import { profile } from "@/content/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons/SocialIcons";

const sectionIds = ["about", "experience", "projects"];

export function Sidebar() {
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-green-50 sm:text-5xl">
          <Link href="/" className="transition-colors hover:text-green-400">
            {profile.name}
          </Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-green-100 sm:text-xl">
          {profile.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-green-400/90">{profile.tagline}</p>

        <nav className="hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {profile.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={item.href}>
                  <a href={item.href} className="group flex items-center py-3">
                    <span
                      className={`mr-4 h-px bg-forest-600 transition-all motion-reduce:transition-none group-hover:w-16 group-hover:bg-green-300 group-focus-visible:w-16 group-focus-visible:bg-green-300 ${
                        isActive ? "w-16 bg-green-300" : "w-8"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest group-hover:text-green-100 group-focus-visible:text-green-100 ${
                        isActive ? "text-green-100" : "text-green-500"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 shrink-0">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            className="block text-green-500 transition-colors hover:text-green-300"
          >
            <span className="sr-only">GitHub</span>
            <GitHubIcon />
          </a>
        </li>
        <li className="mr-5 shrink-0">
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            className="block text-green-500 transition-colors hover:text-green-300"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon />
          </a>
        </li>
        <li className="mr-5 shrink-0">
          <a
            href={profile.social.email}
            aria-label="Email"
            className="block text-green-500 transition-colors hover:text-green-300"
          >
            <span className="sr-only">Email</span>
            <MailIcon />
          </a>
        </li>
      </ul>
    </header>
  );
}
