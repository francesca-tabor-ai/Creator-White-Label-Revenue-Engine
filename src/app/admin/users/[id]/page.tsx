import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { UsersForm } from "../UsersForm";

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await prisma.user.findUnique({ where: { id } });
  const organizations = await prisma.organization.findMany();
  if (!user) notFound();
  return (
    <div>
      <div className="mb-6"><Link href="/admin/users" className="text-sm text-slate-600 hover:text-slate-900">← Back</Link></div>
      <h1 className="text-2xl font-bold text-slate-900">Edit User</h1>
      <UsersForm
        id={id}
        organizations={organizations}
        initial={{
          email: user.email,
          name: user.name ?? "",
          role: user.role,
          organizationId: user.organizationId ?? undefined,
        }}
      />
    </div>
  );
}
