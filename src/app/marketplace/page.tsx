import Link from "next/link";
import { Footer } from "@/components/Footer";

const categories = [
  {
    name: "Analytics & Reporting",
    desc: "Track revenue, engagement, and ROI across creators",
  },
  {
    name: "Email & Marketing",
    desc: "Automate campaigns, sequences, and drip content",
  },
  {
    name: "Community & Engagement",
    desc: "Integrate Discord, Slack, and custom communities",
  },
  {
    name: "Payments & Payouts",
    desc: "Stripe, PayPal, and custom payment gateways",
  },
  {
    name: "CRM & Sales",
    desc: "Sync leads, contacts, and deals with your pipeline",
  },
  {
    name: "Workflow Automation",
    desc: "Zapier-style triggers and multi-step workflows",
  },
];

// Sample apps for demo - in production these would come from API/DB
const featuredApps = [
  {
    name: "Revenue Dashboard Pro",
    vendor: "AnalyticsCo",
    desc: "Advanced revenue attribution and cohort analytics for creator portfolios.",
    category: "Analytics",
    rating: 4.9,
    installs: "2.4k",
  },
  {
    name: "Mail Sync",
    vendor: "Integrate Labs",
    desc: "Two-way sync with Mailchimp, Klaviyo, and ConvertKit. Segment by purchase and membership.",
    category: "Email",
    rating: 4.8,
    installs: "1.8k",
  },
  {
    name: "Stripe Connect Bridge",
    vendor: "Creator Revenue Engine",
    desc: "Official integration for Stripe Connect payouts and split payments.",
    category: "Payments",
    rating: 5.0,
    installs: "3.1k",
  },
  {
    name: "Discord Community Link",
    vendor: "Community Tools",
    desc: "Auto-sync membership status to Discord roles. Gate channels by tier.",
    category: "Community",
    rating: 4.7,
    installs: "920",
  },
  {
    name: "Pipeline CRM",
    vendor: "SalesStack",
    desc: "Push creator deals and lead status to HubSpot, Salesforce, or Pipedrive.",
    category: "CRM",
    rating: 4.6,
    installs: "540",
  },
  {
    name: "Workflow Engine",
    vendor: "Automate.io",
    desc: "Create custom workflows: purchase → welcome email → add to Slack → update spreadsheet.",
    category: "Automation",
    rating: 4.8,
    installs: "1.2k",
  },
];

export default function MarketplacePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(13,148,136,0.12),transparent)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-teal-600">
            App Marketplace
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Extend your platform.
            <br />
            <span className="text-teal-700">Integrate with the best.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Connect apps and integrations to power advanced workflows—analytics,
            email, payments, community, and automation. One marketplace, endless
            possibilities.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#apps"
              className="rounded-xl bg-teal-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:bg-teal-700"
            >
              Browse apps
            </Link>
            <Link
              href="/marketplace/build"
              className="rounded-xl border-2 border-slate-300 px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
            >
              Build an app
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-slate-900">
            Categories
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Find apps that fit your workflow.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 transition hover:border-teal-300 hover:bg-teal-50/30"
              >
                <h3 className="font-semibold text-teal-700">{cat.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured apps */}
      <section id="apps" className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-slate-900">
            Featured apps
          </h2>
          <p className="mt-2 text-slate-600">
            Popular integrations for creator monetization workflows.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredApps.map((app) => (
              <div
                key={app.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-teal-200"
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-lg bg-teal-100 px-2.5 py-1 text-xs font-medium text-teal-800">
                    {app.category}
                  </span>
                  <span className="text-sm text-slate-500">
                    ★ {app.rating} · {app.installs} installs
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {app.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">by {app.vendor}</p>
                <p className="mt-4 text-sm text-slate-600">{app.desc}</p>
                <Link
                  href="#"
                  className="mt-6 inline-block text-sm font-semibold text-teal-600 hover:text-teal-700"
                >
                  View app →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-slate-600">
              More apps coming soon. Want to build one?{" "}
              <Link
                href="/marketplace/build"
                className="font-semibold text-teal-600 hover:text-teal-700"
              >
                Apply to build an app
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA - Build an app */}
      <section className="border-t border-slate-200 bg-teal-700 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Build apps that creators love
          </h2>
          <p className="mt-4 text-teal-100">
            Join our partner program. Get API access, documentation, and
            distribution in the marketplace. Inspired by Stripe and Shopify
            partner programs.
          </p>
          <Link
            href="/marketplace/build"
            className="mt-8 inline-block rounded-xl bg-amber-400 px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Apply to build an app
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
