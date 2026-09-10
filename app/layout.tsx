import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const valleySans = localFont({
  variable: "--font-valley-sans",
  src: [
    { path: "./fonts/valley-sans/ValleySans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/valley-sans/ValleySans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/valley-sans/ValleySans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/valley-sans/ValleySans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/valley-sans/ValleySans-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  display: "swap",
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
      className={`${valleySans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-navy-deep">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
