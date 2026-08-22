"use client";

import { profile } from "@/content/profile";

const SPARKLE_COUNT = 12;

type Props = { className?: string };

export function CopyEmailButton({ className = "" }: Props) {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget;
    const wrap = button.parentElement;
    if (!wrap) return;

    void navigator.clipboard?.writeText(profile.email);

    button.classList.remove("om-popped");
    void button.offsetWidth;
    button.classList.add("om-popped");

    const label = button.querySelector<HTMLElement>(".l2") ?? button;
    const previous = label.textContent;
    label.textContent = "Copied!";
    window.setTimeout(() => {
      label.textContent = previous;
      button.classList.remove("om-popped");
    }, 1400);

    const width = button.offsetWidth;
    const height = button.offsetHeight;

    for (let i = 0; i < SPARKLE_COUNT; i += 1) {
      const angle = (Math.PI * 2 * i) / SPARKLE_COUNT + Math.random() * 0.4;
      const distance = 28 + Math.random() * 34;
      const spark = document.createElement("span");
      spark.className = "om-spark";
      spark.style.setProperty("--dx", `${Math.cos(angle) * (width / 2 + distance)}px`);
      spark.style.setProperty("--dy", `${Math.sin(angle) * (height / 2 + distance)}px`);
      spark.style.animationDelay = `${Math.random() * 120}ms`;
      spark.innerHTML =
        '<svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor" aria-hidden="true"><path d="M12 0l2.6 8.2L23 12l-8.4 3.8L12 24l-2.6-8.2L1 12l8.4-3.8z"/></svg>';
      wrap.appendChild(spark);
      window.setTimeout(() => spark.remove(), 900);
    }
  }

  return (
    <span className={`relative inline-flex ${className}`}>
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Copy email address ${profile.email}`}
        className="btn btn-primary om-copy border-none"
      >
        <span className="l1">Get in touch</span>
        <span className="l2" aria-hidden>{profile.email}</span>
        <span className="lsize" aria-hidden>{profile.email}</span>
      </button>
    </span>
  );
}
