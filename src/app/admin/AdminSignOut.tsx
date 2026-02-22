"use client";

import { signOut } from "next-auth/react";

export function AdminSignOut() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="w-full rounded-lg px-4 py-2 text-left text-sm font-medium text-slate-600 hover:bg-slate-100"
    >
      Sign out
    </button>
  );
}
