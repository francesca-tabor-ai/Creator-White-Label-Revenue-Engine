"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Org = { id: string; name: string };

type Props = {
  organizations: Org[];
  initial?: { organizationId: string; name: string; email: string; slug: string; bio?: string };
  id?: string;
};

export function CreatorsForm({ organizations, initial, id }: Props) {
  const router = useRouter();
  const [organizationId, setOrganizationId] = useState(initial?.organizationId ?? organizations[0]?.id ?? "");
  const [name, setName] = useState(initial?.name ?? "");
  const [email, setEmail] = useState(initial?.email ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [bio, setBio] = useState(initial?.bio ?? "");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const url = id ? `/api/admin/creators/${id}` : "/api/admin/creators";
    const res = await fetch(url, {
      method: id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ organizationId, name, email, slug, bio: bio || undefined }),
    });
    if (!res.ok) {
      const data = await res.json();
      setError(data.error?.[0]?.message ?? "Failed");
      return;
    }
    router.push("/admin/creators");
    router.refresh();
  }

  async function handleDelete() {
    if (!id || !confirm("Delete this creator?")) return;
    await fetch(`/api/admin/creators/${id}`, { method: "DELETE" });
    router.push("/admin/creators");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-md space-y-4">
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div>
        <label className="block text-sm font-medium text-slate-700">Organization</label>
        <select
          value={organizationId}
          onChange={(e) => setOrganizationId(e.target.value)}
          required
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        >
          {organizations.map((o) => (
            <option key={o.id} value={o.id}>{o.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Slug</label>
        <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Bio</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} rows={3} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
      </div>
      <div className="flex gap-4">
        <button type="submit" className="rounded-lg bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">{id ? "Update" : "Create"}</button>
        {id && <button type="button" onClick={handleDelete} className="rounded-lg border border-red-300 px-4 py-2 text-red-600 hover:bg-red-50">Delete</button>}
      </div>
    </form>
  );
}
