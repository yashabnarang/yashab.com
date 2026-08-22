type Props = {
  children: React.ReactNode;
  /** Filled terracotta for languages, outlined for frameworks and tooling. */
  variant?: "accent" | "outline";
};

export function Tag({ children, variant = "outline" }: Props) {
  return (
    <li>
      <span className={variant === "accent" ? "tag tag-accent" : "tag tag-outline"}>
        {children}
      </span>
    </li>
  );
}
