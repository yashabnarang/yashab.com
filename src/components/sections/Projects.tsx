import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Tag } from "@/components/ui/Tag";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <SectionHeading index={3} title="Projects" />
      <ul className="space-y-12">
        {featuredProjects.map((project) => (
          <li
            key={project.id}
            className="group relative rounded-lg border border-forest-800 bg-forest-900/50 p-6 transition-colors hover:border-green-600/40"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
              <div className="flex-1">
                <p className="font-mono text-xs text-green-400">{project.date}</p>
                <h3 className="mt-2 text-lg font-medium text-green-50">
                  <ExternalLink href={project.href}>{project.title}</ExternalLink>
                </h3>
                <p className="mt-3 text-green-300/85">{project.description}</p>
                <ul className="mt-4 flex flex-wrap">
                  {project.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </ul>
              </div>
              {project.image && (
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="relative aspect-video w-full shrink-0 overflow-hidden rounded border border-forest-700 lg:w-64"
                >
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                  />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-12">
        <Link
          href="/archive"
          className="inline-flex items-center font-medium text-green-400 transition-colors hover:text-green-300"
        >
          View full project archive
          <span className="ml-2" aria-hidden>
            →
          </span>
        </Link>
      </p>
    </section>
  );
}
