"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Creator = { id: string; name: string };

type Props = {
  creators: Creator[];
  initial?: { creatorId: string; name: string; slug: string; commissionRate: number; description?: string; status: string };
  id?: string;
};

export function AffiliateProgramsForm({ creators, initial, id }: Props) {
  const router = useRouter();
  const [creatorId, setCreatorId] = useState(initial?.creatorId ?? creators[0]?.id ?? "");
  const [name, setName] = useState(initial?.name ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [commissionRate, setCommissionRate] = useState(initial?.commissionRate ?? 10);
  const [description, setDescription] = useState(initial?.description ?? "");
  const [status, setStatus] = useState(initial?.status ?? "DRAFT");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const url = id ? `/api/admin/affiliate-programs/${id}` : "/api/admin/affiliate-programs";
    const res = await fetch(url, {
      method: id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ creatorId, name, slug, commissionRate, description: description || undefined, status }),
    });
    if (!res.ok) { const d = await res.json(); setError(d.error?.[0]?.message ?? "Failed"); return; }
    router.push("/admin/affiliate-programs");
    router.refresh();
  }

  async function handleDelete() {
    if (!id || !confirm("Delete?")) return;
    await fetch(`/api/admin/affiliate-programs/${id}`, { method: "DELETE" });
    router.push("/admin/affiliate-programs");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-md space-y-4">
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div><label className="block text-sm font-medium text-slate-700">Creator</label>
        <select value={creatorId} onChange={(e) => setCreatorId(e.target.value)} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
          {creators.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select></div>
      <div><label className="block text-sm font-medium text-slate-700">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-slate-700">Slug</label>
        <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-slate-700">Commission Rate (%)</label>
        <input type="number" step="0.01" value={commissionRate} onChange={(e) => setCommissionRate(Number(e.target.value))} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-slate-700">Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
          <option value="DRAFT">Draft</option>
          <option value="PUBLISHED">Published</option>
          <option value="ARCHIVED">Archived</option>
        </select></div>
      <div><label className="block text-sm font-medium text-slate-700">Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" /></div>
      <div className="flex gap-4">
        <button type="submit" className="rounded-lg bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">{id ? "Update" : "Create"}</button>
        {id && <button type="button" onClick={handleDelete} className="rounded-lg border border-red-300 px-4 py-2 text-red-600 hover:bg-red-50">Delete</button>}
      </div>
    </form>
  );
}
