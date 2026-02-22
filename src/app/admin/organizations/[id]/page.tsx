import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { OrganizationsForm } from "../OrganizationsForm";

export default async function EditOrganizationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const org = await prisma.organization.findUnique({ where: { id } });
  if (!org) notFound();
  return (
    <div>
      <div className="mb-6">
        <Link href="/admin/organizations" className="text-sm text-slate-600 hover:text-slate-900">
          ← Back
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-slate-900">Edit Organization</h1>
      <OrganizationsForm
        id={id}
        initial={{
          name: org.name,
          slug: org.slug,
          plan: org.plan,
        }}
      />
    </div>
  );
}
