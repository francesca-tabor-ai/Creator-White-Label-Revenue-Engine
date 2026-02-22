import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in | Creator Revenue Engine",
  description: "Sign in to your Creator White Label Revenue Engine account.",
};

export default function LoginPage() {
  return (
    <main>
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <h1 className="text-center text-2xl font-bold text-slate-900">
            Sign in
          </h1>
          <p className="mt-2 text-center text-slate-600">
            Sign in to access your organization dashboard and manage creators.
          </p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-center text-sm text-slate-500">
              Authentication is coming soon. For early access or demo accounts,
              please{" "}
              <Link href="/contact" className="font-medium text-teal-600 hover:text-teal-700">
                contact us
              </Link>
              .
            </p>
            <Link
              href="/"
              className="mt-6 block w-full rounded-xl border-2 border-slate-300 py-3.5 text-center font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
