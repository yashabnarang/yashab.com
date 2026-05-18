const YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-16 pb-24 text-sm text-green-600 lg:pb-0">
      <p>
        {YEAR} © Yashab Narang. Built with Next.js and Tailwind CSS.
        <span className="mt-1 block text-xs text-green-700">
          Layout inspired by{" "}
          <a
            href="https://brittanychiang.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-green-600 transition-colors hover:text-green-400"
          >
            Brittany Chiang
          </a>
          .
        </span>
      </p>
    </footer>
  );
}
