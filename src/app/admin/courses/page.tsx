import { prisma } from "@/lib/prisma";
import { CrudTable } from "@/components/admin/CrudTable";

export default async function CoursesPage() {
  const data = await prisma.course.findMany({
    include: { creator: true },
    orderBy: { createdAt: "desc" },
  });
  const rows = data.map((c) => ({
    id: c.id,
    title: c.title,
    slug: c.slug,
    price: `$${Number(c.price)}`,
    status: c.status,
    creator: c.creator.name,
  }));

  return (
    <CrudTable
      title="Courses"
      addHref="/admin/courses/new"
      columns={[
        { key: "title", label: "Title" },
        { key: "slug", label: "Slug" },
        { key: "price", label: "Price" },
        { key: "status", label: "Status" },
        { key: "creator", label: "Creator" },
      ]}
      data={rows}
      editHref={(id) => `/admin/courses/${id}`}
    />
  );
}
