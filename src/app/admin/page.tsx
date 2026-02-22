import Link from "next/link";

const sections = [
  { href: "/admin/users", label: "Users", desc: "Manage platform users" },
  { href: "/admin/organizations", label: "Organizations", desc: "Agencies and operator accounts" },
  { href: "/admin/creators", label: "Creators", desc: "Content creators" },
  { href: "/admin/courses", label: "Courses", desc: "Creator courses" },
  { href: "/admin/memberships", label: "Memberships", desc: "Membership tiers" },
  { href: "/admin/digital-products", label: "Digital Products", desc: "Downloadable and licensed products" },
  { href: "/admin/affiliate-programs", label: "Affiliate Programs", desc: "Referral and commission programs" },
  { href: "/admin/communities", label: "Communities", desc: "Creator communities" },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
      <p className="mt-1 text-slate-600">Manage all database entities</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map(({ href, label, desc }) => (
          <Link
            key={href}
            href={href}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-300 hover:shadow-md"
          >
            <h2 className="font-semibold text-slate-900">{label}</h2>
            <p className="mt-1 text-sm text-slate-600">{desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
