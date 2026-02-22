import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { AdminSignOut } from "./AdminSignOut";

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/organizations", label: "Organizations" },
  { href: "/admin/creators", label: "Creators" },
  { href: "/admin/courses", label: "Courses" },
  { href: "/admin/memberships", label: "Memberships" },
  { href: "/admin/digital-products", label: "Digital Products" },
  { href: "/admin/affiliate-programs", label: "Affiliate Programs" },
  { href: "/admin/communities", label: "Communities" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/auth/login");
  if (session.user?.role !== "ADMIN") redirect("/");
  return (
    <div className="flex min-h-screen bg-slate-100">
      <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-slate-200 bg-white">
        <div className="flex h-16 items-center border-b border-slate-200 px-6">
          <Link href="/admin" className="text-lg font-semibold text-slate-900">
            Admin
          </Link>
        </div>
        <nav className="flex-1 space-y-1 overflow-auto p-4">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-slate-200 p-4">
          <AdminSignOut />
        </div>
      </aside>
      <main className="ml-64 flex-1 overflow-auto p-8">{children}</main>
    </div>
  );
}
