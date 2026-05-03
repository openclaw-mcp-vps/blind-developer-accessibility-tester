import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accessibility Tester — Blind Developer Perspective",
  description: "Screen reader simulation and accessibility audit tool built by blind developers. Catch real-world usability issues traditional tools miss."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3f56a172-bd09-49e1-bdbb-faf0af3b14a1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
