/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { featuredProjects } from "@/content/projects";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Tag } from "@/components/ui/Tag";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 pt-24">
      <SectionTitle title="Projects" />

      <ul className="mt-8.5 flex list-none flex-col gap-7">
        {featuredProjects.map((project) => (
          <li
            key={project.id}
            className="card flex flex-col-reverse items-stretch gap-4.5 shadow-sm md:flex-row md:items-center md:gap-8"
          >
            <div className="flex-1">
              <p className="text-sm font-semibold text-accent-700">{project.date}</p>
              <h3 className="mt-1.5 font-heading text-[26px] font-normal">
                <a href={project.href} target="_blank" rel="noreferrer noopener">
                  {project.title}
                </a>
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.7] text-sand-700">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Tag key={tech.label} variant={tech.core ? "accent" : "outline"}>
                    {tech.label}
                  </Tag>
                ))}
              </ul>
            </div>

            {project.image && (
              <Link
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="washed block aspect-video w-full shrink-0 overflow-hidden rounded-lg md:w-[280px]"
              >
                <img src={project.image} alt="" className="h-full w-full object-cover" />
              </Link>
            )}
          </li>
        ))}
      </ul>

      <p className="mt-8">
        <Link href="/archive" className="btn btn-secondary">
          View full project archive &rarr;
        </Link>
      </p>
    </section>
  );
}
