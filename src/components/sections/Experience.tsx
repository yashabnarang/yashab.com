import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <SectionHeading index={2} title="Experience" />
      <ol className="group/list space-y-12">
        {experience.map((job) => (
          <li key={job.id} className="relative">
            <div className="absolute -left-4 hidden h-full w-px bg-forest-800 md:block" />
            <header className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-medium text-green-50">
                  {job.title}
                  <span className="text-green-400/80"> · {job.company}</span>
                </h3>
                <p className="text-sm text-green-600">{job.location}</p>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-green-600">
                {job.range}
              </p>
            </header>
            <ul className="mb-4 list-disc space-y-2 pl-5 text-green-300/85">
              {job.bullets.map((bullet) => (
                <li key={bullet.slice(0, 50)}>{bullet}</li>
              ))}
            </ul>
            <ul className="flex flex-wrap">
              {job.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
