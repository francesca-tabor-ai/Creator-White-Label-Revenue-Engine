"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Org = { id: string; name: string };

type Props = {
  organizations: Org[];
  initial?: { email: string; name: string; role: string; organizationId?: string };
  id?: string;
};

export function UsersForm({ organizations, initial, id }: Props) {
  const router = useRouter();
  const [email, setEmail] = useState(initial?.email ?? "");
  const [name, setName] = useState(initial?.name ?? "");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(initial?.role ?? "OPERATOR");
  const [organizationId, setOrganizationId] = useState(initial?.organizationId ?? "");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!id && !password) { setError("Password required for new users"); return; }
    if (!id && password.length < 6) { setError("Password must be at least 6 characters"); return; }
    setError("");
    const url = id ? `/api/admin/users/${id}` : "/api/admin/users";
    const body: Record<string, unknown> = { email, name, role, organizationId: organizationId || undefined };
    if (password) body.password = password;
    const res = await fetch(url, { method: id ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (!res.ok) { const d = await res.json(); setError(d.error?.[0]?.message ?? d.error ?? "Failed"); return; }
    router.push("/admin/users");
    router.refresh();
  }

  async function handleDelete() {
    if (!id || !confirm("Delete this user?")) return;
    await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
    router.push("/admin/users");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-md space-y-4">
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Password {id && "(leave blank to keep)"}</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
          <option value="ADMIN">Admin</option>
          <option value="OPERATOR">Operator</option>
          <option value="CREATOR">Creator</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700">Organization</label>
        <select value={organizationId} onChange={(e) => setOrganizationId(e.target.value)} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2">
          <option value="">None</option>
          {organizations.map((o) => <option key={o.id} value={o.id}>{o.name}</option>)}
        </select>
      </div>
      <div className="flex gap-4">
        <button type="submit" className="rounded-lg bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">{id ? "Update" : "Create"}</button>
        {id && <button type="button" onClick={handleDelete} className="rounded-lg border border-red-300 px-4 py-2 text-red-600 hover:bg-red-50">Delete</button>}
      </div>
    </form>
  );
}
