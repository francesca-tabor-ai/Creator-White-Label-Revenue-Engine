import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/adminAuth";
import { z } from "zod";

const createSchema = z.object({
  creatorId: z.string(),
  title: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  price: z.number(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
});

export async function GET() {
  const auth = await requireAdmin();
  if (auth instanceof NextResponse) return auth;
  const items = await prisma.course.findMany({
    include: { creator: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const auth = await requireAdmin();
  if (auth instanceof NextResponse) return auth;
  try {
    const data = createSchema.parse(await req.json());
    const item = await prisma.course.create({ data });
    return NextResponse.json(item);
  } catch (e) {
    if (e instanceof z.ZodError) return NextResponse.json({ error: e.issues }, { status: 400 });
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
