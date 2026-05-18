"use client";

const LETTERS: {
  char: string;
  hoverColor: string;
  delay: string;
  animateSpace?: boolean;
}[] = [
  { char: "m", hoverColor: "group-hover/dog:text-green-200", delay: "delay-[50ms]" },
  { char: "y", hoverColor: "group-hover/dog:text-lime-300", delay: "delay-[75ms]" },
  { char: " ", hoverColor: "", delay: "delay-[100ms]", animateSpace: true },
  { char: "d", hoverColor: "group-hover/dog:text-emerald-300", delay: "delay-[125ms]" },
  { char: "o", hoverColor: "group-hover/dog:text-green-400", delay: "delay-[150ms]" },
  { char: "g", hoverColor: "group-hover/dog:text-teal-300", delay: "delay-[175ms]" },
];

const letterClass =
  "transition duration-75 group-hover/dog:-translate-y-px motion-reduce:transition-none motion-reduce:group-hover/dog:translate-y-0";

export function DogEasterEgg() {
  return (
    <>
      <span className="hidden motion-reduce:inline">my dog</span>
      <span className="group/dog inline-flex motion-reduce:hidden lg:cursor-[url('/images/dog-cursor.png')_24_20,_pointer] lg:font-medium lg:text-green-100">
        <span className="sr-only">my dog</span>
        {LETTERS.map(({ char, hoverColor, delay, animateSpace }, index) => {
          if (char === " ") {
            return (
              <span
                key={index}
                className={`${letterClass} ${animateSpace ? "group-hover/dog:-translate-y-px " + delay : ""}`}
                aria-hidden="true"
              >
                {"\u00A0"}
              </span>
            );
          }
          return (
            <span
              key={index}
              className={`${letterClass} ${hoverColor} ${delay}`}
              aria-hidden="true"
            >
              {char}
            </span>
          );
        })}
      </span>
    </>
  );
}
