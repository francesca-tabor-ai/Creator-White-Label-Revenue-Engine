import { prisma } from "@/lib/prisma";
import { CrudTable } from "@/components/admin/CrudTable";

export default async function CreatorsPage() {
  const data = await prisma.creator.findMany({
    include: { organization: true },
    orderBy: { createdAt: "desc" },
  });
  const rows = data.map((c) => ({
    id: c.id,
    name: c.name,
    email: c.email,
    slug: c.slug,
    org: c.organization.name,
  }));

  return (
    <CrudTable
      title="Creators"
      addHref="/admin/creators/new"
      columns={[
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "slug", label: "Slug" },
        { key: "org", label: "Organization" },
      ]}
      data={rows}
      editHref={(id) => `/admin/creators/${id}`}
    />
  );
}
