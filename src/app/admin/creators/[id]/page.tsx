import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { CreatorsForm } from "../CreatorsForm";

export default async function EditCreatorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const creator = await prisma.creator.findUnique({ where: { id } });
  const organizations = await prisma.organization.findMany();
  if (!creator) notFound();
  return (
    <div>
      <div className="mb-6">
        <Link href="/admin/creators" className="text-sm text-slate-600 hover:text-slate-900">← Back</Link>
      </div>
      <h1 className="text-2xl font-bold text-slate-900">Edit Creator</h1>
      <CreatorsForm
        id={id}
        organizations={organizations}
        initial={{
          organizationId: creator.organizationId,
          name: creator.name,
          email: creator.email,
          slug: creator.slug,
          bio: creator.bio ?? undefined,
        }}
      />
    </div>
  );
}
