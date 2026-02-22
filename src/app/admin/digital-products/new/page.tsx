import Link from "next/link";
import { DigitalProductsForm } from "../DigitalProductsForm";
import { prisma } from "@/lib/prisma";

export default async function NewDigitalProductPage() {
  const creators = await prisma.creator.findMany({ orderBy: { name: "asc" } });
  return (
    <div>
      <div className="mb-6"><Link href="/admin/digital-products" className="text-sm text-slate-600 hover:text-slate-900">← Back</Link></div>
      <h1 className="text-2xl font-bold text-slate-900">Add Digital Product</h1>
      <DigitalProductsForm creators={creators} />
    </div>
  );
}
