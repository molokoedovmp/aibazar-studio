import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
  metadataBase: new URL("https://aibazar.studio"),
  title: {
    default: "aibazar — премиальная digital-студия",
    template: "%s | aibazar studio",
  },
  description:
    "aibazar — премиальная digital-студия, создающая сайты на Next.js, маркетплейсы и SaaS-интерфейсы.",
  openGraph: {
    title: "aibazar — премиальная digital-студия",
    description:
      "Премиальные сайты на Next.js, маркетплейсы и SaaS-опыт с минимализмом и скоростью.",
    type: "website",
    url: "https://aibazar.studio",
    siteName: "aibazar studio",
    images: [
      {
        url: "/og-base.svg",
        width: 1200,
        height: 630,
        alt: "aibazar digital studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "aibazar — премиальная digital-студия",
    description:
      "Студия, создающая элитные продукты на Next.js.",
    images: ["/og-base.svg"],
  },
  alternates: {
    canonical: "https://aibazar.studio",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased layout-grid`}
      >
        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
