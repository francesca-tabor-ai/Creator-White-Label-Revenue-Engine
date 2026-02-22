import Link from "next/link";
import { LogosMarquee } from "@/components/LogosMarquee";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(13,148,136,0.15),transparent)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-teal-600">
            For Agencies & Creator Economy Operators
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Your creators deserve a revenue engine.
            <br />
            <span className="text-teal-700">Your brand deserves to power it.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Stop juggling tools. Stop building from scratch. Launch a branded,
            all-in-one monetization platform for your creators in weeks—courses,
            memberships, digital products, and affiliates under one roof.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#"
              className="rounded-xl bg-teal-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700 hover:shadow-teal-600/30"
            >
              Start free trial
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border-2 border-slate-300 px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Built for the people who serve creators
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Agencies, MCNs, creator coaches, and SaaS companies who need to
            deliver monetization tools at scale—without losing their brand or
            their margin.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Creator Agencies",
                desc: "Manage dozens of creators? Give them one branded platform instead of a patchwork of tools.",
              },
              {
                title: "MCNs & Networks",
                desc: "Scale monetization across your roster. One infrastructure, unlimited creators.",
              },
              {
                title: "Creator Coaches",
                desc: "Offer courses, memberships, and community under your brand—not a generic LMS.",
              },
              {
                title: "SaaS Builders",
                desc: "Embed or white-label monetization into your product. Ship faster, differentiate stronger.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
              >
                <h3 className="font-semibold text-teal-700">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="bg-slate-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            The pain you know too well
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Every creator economy operator faces the same bottlenecks.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                pain: "Building monetization tech from scratch",
                result: "Months of dev time, huge costs, constant maintenance.",
              },
              {
                pain: "Fragmented tools everywhere",
                result: "Courses here, memberships there—poor UX, low conversion, support chaos.",
              },
              {
                pain: "Superficial white-label options",
                result: "Locked into someone else's roadmap, pricing, and branding.",
              },
              {
                pain: "Can't prove ROI to creators",
                result: "No clear analytics or attribution. Hard to show why you're the best choice.",
              },
              {
                pain: "Commodity positioning",
                result: "Same generic tools as everyone else. No story, no premium pricing.",
              },
              {
                pain: "Scaling = scaling costs",
                result: "Every new creator means more integrations, more vendors, more complexity.",
              },
            ].map(({ pain, result }) => (
              <div
                key={pain}
                className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <p className="font-medium text-slate-800">{pain}</p>
                <p className="mt-2 text-sm text-slate-500">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-teal-700 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            How we solve it
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-teal-100">
            One platform. Your brand. Every monetization channel creators need.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "True white-label",
                desc: "Your domain, your logo, your pricing. Creators and their audiences never see ours.",
              },
              {
                title: "All-in-one revenue stack",
                desc: "Courses, memberships, digital products, affiliates, community—one billing, one dashboard.",
              },
              {
                title: "Built for operators",
                desc: "Multi-tenant from day one. Onboard creators in minutes, configure per client, scale without scaling engineering.",
              },
              {
                title: "Revenue-first analytics",
                desc: "Clear attribution and ROI metrics. Show creators exactly why your ecosystem drives more revenue.",
              },
              {
                title: "Weeks, not quarters",
                desc: "Launch a differentiated offering fast. Capture creator budget and loyalty before competitors.",
              },
              {
                title: "Scalable unit economics",
                desc: "Lower marginal cost per creator. Better margins as you grow.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-teal-600/50 bg-teal-800/50 p-6"
              >
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-teal-100">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              href="/pricing"
              className="inline-flex rounded-xl bg-amber-400 px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-amber-300"
            >
              See plans & pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof - logos */}
      <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          Trusted by creator economy leaders
        </p>
        <LogosMarquee />
      </section>

      {/* CTA */}
      <section className="bg-slate-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to power creator revenue under your brand?
          </h2>
          <p className="mt-4 text-slate-300">
            Join agencies and operators who've cut time-to-revenue from months to
            weeks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="#"
              className="rounded-xl bg-teal-500 px-6 py-3.5 font-semibold text-white transition hover:bg-teal-400"
            >
              Get started free
            </Link>
            <Link
              href="/case-studies"
              className="rounded-xl border border-slate-500 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
            >
              Read case studies
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm text-slate-500">
            © {new Date().getFullYear()} Creator White Label Revenue Engine
          </span>
          <div className="flex gap-6">
            <Link href="/pricing" className="text-sm text-slate-600 hover:text-teal-600">
              Pricing
            </Link>
            <Link href="/case-studies" className="text-sm text-slate-600 hover:text-teal-600">
              Case Studies
            </Link>
            <Link href="/contact" className="text-sm text-slate-600 hover:text-teal-600">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
