import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keel.keel-labs.org"),
  title: "Keel - An AI assistant whose memory belongs to you",
  description:
    "Local-first desktop app for Mac and Windows. Plain markdown on your disk. Swap Claude, GPT, OpenRouter, or Ollama anytime.",
  openGraph: {
    title: "Keel",
    description: "An AI assistant whose memory belongs to you.",
    images: [{ url: "/keel-logo.png", width: 1342, height: 919 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keel",
    description: "An AI assistant whose memory belongs to you.",
    images: ["/keel-logo.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
