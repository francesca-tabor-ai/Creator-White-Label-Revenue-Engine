"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Creator = { id: string; name: string };

type Props = {
  creators: Creator[];
  initial?: { creatorId: string; name: string; slug: string; description?: string; price: number; type: string; status: string };
  id?: string;
};

export function DigitalProductsForm({ creators, initial, id }: Props) {
  const router = useRouter();
  const [creatorId, setCreatorId] = useState(initial?.creatorId ?? creators[0]?.id ?? "");
  const [name, setName] = useState(initial?.name ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [price, setPrice] = useState(initial?.price ?? 0);
  const [type, setType] = useState(initial?.type ?? "DOWNLOAD");
  const [status, setStatus] = useState(initial?.status ?? "DRAFT");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const url = id ? `/api/admin/digital-products/${id}` : "/api/admin/digital-products";
    const res = await fetch(url, {
      method: id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ creatorId, name, slug, description: description || undefined, price, type, status }),
    });
    if (!res.ok) { const d = await res.json(); setError(d.error?.[0]?.message ?? "Failed"); return; }
    router.push("/admin/digital-products");
    router.refresh();
  }

  async function handleDelete() {
    if (!id || !confirm("Delete?")) return;
    await fetch(`/api/admin/digital-products/${id}`, { method: "DELETE" });
    router.push("/admin/digital-products");
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
      <div><label className="block text-sm font-medium text-slate-700">Price</label>
        <input type="number" step="0.01" value={price} onChange={(e) => setPrice(Number(e.target.value))} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" /></div>
      <div><label className="block text-sm font-medium text-slate-700">Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
          <option value="DOWNLOAD">Download</option>
          <option value="LICENSE">License</option>
          <option value="SUBSCRIPTION">Subscription</option>
        </select></div>
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
