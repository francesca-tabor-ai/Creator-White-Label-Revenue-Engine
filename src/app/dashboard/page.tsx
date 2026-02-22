import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard | Creator Revenue Engine",
  description: "Your creator revenue dashboard.",
};

export default function DashboardPage() {
  return (
    <main>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Dashboard
          </h1>
          <p className="mt-2 text-slate-600">
            Manage your creators, courses, memberships, and revenue analytics.
          </p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-slate-600">
              Sign in to access your dashboard. New to the platform?{" "}
              <Link href="/contact" className="font-medium text-teal-600 hover:text-teal-700">
                Get in touch
              </Link>{" "}
              to get started.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/auth/login"
                className="rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
              >
                Sign in
              </Link>
              <Link
                href="/"
                className="rounded-xl border-2 border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
