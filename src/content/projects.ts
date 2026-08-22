export type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
  date: string;
  /** Languages render as filled tags, everything else outlined. */
  tech: { label: string; core?: boolean }[];
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "bonk-bot",
    title: "Bonk Bot",
    description:
      "Discord bot that plays randomly selected sounds in voice channels using FFMPEG, with Pickle persistence and Asyncio/Numpy.",
    href: "https://github.com/yashabnarang/Bonk-Bot",
    date: "Apr 2022",
    tech: [{ label: "Python", core: true }, { label: "Discord" }, { label: "FFMPEG" }, { label: "Asyncio" }],
    image: "/images/bonkbot.png",
    featured: true,
  },
  {
    id: "crossy-road",
    title: "Crossy Road",
    description:
      "Clone of the mobile game built in Unreal Engine 4 with procedurally generated obstacles. 3D assets created in MagicaVoxel.",
    href: "https://github.com/yashabnarang/Crossy-Road-UE4",
    date: "Apr 2020",
    tech: [{ label: "Unreal Engine 4" }, { label: "Blueprint" }],
    image: "/images/crossyroad.png",
    featured: true,
  },
  {
    id: "pacman-portal",
    title: "Pac-Man Portal",
    description:
      "Pac-Man with portal mechanics on walls. Custom sprites in Photoshop/Illustrator and audio editing in Audacity.",
    href: "https://github.com/yashabnarang/pacman-portal-pygame",
    date: "Mar 2020",
    tech: [{ label: "Python", core: true }, { label: "Pygame" }],
    image: "/images/pacmanportal.png",
    featured: true,
  },
  {
    id: "pocket-sims",
    title: "Pocket Sims",
    description:
      "AR concept app using physical cards with on-screen graphics. Top 8 at UCSB SB Hacks IV.",
    href: "https://devpost.com/software/pocket-sims",
    date: "Jan 2018",
    tech: [{ label: "C#", core: true }, { label: "Unity" }, { label: "Vuforia" }],
    image: "/images/pocketsims.png",
  },
  {
    id: "spaceboi",
    title: "Spaceboi Runaway: Asteroid Getaway",
    description: "Mobile game. Dodge asteroids and collect coins. Published on Google Play.",
    href: "https://play.google.com/store/apps/details?id=com.yuvio100.spaceboi&hl=en_US",
    date: "Spring 2017",
    tech: [{ label: "C#", core: true }, { label: "Unity" }],
    image: "/images/spaceboirunaway.webp",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
