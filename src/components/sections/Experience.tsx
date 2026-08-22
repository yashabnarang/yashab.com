import { experience } from "@/content/experience";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 pt-24">
      <SectionTitle title="Experience" />

      <ol className="mt-8.5 flex list-none flex-col gap-2">
        {experience.map((job) => (
          <li
            key={job.id}
            className="flex flex-col gap-2.5 border-t border-sand-200 py-5.5 last:border-b md:flex-row md:gap-8 md:py-7.5"
          >
            <div className="flex items-baseline gap-3 md:w-[190px] md:shrink-0 md:flex-col md:items-start md:gap-1 md:pt-1">
              <p className="text-sm font-semibold text-accent-700">{job.range}</p>
              <p className="text-sm text-sand-600">{job.location}</p>
            </div>

            <div className="max-w-[700px] flex-1">
              <h3 className="font-body text-xl font-semibold">{job.title}</h3>
              <p className="mt-0.5 text-base font-semibold text-sand-700">{job.company}</p>

              <ul className="mt-3.5 flex list-none flex-col gap-2.5 text-[15px] text-sand-700">
                {job.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 50)} className="flex gap-3">
                    <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <Tag key={tech.label} variant={tech.core ? "accent" : "outline"}>
                    {tech.label}
                  </Tag>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
