import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "DermAI",
  description:
    "DermAI is a personalized skincare solution that helps you discover your best skin with AI-powered precision.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`${spaceGrotesk.variable} font-sans bg-[#FDF8F3]`}>
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
