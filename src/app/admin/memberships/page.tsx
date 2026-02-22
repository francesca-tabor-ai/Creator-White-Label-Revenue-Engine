import { prisma } from "@/lib/prisma";
import { CrudTable } from "@/components/admin/CrudTable";

export default async function MembershipsPage() {
  const data = await prisma.membership.findMany({
    include: { creator: true },
    orderBy: { createdAt: "desc" },
  });
  const rows = data.map((m) => ({
    id: m.id,
    name: m.name,
    slug: m.slug,
    price: `$${Number(m.price)}/${m.billingPeriod.toLowerCase()}`,
    status: m.status,
    creator: m.creator.name,
  }));

  return (
    <CrudTable
      title="Memberships"
      addHref="/admin/memberships/new"
      columns={[
        { key: "name", label: "Name" },
        { key: "slug", label: "Slug" },
        { key: "price", label: "Price" },
        { key: "status", label: "Status" },
        { key: "creator", label: "Creator" },
      ]}
      data={rows}
      editHref={(id) => `/admin/memberships/${id}`}
    />
  );
}
