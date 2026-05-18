type Props = {
  index: number;
  title: string;
};

export function SectionHeading({ index, title }: Props) {
  const num = String(index).padStart(2, "0");
  return (
    <h2 className="mb-8 flex items-center text-sm font-bold uppercase tracking-widest text-green-50">
      <span className="mr-4 font-mono text-green-400">{num}.</span>
      <span>{title}</span>
      <span className="ml-4 hidden h-px flex-1 bg-forest-700 sm:block" />
    </h2>
  );
}
