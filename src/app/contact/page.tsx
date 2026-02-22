"use client";

import { useState } from "react";
import Link from "next/link";

const REQUEST_TYPES = [
  { value: "support", label: "Customer support request" },
  { value: "bug", label: "Bug report" },
  { value: "general", label: "General inquiry" },
] as const;

const EMAIL = "info@francescatabor.com";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requestType, setRequestType] = useState<string>("support");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const typeLabel = REQUEST_TYPES.find((t) => t.value === requestType)?.label ?? requestType;
    const subject = `[Creator Revenue Engine] ${typeLabel} - ${name || "Contact form"}`;
    const body = [
      `Request type: ${typeLabel}`,
      `From: ${name || "(not provided)"}`,
      `Reply-to: ${email || "(not provided)"}`,
      "",
      "Message:",
      message || "(no message)",
    ].join("\n");

    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <main>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Contact us
            </h1>
            <p className="mt-4 text-slate-600">
              We&apos;ll get back to you as soon as possible. All submissions
              are sent to {EMAIL}.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="requestType"
                  className="block text-sm font-medium text-slate-700"
                >
                  Request type
                </label>
                <select
                  id="requestType"
                  value={requestType}
                  onChange={(e) => setRequestType(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                >
                  {REQUEST_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  placeholder="Tell us how we can help..."
                  required
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 rounded-xl bg-teal-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700"
              >
                Send message
              </button>
              <Link
                href="/"
                className="flex-1 rounded-xl border-2 border-slate-300 px-6 py-3.5 text-center text-base font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
              >
                Cancel
              </Link>
            </div>

            <p className="mt-6 text-center text-sm text-slate-500">
              Clicking &quot;Send message&quot; will open your email client with a
              pre-filled message to {EMAIL}.
            </p>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 px-4 py-8 sm:px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm text-slate-500">
            © {new Date().getFullYear()} Creator White Label Revenue Engine
          </span>
          <div className="flex gap-6">
            <Link href="/" className="text-sm text-slate-600 hover:text-teal-600">
              Home
            </Link>
            <Link href="/pricing" className="text-sm text-slate-600 hover:text-teal-600">
              Pricing
            </Link>
            <Link href="/case-studies" className="text-sm text-slate-600 hover:text-teal-600">
              Case Studies
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
