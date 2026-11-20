import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "./components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites — Good food, good mood",
  description:
    "Find fresh, feel-good recipes for every kind of day. Your next favorite bite is closer than you think.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <NavBar />
        {children}
        <footer className="site-footer" id="our-story">
          <Link className="brand footer-brand" href="/" aria-label="NextBites home">
            <span className="brand-mark" aria-hidden="true">
              n
            </span>
            <span>nextbites</span>
          </Link>
          <p>Good food, good mood. Made for your everyday.</p>
          <span className="footer-note">© 2026 NextBites</span>
        </footer>
      </body>
    </html>
  );
}
