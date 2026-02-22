import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Admin user
  const adminPassword = await bcrypt.hash("Admin123!", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@creator-revenue.com" },
    update: {},
    create: {
      email: "admin@creator-revenue.com",
      passwordHash: adminPassword,
      name: "Admin User",
      role: "ADMIN",
    },
  });
  console.log("Created admin:", admin.email);

  // Organization
  const org = await prisma.organization.upsert({
    where: { slug: "acme-creator-agency" },
    update: {},
    create: {
      name: "Acme Creator Agency",
      slug: "acme-creator-agency",
      plan: "TEAM",
    },
  });
  console.log("Created organization:", org.name);

  // Creators
  const existingCreator1 = await prisma.creator.findUnique({ where: { slug: "jane-creator" } });
  const creator1 = existingCreator1 ?? await prisma.creator.create({
    data: {
      organizationId: org.id,
      name: "Jane Doe",
      email: "jane@example.com",
      slug: "jane-creator",
      bio: "Fitness and wellness creator with 500K followers.",
    },
  });

  const existingCreator2 = await prisma.creator.findUnique({ where: { slug: "john-creator" } });
  const creator2 = existingCreator2 ?? await prisma.creator.create({
    data: {
      organizationId: org.id,
      name: "John Smith",
      email: "john@example.com",
      slug: "john-creator",
      bio: "Business and productivity coach.",
    },
  });
  console.log("Created creators:", creator1.name, creator2.name);

  // Courses
  await prisma.course.upsert({
    where: { creatorId_slug: { creatorId: creator1.id, slug: "fitness-fundamentals" } },
    update: {},
    create: {
      creatorId: creator1.id,
      title: "Fitness Fundamentals",
      slug: "fitness-fundamentals",
      description: "Learn the basics of sustainable fitness.",
      price: 99,
      status: "PUBLISHED",
    },
  });

  await prisma.course.upsert({
    where: { creatorId_slug: { creatorId: creator2.id, slug: "productivity-mastery" } },
    update: {},
    create: {
      creatorId: creator2.id,
      title: "Productivity Mastery",
      slug: "productivity-mastery",
      description: "Double your output with proven systems.",
      price: 149,
      status: "PUBLISHED",
    },
  });
  console.log("Created courses");

  // Memberships
  await prisma.membership.upsert({
    where: { creatorId_slug: { creatorId: creator1.id, slug: "jane-premium" } },
    update: {},
    create: {
      creatorId: creator1.id,
      name: "Premium Membership",
      slug: "jane-premium",
      price: 29,
      billingPeriod: "MONTHLY",
      description: "Exclusive workouts and community access.",
      status: "PUBLISHED",
    },
  });

  await prisma.membership.upsert({
    where: { creatorId_slug: { creatorId: creator2.id, slug: "john-inner-circle" } },
    update: {},
    create: {
      creatorId: creator2.id,
      name: "Inner Circle",
      slug: "john-inner-circle",
      price: 49,
      billingPeriod: "MONTHLY",
      description: "Weekly coaching calls and templates.",
      status: "PUBLISHED",
    },
  });
  console.log("Created memberships");

  // Digital products
  await prisma.digitalProduct.upsert({
    where: { creatorId_slug: { creatorId: creator1.id, slug: "meal-plan-pdf" } },
    update: {},
    create: {
      creatorId: creator1.id,
      name: "7-Day Meal Plan PDF",
      slug: "meal-plan-pdf",
      description: "Downloadable meal plan with recipes.",
      price: 19,
      type: "DOWNLOAD",
      status: "PUBLISHED",
    },
  });

  await prisma.digitalProduct.upsert({
    where: { creatorId_slug: { creatorId: creator2.id, slug: "notion-template" } },
    update: {},
    create: {
      creatorId: creator2.id,
      name: "Notion Productivity Template",
      slug: "notion-template",
      description: "Ready-to-use Notion workspace.",
      price: 39,
      type: "LICENSE",
      status: "PUBLISHED",
    },
  });
  console.log("Created digital products");

  // Affiliate programs
  await prisma.affiliateProgram.upsert({
    where: { creatorId_slug: { creatorId: creator1.id, slug: "jane-affiliate" } },
    update: {},
    create: {
      creatorId: creator1.id,
      name: "Fitness Affiliate Program",
      slug: "jane-affiliate",
      commissionRate: 20,
      description: "Earn 20% on referred course sales.",
      status: "PUBLISHED",
    },
  });

  await prisma.affiliateProgram.upsert({
    where: { creatorId_slug: { creatorId: creator2.id, slug: "john-affiliate" } },
    update: {},
    create: {
      creatorId: creator2.id,
      name: "Productivity Affiliate Program",
      slug: "john-affiliate",
      commissionRate: 15,
      description: "Earn 15% on referred memberships.",
      status: "PUBLISHED",
    },
  });
  console.log("Created affiliate programs");

  // Communities
  await prisma.community.upsert({
    where: { creatorId_slug: { creatorId: creator1.id, slug: "jane-community" } },
    update: {},
    create: {
      creatorId: creator1.id,
      name: "Fitness Community",
      slug: "jane-community",
      description: "Private Discord for members.",
      price: 15,
      platform: "DISCORD",
      status: "PUBLISHED",
    },
  });

  await prisma.community.upsert({
    where: { creatorId_slug: { creatorId: creator2.id, slug: "john-community" } },
    update: {},
    create: {
      creatorId: creator2.id,
      name: "Productivity Hub",
      slug: "john-community",
      description: "Exclusive community access.",
      price: 25,
      platform: "CUSTOM",
      status: "PUBLISHED",
    },
  });
  console.log("Created communities");

  console.log("Seed completed successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
