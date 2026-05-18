import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Project Archive | Yashab Narang",
  description: "Full archive of projects by Yashab Narang.",
};

export default function ArchivePage() {
  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6 py-16 md:px-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center text-sm font-medium text-green-400 transition-colors hover:text-green-300"
      >
        ← Back home
      </Link>
      <h1 className="text-3xl font-bold tracking-tight text-green-50">Project Archive</h1>
      <p className="mt-4 text-green-300/85">All projects, including older work.</p>

      <ul className="mt-12 space-y-16">
        {projects.map((project) => (
          <li key={project.id} className="border-b border-forest-800 pb-16 last:border-0">
            <p className="font-mono text-xs text-green-400">{project.date}</p>
            <h2 className="mt-2 text-xl font-medium text-green-50">
              <ExternalLink href={project.href}>{project.title}</ExternalLink>
            </h2>
            <p className="mt-3 text-green-300/85">{project.description}</p>
            <ul className="mt-4 flex flex-wrap">
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </ul>
            {project.image && (
              <div className="relative mt-6 aspect-video w-full overflow-hidden rounded border border-forest-800">
                <Image src={project.image} alt="" fill className="object-cover" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
