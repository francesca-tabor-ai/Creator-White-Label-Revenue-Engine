import Link from "next/link";
import { UsersForm } from "../UsersForm";
import { prisma } from "@/lib/prisma";

export default async function NewUserPage() {
  const organizations = await prisma.organization.findMany();
  return (
    <div>
      <div className="mb-6"><Link href="/admin/users" className="text-sm text-slate-600 hover:text-slate-900">← Back</Link></div>
      <h1 className="text-2xl font-bold text-slate-900">Add User</h1>
      <UsersForm organizations={organizations} />
    </div>
  );
}
