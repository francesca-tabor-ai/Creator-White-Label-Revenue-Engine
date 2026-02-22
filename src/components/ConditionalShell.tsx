"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import ChatWidget from "./ChatWidget";

export function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuth = pathname?.startsWith("/auth");
  const isAdmin = pathname?.startsWith("/admin");

  if (isAuth || isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <ChatWidget />
    </>
  );
}
