import { DogEasterEgg } from "@/components/easter-egg/DogEasterEgg";
import { profile } from "@/content/profile";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Tag } from "@/components/ui/Tag";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 pt-14">
      <SectionTitle title="About" />

      <div className="card mt-6.5 flex max-w-[680px] flex-col gap-3.5 text-[15px] leading-[1.75] text-sand-700">
        {profile.about.map((paragraph, index) => (
          <p key={index}>
            {paragraph.parts.map((part, partIndex) => {
              if ("easterEgg" in part && part.easterEgg === "dog") {
                return <DogEasterEgg key={partIndex} />;
              }
              if ("bold" in part && part.bold) {
                return (
                  <strong key={partIndex} className="font-semibold text-ink">
                    {part.text}
                  </strong>
                );
              }
              return <span key={partIndex}>{part.text}</span>;
            })}
          </p>
        ))}
      </div>

      <ul className="mt-5.5 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <Tag key={skill.label} variant={skill.core ? "accent" : "outline"}>
            {skill.label}
          </Tag>
        ))}
      </ul>
    </section>
  );
}
