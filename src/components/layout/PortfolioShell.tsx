import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";

export function PortfolioShell() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-green-400 px-4 py-3 text-sm font-bold uppercase tracking-widest text-forest-950 focus-visible:translate-x-0"
      >
        Skip to Content
      </a>

      <div className="lg:flex lg:justify-between lg:gap-4">
        <Sidebar />

        <main id="content" className="pb-24 pt-8 lg:w-[52%] lg:py-24">
          <About />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>

      <MobileNav />
    </div>
  );
}
