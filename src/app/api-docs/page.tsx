import Link from "next/link";
import { Footer } from "@/components/Footer";

const entities = [
  {
    name: "Organization",
    slug: "organizations",
    fields: [
      "id (string, cuid)",
      "name (string)",
      "slug (string, unique)",
      "plan (INDIVIDUAL | TEAM | ENTERPRISE)",
      "createdAt, updatedAt",
    ],
    relations: ["users", "creators"],
  },
  {
    name: "User",
    slug: "users",
    fields: [
      "id (string, cuid)",
      "email (string, unique)",
      "name (string?)",
      "role (ADMIN | OPERATOR | CREATOR)",
      "organizationId (string?)",
      "createdAt, updatedAt",
    ],
    relations: ["organization", "accounts"],
  },
  {
    name: "Creator",
    slug: "creators",
    fields: [
      "id (string, cuid)",
      "organizationId (string)",
      "name (string)",
      "email (string)",
      "slug (string)",
      "bio (string?)",
      "avatarUrl (string?)",
      "createdAt, updatedAt",
    ],
    relations: ["organization", "courses", "memberships", "digitalProducts", "affiliatePrograms", "communities"],
  },
  {
    name: "Course",
    slug: "courses",
    fields: [
      "id (string, cuid)",
      "creatorId (string)",
      "title (string)",
      "slug (string)",
      "description (string?)",
      "price (decimal)",
      "status (DRAFT | PUBLISHED | ARCHIVED)",
      "createdAt, updatedAt",
    ],
    relations: ["creator"],
  },
  {
    name: "Membership",
    slug: "memberships",
    fields: [
      "id (string, cuid)",
      "creatorId (string)",
      "name (string)",
      "slug (string)",
      "price (decimal)",
      "billingPeriod (MONTHLY | YEARLY)",
      "description (string?)",
      "status (DRAFT | PUBLISHED | ARCHIVED)",
      "createdAt, updatedAt",
    ],
    relations: ["creator"],
  },
  {
    name: "DigitalProduct",
    slug: "digital-products",
    fields: [
      "id (string, cuid)",
      "creatorId (string)",
      "name (string)",
      "slug (string)",
      "description (string?)",
      "price (decimal)",
      "type (DOWNLOAD | LICENSE | SUBSCRIPTION)",
      "status (DRAFT | PUBLISHED | ARCHIVED)",
      "createdAt, updatedAt",
    ],
    relations: ["creator"],
  },
  {
    name: "AffiliateProgram",
    slug: "affiliate-programs",
    fields: [
      "id (string, cuid)",
      "creatorId (string)",
      "name (string)",
      "slug (string)",
      "commissionRate (decimal)",
      "description (string?)",
      "status (DRAFT | PUBLISHED | ARCHIVED)",
      "createdAt, updatedAt",
    ],
    relations: ["creator"],
  },
  {
    name: "Community",
    slug: "communities",
    fields: [
      "id (string, cuid)",
      "creatorId (string)",
      "name (string)",
      "slug (string)",
      "description (string?)",
      "price (decimal)",
      "platform (string)",
      "status (DRAFT | PUBLISHED | ARCHIVED)",
      "createdAt, updatedAt",
    ],
    relations: ["creator"],
  },
];

const endpoints = entities.flatMap((e) => [
  { method: "GET", path: `/api/v1/${e.slug}`, desc: `List all ${e.name}s` },
  { method: "GET", path: `/api/v1/${e.slug}/[id]`, desc: `Get a single ${e.name} by ID` },
  { method: "POST", path: `/api/v1/${e.slug}`, desc: `Create a new ${e.name}` },
  { method: "PATCH", path: `/api/v1/${e.slug}/[id]`, desc: `Update a ${e.name}` },
  { method: "DELETE", path: `/api/v1/${e.slug}/[id]`, desc: `Delete a ${e.name}` },
]);

export default function ApiDocsPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            API Documentation
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Integrate with Creator Revenue Engine via REST. Base URL:{" "}
            <code className="rounded bg-slate-200 px-1.5 py-0.5 font-mono text-sm">
              https://api.creatorengine.com/v1
            </code>
          </p>
          <p className="mt-2 text-sm text-slate-500">
            All endpoints require authentication via Bearer token. Rate limits
            vary by plan (Individual: 1,000/day, Team: 50,000/day, Enterprise:
            custom).
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900">Entities</h2>
          <p className="mt-2 text-slate-600">
            Core data models exposed by the API.
          </p>

          <div className="mt-10 space-y-12">
            {entities.map((entity) => (
              <div
                key={entity.name}
                id={entity.slug}
                className="scroll-mt-24 rounded-xl border border-slate-200 bg-slate-50/50 p-6"
              >
                <h3 className="text-xl font-bold text-teal-700">
                  {entity.name}
                </h3>
                <div className="mt-4">
                  <p className="text-sm font-medium text-slate-600">Fields</p>
                  <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-slate-100">
                    {entity.fields.join("\n")}
                  </pre>
                </div>
                {entity.relations.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-slate-600">
                      Relations
                    </p>
                    <p className="mt-1 text-sm text-slate-700">
                      {entity.relations.join(", ")}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900">
            API Endpoints (CRUD Reference)
          </h2>
          <p className="mt-2 text-slate-600">
            Full list of REST endpoints for each entity.
          </p>

          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Method
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Endpoint
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((ep, i) => (
                  <tr
                    key={`${ep.method}-${ep.path}`}
                    className={`border-b border-slate-100 ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded px-2 py-0.5 text-xs font-semibold ${
                          ep.method === "GET"
                            ? "bg-teal-100 text-teal-800"
                            : ep.method === "POST"
                              ? "bg-amber-100 text-amber-800"
                              : ep.method === "PATCH"
                                ? "bg-sky-100 text-sky-800"
                                : "bg-red-100 text-red-800"
                        }`}
                      >
                        {ep.method}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono text-sm text-slate-700">
                      {ep.path}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {ep.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900">Enums</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { name: "UserRole", values: "ADMIN | OPERATOR | CREATOR" },
              {
                name: "OrganizationPlan",
                values: "INDIVIDUAL | TEAM | ENTERPRISE",
              },
              { name: "BillingPeriod", values: "MONTHLY | YEARLY" },
              { name: "ProductStatus", values: "DRAFT | PUBLISHED | ARCHIVED" },
              {
                name: "DigitalProductType",
                values: "DOWNLOAD | LICENSE | SUBSCRIPTION",
              },
            ].map((e) => (
              <div
                key={e.name}
                className="rounded-lg border border-slate-200 p-4"
              >
                <p className="font-mono text-sm font-semibold text-teal-700">
                  {e.name}
                </p>
                <p className="mt-1 text-sm text-slate-600">{e.values}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-teal-700 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Build integrations and apps
          </h2>
          <p className="mt-4 text-teal-100">
            Extend the platform with custom apps. Browse the marketplace or
            submit your own.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/marketplace"
              className="rounded-xl bg-white px-6 py-3.5 font-semibold text-teal-700 transition hover:bg-teal-50"
            >
              Browse Marketplace
            </Link>
            <Link
              href="/marketplace/build"
              className="rounded-xl border-2 border-white px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Build an App
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
