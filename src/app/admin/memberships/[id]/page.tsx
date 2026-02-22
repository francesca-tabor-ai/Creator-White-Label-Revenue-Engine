import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { MembershipsForm } from "../MembershipsForm";

export default async function EditMembershipPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const m = await prisma.membership.findUnique({ where: { id } });
  const creators = await prisma.creator.findMany({ orderBy: { name: "asc" } });
  if (!m) notFound();
  return (
    <div>
      <div className="mb-6"><Link href="/admin/memberships" className="text-sm text-slate-600 hover:text-slate-900">← Back</Link></div>
      <h1 className="text-2xl font-bold text-slate-900">Edit Membership</h1>
      <MembershipsForm
        id={id}
        creators={creators}
        initial={{
          creatorId: m.creatorId,
          name: m.name,
          slug: m.slug,
          price: Number(m.price),
          billingPeriod: m.billingPeriod,
          description: m.description ?? undefined,
          status: m.status,
        }}
      />
    </div>
  );
}
