import type { Metadata } from "next";
import { Geist_Mono, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const valleySans = localFont({
  variable: "--font-valley-sans",
  src: [
    {
      path: "./fonts/valley-sans/ValleySans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/valley-sans/ValleySans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/valley-sans/ValleySans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/valley-sans/ValleySans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/valley-sans/ValleySans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Every Kid Can",
    template: "%s | Every Kid Can",
  },
  description:
    "Every Kid Can is a New Jersey-based, youth-led 501(c)(3) nonprofit standardizing disability inclusion statewide through sensory and social inclusion.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${valleySans.variable} ${fraunces.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-mist">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
