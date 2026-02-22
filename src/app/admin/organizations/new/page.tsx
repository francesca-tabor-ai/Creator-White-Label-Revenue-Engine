import Link from "next/link";
import { OrganizationsForm } from "../OrganizationsForm";

export default function NewOrganizationPage() {
  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <Link href="/admin/organizations" className="text-sm text-slate-600 hover:text-slate-900">
          ← Back
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-slate-900">Add Organization</h1>
      <OrganizationsForm />
    </div>
  );
}
