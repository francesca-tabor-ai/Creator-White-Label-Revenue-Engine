import Link from "next/link";
import { AffiliateProgramsForm } from "../AffiliateProgramsForm";
import { prisma } from "@/lib/prisma";

export default async function NewAffiliateProgramPage() {
  const creators = await prisma.creator.findMany({ orderBy: { name: "asc" } });
  return (
    <div>
      <div className="mb-6"><Link href="/admin/affiliate-programs" className="text-sm text-slate-600 hover:text-slate-900">← Back</Link></div>
      <h1 className="text-2xl font-bold text-slate-900">Add Affiliate Program</h1>
      <AffiliateProgramsForm creators={creators} />
    </div>
  );
}
