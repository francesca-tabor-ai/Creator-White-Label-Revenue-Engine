import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { DigitalProductsForm } from "../DigitalProductsForm";

export default async function EditDigitalProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const d = await prisma.digitalProduct.findUnique({ where: { id } });
  const creators = await prisma.creator.findMany({ orderBy: { name: "asc" } });
  if (!d) notFound();
  return (
    <div>
      <div className="mb-6"><Link href="/admin/digital-products" className="text-sm text-slate-600 hover:text-slate-900">← Back</Link></div>
      <h1 className="text-2xl font-bold text-slate-900">Edit Digital Product</h1>
      <DigitalProductsForm
        id={id}
        creators={creators}
        initial={{
          creatorId: d.creatorId,
          name: d.name,
          slug: d.slug,
          description: d.description ?? undefined,
          price: Number(d.price),
          type: d.type,
          status: d.status,
        }}
      />
    </div>
  );
}
