import Link from "next/link";
import { MembershipsForm } from "../MembershipsForm";
import { prisma } from "@/lib/prisma";

export default async function NewMembershipPage() {
  const creators = await prisma.creator.findMany({ orderBy: { name: "asc" } });
  return (
    <div>
      <div className="mb-6"><Link href="/admin/memberships" className="text-sm text-slate-600 hover:text-slate-900">← Back</Link></div>
      <h1 className="text-2xl font-bold text-slate-900">Add Membership</h1>
      <MembershipsForm creators={creators} />
    </div>
  );
}
