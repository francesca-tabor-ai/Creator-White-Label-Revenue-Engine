"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/api-docs", label: "API Docs" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-teal-700">
          Creator Revenue Engine
        </Link>
        <div className="flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                pathname === href ? "text-teal-700" : "text-slate-600"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/auth/login"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600"
          >
            Sign in
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}
