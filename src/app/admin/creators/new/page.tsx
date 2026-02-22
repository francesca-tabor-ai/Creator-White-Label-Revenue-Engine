import Link from "next/link";
import { CreatorsForm } from "../CreatorsForm";
import { prisma } from "@/lib/prisma";

export default async function NewCreatorPage() {
  const organizations = await prisma.organization.findMany();
  return (
    <div>
      <div className="mb-6">
        <Link href="/admin/creators" className="text-sm text-slate-600 hover:text-slate-900">
          ← Back
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-slate-900">Add Creator</h1>
      <CreatorsForm organizations={organizations} />
    </div>
  );
}
