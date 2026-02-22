import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { CoursesForm } from "../CoursesForm";

export default async function EditCoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await prisma.course.findUnique({ where: { id } });
  const creators = await prisma.creator.findMany({ orderBy: { name: "asc" } });
  if (!course) notFound();
  return (
    <div>
      <div className="mb-6"><Link href="/admin/courses" className="text-sm text-slate-600 hover:text-slate-900">← Back</Link></div>
      <h1 className="text-2xl font-bold text-slate-900">Edit Course</h1>
      <CoursesForm
        id={id}
        creators={creators}
        initial={{
          creatorId: course.creatorId,
          title: course.title,
          slug: course.slug,
          description: course.description ?? undefined,
          price: Number(course.price),
          status: course.status,
        }}
      />
    </div>
  );
}
