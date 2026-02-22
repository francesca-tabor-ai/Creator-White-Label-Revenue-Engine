import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/adminAuth";
import { z } from "zod";

const createSchema = z.object({
  name: z.string(),
  slug: z.string(),
  plan: z.enum(["INDIVIDUAL", "TEAM", "ENTERPRISE"]),
});

export async function GET() {
  const auth = await requireAdmin();
  if (auth instanceof NextResponse) return auth;
  const items = await prisma.organization.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const auth = await requireAdmin();
  if (auth instanceof NextResponse) return auth;
  try {
    const data = createSchema.parse(await req.json());
    const item = await prisma.organization.create({ data });
    return NextResponse.json(item);
  } catch (e) {
    if (e instanceof z.ZodError) return NextResponse.json({ error: e.issues }, { status: 400 });
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}
