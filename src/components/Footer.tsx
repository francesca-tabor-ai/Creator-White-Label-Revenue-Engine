import Link from "next/link";

export function Footer({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  const linkClass = isDark
    ? "text-sm text-slate-400 hover:text-teal-400"
    : "text-sm text-slate-600 hover:text-teal-600";
  const footerClass = isDark
    ? "border-t border-slate-800 bg-slate-950 px-4 py-8 sm:px-6 lg:px-8"
    : "border-t border-slate-200 bg-slate-50 px-4 py-8 sm:px-6 lg:px-8";

  return (
    <footer className={footerClass}>
      <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4">
        <span className={isDark ? "text-sm text-slate-500" : "text-sm text-slate-500"}>
          © {new Date().getFullYear()} Creator White Label Revenue Engine
        </span>
        <div className="flex flex-wrap gap-6">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/pricing" className={linkClass}>
            Pricing
          </Link>
          <Link href="/case-studies" className={linkClass}>
            Case Studies
          </Link>
          <Link href="/contact" className={linkClass}>
            Contact
          </Link>
          <Link href="/api-docs" className={linkClass}>
            API Docs
          </Link>
          <Link href="/marketplace" className={linkClass}>
            Marketplace
          </Link>
          <Link href="/marketplace/build" className={linkClass}>
            Build an App
          </Link>
        </div>
      </div>
    </footer>
  );
}
