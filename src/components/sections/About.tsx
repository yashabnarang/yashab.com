import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeading index={1} title="About" />
      <div className="space-y-4 leading-relaxed text-green-300/85">
        {profile.about.map((paragraph, index) => (
          <p key={index}>
            {paragraph.parts.map((part, partIndex) =>
              part.bold ? (
                <strong
                  key={partIndex}
                  className="font-medium text-green-100"
                >
                  {part.text}
                </strong>
              ) : (
                <span key={partIndex}>{part.text}</span>
              ),
            )}
          </p>
        ))}
      </div>
    </section>
  );
}
