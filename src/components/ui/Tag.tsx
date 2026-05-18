export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="mr-2 mt-2">
      <span className="rounded-full bg-green-500/10 px-3 py-1 font-mono text-xs text-green-400">
        {children}
      </span>
    </li>
  );
}
