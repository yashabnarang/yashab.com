import type { Metadata, Viewport } from "next";
import { Caprasimo, Figtree } from "next/font/google";
import "./globals.css";

const heading = Caprasimo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Yashab Narang",
  description:
    "Yashab Narang is a full stack software engineer who builds reliable, scalable software for data migration and full-stack applications.",
  metadataBase: new URL("https://yashab.com"),
  openGraph: {
    title: "Yashab Narang",
    description: "Full Stack Software Engineer building reliable, scalable software systems.",
    url: "https://yashab.com",
    siteName: "Yashab Narang",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5ead8",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} min-h-screen font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
