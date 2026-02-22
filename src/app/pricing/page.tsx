import Link from "next/link";
import { Footer } from "@/components/Footer";

const plans = [
  {
    name: "Individual",
    tagline: "For solo creators and small operators",
    price: 49,
    period: "month",
    description:
      "Perfect for creator coaches, solopreneurs, and operators managing up to 5 creators.",
    features: [
      "Up to 5 creators",
      "Courses & memberships",
      "Digital product sales",
      "Basic analytics",
      "Custom domain",
      "Email support",
    ],
    cta: "Start free trial",
    ctaHref: "/contact",
    highlighted: false,
  },
  {
    name: "Team",
    tagline: "For agencies and growing networks",
    price: 199,
    period: "month",
    description:
      "Built for agencies, MCNs, and teams managing 6–50 creators with advanced needs.",
    features: [
      "Up to 50 creators",
      "Everything in Individual",
      "Affiliate & referral programs",
      "Advanced analytics & attribution",
      "White-label branding",
      "Team seats (5 included)",
      "API access",
      "Priority support",
    ],
    cta: "Start free trial",
    ctaHref: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "For large-scale operations",
    price: null,
    period: "custom",
    description:
      "Unlimited creators, custom infrastructure, SLA, and dedicated success management.",
    features: [
      "Unlimited creators",
      "Everything in Team",
      "Custom integrations",
      "Dedicated success manager",
      "SLA & 99.9% uptime",
      "Custom contracts",
      "On-premise option",
      "SSO & advanced security",
    ],
    cta: "Contact sales",
    ctaHref: "/contact",
    highlighted: false,
  },
];

const scalingFeatures = [
  {
    title: "Creator scaling",
    individual: "5 creators",
    team: "50 creators",
    enterprise: "Unlimited",
  },
  {
    title: "Revenue share",
    individual: "2% on transactions",
    team: "1.5% on transactions",
    enterprise: "Custom",
  },
  {
    title: "Team seats",
    individual: "1",
    team: "5 (extra $25/seat)",
    enterprise: "Unlimited",
  },
  {
    title: "API rate limits",
    individual: "1,000 req/day",
    team: "50,000 req/day",
    enterprise: "Custom",
  },
  {
    title: "Support",
    individual: "Email",
    team: "Priority",
    enterprise: "Dedicated",
  },
];

export default function PricingPage() {
  return (
    <main>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Simple, scalable pricing
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Start with Individual. Scale to Team as you grow. Enterprise when
              you need custom solutions.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border-2 p-8 ${
                  plan.highlighted
                    ? "border-teal-600 bg-teal-50/50 shadow-lg shadow-teal-600/10"
                    : "border-slate-200 bg-white"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </div>
                )}
                <h2 className="text-xl font-bold text-slate-900">{plan.name}</h2>
                <p className="mt-1 text-sm text-slate-500">{plan.tagline}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  {plan.price !== null ? (
                    <>
                      <span className="text-4xl font-bold text-slate-900">
                        ${plan.price}
                      </span>
                      <span className="text-slate-500">/{plan.period}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-slate-900">
                      Custom pricing
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-slate-600">{plan.description}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex-shrink-0 text-teal-600">✓</span>
                      <span className="text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.ctaHref}
                  className={`mt-8 block w-full rounded-xl py-3.5 text-center font-semibold transition ${
                    plan.highlighted
                      ? "bg-teal-600 text-white hover:bg-teal-700"
                      : "border-2 border-slate-300 text-slate-700 hover:border-teal-600 hover:text-teal-700"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scaling comparison */}
      <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-slate-900">
            How plans scale
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-slate-600">
            See how key features change as you grow from Individual to
            Enterprise.
          </p>
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                    Individual
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-teal-700">
                    Team
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {scalingFeatures.map((row, i) => (
                  <tr
                    key={row.title}
                    className={`border-b border-slate-100 ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-slate-800">
                      {row.title}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-slate-600">
                      {row.individual}
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium text-teal-700">
                      {row.team}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-slate-600">
                      {row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-bold text-slate-900">
            Questions about pricing?
          </h2>
          <p className="mt-2 text-slate-600">
            We'll help you choose the right plan for your creators and your
            business.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block font-semibold text-teal-600 hover:text-teal-700"
          >
            Contact us →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
