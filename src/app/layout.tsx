import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/providers/lenis";

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Acedly - Ace Any Exam with AI-Powered CBT",
  description: "Master WAEC, JAMB, Post-UTME, and more with Nigeria's smartest study platform. AI-powered CBT challenges, gamified learning, and comprehensive exam preparation.",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${dmSans.className} antialiased w-full min-h-screen overflow-x-hidden`}
      >
        <LenisProvider>
          {children}
          <Analytics />
        </LenisProvider>
      </body>
    </html>
  );
}
