import { prisma } from "@/lib/prisma";
import { CrudTable } from "@/components/admin/CrudTable";

export default async function AffiliateProgramsPage() {
  const data = await prisma.affiliateProgram.findMany({
    include: { creator: true },
    orderBy: { createdAt: "desc" },
  });
  const rows = data.map((a) => ({
    id: a.id,
    name: a.name,
    slug: a.slug,
    commissionRate: `${Number(a.commissionRate)}%`,
    status: a.status,
    creator: a.creator.name,
  }));

  return (
    <CrudTable
      title="Affiliate Programs"
      addHref="/admin/affiliate-programs/new"
      columns={[
        { key: "name", label: "Name" },
        { key: "slug", label: "Slug" },
        { key: "commissionRate", label: "Commission" },
        { key: "status", label: "Status" },
        { key: "creator", label: "Creator" },
      ]}
      data={rows}
      editHref={(id) => `/admin/affiliate-programs/${id}`}
    />
  );
}
