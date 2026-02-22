import { prisma } from "@/lib/prisma";
import { CrudTable } from "@/components/admin/CrudTable";

export default async function DigitalProductsPage() {
  const data = await prisma.digitalProduct.findMany({
    include: { creator: true },
    orderBy: { createdAt: "desc" },
  });
  const rows = data.map((d) => ({
    id: d.id,
    name: d.name,
    slug: d.slug,
    price: `$${Number(d.price)}`,
    type: d.type,
    status: d.status,
    creator: d.creator.name,
  }));

  return (
    <CrudTable
      title="Digital Products"
      addHref="/admin/digital-products/new"
      columns={[
        { key: "name", label: "Name" },
        { key: "slug", label: "Slug" },
        { key: "price", label: "Price" },
        { key: "type", label: "Type" },
        { key: "status", label: "Status" },
        { key: "creator", label: "Creator" },
      ]}
      data={rows}
      editHref={(id) => `/admin/digital-products/${id}`}
    />
  );
}
