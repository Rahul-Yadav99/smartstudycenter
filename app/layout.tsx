import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Smart Study Center",
  description: "A modern coaching institute",
  keywords: [
    "best coaching institute in karawal nagar",
    "best coaching institute in delhi",
    "best coaching institute for class 10th in karawal nagar",
    "best coaching institute for class 12th in karawal nagar",
    "best coaching institute for class 10th in delhi",
    "best coaching institute for class 12th in delhi",
    "cbse class 10th result 2026",
    "cbse class 12th result 2026",
    "cbse class 10th syllabus 2026-27",
    "cbse class 12th syllabus 2026-27",
    "cbse class 10th exam date 2026-27",
    "cbse class 12th exam date 2026-27",
    "cbse class 10th admit card 2026-27",
    "cbse class 12th admit card 2026-27",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className={`${inter.className} bg-tertiary overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}