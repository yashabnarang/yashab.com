"use client";

/** Each letter lifts and warms on hover; the cursor becomes the dog. */
const LETTERS: { char: string; hoverColor: string; delay: string }[] = [
  { char: "m", hoverColor: "group-hover/dog:text-accent-500", delay: "delay-[50ms]" },
  { char: "y", hoverColor: "group-hover/dog:text-accent-600", delay: "delay-[75ms]" },
  { char: " ", hoverColor: "", delay: "delay-[100ms]" },
  { char: "d", hoverColor: "group-hover/dog:text-accent-700", delay: "delay-[125ms]" },
  { char: "o", hoverColor: "group-hover/dog:text-sage-700", delay: "delay-[150ms]" },
  { char: "g", hoverColor: "group-hover/dog:text-accent-800", delay: "delay-[175ms]" },
];

const letterClass =
  "transition duration-75 group-hover/dog:-translate-y-px motion-reduce:transition-none motion-reduce:group-hover/dog:translate-y-0";

export function DogEasterEgg() {
  return (
    <>
      <span className="hidden motion-reduce:inline">my dog</span>
      <span className="group/dog inline-flex font-semibold text-ink motion-reduce:hidden lg:cursor-[url('/images/dog-cursor.png')_24_20,_pointer]">
        <span className="sr-only">my dog</span>
        {LETTERS.map(({ char, hoverColor, delay }, index) => (
          <span key={index} className={`${letterClass} ${hoverColor} ${delay}`} aria-hidden="true">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </>
  );
}
