export type AboutPart = { text: string; bold?: boolean };

export type AboutParagraph = { parts: AboutPart[] };

export const profile = {
  name: "Yashab Narang",
  title: "Systems Integrations Engineer II",
  tagline:
    "I build backend systems and data pipelines teams rely on in production.",
  email: "ynara50@gmail.com",
  location: "Ventura, CA",
  about: [
    {
      parts: [
        {
          text: "Hi, I'm Yashab. I build backend systems and data pipelines teams rely on in production.",
        },
      ],
    },
    {
      parts: [
        { text: "I'm currently a Systems Integrations Engineer II at " },
        { text: "Axon", bold: true },
        {
          text: ", where I develop migration tooling that moves digital evidence from legacy systems and third-party vendors into Axon's Evidence.com platform. The work is backend-heavy in ",
        },
        { text: "C#", bold: true },
        {
          text: ", focused on data transformation and keeping migrations accurate and complete at scale.",
        },
      ],
    },
    {
      parts: [
        { text: "Before Axon, I was a Software Engineer at " },
        { text: "Yardi Systems", bold: true },
        { text: " building full-stack applications across " },
        { text: "C#", bold: true },
        { text: ", " },
        { text: "Angular", bold: true },
        { text: ", and " },
        { text: "SQL Server", bold: true },
        {
          text: ". I shipped an OCR-based invoice automation system that cut processing time by 80%, built RESTful APIs used across internal products, and integrated AWS S3, SMTP, and Microsoft Exchange into production workflows.",
        },
      ],
    },
    {
      parts: [
        { text: "I studied Computer Science at " },
        { text: "Cal State Fullerton", bold: true },
        {
          text: " and have spent my career working across the stack, close to the data, and close to the teams shipping the product.",
        },
      ],
    },
    {
      parts: [
        {
          text: "Outside of work, I go to the gym, take walks with my dog, collect and play Pokémon cards, and watch a lot of anime and movies.",
        },
      ],
    },
  ] satisfies AboutParagraph[],
  social: {
    github: "https://github.com/yashabnarang",
    linkedin: "https://www.linkedin.com/in/yashab/",
    email: "mailto:ynara50@gmail.com",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ],
} as const;
