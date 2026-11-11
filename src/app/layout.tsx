import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are self-hosted (SIL Open Font License) so the build never depends on
// fetching from Google Fonts. Files are the latin variable-weight subsets.
const orbitron = localFont({
  src: "./fonts/orbitron-latin.woff2",
  variable: "--font-display",
  weight: "400 900",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin.woff2",
  variable: "--font-sans",
  weight: "300 700",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/jetbrains-mono-latin.woff2",
  variable: "--font-mono",
  weight: "100 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AETHERWEAVE // Multiplayer Game Hub",
  description:
    "Multiplayer game rooms with voice and text chat: a gravity arena shooter, neon hover racing, and a turn-based hex strategy game.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-[#050711] font-sans text-slate-100 antialiased selection:bg-cyan-400/30 selection:text-cyan-100">
        {children}
      </body>
    </html>
  );
}
