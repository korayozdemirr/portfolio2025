import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Koray Özdemir — Full-Stack Developer Portfolio",
  description:
    "Full-Stack Software Engineer specializing in building modern, high-performance web applications with React, Next.js, TypeScript, and Node.js.",
};

export const viewport = {
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} bg-surface-container-lowest text-on-surface antialiased font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-container min-h-screen obsidian-grid-pattern relative flex flex-col justify-between`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
