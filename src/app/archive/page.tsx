/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Project Archive | Yashab Narang",
  description: "Full archive of projects by Yashab Narang.",
};

export default function ArchivePage() {
  return (
    <div className="mx-auto min-h-screen max-w-[820px] px-5 py-14 md:px-12 md:py-20">
      <Link href="/" className="btn btn-ghost pl-0">
        &larr; Back home
      </Link>

      <h1 className="mt-6 font-heading text-[38px] font-normal md:text-[52px]">Project Archive</h1>
      <p className="mt-3 text-[15px] text-sand-700">All projects, including older work.</p>

      <ul className="mt-10 flex list-none flex-col">
        {projects.map((project) => (
          <li key={project.id} className="border-t border-sand-200 py-7 last:border-b">
            <p className="text-sm font-semibold text-accent-700">{project.date}</p>
            <h2 className="mt-1.5 font-heading text-[26px] font-normal">
              <a href={project.href} target="_blank" rel="noreferrer noopener">
                {project.title}
              </a>
            </h2>
            <p className="mt-2.5 text-[15px] leading-[1.7] text-sand-700">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Tag key={tech.label} variant={tech.core ? "accent" : "outline"}>
                  {tech.label}
                </Tag>
              ))}
            </ul>
            {project.image && (
              <div className="washed mt-5 aspect-video w-full overflow-hidden rounded-lg">
                <img src={project.image} alt="" className="h-full w-full object-cover" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
