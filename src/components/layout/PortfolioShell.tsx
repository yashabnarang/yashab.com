import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";

export function PortfolioShell() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded-md bg-accent px-4 py-3 text-sm font-bold uppercase tracking-widest text-bg focus-visible:translate-x-0"
      >
        Skip to Content
      </a>

      <Nav />
      <Hero />

      <main id="content" className="relative z-10 mx-auto max-w-[1080px] px-5 pb-20 md:px-12 md:pb-30">
        <About />
        <Experience />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
