import { prisma } from "@/lib/prisma";
import { CrudTable } from "@/components/admin/CrudTable";

export default async function CommunitiesPage() {
  const data = await prisma.community.findMany({
    include: { creator: true },
    orderBy: { createdAt: "desc" },
  });
  const rows = data.map((c) => ({
    id: c.id,
    name: c.name,
    slug: c.slug,
    price: `$${Number(c.price)}`,
    platform: c.platform,
    status: c.status,
    creator: c.creator.name,
  }));

  return (
    <CrudTable
      title="Communities"
      addHref="/admin/communities/new"
      columns={[
        { key: "name", label: "Name" },
        { key: "slug", label: "Slug" },
        { key: "price", label: "Price" },
        { key: "platform", label: "Platform" },
        { key: "status", label: "Status" },
        { key: "creator", label: "Creator" },
      ]}
      data={rows}
      editHref={(id) => `/admin/communities/${id}`}
    />
  );
}
