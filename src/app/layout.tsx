import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Yashab Narang",
  description:
    "Yashab Narang is a systems integrations engineer who builds reliable, scalable software for data migration and full-stack applications.",
  metadataBase: new URL("https://yashab.com"),
  themeColor: "#071510",
  openGraph: {
    title: "Yashab Narang",
    description:
      "Systems Integrations Engineer building reliable, scalable software systems.",
    url: "https://yashab.com",
    siteName: "Yashab Narang",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} min-h-screen bg-forest-950 font-sans leading-relaxed text-green-300/90 antialiased selection:bg-green-500 selection:text-forest-950`}
      >
        {children}
      </body>
    </html>
  );
}
