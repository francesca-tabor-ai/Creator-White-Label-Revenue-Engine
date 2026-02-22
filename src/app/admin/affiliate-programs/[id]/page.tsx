import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { AffiliateProgramsForm } from "../AffiliateProgramsForm";

export default async function EditAffiliateProgramPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const a = await prisma.affiliateProgram.findUnique({ where: { id } });
  const creators = await prisma.creator.findMany({ orderBy: { name: "asc" } });
  if (!a) notFound();
  return (
    <div>
      <div className="mb-6"><Link href="/admin/affiliate-programs" className="text-sm text-slate-600 hover:text-slate-900">← Back</Link></div>
      <h1 className="text-2xl font-bold text-slate-900">Edit Affiliate Program</h1>
      <AffiliateProgramsForm
        id={id}
        creators={creators}
        initial={{
          creatorId: a.creatorId,
          name: a.name,
          slug: a.slug,
          commissionRate: Number(a.commissionRate),
          description: a.description ?? undefined,
          status: a.status,
        }}
      />
    </div>
  );
}
