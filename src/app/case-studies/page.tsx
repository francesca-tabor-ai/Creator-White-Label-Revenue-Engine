import Link from "next/link";
import { LogosMarquee } from "@/components/LogosMarquee";

const caseStudies = [
  {
    company: "Apex Creator Co",
    industry: "Creator Agency",
    logo: "Apex Creator Co",
    outcome: "32% increase in revenue per creator within 6 months",
    quote:
      "We were cobbling together Teachable, Memberstack, and a dozen other tools. Our creators were confused and so was our support team. Creator Revenue Engine gave us one branded platform. We cut onboarding time from two weeks to two days.",
    author: "Sarah Chen",
    role: "Head of Operations",
    metrics: [
      { label: "Onboarding time", value: "2 weeks → 2 days" },
      { label: "Revenue per creator", value: "+32%" },
      { label: "Support tickets", value: "-45%" },
    ],
  },
  {
    company: "Velocity MCN",
    industry: "Multi-Channel Network",
    logo: "Velocity MCN",
    outcome: "Scaled from 40 to 120 creators without adding headcount",
    quote:
      "Our previous setup couldn't scale. Every new creator meant another integration, another vendor, another invoice. With the white-label platform, we onboard creators in bulk and they never see another brand. Our unit economics improved dramatically.",
    author: "Marcus Rodriguez",
    role: "VP of Creator Success",
    metrics: [
      { label: "Creators onboarded", value: "40 → 120" },
      { label: "Margins", value: "+18%" },
      { label: "Time to first revenue", value: "4 weeks → 1 week" },
    ],
  },
  {
    company: "Luminary Agency",
    industry: "Creator Management",
    logo: "Luminary Agency",
    outcome: "Became the monetization partner of choice in a crowded market",
    quote:
      "Differentiation was our biggest challenge. Every agency offered the same thing. Now we show up with a full revenue stack under our brand—courses, memberships, affiliates—and creators see us as the obvious choice. Close rates are up 40%.",
    author: "Elena Park",
    role: "Founder & CEO",
    metrics: [
      { label: "Sales close rate", value: "+40%" },
      { label: "Creator retention", value: "+28%" },
      { label: "Avg. deal size", value: "+55%" },
    ],
  },
  {
    company: "Monetize Labs",
    industry: "Creator Coaching Platform",
    logo: "Monetize Labs",
    outcome: "Launched monetization offering in 3 weeks instead of 6 months",
    quote:
      "We had the community and the coaching methodology. What we didn't have was a way to monetize it without building from scratch. Creator Revenue Engine let us launch courses and memberships in weeks. Our first cohort sold out in 48 hours.",
    author: "James Okonkwo",
    role: "Product Lead",
    metrics: [
      { label: "Launch time", value: "6 months → 3 weeks" },
      { label: "First cohort", value: "Sold out in 48h" },
      { label: "MRR growth", value: "+120% in Q1" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Real results from creator economy leaders
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            See how agencies, MCNs, and operators are scaling creator
            monetization with our white-label platform.
          </p>
        </div>
      </section>

      {/* Scrolling logos */}
      <section className="border-y border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          Companies powering creator revenue with us
        </p>
        <LogosMarquee />
      </section>

      {/* Case studies grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <article
                key={study.company}
                className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="inline-block rounded-lg bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700">
                    {study.industry}
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {study.company}
                  </h2>
                  <p className="mt-4 text-lg font-semibold text-teal-700">
                    {study.outcome}
                  </p>
                  <blockquote className="mt-6 border-l-4 border-teal-600 pl-6 text-slate-600">
                    "{study.quote}"
                  </blockquote>
                  <footer className="mt-4">
                    <p className="font-semibold text-slate-900">
                      {study.author}
                    </p>
                    <p className="text-sm text-slate-500">{study.role}</p>
                  </footer>
                </div>
                <div className="flex-shrink-0 lg:w-80">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Key metrics
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {study.metrics.map(({ label, value }) => (
                        <li key={label} className="flex justify-between">
                          <span className="text-slate-600">{label}</span>
                          <span className="font-semibold text-teal-700">
                            {value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-200 bg-slate-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Join the creator economy operators who are scaling faster
          </h2>
          <p className="mt-4 text-slate-300">
            Get the same platform powering Apex, Velocity, Luminary, and
            Monetize Labs.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-xl bg-teal-500 px-6 py-3.5 font-semibold text-white transition hover:bg-teal-400"
          >
            Get started free
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm text-slate-500">
            © {new Date().getFullYear()} Creator White Label Revenue Engine
          </span>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-sm text-slate-400 hover:text-teal-400"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-slate-400 hover:text-teal-400"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-sm text-slate-400 hover:text-teal-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
