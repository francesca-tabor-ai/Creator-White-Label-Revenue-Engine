import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Providers } from "./providers";
import { ConditionalShell } from "@/components/ConditionalShell";

export const metadata: Metadata = {
  title: "Creator Revenue OS",
  description:
    "Turn your audience into a recurring revenue SaaS business without building a product yourself.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--color-background)] font-sans text-[var(--color-text)]">
        <Providers>
          <ConditionalShell>{children}</ConditionalShell>
        </Providers>
      </body>
    </html>
  );
}
