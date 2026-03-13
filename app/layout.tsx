import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/Layout";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "GLK Transit | Grand Lake Municipality",
    template: "%s | GLK Transit",
  },
  description: "The official transit app for the Municipality of Grand Lake. Real-time bus tracking, digital ticketing, and seamless route planning — right in your pocket.",
  keywords: ["GLK Transit", "Grand Lake transit", "bus tracker", "digital bus ticket", "Grand Lake NB", "municipality transit app"],
  authors: [{ name: "Maplebridge Solutions" }],
  creator: "Maplebridge Solutions",
  metadataBase: new URL("https://glktransit.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://glktransit.ca",
    siteName: "GLK Transit",
    title: "GLK Transit | Grand Lake Municipality",
    description: "Real-time bus tracking, digital ticketing, and seamless route planning for the Municipality of Grand Lake.",
    images: [{ url: "/assets/logo.png", width: 512, height: 512, alt: "GLK Transit Logo" }],
  },
  twitter: {
    card: "summary",
    title: "GLK Transit | Grand Lake Municipality",
    description: "Real-time bus tracking, digital ticketing, and seamless route planning for the Municipality of Grand Lake.",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${workSans.variable} font-sans antialiased bg-surface-page text-content-primary`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-xl focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:shadow-lg">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
