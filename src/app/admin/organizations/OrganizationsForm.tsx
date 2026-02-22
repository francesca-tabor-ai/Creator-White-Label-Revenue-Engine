"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  initial?: { name: string; slug: string; plan: string };
  id?: string;
};

export function OrganizationsForm({ initial, id }: Props) {
  const router = useRouter();
  const [name, setName] = useState(initial?.name ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [plan, setPlan] = useState(initial?.plan ?? "INDIVIDUAL");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const url = id ? `/api/admin/organizations/${id}` : "/api/admin/organizations";
    const method = id ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, slug, plan }),
    });
    if (!res.ok) {
      const data = await res.json();
      setError(data.error?.[0]?.message ?? "Failed");
      return;
    }
    router.push("/admin/organizations");
    router.refresh();
  }

  async function handleDelete() {
    if (!id || !confirm("Delete this organization?")) return;
    await fetch(`/api/admin/organizations/${id}`, { method: "DELETE" });
    router.push("/admin/organizations");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-md space-y-4">
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div>
        <label className="block text-sm font-medium text-slate-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Slug</label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Plan</label>
        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        >
          <option value="INDIVIDUAL">Individual</option>
          <option value="TEAM">Team</option>
          <option value="ENTERPRISE">Enterprise</option>
        </select>
      </div>
      <div className="flex gap-4">
        <button
          type="submit"
          className="rounded-lg bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
        >
          {id ? "Update" : "Create"}
        </button>
        {id && (
          <button
            type="button"
            onClick={handleDelete}
            className="rounded-lg border border-red-300 px-4 py-2 text-red-600 hover:bg-red-50"
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
}
