import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/adminAuth";
import { z } from "zod";

const updateSchema = z.object({
  organizationId: z.string().optional(),
  name: z.string().optional(),
  email: z.string().email().optional(),
  slug: z.string().optional(),
  bio: z.string().optional(),
  avatarUrl: z.string().optional(),
});

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAdmin();
  if (auth instanceof NextResponse) return auth;
  const item = await prisma.creator.findUnique({
    where: { id: (await params).id },
    include: { organization: true, courses: true, memberships: true },
  });
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAdmin();
  if (auth instanceof NextResponse) return auth;
  try {
    const data = updateSchema.parse(await req.json());
    const item = await prisma.creator.update({
      where: { id: (await params).id },
      data,
    });
    return NextResponse.json(item);
  } catch (e) {
    if (e instanceof z.ZodError) return NextResponse.json({ error: e.issues }, { status: 400 });
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireAdmin();
  if (auth instanceof NextResponse) return auth;
  await prisma.creator.delete({ where: { id: (await params).id } });
  return NextResponse.json({ success: true });
}
