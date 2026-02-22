import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import ChatWidget from "@/components/ChatWidget";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Creator White Label Revenue Engine",
  description:
    "The all-in-one monetization platform for agencies and creator economy operators. Your brand. Your creators. One revenue engine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Header />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
