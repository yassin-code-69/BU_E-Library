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
  title: "BU E-Library",
  description: "Bangladesh University Digital Library - Your Gateway to Knowledge",
  icons: {
    icon: [
      { url: "/favicon.ico" }, // ডিফল্ট
      { url: "/icon.png", sizes: "32x32", type: "image/png" }, // বড় স্ক্রিনের জন্য
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" }, // অ্যান্ড্রয়েড/বড় আইকনের জন্য
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }, // আইফোনের জন্য
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
