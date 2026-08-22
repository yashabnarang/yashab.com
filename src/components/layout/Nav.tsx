import Link from "next/link";
import { profile } from "@/content/profile";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function Nav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-sand-200 bg-[rgba(245,234,216,0.88)] backdrop-blur">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between gap-2.5 px-5 py-3 md:gap-6 md:px-12 md:py-3.5">
        <Link href="#top" className="btn btn-ghost pl-0 font-heading text-[17px] md:text-[19px]">
          {profile.name}
        </Link>
        <span className="flex min-w-0 shrink items-center gap-1">
          {profile.nav.map((item) => (
            <a key={item.href} href={item.href} className="btn btn-ghost hidden sm:inline-flex">
              {item.label}
            </a>
          ))}
          <CopyEmailButton className="ml-1.5 hidden md:ml-3 md:inline-flex" />
        </span>
      </div>
    </nav>
  );
}
