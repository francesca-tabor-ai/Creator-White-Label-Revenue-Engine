import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { CommunitiesForm } from "../CommunitiesForm";

export default async function EditCommunityPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const c = await prisma.community.findUnique({ where: { id } });
  const creators = await prisma.creator.findMany({ orderBy: { name: "asc" } });
  if (!c) notFound();
  return (
    <div>
      <div className="mb-6"><Link href="/admin/communities" className="text-sm text-slate-600 hover:text-slate-900">← Back</Link></div>
      <h1 className="text-2xl font-bold text-slate-900">Edit Community</h1>
      <CommunitiesForm
        id={id}
        creators={creators}
        initial={{
          creatorId: c.creatorId,
          name: c.name,
          slug: c.slug,
          description: c.description ?? undefined,
          price: Number(c.price),
          platform: c.platform,
          status: c.status,
        }}
      />
    </div>
  );
}
