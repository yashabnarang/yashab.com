export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3.5">
      <span className="h-3.5 w-3.5 shrink-0 rounded-full bg-accent" />
      <h2 className="font-heading text-[30px] font-normal md:text-[38px]">{title}</h2>
    </div>
  );
}
