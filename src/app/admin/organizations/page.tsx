import { prisma } from "@/lib/prisma";
import { CrudTable } from "@/components/admin/CrudTable";

export default async function OrganizationsPage() {
  const data = await prisma.organization.findMany({
    orderBy: { createdAt: "desc" },
  });
  const rows = data.map((o) => ({
    id: o.id,
    name: o.name,
    slug: o.slug,
    plan: o.plan,
  }));

  return (
    <CrudTable
      title="Organizations"
      addHref="/admin/organizations/new"
      columns={[
        { key: "name", label: "Name" },
        { key: "slug", label: "Slug" },
        { key: "plan", label: "Plan" },
      ]}
      data={rows}
      editHref={(id) => `/admin/organizations/${id}`}
    />
  );
}
