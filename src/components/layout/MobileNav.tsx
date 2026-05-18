"use client";

import { profile } from "@/content/profile";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = ["about", "experience", "projects"];

export function MobileNav() {
  const activeId = useActiveSection(sectionIds);

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-forest-800 bg-forest-950/95 backdrop-blur lg:hidden"
      aria-label="Mobile navigation"
    >
      <ul className="flex justify-around py-3">
        {profile.nav.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = activeId === id;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-xs font-bold uppercase tracking-widest ${
                  isActive ? "text-green-400" : "text-green-600"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
