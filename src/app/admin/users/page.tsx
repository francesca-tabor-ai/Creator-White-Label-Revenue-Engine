import { prisma } from "@/lib/prisma";
import { CrudTable } from "@/components/admin/CrudTable";
import Link from "next/link";

export default async function UsersPage() {
  const data = await prisma.user.findMany({
    include: { organization: true },
    orderBy: { createdAt: "desc" },
  });
  const rows = data.map((u) => ({
    id: u.id,
    email: u.email,
    name: u.name ?? "-",
    role: u.role,
    org: u.organization?.name ?? "-",
  }));

  return (
    <CrudTable
      title="Users"
      addHref="/admin/users/new"
      columns={[
        { key: "email", label: "Email" },
        { key: "name", label: "Name" },
        { key: "role", label: "Role" },
        { key: "org", label: "Organization" },
      ]}
      data={rows}
      editHref={(id) => `/admin/users/${id}`}
    />
  );
}
